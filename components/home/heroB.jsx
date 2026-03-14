"use client";

import Image from "next/image";
import Link from "next/link";
import data from '../../data.json';
import { motion } from "framer-motion";

export default function Hero() {
    const hero = data.hero;

    return (
        <section className="w-full  bg-gradient-to-br from-[#3f8cff] via-[#1f5fbf] to-[#0a2f6b] relative overflow-hidden">
            {/* Background SVG Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 MixBlendMode-overlay">
                <Image
                    src="/assets/circuit-board.svg"
                    alt="circuit background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2  h-[450px] max-sm:h-[650px] items-center min-h-[550px]">

                {/* LEFT CONTENT */}
                <div className="px-6 max-md:px-12 max-sm:text-center  py-12 z-10">
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        <span className="text-white">{hero.title}</span>
                        <br />
                        <span className="text-white">{hero.highlight}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="mt-6 text-white max-w-lg"
                    >
                        {hero.description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="flex gap-4 mt-8"
                    >
                        {hero.buttons.map((btn, i) => (
                            <Link
                                key={i}
                                href={btn.link}
                                className={
                                    btn.variant === "primary"
                                        ? "bg-white text-blue-600 px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105"
                                        : "border border-white text-white px-6 py-3 rounded-full text-sm font-semibold transition-transform hover:scale-105"
                                }
                            >
                                {btn.label}
                            </Link>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 1 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    className="relative w-full h-[400px] scale-150 translate-x-50 max-sm:h-[400px] max-sm:scale-100 max-sm:translate-x-0 max-sm:-translate-y-10 max-md:h-[400px]"
                >
                    {/* angled background */}
                    <div className="absolute inset-0 bg-transparent clip-path-hero "></div>

                    <Image
                        src={hero.image}
                        alt="hero"
                        fill
                        priority
                        className="object-contain w-full h-full"
                    />
                </motion.div>
            </div>
        </section>
    );
}