"use client";

import Image from "next/image";
import Link from "next/link";
import data from '../../data.json';
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
    const { lang, t } = useLanguage();
    const heroB = t?.herob || data.herob;
    const { title, highlight, description, buttons, image } = heroB;
    const isRtl = lang === "ar";

    return (
        <section className="w-full bg-linear-to-br from-[#3f8cff] via-[#1f5fbf] to-[#0a2f6b] relative overflow-hidden">
            {/* Background SVG Pattern */}
            <div className="absolute inset-0 z-0 opacity-20  mix-blend-overlay">
                <Image
                    src="/assets/circuit-board.svg"
                    alt="circuit background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-[450px] max-sm:h-[650px] min-h-[550px] relative">

                {/* CONTENT AREA */}
                <div className={`w-full md:w-1/2 px-6 max-md:px-12 py-12 z-10 ${isRtl ? 'text-right' : 'text-left'} max-sm:text-center order-2 md:order-1`}>
                    <motion.h1
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        <span className="text-white">{title}</span>
                        <br />
                        <span className="text-blue-200">{highlight}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className={`mt-6 text-white/90 text-lg max-w-lg ${isRtl ? 'mr-0 ml-auto' : 'ml-0 mr-auto'} max-sm:mx-auto`}
                    >
                        {description}
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className={`flex gap-4 mt-8 ${isRtl ? 'justify-end' : 'justify-start'} max-sm:justify-center`}
                    >
                        {buttons && buttons.map((btn, i) => (
                            <Link
                                key={i}
                                href={btn.link}
                                className={
                                    btn.variant === "primary"
                                        ? "bg-white text-blue-600 px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:shadow-xl hover:shadow-white/20 hover:-translate-y-1 active:scale-95"
                                        : "border-2 border-white/30 backdrop-blur-sm text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all hover:bg-white/10 hover:-translate-y-1 active:scale-95"
                                }
                            >
                                {btn.label}
                            </Link>
                        ))}
                    </motion.div>
                </div>

                {/* IMAGE AREA */}
                <motion.div
                    initial={{ opacity: 0, x: isRtl ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                    className={`relative w-full md:w-1/2 h-[400px] order-1 md:order-2 flex justify-center items-center overflow-visible`}
                >
                    <Image
                        src={image}
                        alt="hero background"
                        width={800}
                        height={600}
                        priority
                        className={`object-contain transition-transform duration-700  ${isRtl ? '-translate-x-25' : 'translate-x-25'} scale-125 max-sm:scale-100 max-sm:translate-x-0`}
                    />
                </motion.div>
            </div>
        </section>
    );
}
