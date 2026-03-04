import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  title: "Topform Technologies | CCTV & IT Service provider in UAE",
  description: "CCTV service provider, IT service provider, Dubai, UAE, Topsoft ERP software, Cheque printing software, HRM software, Accounting software, Quotation making software, CRM software, SIRA certification, ADMCC certification, CCTV installation Abu Dhabi, Sharjah Police certification, one-stop solution, IT services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-20 min-h-[calc(100vh-80px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
