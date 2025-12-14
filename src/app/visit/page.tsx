import Link from "next/link";

export default function VisitPage() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Visit the Shop
          </h1>
        </div>
      </section>

      {/* Info */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-10 text-white/80 text-lg">
          {/* Address */}
          <div>
            <h2 className="text-xl font-bold uppercase text-white">
              Location
            </h2>
            <p className="mt-2">
              DirtyRamen Skate Shop<br />
              222 N Main St, Butler, Pennsylvania, 16001
            </p>
          </div>

          {/* Hours */}
          <div>
            <h2 className="text-xl font-bold uppercase text-white">
              Shop Hours
            </h2>
            <ul className="mt-2 space-y-1">
              <li>Monday - Tuesday: 12-6</li>
              <li>Wednesday - Closed</li>
              <li>Saturday: 12-8</li>
              <li>Sunday: Closed</li>
            </ul>
            <p className="mt-2 text-sm text-white/60">
              Hours may change around events, trips, or shop projects.
              Follow us for updates.
            </p>
          </div>

          {/* What to Expect */}
          <div>
            <h2 className="text-xl font-bold uppercase text-white">
              What to Expect
            </h2>
            <p className="mt-2">
              Boards, hardgoods, apparel, and a space that actually feels like
              a skate shop. If you’re new, we’ll help you figure it out. If
              you’ve been skating forever, you already know the deal.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Link
              href="https://www.instagram.com/dirtyramenskateshop"
              target="_blank"
              className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition"
            >
              Follow on Instagram
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
