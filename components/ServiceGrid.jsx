"use client";
import React, { useRef } from "react";
import Card from "@/components/Card";
import { iconMap } from "@/components/iconMap";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceGrid({ cards }) {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Staggered fade in and slide up for the cards
        gsap.fromTo(
            ".service-card",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%", // Starts animation when the grid enters the bottom 85% of the viewport
                    toggleActions: "play none none reverse", // Plays on enter, reverses if scrolled back up
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-7xl mx-auto mt-16">
            {cards.map((item) => (
                <div key={item.id} className="service-card opacity-0 h-full">
                    <Card
                        icon={iconMap[item.icon]}
                        title={item.title}
                        desc={item.desc}
                        slug={item.slug}
                    />
                </div>
            ))}
        </div>
    );
}
