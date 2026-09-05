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

    // Vercel-compatible deployment: persistence can be connected later via
    // Vercel Blob/Postgres without importing Cloudflare-only bindings here.
    return NextResponse.json({ message: 'Demande reçue. Nous vous recontacterons rapidement.' }, { status: 201 });
  } catch {
    return NextResponse.json({ message: 'Le service est temporairement indisponible. Vous pouvez nous appeler au 07 75 78 39 55.' }, { status: 500 });
  }
}
