
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Topform Technologies | Leading IT & Security Solutions in Dubai, UAE",
  description: "Dubai's premier provider of CCTV, IT infrastructure, and custom software. Specializing in SIRA/ADMCC certified security systems and Topsoft ERP solutions.",
  keywords: "CCTV installation Dubai, IT services UAE, SIRA certified CCTV, ERP software Dubai, CRM systems, Software development UAE, Topform Technologies",
  openGraph: {
    title: "Topform Technologies | Leading IT & Security Solutions in Dubai, UAE",
    description: "Dubai's premier provider of CCTV, IT infrastructure, and custom software.",
    url: "https://topformtechnologies.com",
    siteName: "Topform Technologies",
    images: [
      {
        url: "/logo.svg", 
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Topform Technologies | IT & Security Solutions",
    description: "Dubai's premier provider of CCTV, IT infrastructure, and custom software.",
    images: ["/logo.svg"],
  },
};

import { LanguageProvider } from "../components/LanguageContext";

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${poppins.variable} ${montserrat.variable} antialiased flex flex-col min-h-screen`}
        >
          <Navbar />
          <main className="grow pt-20 min-h-[calc(100vh-80px)]">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </body>
      </html>
    </LanguageProvider>
  );
}
