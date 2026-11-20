import type { Metadata } from "next";
import ContactCTA from "@/components/sections/ContactCTA";
import {
  yerMeta as meta,
  yerHero as hero,
  yerHeroChips,
  yerPrice as price,
  yerSchedule,
  yerPain as pain,
  yerInvite,
  yerAgenda,
  yerTakeaways,
  yerAudience,
  yerSectionImages as img,
} from "@/data/year-end-reunion";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

const LINE_URL = "https://lin.ee/gGDzjTi";
const CTA_LABEL = "สมัครเข้าร่วมได้ที่ LINE @WIN_WIN";

/* ครีเอทีฟคู่ section — ภาพเต็ม (object-contain, ไม่ crop) · สลับซ้าย/ขวา
   มือถือ: ภาพอยู่บนข้อความเสมอ (ภาพเป็น DOM ตัวแรก) — pattern เดียวกับ /scale-ready */
function PairImage({
  src,
  alt,
  side,
  sticky = false,
}: {
  src: string;
  alt: string;
  side: "left" | "right";
  sticky?: boolean;
}) {
  return (
    <div
      className={`${side === "right" ? "order-1 md:order-2" : "order-1"}${
        sticky ? " md:sticky md:top-24" : ""
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={1254}
        height={1254}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-[var(--radius-card)] border border-white/10 object-contain"
      />
    </div>
  );
}

function CTALink({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`mkt-focus inline-flex items-center justify-center gap-2 rounded-pill bg-accent px-9 py-4 text-base font-bold text-on-accent transition-transform hover:-translate-y-0.5 hover:bg-accent-hover ${className}`}
    >
      {CTA_LABEL}
    </a>
  );
}

export default function YearEndReunionPage() {
  return (
    <main className="bg-bg text-fg">
      {/* ══════════ HERO ══════════ */}
      <section className="relative overflow-hidden border-b border-accent/15 bg-bg-subtle pt-8 pb-16 md:pt-10 md:pb-24">
        {/* faint grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-teal-soft) 1px, transparent 1px), linear-gradient(90deg, var(--color-teal-soft) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* cover banner (KV) */}
          <div className="relative mx-auto max-w-lg overflow-hidden rounded-card border border-accent/25 shadow-[0_28px_70px_-30px_rgba(234,179,8,0.5)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero.image}
              alt={hero.imageAlt}
              width={1080}
              height={1080}
              className="block w-full object-contain"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="mx-auto mt-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-pill border border-accent/30 bg-accent/[0.08] px-3 py-1.5 font-mono text-[11px] tracking-wider text-accent">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              {hero.badge}
            </span>

            <h1 className="mt-5 text-[clamp(1.9rem,1.2rem+3vw,3.4rem)] font-bold leading-[1.12] text-fg [text-wrap:balance]">
              {hero.headline} <span className="text-accent">{hero.headlineHighlight}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lead text-fg-2">{hero.description}</p>

            {/* meta chips */}
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {yerHeroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-pill border border-teal/30 bg-teal/[0.08] px-3 py-1.5 font-mono text-[11px] text-teal"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* price teaser */}
            <div className="mt-7 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-accent">{price.label}</span>
              <span className="text-3xl font-bold tabular-nums text-fg">{price.price}</span>
              <span className="text-base text-fg-2">{price.unit}</span>
            </div>
            <p className="mt-2 text-sm text-fg-muted">({price.note})</p>

            <div className="mt-8 flex justify-center">
              <CTALink className="shadow-glow" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PAIN — ก่อนจบปี ══════════ */}
      <section className="mx-auto w-full max-w-[var(--container-marketing)] px-4 py-section sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <h2 className="text-h2 font-bold [text-wrap:balance]">{pain.heading}</h2>
          <p className="mt-3 text-fg-2">{pain.lead}</p>
        </header>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-card border border-white/10 bg-white/[0.06] md:grid-cols-3">
          {pain.questions.map((q) => (
            <li key={q} className="flex items-start gap-4 bg-bg px-5 py-6">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-negative/50 font-mono text-xs text-negative">
                ?
              </span>
              <p className="min-w-0 flex-1 text-lg font-medium leading-snug text-fg">{q}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 max-w-2xl space-y-1 text-fg-2">
          {pain.closing.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      {/* ══════════ INVITATION ══════════ */}
      <section className="border-y border-white/10 bg-bg-subtle">
        <div className="mx-auto w-full max-w-3xl px-4 py-section text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold [text-wrap:balance]">{yerInvite}</h2>
        </div>
      </section>

      {/* ══════════ AGENDA — 6 หัวข้อ (ภาพซ้าย) ══════════ */}
      <section className="mx-auto w-full max-w-[var(--container-marketing)] px-4 py-section sm:px-6 lg:px-8">
        <header className="max-w-2xl">
          <h2 className="text-h2 font-bold [text-wrap:balance]">ในงานนี้เราจะทำอะไรบ้าง</h2>
        </header>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:items-start md:gap-10">
          <PairImage src={img.agenda.src} alt={img.agenda.alt} side="left" sticky />
          <ol className="order-2 space-y-4">
            {yerAgenda.map((a, i) => (
              <li key={a.title} className="flex gap-4 rounded-card border border-white/10 bg-surface p-5 md:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-teal/40 font-mono text-base font-bold text-teal">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-snug text-fg [text-wrap:balance]">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-2">{a.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════ TAKEAWAYS (ภาพขวา) ══════════ */}
      <section className="border-y border-white/10 bg-bg-subtle">
        <div className="mx-auto w-full max-w-[var(--container-marketing)] px-4 py-section sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
            <PairImage src={img.takeaways.src} alt={img.takeaways.alt} side="right" />
            <div className="order-2 md:order-1">
              <h2 className="text-h2 font-bold [text-wrap:balance]">กลับไปแล้วจะได้อะไร</h2>
              <ul className="mt-8 space-y-4">
                {yerTakeaways.map((t) => (
                  <li key={t} className="flex gap-3 border-t border-white/10 pt-4">
                    <span className="mt-0.5 shrink-0 text-lg font-bold text-teal md:text-xl">✓</span>
                    <p className="text-lg leading-relaxed text-fg">{t}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ AUDIENCE (ภาพซ้าย) ══════════ */}
      <section className="mx-auto w-full max-w-[var(--container-marketing)] px-4 py-section sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          <PairImage src={img.audience.src} alt={img.audience.alt} side="left" />
          <div className="order-2">
            <h2 className="text-h2 font-bold [text-wrap:balance]">เหมาะกับใคร</h2>
            <div className="mt-8 rounded-card border border-teal/25 bg-surface p-6 md:p-7">
              <ul className="space-y-4">
                {yerAudience.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 font-bold text-teal">✓</span>
                    <span className="text-lg text-fg">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ DETAILS + PRICING (ภาพขวา) ══════════ */}
      <section className="border-y border-white/10 bg-bg-subtle">
        <div className="mx-auto w-full max-w-[var(--container-marketing)] px-4 py-section sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
            <PairImage src={img.details.src} alt={img.details.alt} side="right" />
            <div className="order-2 md:order-1">
              <h2 className="text-h2 font-bold [text-wrap:balance]">รายละเอียดงานและการลงทะเบียน</h2>

              <div className="mt-8 rounded-card border border-accent/30 bg-bg p-7 text-left shadow-glow md:p-9">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">{price.label}</span>
                  <span className="text-4xl font-bold tabular-nums text-fg">{price.price}</span>
                  <span className="text-base text-fg-2">{price.unit}</span>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                  {yerSchedule.map((s) => (
                    <li key={s.label} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 text-teal">＋</span>
                      <span className="text-fg-2">
                        <span className="font-medium text-fg">{s.label}:</span> {s.value}
                      </span>
                    </li>
                  ))}
                </ul>

                <CTALink className="mt-7 flex w-full px-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CLOSE ══════════ */}
      <section className="bg-bg">
        <div className="mx-auto w-full max-w-3xl px-4 py-section text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold [text-wrap:balance]">
            {hero.headline} <span className="text-teal">{hero.headlineHighlight}</span>
          </h2>
          <p className="mt-4 text-lead text-fg-2">{yerInvite}</p>
          <CTALink className="mt-8 shadow-glow" />
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
