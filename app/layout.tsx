import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Care Fitness Studio",
  description: "Care Fitness Studio is dedicated to helping you achieve your fitness goals. Offering state-of-the-art equipment, personalized training, and a supportive community, we are here to support your fitness journey.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-200">
      <body
        className={`${oswald.variable} ${roboto.variable} w-full max-w-[1920px] mx-auto bg-white`}
      >
        <Header />
        {children}
        <WhatsAppButton/>
        <Footer />
      </body>
    </html>
  );
}
