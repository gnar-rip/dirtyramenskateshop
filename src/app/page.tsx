import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <Hero />

      <div className="mt-8 mx-auto w-12 h-[2px] bg-[var(--ramen-red)] opacity-80" />

      {/* Statement */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl leading-relaxed text-white/80">
            DirtyRamen exists to support skateboarding at the local level.
            We stock what we believe in, work with real people, and keep
            everything rooted in our community.
          </p>
        </div>
      </section>

      <div className="mt-8 mx-auto w-12 h-[2px] bg-[var(--ramen-red)] opacity-80" />

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold uppercase">
            Online Shop Coming Soon
          </h2>
          <p className="mt-4 text-white/70">
            Boards, apparel, and limited drops.  
            Local artists. Local printers.
          </p>

          <button className="mt-8 px-6 py-3 border border-[var(--ramen-red)] text-white hover:bg-[var(--ramen-red)] hover:text-black transition">
            Get Drop Alerts
          </button>
        </div>
      </section>
    </main>
  );
}


