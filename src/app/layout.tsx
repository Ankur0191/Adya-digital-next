import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Adya Digital | Digital Marketing & IT Solutions",
  description:
    "Adya Digital is your trusted partner for innovative digital marketing and IT solutions. We help your business grow online with customized strategies, web development, SEO, and branding services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
