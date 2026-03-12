import About from "@/components/home/about";
import Banner from "@/components/Banner";
import AbtC from "@/components/about/abtC";
import Service from "../service/page";
import Certify from "@/components/home/certify";
import TestimonialSection from "@/components/home/testimonials";
import Contact from "@/components/home/contact";

export default function AboutPage() {
    return (
        <div>
            <Banner />
            <About />
            <AbtC />
            <Service hideBanner={true} />
            <Certify id="#certification" />
            <TestimonialSection />
            <Contact />
        </div>
    );
}
