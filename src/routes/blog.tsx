import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BLOG } from "@/components/site/data";
import { ArrowRight, Search } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Physiotherapy Blog — Dr. [Name], Kandivali Mumbai" },
      { name: "description", content: "Evidence-based articles on back pain, posture, sciatica, sports recovery, and rehabilitation from a senior physiotherapist." },
      { property: "og:title", content: "Physiotherapy Blog — Dr. [Name]" },
      { property: "og:description", content: "Articles to help you understand pain, recovery, and movement." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const CATEGORIES = ["All", "Back Pain", "Posture", "Sciatica", "Joint Pain", "Rehabilitation", "General Wellness"];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Articles on movement & recovery"
        subtitle="Plain-language explanations of what's actually going on with your body — and what to do about it."
      />
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-[2.5fr_1fr]">
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {CATEGORIES.map((c, i) => (
                <button
                  key={c}
                  className={`rounded-full px-4 py-1.5 text-[13px] font-medium border transition-colors ${i === 0 ? "" : "hover:bg-white"}`}
                  style={i === 0
                    ? { backgroundColor: "var(--navy)", color: "#fff", borderColor: "var(--navy)" }
                    : { backgroundColor: "transparent", color: "var(--charcoal)", borderColor: "var(--divider)" }}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {BLOG.map((post) => (
                <article key={post.slug} className="card-medical flex flex-col">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--teal)" }}>
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-[19px] leading-snug" style={{ color: "var(--navy)" }}>{post.title}</h2>
                  <p className="mt-3 text-[15px] flex-1" style={{ color: "var(--mid)" }}>{post.excerpt}</p>
                  <Link to="/blog" className="mt-5 inline-flex items-center gap-1 text-[14px] font-semibold" style={{ color: "var(--medblue)" }}>
                    Read article <ArrowRight size={14} />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-8 hidden lg:block">
            <div className="rounded-xl p-6" style={{ backgroundColor: "#fff", border: "1px solid var(--divider)" }}>
              <h3 className="text-[16px]" style={{ color: "var(--navy)" }}>Search articles</h3>
              <div className="mt-4 relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--mid)" }} />
                <input className="input-field pl-10" placeholder="Search…" />
              </div>
            </div>
            <div className="rounded-xl p-6" style={{ backgroundColor: "#fff", border: "1px solid var(--divider)" }}>
              <h3 className="text-[16px]" style={{ color: "var(--navy)" }}>Popular articles</h3>
              <ul className="mt-4 space-y-3">
                {BLOG.slice(0, 4).map((p) => (
                  <li key={p.slug}>
                    <Link to="/blog" className="text-[14px] leading-snug hover:underline" style={{ color: "var(--charcoal)" }}>
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-6 text-white" style={{ backgroundColor: "var(--navy)" }}>
              <h3 className="text-[18px] text-white">Need help with pain?</h3>
              <p className="mt-2 text-[14px]" style={{ color: "#B8C5D6" }}>Book a consultation — we'll plan your recovery together.</p>
              <Link to="/contact" className="btn btn-primary mt-5 w-full">Book Appointment</Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
