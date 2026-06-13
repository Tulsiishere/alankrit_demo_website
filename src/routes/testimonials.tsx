import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { TESTIMONIALS } from "@/components/site/data";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Patient Testimonials — Dr. [Name] Physiotherapy, Kandivali" },
      { name: "description", content: "Read what patients say about Dr. [Name] — back pain, sciatica, post-surgery rehab, frozen shoulder, sports injuries. 4.9 / 5 rating." },
      { property: "og:title", content: "Patient Testimonials — 4.9 / 5 Star Reviews" },
      { property: "og:description", content: "Real recovery stories from patients across Mumbai." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Patient Stories"
        title={<>Recovery, in their own words</>}
        subtitle="Real patients. Real conditions. Real outcomes — across three decades of practice."
      >
        <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5 backdrop-blur">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="var(--teal)" stroke="var(--teal)" />
            ))}
          </div>
          <span className="text-white font-semibold">4.9 / 5</span>
          <span className="text-white/70 text-[14px]">from 200+ reviews</span>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-page columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="card-medical mb-6 break-inside-avoid">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="var(--teal)" stroke="var(--teal)" />
                ))}
              </div>
              <blockquote className="mt-4 italic text-[16px] leading-relaxed" style={{ color: "var(--charcoal)" }}>
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t" style={{ borderColor: "var(--divider)" }}>
                <div className="font-semibold" style={{ color: "var(--navy)" }}>{t.name}</div>
                <div className="text-[13px] uppercase tracking-[0.06em] mt-0.5" style={{ color: "var(--teal)" }}>{t.condition}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
