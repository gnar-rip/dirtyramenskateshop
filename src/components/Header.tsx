import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-2 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight uppercase"
        >
          DirtyRamen
        </Link>

        {/* Nav */}
        <nav className="flex gap-6 text-sm text-white/70">
          <Link
            href="/shop"
            className="relative hover:text-white transition
                       after:absolute after:-bottom-1 after:left-0
                       after:h-[1px] after:w-0 after:bg-[var(--ramen-red)]
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="relative hover:text-white transition
                       after:absolute after:-bottom-1 after:left-0
                       after:h-[1px] after:w-0 after:bg-[var(--ramen-red)]
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            About
          </Link>

          <Link
            href="/visit"
            className="relative hover:text-white transition
                       after:absolute after:-bottom-1 after:left-0
                       after:h-[1px] after:w-0 after:bg-[var(--ramen-red)]
                       after:transition-all after:duration-300
                       hover:after:w-full"
          >
            Visit
          </Link>
        </nav>
      </div>
    </header>
  );
}


