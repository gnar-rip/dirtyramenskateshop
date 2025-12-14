export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Header Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
            About DirtyRamen
          </h1>
        </div>
      </section>

      {/* Body Copy */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto space-y-8 text-white/80 leading-relaxed text-lg">
          <p>
            DirtyRamen Skate Shop is an independent skate shop based in Butler,
            Pennsylvania. We exist to support skateboarding at the local level —
            the kind that happens in parking lots, crusty spots, DIY parks, and
            places that don’t show up on travel guides.
          </p>

          <p>
            We’re not here to chase trends, push hype for the sake of it, or turn
            skateboarding into something it’s not. We stock products we believe
            in, work with brands that actually support skateboarding, and do our
            best to keep money, effort, and energy circulating back into the
            community that keeps this thing alive.
          </p>

          <p>
            When it comes to merch and apparel, our goal is to work with local
            artists and local printers whenever possible. Keeping things
            Pennsylvania-based isn’t a marketing angle — it’s a deliberate
            choice.
          </p>

          <p>
            DirtyRamen is for skaters. Beginners, lifers, kids figuring it out,
            older heads still pushing, and anyone who understands that
            skateboarding is bigger than what you see on a screen.
          </p>

          <p className="font-semibold text-white">
            This shop exists because skateboarding still matters.
          </p>
        </div>
      </section>
    </main>
  );
}
