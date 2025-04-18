import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Commerce Store | Appscrip Task",
  description: "Product listing page built with Next.js SSR",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
