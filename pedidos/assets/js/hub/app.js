// Restaurant hub: login, live orders, menu, tables & QR, printers, sales, settings.
import { html, render, useState, useEffect, useRef, useCallback } from '../vendor/preact-htm.js';
import { store, isOpenNow, isPaused, clockTime } from '../core/util.js';
import { HS, hubError } from './strings.js';
import { Toasts, ConfirmHost, attempt, Field } from './ui.js';
import { useAlerts, unlockAudio } from './alerts.js';
import { usePrintEngine, getDevice } from './printing.js';
import { OrdersView } from './orders.js';
import { MenuView } from './menu.js';
import { TablesView } from './tables.js';
import { PrintersView } from './printers.js';
import { StatsView } from './stats.js';
import { SettingsView } from './settings.js';
import { ticketToHtmlBody } from '../../../supabase/functions/_shared/ticket-format.js';

const NAV = [
  { key: 'orders', icon: '🔔' }, { key: 'menu', icon: '📋' }, { key: 'tables', icon: '▦' },
  { key: 'printers', icon: '🖨' }, { key: 'stats', icon: '📈' }, { key: 'settings', icon: '⚙' },
];

function Login({ api, t, lang, setLang, recovery }) {
  const [mode, setMode] = useState(recovery ? 'recovery' : 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault(); setBusy(true); setMsg('');
    try {
      if (mode === 'login') await api.signIn(email.trim(), password);
      if (mode === 'signup') { const r = await api.signUp(email.trim(), password); if (r.needsConfirmation) setMsg(t.checkEmail); }
      if (mode === 'reset') { await api.resetPassword(email.trim()); setMsg(t.resetSent); }
      if (mode === 'recovery') { await api.setNewPassword(password); location.hash = ''; location.reload(); }
    } catch (err) { setMsg(hubError(t, err)); }
    setBusy(false);
  };
  return html`<div class="h-login">
    <form class="h-login-card" onSubmit=${submit}>
      <div class="h-login-brand"><span class="h-mark" aria-hidden="true"></span>Farol</div>
      <h1>${mode === 'recovery' ? t.newPassword : t.loginTitle}</h1>
      ${api.mode === 'demo' && html`<p class="h-note">${t.demoLogin}</p>`}
      ${mode !== 'recovery' && html`<${Field} label=${t.email}><input class="h-input" type="email" required autocomplete="email" value=${email} onInput=${(e) => setEmail(e.target.value)} /></${Field}>`}
      ${mode !== 'reset' && html`<${Field} label=${mode === 'recovery' ? t.newPassword : t.password}>
        <input class="h-input" type="password" required minlength="6" autocomplete=${mode === 'login' ? 'current-password' : 'new-password'}
          value=${password} onInput=${(e) => setPassword(e.target.value)} /></${Field}>`}
      ${msg && html`<p class="h-note" role="status">${msg}</p>`}
      <button class="h-btn h-btn-go h-btn-wide" disabled=${busy}>
        ${{ login: t.login, signup: t.createAccount, reset: t.sendReset, recovery: t.savePassword }[mode]}</button>
      <div class="h-login-links">
        ${mode === 'login' && html`<button type="button" class="h-link" onClick=${() => setMode('signup')}>${t.noAccount}</button>
          <button type="button" class="h-link" onClick=${() => setMode('reset')}>${t.forgot}</button>`}
        ${(mode === 'signup' || mode === 'reset') && html`<button type="button" class="h-link" onClick=${() => setMode('login')}>${mode === 'signup' ? t.haveAccount : t.backToLogin}</button>`}
      </div>
      <div class="h-lang-mini">
        <button type="button" class=${lang === 'es' ? 'is-on' : ''} onClick=${() => setLang('es')}>ES</button>
        <button type="button" class=${lang === 'en' ? 'is-on' : ''} onClick=${() => setLang('en')}>EN</button>
      </div>
    </form>
  </div>`;
}

