"use client";
import { useState } from "react";
import { site } from "@/content/site";

const input = "w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30";
const label = "eyebrow mb-2 block text-ink-500";

export function PilotForm() {
  const [v, setV] = useState({ name: "", org: "", email: "", message: "" });
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setV((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pilot request, ${v.org || v.name}`);
    const body = encodeURIComponent(`Name: ${v.name}\nOrganization: ${v.org}\nEmail: ${v.email}\n\n${v.message}`);
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submit} className="rounded-2xl border border-line bg-card p-8 card-shadow sm:p-10">
      <p className="eyebrow text-brand-600">Request a pilot</p>
      <h2 className="mt-3 font-display text-2xl font-black tracking-tight text-ink-900">Deploy Trakbin on a real zone.</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Name</label>
          <input id="name" required className={input} value={v.name} onChange={set("name")} placeholder="Your name" />
        </div>
        <div>
          <label className={label} htmlFor="org">Organization</label>
          <input id="org" required className={input} value={v.org} onChange={set("org")} placeholder="Operator / property / agency" />
        </div>
      </div>
      <div className="mt-5">
        <label className={label} htmlFor="email">Email</label>
        <input id="email" type="email" required className={input} value={v.email} onChange={set("email")} placeholder="you@organization.com" />
      </div>
      <div className="mt-5">
        <label className={label} htmlFor="message">What do you operate or manage?</label>
        <textarea id="message" rows={5} required className={input} value={v.message} onChange={set("message")} placeholder="Fleet size, buildings, zones, current process..." />
      </div>
      <button type="submit"
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-4 font-mono text-xs font-semibold uppercase tracking-[.2em] text-forest-950 transition hover:bg-brand-400 sm:w-auto">
        Request a Pilot
      </button>
    </form>
  );
}