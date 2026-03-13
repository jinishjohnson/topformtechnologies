
import Banner from "@/components/Banner";
import Contact from "@/components/home/contact";
import Location from "@/components/home/map";
import { Metadata } from "next";

export const metadata = {
    title: "Contact Us | Topform Technologies",
    description: "Topform Technologies is a leading IT company based in UAE, providing comprehensive IT solutions including CCTV, Access Control, PABX, Software Development, and more.",
};

export default function ContactPage() {
    return (
        <div>
            <Banner />
            <Contact />
            <Location />
        </div>
    );
}
