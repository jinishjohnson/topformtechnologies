"use client";

import Image from "next/image";
import Link from "next/link";
import data from '../../data.json';
import { motion } from "framer-motion";
import { FcTimeline } from "react-icons/fc";

export default function HeroA() {
    const hero = data.herob;

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="w-full  bg-[#393988]  relative overflow-hidden"
        >
            {/* Background SVG Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 MixBlendMode-overlay">
                <Image
                    src="/assets/diagonal-lines.svg"
                    alt="circuit background"
                    fill
                    className="object-cover opacity-20"
                />
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 h-[550px] max-sm:h-[650px] items-center min-h-[550px] relative">
                {/* corner shape */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="pointer-events-none absolute left-0 top-0 z-0 h-[100%] w-[60%] bg-white/10 [clip-path:polygon(0_0,100%_0,55%_100%,0_100%)]"
                />
                {/* LEFT IMAGE / RIGHT IMAGE reversed */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="relative w-full h-[550px] max-sm:h-[320px] max-md:h-[550px] order-2 md:order-1 flex items-center justify-center z-10"
                >
                    {/* circular blurred background behind the product image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                            className="w-[260px] h-[260px] md:w-[420px] md:h-[420px] rounded-3xl backdrop-blur-lg bg-white/20 rotate-12 shadow-xl"
                        />
                    </motion.div>

                    {/* product image + feature cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        className="relative w-[220px] h-[220px] md:w-[360px] md:h-[360px]"
                    >
                        <Image
                            src={hero.image}
                            alt="hero"
                            fill
                            priority
                            className="object-contain"
                        />

                        {/* Feature cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="hidden sm:block absolute -left-14 top-10 w-[200px] rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg px-4 py-3"
                        >
                            <div className="flex items-center gap-2">
                                <FcTimeline className="text-xl" />
                                <div className="text-sm font-semibold text-white">Real-time Tracking</div>
                            </div>
                            <div className="mt-1 text-xs text-white/80 leading-snug">
                                Live activity and KPI snapshots.
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.9, ease: "easeInOut", delay: 0.05 }}
                            className="hidden sm:block absolute -right-16 top-24 w-[210px] rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg px-4 py-3"
                        >
                            <div className="text-sm font-semibold text-white">Automation</div>
                            <div className="mt-1 text-xs text-white/80 leading-snug">
                                Reduce manual steps with smart workflows.
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
                            className="hidden md:block absolute -right-10 bottom-8 w-[220px] rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 shadow-lg px-4 py-3"
                        >
                            <div className="text-sm font-semibold text-white">Better Decisions</div>
                            <div className="mt-1 text-xs text-white/80 leading-snug">
                                Reports that turn data into action.
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="px-6 max-md:px-12 max-sm:text-center py-12 z-10 order-1 md:order-2"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.9, ease: "easeInOut" }}
                            className="text-white"
                        >
                            {hero.title}
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="text-white"
                        >
                            {hero.highlight}
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.05 }}
                        className="mt-6 text-white max-w-lg"
                    >
                        {hero.description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
                        className="flex gap-4 mt-8 max-sm:justify-center"
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
                </motion.div>
            </div>
        </motion.section>
    );
}