export default function Hero() {
  return (
    <section className="min-h-[50vh] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* Primary identity */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
          DirtyRamen Skate Shop
        </h1>

        {/* Location */}
        <p className="mt-3 text-white/80 text-lg">
          Butler, Pennsylvania
        </p>

        {/* Ethos */}
        <p className="mt-2 text-white/50 text-sm">
          Local first. Real skateboarding.
        </p>

        {/* Red accent divider */}
        <div className="mt-6 mx-auto w-12 h-[2px] bg-[var(--ramen-red)] opacity-80" />

        {/* Brand credibility */}
        <p className="mt-6 text-white/50 text-sm leading-relaxed">
          Stocking core brands from{" "}
          <span className="text-white/70">DLX</span>,{" "}
          <span className="text-white/70">NHS</span>, and{" "}
          <span className="text-white/70">Baker</span> —
          alongside local projects and small runs.
        </p>
      </div>
    </section>
  );
}
