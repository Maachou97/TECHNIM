
import {
  Activity,
  ArrowRight,
  Cable,
  CheckCircle2,
  GitBranch,
  Mail,
  MapPin,
  Network,
  Phone,
  RadioTower,
  Server,
  Wrench,
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

const expertises = [
  {
    number: '01',
    icon: Network,
    title: 'Déploiement FTTH & FTTO',
    text: 'Installation, raccordement et mise en service des réseaux fibre optique.',
  },
  {
    number: '02',
    icon: GitBranch,
    title: 'Réseaux Backbone & longue distance',
    text: 'Déploiement et raccordement des infrastructures fibre structurantes.',
  },
  {
    number: '03',
    icon: Server,
    title: 'Datacenter & câblage optique',
    text: 'Raccordement de baies, tiroirs optiques, installation de têtes optiques, brassage et gestion des jarretières.',
  },
  {
    number: '04',
    icon: Activity,
    title: 'Mesures & recette fibre optique',
    text: 'OTDR, mesures de puissance, analyse, contrôle de conformité et validation des liaisons.',
  },
  {
    number: '05',
    icon: Wrench,
    title: 'Maintenance & dépannage',
    text: 'Diagnostic, recherche de défauts, réparation et remise en conformité des réseaux.',
  },
  {
    number: '06',
    icon: Cable,
    title: 'Raccordement & soudure fibre optique',
    text: 'Soudures, raccordements, installation de cassettes et tiroirs optiques.',
  },
  {
    number: '07',
    icon: RadioTower,
    title: 'Infrastructures télécoms & sites techniques',
    text: 'Installation, brassage, mise à la terre et interventions sur infrastructures existantes.',
  },
  {
    number: '08',
    icon: Cable,
    title: 'Travaux D1 · D2 · D3',
    text: 'Interventions terrain de la chambre au point de branchement, avec tirage, raccordement et remise en conformité.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#accueil" className="brand" aria-label="TECHNIM — Accueil">
          <img src="/technim-logo.png" alt="TECHNIM" />
        </a>
        <nav aria-label="Navigation principale">
          <a href="#expertises">Expertises</a>
          <a href="#approche">Notre approche</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-call" href="tel:+33775783955">
          <Phone size={17} aria-hidden="true" />
          <span>07 75 78 39 55</span>
        </a>
      </header>

      <section id="accueil" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-pulse" />Infrastructure fibre optique · Île-de-France</div>
          <h1>La fibre, déployée avec <span>précision.</span></h1>
          <p className="hero-lead">TECHNIM accompagne les opérateurs et intégrateurs dans le déploiement, la mesure et la maintenance de leurs infrastructures fibre optique.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Demander un devis <ArrowRight size={18} aria-hidden="true" /></a>
            <a className="button button-secondary" href="mailto:contact@technim-reseaux.fr">Nous contacter</a>
            <a className="button button-link" href="tel:+33775783955"><Phone size={17} aria-hidden="true" /> Appeler</a>
          </div>
          <div className="hero-meta">
            <span><MapPin size={16} aria-hidden="true" /> Île-de-France</span><span className="meta-separator" /><span>Interventions nationales selon projet</span>
          </div>
        </div>

        <aside className="signal-card" aria-label="Expertise mise en avant">
          <div className="signal-card-top"><div className="signal-icon"><Activity size={24} aria-hidden="true" /></div><span>Expertise technique</span></div>
          <div className="trace otdr-trace">
            <div className="trace-heading"><span>Trace OTDR illustrative</span><span>Niveau rétrodiffusé</span></div>
            <svg viewBox="0 0 520 220" role="img" aria-labelledby="otdr-title otdr-description">
              <title id="otdr-title">Exemple réaliste de courbe OTDR</title>
              <desc id="otdr-description">Courbe de rétrodiffusion décroissante montrant le connecteur de départ, une épissure, un connecteur intermédiaire, une courbure et la fin de fibre suivie du plancher de bruit.</desc>
              <g className="otdr-grid">
                <path d="M46 18V176M148 18V176M250 18V176M352 18V176M454 18V176" />
                <path d="M46 30H500M46 66H500M46 102H500M46 138H500M46 176H500" />
              </g>
              <g className="otdr-axes">
                <path d="M46 18V176H500" />
                <text x="18" y="100" transform="rotate(-90 18 100)">Niveau (dB)</text>
                <text x="429" y="205">Distance (km)</text>
                <text x="41" y="194">0</text><text x="143" y="194">2</text><text x="245" y="194">4</text><text x="347" y="194">6</text><text x="449" y="194">8</text>
              </g>
              <path className="trace-fill" d="M46 164 L53 42 L60 31 L68 58 L92 61 L140 66 L181 70 L183 78 L224 82 L268 86 L274 42 L281 88 L320 92 L350 95 L352 103 L392 107 L432 111 L444 47 L452 113 L458 164 L470 158 L482 167 L492 161 L500 169 L500 176 L46 176 Z" />
              <path className="trace-line" d="M46 164 L53 42 L60 31 L68 58 L92 61 L140 66 L181 70 L183 78 L224 82 L268 86 L274 42 L281 88 L320 92 L350 95 L352 103 L392 107 L432 111 L444 47 L452 113 L458 164 L470 158 L482 167 L492 161 L500 169" />
              <g className="event-lines">
                <path d="M60 31V16" /><path d="M183 78V48" /><path d="M274 42V16" /><path d="M352 103V68" /><path d="M444 47V16" />
              </g>
              <g className="event-labels">
                <text x="60" y="11">Départ</text><text x="183" y="43">Épissure</text><text x="274" y="11">Connecteur</text><text x="352" y="63">Courbure</text><text x="444" y="11">Fin de fibre</text>
              </g>
              <g className="event-points"><circle cx="60" cy="31" r="3" /><circle cx="183" cy="78" r="3" /><circle cx="274" cy="42" r="3" /><circle cx="352" cy="103" r="3" /><circle cx="444" cy="47" r="3" /></g>
            </svg>
          </div>
          <div className="signal-copy"><span className="signal-index">04</span><div><h2>Mesures & recette fibre optique</h2><p>OTDR · Puissance · Contrôle · Validation de liaisons</p></div></div>
          <div className="signal-stats"><div><strong>OTDR</strong><span>Diagnostic précis</span></div><div><strong>PUISSANCE</strong><span>Mesure et contrôle</span></div><div><strong>D1 · D2 · D3</strong><span>Maîtrise complète</span></div></div>
        </aside>
      </section>

      <section id="expertises" className="section expertise-section">
        <div className="section-heading">
          <div><span className="section-kicker">Nos expertises</span><h2>Une maîtrise complète de la chaîne fibre</h2></div>
          <p>Du déploiement à la recette, nos équipes interviennent sur les environnements les plus exigeants avec méthode et précision.</p>
        </div>
        <div className="expertise-grid">
          {expertises.map(({ number, icon: Icon, title, text }) => (
            <article key={number} className="expertise-card">
              <div className="expertise-card-head"><span>{number}</span><Icon size={22} aria-hidden="true" /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="approche" className="dark-section">
        <div className="dark-section-copy">
          <span className="section-kicker light">Notre approche</span>
          <h2>La rigueur terrain au service de vos infrastructures.</h2>
          <p>Chaque intervention est préparée, exécutée et contrôlée avec une exigence constante de qualité, de traçabilité et de continuité de service.</p>
          <ul>
            <li><CheckCircle2 /> Équipes techniques spécialisées fibre optique</li>
            <li><CheckCircle2 /> Respect des procédures et contraintes de site</li>
            <li><CheckCircle2 /> Rapports de mesure et validation des liaisons</li>
            <li><CheckCircle2 /> Réactivité en maintenance et dépannage</li>
          </ul>
        </div>
        <div className="process-panel">
          <div className="process-line" aria-hidden="true" />
          {[
            ['01', 'Étude', 'Analyse du besoin et préparation de l’intervention'],
            ['02', 'Déploiement', 'Installation, raccordement et brassage'],
            ['03', 'Mesure', 'Contrôle OTDR, puissance et conformité'],
            ['04', 'Recette', 'Validation et remise des résultats'],
          ].map(([number, title, text]) => <div className="process-step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </div>
      </section>

      <section id="zone" className="section zone-section">
        <div className="zone-card">
          <div className="zone-graphic" aria-hidden="true"><MapPin /><span className="zone-ring ring-one" /><span className="zone-ring ring-two" /><span className="zone-ring ring-three" /></div>
          <div className="zone-copy"><span className="section-kicker">Zone d’intervention</span><h2>Ancrés en Île-de-France.<br />Mobiles partout en France.</h2><p>TECHNIM intervient quotidiennement sur l’ensemble de l’Île-de-France et peut mobiliser ses équipes ponctuellement au niveau national selon la nature et l’ampleur des projets.</p><div className="zone-tags"><span>Paris</span><span>Petite couronne</span><span>Grande couronne</span><span>National sur projet</span></div></div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-intro">
          <span className="section-kicker light">Parlons de votre projet</span>
          <h2>Un besoin fibre optique&nbsp;?</h2>
          <p>Décrivez-nous votre intervention. Notre équipe étudie votre demande et revient vers vous avec une réponse adaptée.</p>
          <div className="contact-direct">
            <a href="tel:+33775783955"><Phone /><span><small>Appelez-nous</small><strong>07 75 78 39 55</strong></span></a>
            <a href="mailto:contact@technim-reseaux.fr"><Mail /><span><small>Écrivez-nous</small><strong>contact@technim-reseaux.fr</strong></span></a>
          </div>
        </div>
        <ContactForm />
      </section>

      <footer>
        <div className="footer-brand"><img src="/technim-logo.png" alt="TECHNIM" /><p>Expertise et infrastructure fibre optique.</p></div>
        <div><strong>Navigation</strong><a href="#expertises">Expertises</a><a href="#approche">Notre approche</a><a href="#contact">Demander un devis</a></div>
        <div><strong>Contact</strong><a href="tel:+33775783955">07 75 78 39 55</a><a href="mailto:contact@technim-reseaux.fr">contact@technim-reseaux.fr</a><span>Île-de-France</span></div>
        <p className="footer-bottom">© {new Date().getFullYear()} TECHNIM. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
