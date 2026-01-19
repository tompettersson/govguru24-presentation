export type SlideType =
  | 'title'
  | 'content'
  | 'two-column'
  | 'three-column'
  | 'quote'
  | 'image'
  | 'cta';

export interface SlideColumn {
  title: string;
  items: string[];
  icon?: string;
}

export interface Slide {
  id: number;
  type: SlideType;
  section: string;
  title: string;
  subtitle?: string;
  content?: string[];
  columns?: SlideColumn[];
  quote?: string;
  quoteAuthor?: string;
  image?: string;
  imageAlt?: string;
  cta?: { label: string; description?: string }[];
  leitfrage?: string;
  illustration?: string; // Linke Seiten-Illustration
}

export const slides: Slide[] = [
  // Folie 1: Begrüßung & Ziel des Termins
  {
    id: 1,
    type: 'title',
    section: 'Einstieg & Erwartungsklärung',
    title: 'govguru24',
    subtitle: 'Lern-Management-System für die öffentliche Verwaltung',
    content: [
      'Kurze persönliche Vorstellungsrunde',
      'Gemeinsames Erwartungsbild',
      'Einordnung von govguru24',
      'Verständnis für Herausforderungen & Lösungsansatz',
      'Nächste Schritte klären',
    ],
    leitfrage: 'Was benötigen Sie konkret, um Lernen, Veränderung und Digitalisierung nachhaltig in Ihrer Organisation zu verankern?',
    illustration: '/illustrations/storyset-vision.svg',
  },

  // Folie 2: EGovC in 60 Sekunden
  {
    id: 2,
    type: 'two-column',
    section: 'Wer wir sind',
    title: 'EGovC in 60 Sekunden',
    columns: [
      {
        title: 'Tätigkeitsfelder',
        icon: 'Building',
        items: [
          'Öffentliche Verwaltung: Kommunen, Städte, Kreise, Länder, Bund',
          'Krankenhäuser & Universitäten',
          'Kirchen & kirchliche Träger',
        ],
      },
      {
        title: 'Unser Ansatz',
        icon: 'Target',
        items: [
          'Verwaltung verstehen',
          'Lösungen praxisnah entwickeln',
          'Digital umsetzen',
        ],
      },
    ],
  },

  // Folie 3: Beratung, Software & Netzwerk
  {
    id: 3,
    type: 'three-column',
    section: 'Unser Leistungsportfolio',
    title: 'Beratung, Software & Netzwerk',
    columns: [
      {
        title: 'Beratung',
        icon: 'Lightbulb',
        items: [
          'Strategieberatung Digitalisierung & KI',
          'Einführungs- & Transformationsstrategien',
          'Organisations- & Personalentwicklung',
          'Change-Management in der Verwaltung',
        ],
      },
      {
        title: 'Software',
        icon: 'Code',
        items: [
          'Omnia – No-Code-Plattform für Leistungsdigitalisierung',
          'govguru24 – Lern-Management-System (Fokus heute)',
          'Rechtssicherer KI-Chat',
          'KI-gestützte Entscheidungsunterstützung',
        ],
      },
      {
        title: 'Netzwerk',
        icon: 'Network',
        items: [
          'Europäisches E-Government-Netzwerk',
          '18 Themenfelder',
          '~120 Partnerunternehmen',
          'Praxiswissen direkt aus dem Verwaltungsumfeld',
        ],
      },
    ],
  },

  // Folie 4: Herausforderungen in der Verwaltung
  {
    id: 4,
    type: 'content',
    section: 'Ausgangslage: Warum Lernen der Schlüssel ist',
    title: 'Herausforderungen in der Verwaltung',
    quote: 'Digitalisierung scheitert nicht an Technik, sondern an Menschen.',
    content: [
      'Fehlende Mitnahme der Mitarbeitenden',
      'Fehlende Struktur im Lernen',
      'Heterogene Zielgruppen & Rollen',
      'Pflichtunterweisungen & Fachfortbildungen parallel',
      'Begrenzte Zeitressourcen',
      'Hoher Koordinationsaufwand in der Personalentwicklung',
    ],
    illustration: '/illustrations/storyset-challenge.svg',
  },

  // Folie 5: Ohne Lernen keine Transformation
  {
    id: 5,
    type: 'quote',
    section: 'Der zentrale Hebel: Change-Management',
    title: 'Ohne Lernen keine Transformation',
    quote: 'Digitalisierung funktioniert nur, wenn alle Beteiligten wissen, was sie tun – und warum.',
    content: [
      'Wie nehme ich alle Mitarbeitenden mit?',
      'Wie mache ich Lernen niedrigschwellig & relevant?',
      'Wie bleibt Wissen in der Organisation?',
    ],
    illustration: '/illustrations/storyset-learning.svg',
  },

  // Folie 6: Warum klassische LMS oft nicht ausreichen
  {
    id: 6,
    type: 'content',
    section: 'Weitere strukturelle Herausforderungen',
    title: 'Warum klassische LMS oft nicht ausreichen',
    content: [
      'Demografischer Wandel: Erfahrungswissen droht verloren zu gehen',
      'Wissenssilos zwischen Fachbereichen',
      'Fortbildung orientiert sich an Stellen, nicht an Rollen',
      'Fehlende Transparenz: Wer lernt was? Welche Pflichtunterweisungen fehlen?',
      'Hoher administrativer Aufwand in der Personalabteilung',
    ],
    illustration: '/illustrations/storyset-innovation.svg',
  },

  // Folie 7: Entstehung aus der Verwaltungspraxis
  {
    id: 7,
    type: 'quote',
    section: 'Unsere Antwort: govguru24',
    title: 'Entstehung aus der Verwaltungspraxis',
    quote: 'Wie lernen Mitarbeitende in Verwaltungen sinnvoll?',
    content: [
      'rollenbasiert',
      'bedarfsorientiert',
      'einfach zugänglich',
      'steuerbar für die Organisation',
    ],
    illustration: '/illustrations/storyset-team.svg',
  },

  // Folie 8: Lernen aus Sicht der Mitarbeitenden
  {
    id: 8,
    type: 'two-column',
    section: 'Perspektive 1: Der Lernende',
    title: 'Lernen aus Sicht der Mitarbeitenden',
    columns: [
      {
        title: 'Was Mitarbeitende erwarten',
        icon: 'User',
        items: [
          'Relevante Inhalte für ihre Rolle',
          'On-Demand-Zugriff',
          'Klare Struktur statt Kursdschungel',
          'Unterschiedliche Lernformate',
        ],
      },
      {
        title: 'Zentraler Ansatz: Rollenperspektive',
        icon: 'Users',
        items: [
          'Fortbildung nicht nach Stelle, sondern nach Rolle',
          'Rollen entstehen aus: Aufgaben, Verantwortlichkeiten, Praxis',
        ],
      },
    ],
    illustration: '/illustrations/storyset-learner.svg',
  },

  // Folie 9: Wie Rollen entstehen
  {
    id: 9,
    type: 'content',
    section: 'Intelligente Rollenlogik',
    title: 'Wie Rollen entstehen',
    subtitle: 'Ein intelligenter Prozess',
    content: [
      'Intelligenter Fragebogen',
      'Analyse der tatsächlichen Tätigkeit',
      'Automatische Zuordnung zu Rollenprofilen',
    ],
    leitfrage: 'Ergebnis: Individueller Lernpfad, passgenaue Inhalte, hohe Akzeptanz bei den Mitarbeitenden',
    illustration: '/illustrations/storyset-workflow.svg',
  },

  // Folie 10: Vielfalt statt Einheitslösung
  {
    id: 10,
    type: 'two-column',
    section: 'Lernformate, die angenommen werden',
    title: 'Vielfalt statt Einheitslösung',
    columns: [
      {
        title: 'Formate',
        icon: 'BookOpen',
        items: [
          'On-Demand-Schulungen',
          'Pflichtunterweisungen',
          'Webinare',
          'Präsenz-Seminare',
        ],
      },
      {
        title: 'Mehrwert',
        icon: 'CheckCircle',
        items: [
          'Lernen im Arbeitsalltag',
          'Flexible Zeiteinteilung',
          'Nachhaltiger Kompetenzaufbau',
        ],
      },
    ],
    illustration: '/illustrations/storyset-diversity.svg',
  },

  // Folie 11: Steuerung & Transparenz
  {
    id: 11,
    type: 'content',
    section: 'Perspektive 2: Personalentwicklung & Verwaltung',
    title: 'Steuerung & Transparenz',
    content: [
      'Zentrale Budgetübersicht',
      'Überblick über Pflichtunterweisungen & Entwicklungsbedarfe',
      'Antrags- & Genehmigungsprozesse',
      'Dokumentation & Nachweise',
      'Reporting für Führung & Verwaltungsspitze',
    ],
    illustration: '/illustrations/storyset-dashboard.svg',
  },

  // Folie 12: Praxisnah & verwaltungstauglich
  {
    id: 12,
    type: 'content',
    section: 'Verwaltungsspezifische Mehrwerte',
    title: 'Praxisnah & verwaltungstauglich',
    content: [
      'Abbildung interner Fortbildungsprozesse',
      'Genehmigungs-Workflows',
      'Rollen- & Rechtekonzepte',
      'Revisionssichere Dokumentation',
      'Anbindung bestehender Inhalte',
    ],
    illustration: '/illustrations/storyset-compliance.svg',
  },

  // Folie 13: Alles zusammengeführt
  {
    id: 13,
    type: 'cta',
    section: 'Die Lösung: govguru24',
    title: 'Alles zusammengeführt',
    content: [
      'Lernenden-Perspektive',
      'Personalentwicklungs-Perspektive',
      'Rollenbasierte Lernlogik',
      'Zentrale Steuerung',
    ],
    leitfrage: 'Zusätzlich: Zentrale Bildungsplattform mit Zugriff auf verwaltungsspezifische Bildungsangebote. Eigene Inhalte einpflegbar & intern nutzbar.',
    illustration: '/illustrations/storyset-integration.svg',
  },

  // Folie 14: Live-Einblick
  {
    id: 14,
    type: 'image',
    section: 'Blick in die Plattform',
    title: 'Live-Einblick',
    subtitle: 'So sieht govguru24 in der Praxis aus',
    image: '/images/slides/demo-placeholder.svg',
    imageAlt: 'govguru24 Plattform Screenshot',
  },

  // Folie 15: Wie geht es konkret weiter?
  {
    id: 15,
    type: 'cta',
    section: 'Nächste Schritte',
    title: 'Wie geht es konkret weiter?',
    cta: [
      { label: '1', description: 'Zusammenfassung der Anforderungen' },
      { label: '2', description: 'Individuelle Preisinformation' },
      { label: '3', description: 'Schriftliches Angebot' },
      { label: '4', description: 'Abstimmung Beauftragung & Zeitplan' },
    ],
    illustration: '/illustrations/storyset-partnership.svg',
  },

  // Folie 16: Offene Fragen & Ausblick
  {
    id: 16,
    type: 'quote',
    section: 'Abschluss & Fragen',
    title: 'Offene Fragen & Ausblick',
    content: [
      'Gibt es offene Fragen?',
      'Gibt es Ergänzungen oder Anforderungen?',
      'Wann besprechen wir Angebot & Beauftragung?',
    ],
    quote: 'govguru24 schafft die Grundlage dafür, dass Veränderung in der Verwaltung nicht nur beschlossen, sondern gelebt wird.',
    illustration: '/illustrations/storyset-questions.svg',
  },
];

export const TOTAL_SLIDES = slides.length;
