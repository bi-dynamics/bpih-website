import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  // metadataBase: new URL("https://miningexponamibia.com"),
  title: {
    template: "%s | BPIH",
    default: "Benzel & Partners Investment Holdings",
  },
  description:
    "Benzel & Partners: Leading IT and business solutions provider in Windhoek. We offer a wide range of services, from strategic consulting to technical implementation. Call us to discuss your needs.",
  openGraph: {
    type: "website",
    // url: "https://miningexponamibia.com/",
    // title: "Business and IT World | BPIH",
    // description:
    //   "Benzel & Partners: Leading IT and business solutions provider in Windhoek. We offer a wide range of services, from strategic consulting to technical implementation. Call us to discuss your needs.",
    siteName: "Benzel & Partners Investment Holdings",
  },
  twitter: {
    card: "summary",
    title: "Benzel & Partners Investment Holdings",
    images:
      "https://firebasestorage.googleapis.com/v0/b/mining-expo-bc804.appspot.com/o/img%2Fwebsite_media%2FExpo-logo1.jpg?alt=media&token=14132796-0eb1-49a8-8d06-3bc81720d78c",
    description:
      "Benzel & Partners: Leading IT and business solutions provider in Windhoek. We offer a wide range of services, from strategic consulting to technical implementation. Call us to discuss your needs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
