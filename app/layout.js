import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/NavBar";
import Script from "next/script";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PDFile",
  description: "A web app that lets you sign, edit and annotate on pdf documents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.cloud.pspdfkit.com/pspdfkit-web@1.0.0/nutrient-viewer.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
