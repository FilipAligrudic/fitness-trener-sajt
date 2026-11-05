# Sajt za personalnog trenera (Astro + Tailwind)

## Pokretanje

```
npm install
npm run dev        # razvoj: http://localhost:4321
npm run build      # gotov sajt u folderu dist/
```

Na telefonu (ista Wi-Fi mreža): `npm run dev -- --host`, pa otvori adresu koju ispiše.

## Gdje se šta mijenja

| Šta | Fajl |
|---|---|
| Sav tekst, paketi, cijene, kontakt | `src/data/site.ts` |
| Zakazivanje i forme | `src/data/site.ts` → `integrations` |
| Boje, fontovi, animacije | `src/styles/global.css` |
| Tačkice u pozadini | `src/components/ParticlesBg.astro` (objekat `CONFIG`) |
| Sekcije stranice | `src/components/` |

## Podešavanje zakazivanja (Cal.com)

1. Trener napravi besplatan nalog na https://cal.com i poveže svoj Google/Outlook kalendar.
2. Napravi dva tipa termina (Event Types) sa linkovima:
   - `konsultacije` (15 min)
   - `trening-uzivo` (60 min)
   Ako koristi druge nazive, promijeni `slug` u `integrations.calEvents`.
3. U `src/data/site.ts` upiši korisničko ime: `calUsername: 'ime-trenera'`.

Dok je `calUsername` prazan, umjesto kalendara se prikazuje dugme za WhatsApp.

## Podešavanje formi (Web3Forms)

1. Na https://web3forms.com upiši email trenera i klikni "Create Access Key". Ključ stiže na taj email.
2. U `src/data/site.ts` upiši: `web3formsKey: 'tvoj-kljuc'`.
3. Poruke iz kontakt forme i prijave za besplatni program stižu na taj email.

Ključ je javan po dizajnu (Web3Forms tako radi), pa smije da stoji u kodu.
Besplatni plan ima ograničen broj poruka mjesečno; provjeri trenutni limit na njihovoj stranici sa cijenama.

## Besplatni 7-dnevni program

Stavi PDF u folder `public/` (npr. `public/7-dnevni-program.pdf`) i upiši
`leadMagnetPdf: '/7-dnevni-program.pdf'`. Poslije prijave se pojavi dugme za preuzimanje.
