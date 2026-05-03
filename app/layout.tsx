import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import ItemDrawer from "@/components/ItemDrawer";
import CartDrawer from "@/components/CartDrawer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EMBER | Fire-Roasted Street Food",
  description: "Daily menu. Fresh fire. No shortcuts. Bold flavors, rotating specials, no pretense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F0E8]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toast />
        <ItemDrawer />
        <CartDrawer />
      </body>
    </html>
  );
}
