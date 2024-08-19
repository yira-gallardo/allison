import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "ALLISON",
  description: "ALLISON the best band in the world",
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
