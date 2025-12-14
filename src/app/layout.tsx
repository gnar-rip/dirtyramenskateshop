import "./globals.css";
import Header from "@/components/Header";

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
      <body className="bg-black text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}

