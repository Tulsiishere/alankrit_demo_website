import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { FAQS } from "@/components/site/data";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Dr. [Name] Physiotherapy, Kandivali Mumbai" },
      { name: "description", content: "Common questions about physiotherapy sessions, home visits, costs, referrals, insurance, and what to expect at your first visit." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Answers to common physiotherapy questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      }),
    }],
  }),
  component: FAQ,
});

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions, answered"
        subtitle="If yours isn't here, call or WhatsApp us — we're happy to help."
      />
      <section className="section">
        <div className="container-page max-w-3xl">
          <ul className="divide-y rounded-xl bg-white border" style={{ borderColor: "var(--divider)" }}>
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-[17px]" style={{ color: "var(--navy)" }}>
                      {f.q}
                    </span>
                    <span className="grid h-8 w-8 place-items-center rounded-full shrink-0" style={{ backgroundColor: isOpen ? "var(--medblue)" : "var(--offwhite)", color: isOpen ? "#fff" : "var(--navy)" }}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-[16px]" style={{ color: "var(--charcoal)" }}>
                      {f.a}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
