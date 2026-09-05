import { env } from 'cloudflare:workers';
import { NextResponse } from 'next/server';

const ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'image/jpeg',
  'image/png',
]);
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_FILES = 5;

function textValue(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  try {
    const data = await request.formData();
    const name = textValue(data, 'name');
    const company = textValue(data, 'company');
    const email = textValue(data, 'email');
    const phone = textValue(data, 'phone');
    const location = textValue(data, 'location');
    const need = textValue(data, 'need');
    const consent = textValue(data, 'consent');

    if (!name || !email || !phone || !location || !need || !consent) {
      return NextResponse.json({ message: 'Veuillez compléter tous les champs obligatoires.' }, { status: 400 });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: 'Veuillez saisir une adresse e-mail valide.' }, { status: 400 });
    }

    const documents = data.getAll('documents').filter((item): item is File => item instanceof File && item.size > 0);
    if (documents.length > MAX_FILES) {
      return NextResponse.json({ message: 'Vous pouvez joindre jusqu’à 5 documents.' }, { status: 400 });
    }
    for (const document of documents) {
      if (document.size > MAX_FILE_SIZE || !ALLOWED_TYPES.has(document.type)) {
        return NextResponse.json({ message: `Le document « ${document.name} » n’est pas accepté.` }, { status: 400 });
      }
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const db = env.DB;

    await db.batch([
      db.prepare(`CREATE TABLE IF NOT EXISTS quote_requests (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        company TEXT,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        location TEXT NOT NULL,
        need TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`),
      db.prepare(`CREATE TABLE IF NOT EXISTS quote_files (
        id TEXT PRIMARY KEY,
        request_id TEXT NOT NULL,
        storage_key TEXT NOT NULL,
        filename TEXT NOT NULL,
        content_type TEXT NOT NULL,
        size INTEGER NOT NULL,
        FOREIGN KEY (request_id) REFERENCES quote_requests(id) ON DELETE CASCADE
      )`),
      db.prepare('CREATE INDEX IF NOT EXISTS idx_quote_files_request_id ON quote_files(request_id)'),
    ]);

    await db.prepare(`INSERT INTO quote_requests (id, name, company, email, phone, location, need, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`).bind(id, name, company || null, email, phone, location, need, createdAt).run();

    for (const document of documents) {
      const fileId = crypto.randomUUID();
      const safeName = document.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const storageKey = `devis/${id}/${fileId}-${safeName}`;
      await env.FILES.put(storageKey, document.stream(), {
        httpMetadata: { contentType: document.type },
        customMetadata: { requestId: id, originalName: document.name },
      });
      await db.prepare(`INSERT INTO quote_files (id, request_id, storage_key, filename, content_type, size)
        VALUES (?, ?, ?, ?, ?, ?)`).bind(fileId, id, storageKey, document.name, document.type, document.size).run();
    }

    return NextResponse.json({ message: 'Demande enregistrée.', id }, { status: 201 });
  } catch {
    return NextResponse.json({ message: 'Le service est temporairement indisponible. Vous pouvez nous appeler au 07 75 78 39 55.' }, { status: 500 });
  }
}
