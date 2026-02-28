import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrintCraft Kids — Voice It. Design It. Print It.",
  description:
    "Mobile 3D printing STEM lab for kids in the San Francisco Bay Area. Kids describe their dream creation, AI designs it, and we 3D print it right before their eyes.",
  keywords: [
    "3D printing",
    "kids",
    "STEM",
    "Bay Area",
    "birthday party",
    "San Jose",
    "Sunnyvale",
    "Mountain View",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-offwhite text-navy antialiased">{children}</body>
    </html>
  );
}
