import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Shop
          </h1>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-10 text-white/80 text-lg">
          <p>
            Our online shop is coming soon. When it goes live, it won’t be
            packed with endless SKUs or mass-produced junk. We’re focusing on
            boards, apparel, and small-run items we actually stand behind.
          </p>

          <p>
            A big part of what we’re building is working with local artists and
            local printers whenever possible. Keeping production close to home
            matters to us, and we want the people making the art and the gear to
            be part of the same community that skates it.
          </p>

          <p>
            In the meantime, everything we carry is available in the shop. If
            you’re looking for something specific, stop in or reach out — we’re
            happy to help.
          </p>

          {/* CTA */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/visit"
              className="inline-block px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition text-center"
            >
              Visit the Shop
            </Link>

            <Link
              href="https://www.instagram.com/dirtyramenskateshop"
              target="_blank"
              className="inline-block px-6 py-3 border border-white/50 text-white/80 hover:border-white hover:text-white transition text-center"
            >
              Follow for Drops
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
