import Contact from "@/components/home/contact";
import CompanyHero from "@/components/CompanyHero";
import CompnayBody from "@/components/CompnayBody";


import { Metadata } from "next";

export const metadata = {
    title: "Company | Topform Technologies",
    description: "Topform Technologies is a leading IT company based in UAE, providing comprehensive IT solutions including CCTV, Access Control, PABX, Software Development, and more.",
};

export default function Company() {
    return (
        <section className=" mx-auto">
            <CompanyHero />
            <CompnayBody />
            <Contact />
        </section>
    );
}
