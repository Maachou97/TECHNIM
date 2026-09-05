'use client';

import { useState } from 'react';
import { CheckCircle2, FileText, LoaderCircle, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('/api/devis', { method: 'POST', body: data });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || 'La demande n’a pas pu être envoyée.');
      setStatus('success');
      setMessage('Votre demande a bien été transmise. Notre équipe vous recontactera rapidement.');
      form.reset();
      setFiles([]);
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Une erreur est survenue.');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={38} aria-hidden="true" />
        <h3>Demande envoyée</h3>
        <p>{message}</p>
        <Button type="button" onClick={() => setStatus('idle')}>Nouvelle demande</Button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="form-grid">
        <label>
          <span>Nom et prénom *</span>
          <Input name="name" autoComplete="name" required placeholder="Votre nom" />
        </label>
        <label>
          <span>Société</span>
          <Input name="company" autoComplete="organization" placeholder="Nom de votre société" />
        </label>
        <label>
          <span>E-mail professionnel *</span>
          <Input name="email" type="email" autoComplete="email" required placeholder="nom@societe.fr" />
        </label>
        <label>
          <span>Téléphone *</span>
          <Input name="phone" type="tel" autoComplete="tel" required placeholder="06 00 00 00 00" />
        </label>
      </div>

      <label>
        <span>Lieu d’intervention *</span>
        <Input name="location" required placeholder="Ville, département ou adresse du site" />
      </label>

      <label>
        <span>Votre besoin *</span>
        <Textarea name="need" required rows={6} placeholder="Décrivez la prestation, le contexte du projet et vos contraintes…" />
      </label>

      <label className="file-zone">
        <Upload size={24} aria-hidden="true" />
        <span className="file-zone-copy">
          <strong>Joindre des documents</strong>
          <small>PDF, DOC, DOCX, JPG ou PNG · 10 Mo maximum par fichier</small>
        </span>
        <Input
          name="documents"
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={(event) => setFiles(Array.from(event.target.files || []))}
        />
      </label>

      {files.length > 0 && (
        <ul className="file-list" aria-label="Documents sélectionnés">
          {files.map((file) => <li key={`${file.name}-${file.size}`}><FileText size={15} /> {file.name}</li>)}
        </ul>
      )}

      <label className="consent-row">
        <input name="consent" type="checkbox" required />
        <span>J’accepte que TECHNIM utilise ces informations pour répondre à ma demande. *</span>
      </label>

      {status === 'error' && <p className="form-error" role="alert">{message}</p>}

      <Button className="submit-button" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? <><LoaderCircle className="animate-spin" /> Envoi en cours…</> : 'Envoyer ma demande'}
      </Button>
    </form>
  );
}
