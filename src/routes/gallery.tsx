import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import clinic from "@/assets/clinic-interior.jpg";
import treatment from "@/assets/treatment.jpg";
import homeVisit from "@/assets/home-visit.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dr. [Name] Physiotherapy Clinic, Kandivali" },
      { name: "description", content: "Tour our physiotherapy clinic in Kandivali — treatment rooms, equipment, and care in action." },
      { property: "og:title", content: "Clinic Gallery — Dr. [Name] Physiotherapy" },
      { property: "og:description", content: "Photos of our Kandivali physiotherapy clinic." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const PHOTOS = [
  { src: clinic, alt: "Treatment room interior with adjustable medical table", category: "Treatment Rooms", w: 1600, h: 1067 },
  { src: treatment, alt: "Hands-on physiotherapy treatment session", category: "Care in Action", w: 1280, h: 960 },
  { src: homeVisit, alt: "Home visit physiotherapy session", category: "Home Visits", w: 1280, h: 854 },
  { src: clinic, alt: "Clinic interior — natural light, calm setting", category: "Clinic Interior", w: 1600, h: 1067 },
  { src: treatment, alt: "Manual therapy in progress", category: "Care in Action", w: 1280, h: 960 },
  { src: homeVisit, alt: "Elderly patient receiving care at home", category: "Home Visits", w: 1280, h: 854 },
];

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the clinic"
        subtitle="A look at where care happens — calm, professional, equipped for modern physiotherapy."
      />
      <section className="section">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p, i) => (
            <figure key={i} className="overflow-hidden rounded-xl" style={{ boxShadow: "var(--shadow-card)" }}>
              <img
                src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy"
                className="block w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className="px-4 py-3 text-[13px] uppercase tracking-[0.06em] font-semibold bg-white" style={{ color: "var(--teal)" }}>
                {p.category}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
