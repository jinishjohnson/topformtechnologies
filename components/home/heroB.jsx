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
        <section className="w-full bg-linear-to-br from-[#3f8cff] via-[#1f5fbf] to-[#0a2f6b] relative overflow-visible z-20">
            {/* Background Elements Wrapper - hidden overflow only on backgrounds */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Background SVG Pattern */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay">
                    <Image
                        src="/assets/circuit-board.svg"
                        alt="circuit background"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Geometric Pattern */}
                <div className={`absolute inset-y-0 ${isRtl ? 'right-0 scale-x-[-1] z-10 opacity-50 overflow-visible' : 'left-0'} w-full md:w-[80%] lg:w-[65%] h-full`}>
                    <Image
                        src="/assets/bg-dgn.png"
                        alt="geometric background"
                        fill
                        priority
                        className={`object-cover ${isRtl ? 'object-right scale-x-100' : 'object-left'}`}
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-[450px] max-sm:h-[650px] min-h-[550px] relative z-10">

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
                <div className={`relative w-full md:w-1/2 h-[540px] order-1 md:order-2 flex justify-center items-center overflow-visible`}>
                    {/* Mobile Animation (Up from bottom) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="w-full h-full relative z-20 flex justify-center items-center md:hidden"
                    >
                        <Image
                            src={image}
                            alt="hero product mockup"
                            width={800}
                            height={600}
                            priority
                            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-transform duration-700 w-full h-full scale-110 translate-y-12"
                        />
                    </motion.div>

                    {/* Desktop Animation (In from right/left) */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="hidden md:flex w-full h-full relative z-20 justify-center items-center"
                    >
                        <Image
                            src={image}
                            alt="hero product mockup"
                            width={800}
                            height={600}
                            priority
                            className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 w-full h-full scale-[1.35] lg:-translate-x-12"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
