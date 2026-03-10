import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Card from "@/components/Card";
import data from "../../data.json";
import { iconMap } from "@/components/iconMap";

export default function Service() {
    const cardData = data.cardData;
    return (
        <div className="">
            <Banner />
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 py-20">
                <Title className="" titleText="Top" titleHighlight="Services" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-7xl mx-auto mt-16">
                    {cardData.card.map((item) => (
                        <Card key={item.id} icon={iconMap[item.icon]} title={item.title} desc={item.desc} />
                    ))}
                </div>
            </div>
        </div>
    );
}
