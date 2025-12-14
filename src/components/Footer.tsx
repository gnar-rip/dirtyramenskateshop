import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 px-6 py-6 text-sm text-white/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p>
          © {new Date().getFullYear()} DirtyRamen Skate Shop
        </p>

        {/* Right */}
        <div className="flex gap-6">
          <Link
            href="/about"
            className="hover:text-[var(--ramen-red)] transition"
          >
            About
          </Link>
          <Link
            href="/visit"
            className="hover:text-[var(--ramen-red)] transition"
          >
            Visit
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className="hover:text-[var(--ramen-red)] transition"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