function PauseControl({ api, t, r, onChange }) {
  const [open, setOpen] = useState(false);
  const paused = isPaused(r);
  const openHours = isOpenNow(r.hours_enabled, r.hours, r.timezone);
  const set = async (minutes) => {
    setOpen(false);
    const res = await attempt(() => api.setPause(r.id, minutes), (e) => hubError(t, e));
    if (res) onChange(res);
  };
  const label = paused
    ? (r.paused_until ? t.pausedUntil(clockTime(r.paused_until, r.timezone)) : t.pausedOpenEnded)
    : openHours ? t.open : t.closedHours;
  return html`<div class="h-pause">
    <button class="h-status-pill ${paused ? 'is-paused' : openHours ? 'is-open' : 'is-closed'}" aria-expanded=${open}
      onClick=${() => (paused ? set(null) : setOpen(!open))} title=${paused ? t.resume : t.pause}>
      <span class="h-dot-live" aria-hidden="true"></span>${label}${paused ? html` · <u>${t.resume}</u>` : ' ▾'}
    </button>
    ${open && html`<div class="h-menu-pop" role="menu">
      <p class="h-menu-pop-title">${t.pause}</p>
      <button role="menuitem" onClick=${() => set(15)}>${t.pause15}</button>
      <button role="menuitem" onClick=${() => set(30)}>${t.pause30}</button>
      <button role="menuitem" onClick=${() => set(60)}>${t.pause60}</button>
      <button role="menuitem" onClick=${() => set(0)}>${t.pauseOpen}</button>
    </div>`}
  </div>`;
}

// "Show on screen" mode: a new ticket slides in, then folds into a small chip after a few
// seconds so it never covers the order buttons. Tap a chip to open it again.
function ScreenTicket({ j, t, onClose }) {
  const [open, setOpen] = useState(true);
  useEffect(() => { if (!open) return; const id = setTimeout(() => setOpen(false), 8000); return () => clearTimeout(id); }, [open]);
  const label = j.ticket.kind === 'test' ? t.testTicket : `#${j.ticket.number} · ${j.ticket.table || ''}`;
  if (!open) return html`<div class="h-ticket-chip">
    <button class="h-ticket-chip-open" onClick=${() => setOpen(true)}>🧾 ${label}${j.ticket.station && j.ticket.station !== 'all' ? ` · ${t[j.ticket.station]}` : ''}</button>
    <button class="h-ticket-chip-x" onClick=${() => onClose(j.id)} aria-label=${t.dismiss}>×</button>
  </div>`;
  return html`<div class="h-ticket">
    <button class="h-ticket-x" onClick=${() => setOpen(false)} aria-label=${t.dismiss}>–</button>
    <div class="tk" dangerouslySetInnerHTML=${{ __html: ticketToHtmlBody(j.ticket) }}></div>
  </div>`;
}

function ScreenTickets({ tickets, onClose, t }) {
  if (!tickets.length) return null;
  return html`<div class="h-tickets" aria-live="polite">
    ${tickets.slice(-6).map((j) => html`<${ScreenTicket} key=${j.id} j=${j} t=${t} onClose=${onClose} />`)}
  </div>`;
}

