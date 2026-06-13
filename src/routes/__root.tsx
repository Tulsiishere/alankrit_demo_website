import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { WhatsAppFloat } from "../components/site/WhatsAppFloat";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-[56px] font-extrabold" style={{ color: "var(--navy)" }}>Page not found</h1>
        <p className="mt-3 text-[16px]" style={{ color: "var(--mid)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary mt-6 inline-flex">Back to home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-[28px] font-bold" style={{ color: "var(--navy)" }}>This page didn't load</h1>
        <p className="mt-2 text-[15px]" style={{ color: "var(--mid)" }}>
          Something went wrong on our end. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn btn-primary"
          >Try again</button>
          <a href="/" className="btn btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Neelu Jain Physiotherapy — Kandivali, Mumbai | 36 Years of Trusted Care" },
      { name: "description", content: "Senior physiotherapist in Kandivali, Mumbai with 36 years of experience. Trusted care for back pain, sciatica, sports injuries, and rehabilitation. Home visits available." },
      { name: "author", content: "Dr. Neelu Jain Physiotherapy Clinic" },
      { property: "og:site_name", content: "Dr. Neelu Jain Physiotherapy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#163A5F" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          name: "Dr. Neelu Jain Physiotherapy Clinic",
          description: "Senior physiotherapist with 36 years of experience treating back pain, sciatica, sports injuries, and rehabilitation in Kandivali, Mumbai.",
          medicalSpecialty: "Physiotherapy",
          telephone: "+91 9869147774",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ekta Nagar, 27/273 Sanskruti, Society,New Link Rd, opp. B P PETROLPUMP",
            addressLocality: "Mahavir Nagar, Kandivali West",
            addressRegion: "Maharashtra",
            postalCode: "400067",
            addressCountry: "IN",
          },
          openingHours: ["Mo-Sa 09:00-20:00"],
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}
