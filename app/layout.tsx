import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "ALLISON",
  description:
    "Una de las bandas más importantes de power pop metal de latinoamérica con más de trece años de trayectoria, continúan conquistando escenarios, cautivando a sus fans e influenciando nuevas generaciones.",
  openGraph: {
    images: [
      {
        url: "/img/banner.jpg",
        width: 800,
        height: 600,
        alt: "ALLISON Band Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={anton.className}>{children}</body>
    </html>
  );
}
