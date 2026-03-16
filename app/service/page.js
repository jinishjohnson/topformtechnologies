import Banner from "@/components/Banner";
import Title from "@/components/Title";
import ServiceGrid from "@/components/ServiceGrid";
import data from "../../data.json";
import Counter from "@/components/ui/counter";
import Contact from "@/components/home/contact";

export const metadata = {
    title: "Service | Topform Technologies",
    description: "Topform Technologies is a leading IT company based in UAE, providing comprehensive IT solutions including CCTV, Access Control, PABX, Software Development, and more.",
};

export default function Service({ hideBanner }) {
    const cardData = data.cardData;
    return (
        <div className="">
            {!hideBanner && <Banner />}
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 py-20">
                <Title className="" titleText="Top" titleHighlight="Services" />
                <ServiceGrid cards={cardData.card} />
                <div className="w-[90%] max-w-7xl mx-auto my-18 ">
                    <Title className="" titleText="Why Choose" titleHighlight="Topform" />
                    <div className="relative rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-900/20 overflow-hidden px-8 py-12 md:py-16">
                        {/* Decorative background blurs */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none"></div>

                        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:divide-x divide-blue-400/30">

                            <div className="flex flex-col items-center justify-center text-center px-4">
                                <Counter endValue={500} suffix="+" className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm" />
                                <p className="text-blue-100 font-semibold tracking-wider uppercase text-xs md:text-sm">Projects Completed</p>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center px-4">
                                <Counter endValue={250} suffix="+" className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm" />
                                <p className="text-blue-100 font-semibold tracking-wider uppercase text-xs md:text-sm">Happy Clients</p>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center px-4">
                                <Counter endValue={15} suffix="+" className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm" />
                                <p className="text-blue-100 font-semibold tracking-wider uppercase text-xs md:text-sm">Years of Experience</p>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center px-4">
                                <Counter endValue={50} suffix="+" className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 drop-shadow-sm" />
                                <p className="text-blue-100 font-semibold tracking-wider uppercase text-xs md:text-sm">Expert Staff</p>
                            </div>

                        </div>
                    </div>
                </div>
                {!hideBanner && <Contact />}
            </div>
        </div>
    );
}

