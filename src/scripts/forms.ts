// Slanje formi preko Web3Forms (bez sopstvenog servera).
// Forma treba atribut data-web3-form, a ključ se čita iz data-key.

type Status = 'idle' | 'sending' | 'ok' | 'error';

const MESSAGES: Record<Exclude<Status, 'idle'>, string> = {
  sending: 'Šaljem…',
  ok: 'Hvala! Poruka je poslata, javiću ti se uskoro.',
  error: 'Nešto nije u redu. Pokušaj ponovo ili piši na WhatsApp.',
};

function setStatus(form: HTMLFormElement, status: Status, text?: string) {
  form.dataset.status = status;
  const out = form.querySelector<HTMLElement>('[data-form-status]');
  if (out) out.textContent = status === 'idle' ? '' : (text ?? MESSAGES[status]);
  const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (btn) btn.disabled = status === 'sending';
}

async function submit(form: HTMLFormElement) {
  const key = form.dataset.key ?? '';
  if (!key) {
    setStatus(form, 'error', 'Forma još nije povezana (nedostaje Web3Forms ključ).');
    return;
  }
  const data = Object.fromEntries(new FormData(form).entries());
  // Honeypot: botovi popune skriveno polje, ljudi ne
  if (data.botcheck) return;
  setStatus(form, 'sending');
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, access_key: key }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || json.success === false) throw new Error(json.message || res.statusText);
    setStatus(form, 'ok', form.dataset.successText);
    form.reset();
    form.dispatchEvent(new CustomEvent('web3:success'));
  } catch (err) {
    console.error('Slanje forme nije uspjelo:', err);
    setStatus(form, 'error');
  }
}

document.querySelectorAll<HTMLFormElement>('form[data-web3-form]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    submit(form);
  });
});

// Dugmad "Izaberi paket" unaprijed biraju paket u kontakt formi
document.querySelectorAll<HTMLElement>('[data-package]').forEach((el) => {
  el.addEventListener('click', () => {
    const select = document.querySelector<HTMLSelectElement>('#contact-paket');
    if (select) select.value = el.dataset.package!;
  });
});
