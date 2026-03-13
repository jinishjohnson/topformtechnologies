"use client";
import Image from "next/image";
import abt from "@/public/assets/119699.jpg";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import CounterPanel from '@/components/ui/counterpanel';

export default function CompanyHero() {
    const container = useRef();
    const headingRef = useRef();
    const textRef = useRef();
    const imageContainerRef = useRef();
    const imageRef = useRef();

    useGSAP(() => {
        // Create a timeline for a coordinated, staggered animation sequence
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(headingRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8
        })
            .from(textRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8
            }, "-=0.5") // Overlap by 0.5s with the previous animation
            .from(imageContainerRef.current, {
                opacity: 0,
                scale: 0.95,
                y: 40,
                duration: 1
            }, "-=0.4")
            .from(imageRef.current, {
                scale: 1.1, // Slight zoom-out effect on the image itself
                duration: 1.5,
                ease: "power2.out"
            }, "<"); // Start at the same time as the image container animation

    }, { scope: container });

    return (
        <div ref={container} className="max-w-7xl mx-auto mt-20 max-sm:px-4 max-sm:mt-8 mb-20">
            <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-thin text-blue-500 capitalize max-w-2xl leading-tight">
                Build Technology that supports real businesses
            </h1>
            <p ref={textRef} className="text-gray-600 max-w-2xl mt-6 text-lg">
                Explore open roles and teams at Topform Technologies where we built automation, ERP, CRM, POS, Inventory Management, HRM, Tailoring Management, UAE-VAT Integrated and many more.
            </p>
            <div ref={imageContainerRef} className="max-w-7xl h-[300px] md:h-[400px] lg:h-[500px] mx-auto mt-12 -mb-20 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                    ref={imageRef}
                    src={abt}
                    alt="About Topform"
                    width={1500}
                    height={1500}
                    priority
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <CounterPanel title1="Projects Completed" title2="Happy Clients" title3="Years of Experience" title4="Expert Staff" value1={500} value2={250} value3={15} value4={50} />




        </div>
    );
}
