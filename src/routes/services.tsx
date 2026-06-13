import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { SERVICES } from "@/components/site/data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Physiotherapy Services — Dr. [Name], Kandivali Mumbai" },
      { name: "description", content: "Full range of physiotherapy services in Kandivali, Mumbai — back pain, sciatica, sports injuries, post-surgery rehab, neurological care, and more." },
      { property: "og:title", content: "Physiotherapy Services in Kandivali, Mumbai" },
      { property: "og:description", content: "Evidence-based physiotherapy for musculoskeletal and neurological conditions." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Care for every stage of recovery"
        subtitle="From the first acute episode to long-term rehabilitation — physiotherapy designed around you, not a checklist. Each condition links to a detailed treatment overview."
      />
      <section className="section">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/conditions" hash={s.slug} className="card-medical block group">
                <h3 className="text-[22px]" style={{ color: "var(--navy)" }}>{s.title}</h3>
                <p className="mt-3 text-[15px]" style={{ color: "var(--mid)" }}>{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 font-semibold" style={{ color: "var(--medblue)" }}>
                  Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
