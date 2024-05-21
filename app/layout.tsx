import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Friendly Advisor",
  description: "Make Advising Easyb for the Students of North South University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Roboto.className + " bg-stone-700"}>{children}</body>
    </html>
  );
}
