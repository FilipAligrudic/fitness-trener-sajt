// ─────────────────────────────────────────────────────────────
// SAV SADRŽAJ SAJTA JE OVDJE.
// Sve u [UGLASTIM ZAGRADAMA] zamijeni stvarnim podacima.
// ─────────────────────────────────────────────────────────────

export const site = {
  brand: '[IME]',
  brandAccent: 'FIT',
  trainerName: '[IME TRENERA]',
  city: 'Podgorica',
  title: '[IME] FIT – Personalni trener u Podgorici i online',
  description:
    'Personalni i online trening u Podgorici. Planovi treninga i ishrane prilagođeni tvom cilju: mršavljenje, mišićna masa, kondicija.',
  email: '[email@domen.me]',
  phone: '[+382 XX XXX XXX]',
  // WhatsApp broj bez + i razmaka, npr. 38267123456
  whatsapp: '38200000000',
  gymAddress: '[Teretana, adresa, Podgorica]',
  instagram: 'https://instagram.com/[profil]',
  tiktok: 'https://tiktok.com/@[profil]',
};

export const stats = [
  { value: '[X]+', label: 'klijenata' },
  { value: '[X] god.', label: 'iskustva' },
  { value: '[SERT.]', label: 'licenca' },
];

export type Gender = 'zene' | 'muskarci';

export const goals: {
  title: string;
  text: Record<Gender, string>;
  image?: string;
}[] = [
  {
    title: 'Mršavljenje',
    text: {
      zene: 'Gubitak masti bez gladovanja, uz trening koji možeš da održiš.',
      muskarci: 'Skidanje masti uz očuvanje mišića i snage.',
    },
  },
  {
    title: 'Mišićna masa',
    text: {
      zene: 'Čvrsti mišići i snaga, bez straha od "nabildanosti".',
      muskarci: 'Progresivan plan snage i hipertrofije.',
    },
  },
  {
    title: 'Kondicija',
    text: {
      zene: 'Više energije i izdržljivosti za sport i svakodnevicu.',
      muskarci: 'Izdržljivost i eksplozivnost za sport i svakodnevicu.',
    },
  },
  {
    title: 'Oblikovanje',
    text: {
      zene: 'Zategnuto tijelo, fokus na noge, gluteus i core.',
      muskarci: 'Definicija i proporcije: ramena, leđa, core.',
    },
  },
];

export const steps = [
  { title: 'Popuni kratak upitnik', text: 'Cilj, iskustvo, raspored i oprema koju imaš. Traje 3 minuta.' },
  { title: 'Dobijaš svoj plan', text: 'Trening (i ishrana u višim paketima) prilagođeni tebi, uživo ili online.' },
  { title: 'Pratimo napredak', text: 'Nedjeljni check-in, korekcije plana i podrška kad ti padne motivacija.' },
];

export const packages = [
  {
    id: 'start',
    name: 'Start',
    price: '[CIJENA]',
    period: 'jednokratno',
    features: ['Gotov program treninga po cilju', 'Video uputstva za vježbe', 'Pristup odmah nakon kupovine'],
    featured: false,
  },
  {
    id: 'online',
    name: 'Online Coaching',
    price: '[CIJENA]',
    period: 'mjesečno',
    features: ['Personalizovan plan treninga', 'Plan ishrane prilagođen cilju', 'Nedjeljni check-in i korekcije', 'Podrška porukama'],
    featured: true,
  },
  {
    id: 'hibrid',
    name: 'Hibrid Premium',
    price: '[CIJENA]',
    period: 'mjesečno',
    features: ['Sve iz Online Coaching paketa', `[X] treninga uživo mjesečno u Podgorici`, 'Analiza tehnike i mjerenja uživo', 'Prioritetna podrška'],
    featured: false,
  },
];

// Utiske dodaj samo uz pisanu dozvolu klijenta.
export const reviews = [
  { quote: '[Utisak klijenta, 1–2 rečenice]', who: '[Ime], [godine]', result: '[rezultat za X sedmica]' },
  { quote: '[Utisak klijenta, 1–2 rečenice]', who: '[Ime], [godine]', result: '[rezultat za X sedmica]' },
  { quote: '[Utisak klijenta, 1–2 rečenice]', who: '[Ime], [godine]', result: '[rezultat za X sedmica]' },
];

export const about = {
  story:
    '[Kratka priča: kako je počeo, zašto radi ovo, kome najviše pomaže. 3–4 rečenice, lično i iskreno.]',
  credentials: ['[Diploma / sertifikat 1]', '[Sertifikat 2]', '[Teretana u kojoj radi, Podgorica]'],
};

export const faq = [
  { q: 'Da li mi treba teretana za online program?', a: '[Odgovor]' },
  { q: 'Kako izgleda nedjeljni check-in?', a: '[Odgovor]' },
  { q: 'Mogu li otkazati paket?', a: '[Odgovor]' },
  { q: 'Gdje se održavaju treninzi uživo?', a: '[Teretana, adresa, Podgorica]' },
];

// ─────────────────────────────────────────────────────────────
// INTEGRACIJE (zakazivanje i forme)
// Uputstvo za podešavanje je u README.md
// ─────────────────────────────────────────────────────────────
export const integrations = {
  // Cal.com korisničko ime, npr. 'marko-trener' (iz linka cal.com/marko-trener).
  // Dok je prazno, umjesto kalendara se prikazuje dugme za WhatsApp.
  calUsername: '',
  // Tipovi termina: slug mora da odgovara "event type" linku na Cal.com
  calEvents: [
    { slug: 'konsultacije', label: 'Besplatne konsultacije', duration: '15 min' },
    { slug: 'trening-uzivo', label: 'Trening uživo', duration: '60 min' },
  ],
  // Web3Forms "Access Key" (dobija se mejlom na web3forms.com).
  // Ovaj ključ je javan po dizajnu, sme da stoji u kodu sajta.
  web3formsKey: '',
  // PDF besplatnog programa: stavi fajl u folder public/ i upiši putanju.
  // Prazno = posle prijave samo poruka "javićemo ti se".
  leadMagnetPdf: '',
};
