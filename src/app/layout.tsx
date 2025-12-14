import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DirtyRamen Skate Shop",
  description: "Independent skate shop. Butler, PA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased flex flex-col min-h-screen relative">
        {/* Subtle noise texture */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")
            `,
          }}
        />

        <Header />

        <div className="flex-1 relative z-10">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
