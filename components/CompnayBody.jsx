"use client";
import React, { useState } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FcDataProtection } from "react-icons/fc";
import { AiOutlineAim } from "react-icons/ai";
import { RiBubbleChartLine } from "react-icons/ri";
import { AiOutlineEye } from "react-icons/ai";
import { LuCircleDotDashed } from "react-icons/lu";
import { FaArrowUpRightDots } from "react-icons/fa6";



const coreValues = [
    {
        icon: <FcDataProtection />,
        title: "We build with client requirement",
        description: "We operate with transparency, honesty, and ethical conduct in all our interactions."
    },
    {
        icon: <AiOutlineAim />,
        title: "We value clarity over complexity",
        description: "We constantly explore new ideas and technologies to deliver cutting-edge solutions."
    },
    {
        icon: <RiBubbleChartLine />,
        title: "We collaborate across disciplines",
        description: "We strive for the highest quality in our work and continuously improve our processes."
    },
    {
        icon: <AiOutlineEye />,
        title: "We earn trust through transparency",
        description: "We believe in the power of collaboration and support each other's growth."
    },
    {
        icon: <LuCircleDotDashed />,
        title: "We keep improving continuously",
        description: "We are committed to the professional and personal development of our team members."
    },
    {
        icon: <FaArrowUpRightDots />,
        title: "We make your business grow",
        description: "We aim to create meaningful solutions that make a positive difference in our clients' businesses."
    }
];

// Mobile card stack sub-component using Framer Motion
const MobileCardStack = ({ items }) => {
    const [cards, setCards] = useState(items);

    const handleDragEnd = (e, info) => {
        // If swiped left or right by more than 50px
        if (Math.abs(info.offset.x) > 50) {
            setCards((prev) => {
                const newCards = [...prev];
                const topCard = newCards.shift();
                newCards.push(topCard);
                return newCards;
            });
        }
    };

    return (
        <div className="relative h-[380px] sm:h-[420px] w-full flex justify-center mt-12 md:hidden">
            <AnimatePresence>
                {cards.map((value, index) => {
                    const isTop = index === 0;
                    return (
                        <motion.div
                            key={value.title} // Keys must be unique for correct layout animations
                            layout
                            initial={false}
                            className="absolute w-[95%] bg-white p-8 rounded-3xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] border border-blue-50 cursor-grab active:cursor-grabbing"
                            style={{
                                transformOrigin: "top center",
                            }}
                            animate={{
                                top: index * 20, // Stacking offset downwards
                                scale: 1 - index * 0.05, // Scaling down behind
                                zIndex: cards.length - index,
                                opacity: index >= 3 ? 0 : 1 - index * 0.1, // Only show top 3 to prevent clutter
                            }}
                            drag={isTop ? "x" : false} // Only top card is draggable
                            dragConstraints={{ left: 0, right: 0 }} // Elastic drag effect, returns to 0
                            dragElastic={0.8}
                            onDragEnd={isTop ? handleDragEnd : undefined}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            whileTap={{ scale: isTop ? 0.98 : 1 - index * 0.05 }} // Press feedback
                        >
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-5">
                                <span className="text-3xl">{value.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{value.description}</p>
                        </motion.div>
                    );
                })}
            </AnimatePresence>

            {/* Instruction text floating below the stack */}
            <p className="absolute -bottom-8 text-xs text-blue-400 font-bold tracking-widest uppercase animate-pulse">
                ← Swipe to explore →
            </p>
        </div>
    );
};


const CompnayBody = () => {
    const container = useRef();
    const headingRef = useRef();
    const textRef = useRef();

    useGSAP(() => {
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
            }, "-=0.5")

    }, { scope: container });

    return (
        <div className="w-full min-h-screen bg-gray-100 mx-auto pb-20">
            <div ref={container} className="max-w-7xl pt-16 max-sm:px-6 lg:px-8 mx-auto">
                <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-thin text-blue-500 capitalize max-w-2xl leading-tight">
                    Our Core Values
                </h1>
                <p ref={textRef} className="text-gray-600 max-w-2xl mt-6 text-lg">
                    At Topform Technologies, our core values are the bedrock of our success and the compass that guides every decision we make. They define who we are, how we work, and what we stand for.
                </p>

                {/* Mobile Swipe Container (Hidden on Medium and up screens) */}
                <MobileCardStack items={coreValues} />

                {/* Desktop Grid Layout (Hidden on Mobile) */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {coreValues.map((value, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 hover:border-blue-100">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-3xl">{value.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default CompnayBody