function Hub({ api, t, lang, setLang, session, restaurantId, restaurants, onSwitch, onTryTable }) {
  const [r, setR] = useState(null);
  const [role, setRole] = useState(null);
  const [view, setView] = useState(() => store.get('farol-hub-view', 'orders'));
  const [orders, setOrders] = useState([]);
  const [requests, setRequests] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [live, setLive] = useState(true);
  const [shiftStarted, setShiftStarted] = useState(false);
  const [soundOn, setSoundOn] = useState(() => store.get('farol-sound', true));
  const [device, setDeviceState] = useState(() => getDevice(restaurantId, api.mode === 'demo'));
  const takeJob = useRef(null);
  const [screenTickets, setScreenTickets] = useState([]);
  const [, tick] = useState(0);
  const rRef = useRef(null);

  const refresh = useCallback(async () => {
    const rest = await api.getRestaurant(restaurantId);
    rRef.current = rest;
    setR(rest);
    const [o, q, p] = await Promise.all([
      api.listActiveOrders(restaurantId, rest.timezone), api.listOpenRequests(restaurantId), api.listPrinters(restaurantId),
    ]);
    setOrders(o); setRequests(q); setPrinters(p);
  }, [restaurantId]);

  useEffect(() => {
    setRole(restaurants.find((x) => x.id === restaurantId)?.role || 'staff');
    refresh().catch(console.error);
    const unsub = api.subscribe(restaurantId, (table, type, row) => {
      if (table === '*') { refresh(); return; }
      if (table === 'orders') {
        setOrders((list) => {
          const rest = list.filter((x) => x.id !== row.id);
          return type === 'DELETE' ? rest : [...rest, row].sort((a, b) => a.created_at.localeCompare(b.created_at));
        });
      }
      if (table === 'service_requests') {
        setRequests((list) => {
          const rest = list.filter((x) => x.id !== row.id);
          return type !== 'DELETE' && row.status === 'open' ? [...rest, row] : rest;
        });
      }
      if (table === 'printers') {
        setPrinters((list) => {
          const rest = list.filter((x) => x.id !== row.id);
          return type === 'DELETE' ? rest : [...rest, row].sort((a, b) => a.created_at.localeCompare(b.created_at));
        });
      }
      if (table === 'print_jobs' && type !== 'DELETE') takeJob.current?.({ ...row });
    }, (status) => {
      const ok = status === 'SUBSCRIBED';
      setLive(ok);
      if (ok) refresh().catch(() => {});
    });
    const safety = setInterval(() => refresh().catch(() => setLive(false)), 60000);
    const onVis = () => document.visibilityState === 'visible' && refresh().catch(() => {});
    document.addEventListener('visibilitychange', onVis);
    const t30 = setInterval(() => tick((x) => x + 1), 30000);
    return () => { unsub(); clearInterval(safety); clearInterval(t30); document.removeEventListener('visibilitychange', onVis); };
  }, [restaurantId]);

  const pending = orders.filter((o) => o.status === 'pending').length;
  useAlerts({ pending, requests: requests.length, soundOn: soundOn && shiftStarted, titleBase: r ? `${r.name} · Farol` : 'Farol', newTitle: t.newOrderTitle });

  const engine = usePrintEngine({
    api, rid: restaurantId, printers, device,
    onScreenTicket: (job) => setScreenTickets((x) => [...x, job]),
  });
  takeJob.current = engine.take;

  useEffect(() => store.set('farol-hub-view', view), [view]);

  if (!r) return html`<div class="h-loading">…</div>`;
  const browserPrinters = printers.filter((p) => p.kind === 'browser' && p.active);
  const deviceWarning = browserPrinters.length > 0 && engine.myIds.length === 0
    ? html`<p class="h-device-warn">🖨 ${lang === 'es' ? 'Esta pantalla no imprime comandas.' : "This screen doesn't print tickets."}
        <button class="h-link" onClick=${() => setView('printers')}>${t.nav_printers}</button></p>` : null;

  return html`<div class="hub ${pending ? 'has-new' : ''}">
    ${api.mode === 'demo' && html`<div class="h-demo-banner">${t.demoBanner}</div>`}
    <header class="h-top">
      <div class="h-top-brand">
        <span class="h-mark" aria-hidden="true"></span>
        ${restaurants.length > 1
          ? html`<select class="h-rest-select" value=${restaurantId} onChange=${(e) => onSwitch(e.target.value)} aria-label=${t.chooseRestaurant}>
              ${restaurants.map((x) => html`<option value=${x.id}>${x.name}</option>`)}</select>`
          : html`<span class="h-rest-name">${r.name}</span>`}
      </div>
      <${PauseControl} api=${api} t=${t} r=${r} onChange=${(p) => setR({ ...r, ...p })} />
      <div class="h-top-tools">
        <span class="h-conn ${live ? 'is-live' : 'is-off'}" title=${live ? t.live : t.offline}>${live ? t.live : t.offline}</span>
        <button class="h-icon-btn" aria-pressed=${soundOn} title=${soundOn ? t.soundOn : t.soundOff}
          onClick=${() => { unlockAudio(); setSoundOn(!soundOn); store.set('farol-sound', !soundOn); }}>${soundOn ? '🔊' : '🔇'}</button>
        <div class="h-lang-mini">
          <button class=${lang === 'es' ? 'is-on' : ''} onClick=${() => setLang('es')}>ES</button>
          <button class=${lang === 'en' ? 'is-on' : ''} onClick=${() => setLang('en')}>EN</button>
        </div>
        ${!onTryTable && html`<a class="h-link h-hide-sm" href=${`order.html?r=${r.slug}${api.mode === 'demo' ? '&demo' : ''}`} target="_blank" rel="noopener">${t.previewMenu}</a>`}
        <button class="h-link h-hide-sm" onClick=${() => api.signOut()}>${t.signOut}</button>
      </div>
    </header>
    <nav class="h-nav" aria-label="Hub">
      ${NAV.filter((n) => role === 'owner' || !['settings'].includes(n.key)).map((n) => html`
        <button class="h-nav-item ${view === n.key ? 'is-on' : ''}" aria-current=${view === n.key ? 'page' : null} onClick=${() => setView(n.key)}>
          <span class="h-nav-icon" aria-hidden="true">${n.icon}</span><span>${t[`nav_${n.key}`]}</span>
          ${n.key === 'orders' && pending + requests.length > 0 && html`<span class="h-nav-badge">${pending + requests.length}</span>`}
        </button>`)}
    </nav>
    <main class="h-main">
      ${view === 'orders' && html`<${OrdersView} api=${api} t=${t} r=${r} orders=${orders} requests=${requests} printers=${printers}
        onRefresh=${refresh} deviceWarning=${deviceWarning} />`}
      ${view === 'menu' && html`<${MenuView} api=${api} t=${t} r=${r} role=${role} />`}
      ${view === 'tables' && html`<${TablesView} api=${api} t=${t} r=${r} role=${role} onTryTable=${onTryTable} />`}
      ${view === 'printers' && html`<${PrintersView} api=${api} t=${t} r=${r} role=${role} printers=${printers} device=${device}
        onDevice=${setDeviceState} onPrintersChanged=${() => api.listPrinters(restaurantId).then(setPrinters)} engineError=${engine.lastError} />`}
      ${view === 'stats' && html`<${StatsView} api=${api} t=${t} r=${r} lang=${lang} />`}
      ${view === 'settings' && html`<${SettingsView} api=${api} t=${t} r=${r} lang=${lang} role=${role} onSaved=${(x) => setR(x)} />`}
    </main>
    <${ScreenTickets} tickets=${screenTickets} t=${t} onClose=${(id) => setScreenTickets((x) => x.filter((j) => j.id !== id))} />
    ${!shiftStarted && html`<div class="h-shift">
      <div class="h-shift-card">
        <span class="h-mark h-mark-big" aria-hidden="true"></span>
        <h2>${r.name}</h2>
        <p>${t.startShiftText}</p>
        <button class="h-btn h-btn-go h-btn-wide" onClick=${() => { unlockAudio(); setShiftStarted(true); }}>${t.startShift}</button>
      </div>
    </div>`}
  </div>`;
}

