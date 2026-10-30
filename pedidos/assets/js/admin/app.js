// Farol master admin: create restaurant hubs, invite owners, switch hubs on/off, see activity.
import { html, render, useState, useEffect } from '../vendor/preact-htm.js';
import { money, slugify } from '../core/util.js';
import { Field, Switch, Toasts, ConfirmHost, toast, attempt } from '../hub/ui.js';
import { siteBase } from '../api/index.js';

const msg = (e) => ({ not_allowed: 'This account is not a Farol admin.', duplicate_slug: 'That web address is already taken.' }[e.code]
  || (/duplicate key|unique/i.test(e.message) ? 'That web address is already taken.' : e.message || 'Something went wrong.'));

function Login({ api }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  return html`<div class="h-login"><form class="h-login-card" onSubmit=${async (e) => {
    e.preventDefault(); setErr('');
    try { await api.signIn(email.trim(), password); } catch (x) { setErr(msg(x)); }
  }}>
    <div class="h-login-brand"><span class="h-mark" aria-hidden="true"></span>Farol admin</div>
    <${Field} label="E-mail"><input class="h-input" type="email" required value=${email} onInput=${(e) => setEmail(e.target.value)} /></${Field}>
    <${Field} label="Password"><input class="h-input" type="password" required value=${password} onInput=${(e) => setPassword(e.target.value)} /></${Field}>
    ${err && html`<p class="h-note">${err}</p>`}
    <button class="h-btn h-btn-go h-btn-wide">Sign in</button>
  </form></div>`;
}

function NewRestaurant({ api, onCreated }) {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [touched, setTouched] = useState(false);
  const [owner, setOwner] = useState('');
  const [sample, setSample] = useState(true);
  const [busy, setBusy] = useState(false);
  return html`<form class="h-panel" onSubmit=${async (e) => {
    e.preventDefault(); setBusy(true);
    const id = await attempt(() => api.adminCreateRestaurant({ name: name.trim(), slug, ownerEmail: owner.trim(), sampleMenu: sample }), msg);
    setBusy(false);
    if (id) { toast(`${name} created`); setName(''); setSlug(''); setOwner(''); setTouched(false); onCreated(); }
  }}>
    <h2>New restaurant hub</h2>
    <div class="h-grid-2">
      <${Field} label="Restaurant name"><input class="h-input" required maxlength="80" value=${name}
        onInput=${(e) => { setName(e.target.value); if (!touched) setSlug(slugify(e.target.value)); }} /></${Field}>
      <${Field} label="Web address" hint=${`Customer menu: ${siteBase()}order.html?r=${slug || '…'}`}>
        <input class="h-input" required pattern="[a-z0-9][a-z0-9\\-]{1,39}" value=${slug}
          onInput=${(e) => { setTouched(true); setSlug(slugify(e.target.value)); }} /></${Field}>
      <${Field} label="Owner's e-mail" hint="They create their account with this e-mail on the hub page and get owner access.">
        <input class="h-input" type="email" value=${owner} onInput=${(e) => setOwner(e.target.value)} /></${Field}>
      <${Field} label="Start with">
        <label class="h-check"><input type="checkbox" checked=${sample} onChange=${(e) => setSample(e.target.checked)} /> Sample tapas menu and 13 tables (easy to edit)</label>
      </${Field}>
    </div>
    <button class="h-btn h-btn-go" disabled=${busy || !name.trim() || slug.length < 2}>${busy ? 'Creating…' : 'Create hub'}</button>
  </form>`;
}

function Admin({ api, session }) {
  const [rows, setRows] = useState(null);
  const [denied, setDenied] = useState(false);
  const load = async () => {
    try { setRows(await api.adminOverview()); } catch (e) { if (e.code === 'not_allowed') setDenied(true); else toast(msg(e), 'bad'); }
  };
  useEffect(() => { load(); }, []);
  if (denied) return html`<div class="h-login"><div class="h-login-card">
    <p>${session.user.email} is not a Farol admin. Add it in Supabase (see README, step 4).</p>
    <button class="h-link" onClick=${() => api.signOut()}>Sign out</button></div></div>`;
  const total = (rows || []).filter((r) => r.active);
  return html`<div class="hub is-admin">
    ${api.mode === 'demo' && html`<div class="h-demo-banner">Demo mode: data is saved in this browser only.</div>`}
    <header class="h-top">
      <div class="h-top-brand"><span class="h-mark" aria-hidden="true"></span><span class="h-rest-name">Farol admin</span></div>
      <div class="h-top-tools"><span class="h-muted h-hide-sm">${session.user.email}</span>
        <button class="h-link" onClick=${() => api.signOut()}>Sign out</button></div>
    </header>
    <main class="h-main h-main-full">
      <div class="h-kpis">
        <div class="h-kpi"><span class="h-kpi-value">${total.length}</span><span class="h-kpi-label">Active hubs</span></div>
        <div class="h-kpi"><span class="h-kpi-value">${total.reduce((s, r) => s + r.orders_30d, 0)}</span><span class="h-kpi-label">Orders, last 30 days</span></div>
        <div class="h-kpi"><span class="h-kpi-value">${money(total.reduce((s, r) => s + r.revenue_30d_cents, 0))}</span><span class="h-kpi-label">Ordered through Farol, 30 days</span></div>
      </div>
      <${NewRestaurant} api=${api} onCreated=${load} />
      <section class="h-panel">
        <h2>Restaurants</h2>
        ${!rows ? html`<p class="h-muted">…</p>` : html`<table class="h-table h-table-admin">
          <thead><tr><th>Restaurant</th><th>Owner</th><th class="is-num">Orders 30d</th><th class="is-num">Ordered 30d</th><th>Last order</th><th>On</th><th></th></tr></thead>
          <tbody>${rows.map((r) => html`<tr class=${r.active ? '' : 'is-off'}>
            <td><strong>${r.name}</strong><br /><small class="h-muted">${r.slug}</small></td>
            <td>${r.owners.join(', ') || html`<span class="h-muted">—</span>`}
              ${r.pending_invites.length ? html`<br /><small class="h-badge is-warn">invited: ${r.pending_invites.join(', ')}</small>` : null}</td>
            <td class="is-num">${r.orders_30d}</td>
            <td class="is-num">${money(r.revenue_30d_cents)}</td>
            <td>${r.last_order_at ? new Date(r.last_order_at).toLocaleDateString('en-GB') : '—'}</td>
            <td><${Switch} checked=${r.active} label="" onChange=${(v) => attempt(() => api.adminSetActive(r.id, v), msg).then(load)} /></td>
            <td><a class="h-link" href=${`hub.html?r=${r.slug}${api.mode === 'demo' ? '&demo' : ''}`}>Open hub</a> ·
              <a class="h-link" href=${`order.html?r=${r.slug}${api.mode === 'demo' ? '&demo' : ''}`} target="_blank" rel="noopener">Menu</a></td>
          </tr>`)}</tbody>
        </table>`}
        <p class="h-muted h-small">Switching a restaurant off stops customer ordering and hides its menu (for example if they stop paying). Their data is kept.</p>
      </section>
    </main>
  </div>`;
}

function AdminApp({ api }) {
  const [session, setSession] = useState(undefined);
  useEffect(() => { api.getSession().then(setSession); return api.onAuthChange((_, s) => setSession(s)); }, []);
  return html`${session === undefined ? html`<div class="h-loading">…</div>` : session ? html`<${Admin} api=${api} session=${session} />` : html`<${Login} api=${api} />`}<${Toasts} /><${ConfirmHost} />`;
}

export function mountAdminApp(el, props) { render(html`<${AdminApp} ...${props} />`, el); }
