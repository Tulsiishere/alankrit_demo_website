import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CONDITIONS } from "@/components/site/data";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/conditions")({
  head: () => ({
    meta: [
      { title: "Conditions Treated — Dr. [Name] Physiotherapy, Kandivali" },
      { name: "description", content: "Comprehensive treatment for back pain, sciatica, frozen shoulder, post-surgery rehab, sports injuries, neurological conditions and more." },
      { property: "og:title", content: "Conditions We Treat — Physiotherapy Kandivali Mumbai" },
      { property: "og:description", content: "Detailed treatment approach for the most common musculoskeletal and neurological conditions." },
      { property: "og:url", content: "/conditions" },
    ],
    links: [{ rel: "canonical", href: "/conditions" }],
  }),
  component: Conditions,
});

function Conditions() {
  return (
    <>
      <PageHero
        eyebrow="Conditions"
        title="What we treat — in detail"
        subtitle="Tap any condition below to jump to its treatment overview. Every plan is personalised after a full assessment."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {CONDITIONS.map((c) => (
            <a key={c.slug} href={`#${c.slug}`}
              className="rounded-full px-4 py-2 text-[13px] font-medium border transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "#fff" }}>
              {c.title}
            </a>
          ))}
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page space-y-16">
          {CONDITIONS.map((c, idx) => (
            <article
              key={c.slug}
              id={c.slug}
              className="grid gap-10 lg:grid-cols-[1fr_2fr] scroll-mt-24"
            >
              <div>
                <p className="eyebrow">Condition {String(idx + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-[28px]" style={{ color: "var(--navy)" }}>{c.title}</h2>
                <Link to="/contact" className="btn btn-primary mt-6 inline-flex">
                  Book for {c.title.replace(/Treatment| Rehabilitation| Physiotherapy/g, "").trim()} <ArrowRight size={14} />
                </Link>
              </div>
              <div className="card-medical">
                <h3 className="text-[15px] uppercase tracking-[0.06em] font-semibold" style={{ color: "var(--teal)" }}>What it is</h3>
                <p className="mt-2 text-[16px]" style={{ color: "var(--charcoal)" }}>{c.what}</p>

                <h3 className="mt-7 text-[15px] uppercase tracking-[0.06em] font-semibold" style={{ color: "var(--teal)" }}>How we treat it</h3>
                <ul className="mt-3 space-y-2.5">
                  {c.how.map((step) => (
                    <li key={step} className="flex gap-3 text-[16px]" style={{ color: "var(--charcoal)" }}>
                      <Check size={20} style={{ color: "var(--medblue)" }} className="mt-0.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 rounded-lg p-4" style={{ backgroundColor: "var(--offwhite)" }}>
                  <strong className="text-[14px] uppercase tracking-[0.06em]" style={{ color: "var(--navy)" }}>Recovery: </strong>
                  <span className="text-[15px]" style={{ color: "var(--charcoal)" }}>{c.recovery}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