export function HubApp({ api, onTryTable }) {
  const [lang, setLangState] = useState(() => store.get('farol-hub-lang', 'es'));
  const setLang = (l) => { setLangState(l); store.set('farol-hub-lang', l); };
  const t = HS[lang];
  const [session, setSession] = useState(undefined);
  const [recovery, setRecovery] = useState(false);
  const [restaurants, setRestaurants] = useState(null);
  const [rid, setRid] = useState(null);

  useEffect(() => {
    api.getSession().then(setSession);
    return api.onAuthChange((event, s) => {
      if (event === 'PASSWORD_RECOVERY') setRecovery(true);
      setSession(s);
    });
  }, []);

  useEffect(() => {
    if (!session) { setRestaurants(null); return; }
    (async () => {
      await api.claimInvites().catch(() => {});
      const list = await api.myRestaurants();
      setRestaurants(list);
      const wanted = new URLSearchParams(location.search).get('r');
      const pickR = list.find((x) => x.slug === wanted) || list.find((x) => x.id === store.get('farol-hub-rid')) || (list.length === 1 ? list[0] : null);
      if (pickR) setRid(pickR.id);
    })().catch(console.error);
  }, [session?.user?.id]);

  const choose = (id) => { store.set('farol-hub-rid', id); setRid(id); };

  let body;
  if (session === undefined) body = html`<div class="h-loading">…</div>`;
  else if (!session || recovery) body = html`<${Login} api=${api} t=${t} lang=${lang} setLang=${setLang} recovery=${recovery} />`;
  else if (!restaurants) body = html`<div class="h-loading">…</div>`;
  else if (!restaurants.length) body = html`<div class="h-login"><div class="h-login-card"><p>${t.noRestaurant}</p>
    <p class="h-muted">${session.user.email}</p><button class="h-link" onClick=${() => api.signOut()}>${t.signOut}</button></div></div>`;
  else if (!rid) body = html`<div class="h-login"><div class="h-login-card"><h1>${t.chooseRestaurant}</h1>
    <ul class="h-pick">${restaurants.map((x) => html`<li><button class="h-btn h-btn-ghost h-btn-wide" onClick=${() => choose(x.id)}>${x.name}</button></li>`)}</ul></div></div>`;
  else body = html`<${Hub} key=${rid} api=${api} t=${t} lang=${lang} setLang=${setLang} session=${session}
    restaurantId=${rid} restaurants=${restaurants} onSwitch=${choose} onTryTable=${onTryTable} />`;
  return html`${body}<${Toasts} /><${ConfirmHost} />`;
}

export function mountHubApp(el, props) {
  render(html`<${HubApp} ...${props} />`, el);
}
