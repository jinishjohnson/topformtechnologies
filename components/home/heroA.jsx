"use client";

import Image from "next/image";
import Link from "next/link";
import data from '../../data.json';
import { motion } from "framer-motion";
import { FcTimeline } from "react-icons/fc";
import { useLanguage } from "../LanguageContext";

export default function HeroA() {
    const { lang, t } = useLanguage();
    const heroA = t?.hero || data?.hero || {};
    const { title, highlight, description, buttons, image, badge, card } = heroA;
    const isRtl = lang === "ar";

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full relative bg-gradient-to-br from-[#12122b] via-[#2F2F7A] to-[#12122b] z-30"
        >
            {/* Background wrapper with overflow hidden so blobs don't leak out, but section is visible so image can overflow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Abstract Glowing Orbs for modern feel with organic movement */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-400/20 rounded-full blur-[120px] mix-blend-screen animate-orb-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen animate-orb-delayed" />

                {/* Background SVG Pattern with a subtle mix blend */}
                <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay">
                    <Image
                        src="/assets/diagonal-lines.svg"
                        alt="circuit background"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Desktop Full-Bleed Split Screen Image */}
            <motion.div
                initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`hidden md:block absolute top-0 bottom-0 w-[50vw] z-20 md:-top-12 md:left-26 lg:-top-28 ${isRtl ? 'right-0' : 'left-0'}`}
            >
                <div className="absolute inset-0 p-8 lg:p-16 flex items-center justify-center pointer-events-none">
                    <div className="relative w-full h-full">
                        {/* The main device mockup image */}
                        <Image
                            src={image}
                            alt="hero product mockup"
                            fill
                            priority
                            className="object-contain scale-125 drop-shadow-[0_30px_50px_rgba(0,0,0,0.6)] "
                        />
                    </div>
                </div>

                {/* Feature cards for Desktop - Wrapped for CSS floating animations */}
                <motion.div
                    initial={{ opacity: 0, x: isRtl ? 30 : -30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className={`absolute top-[18%] z-30 ${isRtl ? 'right-8 lg:right-16' : 'left-8 lg:left-16'}`}
                >
                    <div className="flex flex-col w-[200px] lg:w-[220px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl px-5 py-4 hover:bg-white/20 transition-all cursor-pointer animate-float-slow group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-inner group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-shadow">
                                <FcTimeline className="text-xl lg:text-2xl brightness-0 invert" />
                            </div>
                            <div className="text-sm lg:text-base font-extrabold text-white tracking-wider drop-shadow-md antialiased">{card?.[0]?.title || "Real-time Data"}</div>
                        </div>
                        <div className="mt-2 text-xs text-blue-50/95 leading-relaxed font-medium tracking-wide antialiased">
                            {card?.[0]?.desc || "Live activity and KPI snapshots tailored."}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: isRtl ? -30 : 30, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    className={`absolute top-[16%] z-30 ${isRtl ? 'left-24 lg:left-[-2rem]' : 'right-24 lg:right-[-2rem]'}`}
                >
                    <div className="flex flex-col w-[210px] lg:w-[230px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl px-5 py-4 hover:bg-white/20 transition-all cursor-pointer animate-float-delayed">
                        <div className="text-sm lg:text-base font-extrabold text-white tracking-wider drop-shadow-md antialiased flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(34,211,238,0.9)]"></span>
                            {card?.[1]?.title || "Smart Automation"}
                        </div>
                        <div className="mt-2 text-[10px] lg:text-xs text-blue-50/95 leading-relaxed font-medium tracking-wide antialiased">
                            {card?.[1]?.desc || "Reduce manual steps with smart workflows."}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                    className={`absolute bottom-[15%] z-30 ${isRtl ? 'left-24 lg:left-24' : 'right-24 lg:right-24'}`}
                >
                    <div className="flex flex-col w-[220px] lg:w-[240px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl px-5 py-4 hover:bg-white/20 transition-all cursor-pointer animate-float-fast">
                        <div className="flex items-center gap-3">
                            <div className="text-sm lg:text-base font-extrabold text-white tracking-wider drop-shadow-md antialiased">{card?.[2]?.title || "Decisions Engine"}</div>
                        </div>
                        <div className="mt-2 text-[10px] lg:text-xs text-blue-50/95 leading-relaxed font-medium tracking-wide antialiased">
                            {card?.[2]?.desc || "Premium reports turning data into action."}
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <div className={`max-w-7xl mx-auto flex flex-col md:flex-row min-h-[600px] h-auto lg:h-[700px] items-center relative z-10 px-6 max-md:px-8 py-16 gap-12`}>

                {/* MOBILE / TABLET-SM IMAGE (hidden on md and up) */}
                <motion.div
                    initial={{ opacity: 0, y: isRtl ? -30 : 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="md:hidden relative w-full h-[380px] sm:h-[480px] flex items-center justify-center pt-8 z-20"
                >
                    <div className="relative w-full h-full max-w-[500px] px-2 sm:px-6">
                        <Image
                            src={image}
                            alt="hero product mockup"
                            fill
                            priority
                            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                        />
                    </div>

                    {/* Sm-only Feature cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, y: 10 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                        className="hidden sm:flex absolute -left-4 top-[10%] z-30"
                    >
                        <div className="flex flex-col w-[200px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl px-5 py-4 animate-float-slow">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg shadow-inner">
                                    <FcTimeline className="text-xl brightness-0 invert" />
                                </div>
                                <div className="text-sm font-extrabold text-white tracking-wider drop-shadow-md antialiased">{card?.[0]?.title || "Real-time Data"}</div>
                            </div>
                            <div className="mt-2 text-xs text-blue-50/95 leading-relaxed font-medium tracking-wide antialiased">
                                {card?.[0]?.desc || "Live activity and KPI snapshots."}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 10 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="hidden sm:flex absolute -right-4 top-[45%] z-30"
                    >
                        <div className="flex flex-col w-[210px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl px-5 py-4 animate-float-delayed">
                            <div className="text-sm font-extrabold text-white tracking-wider drop-shadow-md antialiased flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                                {card?.[1]?.title || "Smart Automation"}
                            </div>
                            <div className="mt-2 text-[10px] text-blue-50/95 leading-relaxed font-medium tracking-wide antialiased">
                                {card?.[1]?.desc || "Reduce manual steps dynamically."}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* SPACER FOR DESKTOP */}
                <div className="hidden md:block w-1/2 shrink-0"></div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex flex-col pt-8 md:pt-0 z-30 max-md:text-center relative"
                >
                    {/* Glowing backlight behind text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex mb-8 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md self-start max-md:self-center items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all hover:bg-white/10"
                    >
                        <span className="text-[10px] lg:text-xs font-bold text-cyan-300 tracking-[0.15em] uppercase">
                            ✨ {badge || (lang === 'ar' ? "حلول مبتكرة" : "Innovative Solutions")}
                        </span>
                    </motion.div>

                    <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="block mb-3"
                        >
                            {title}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 pb-2 drop-shadow-md"
                        >
                            {highlight}
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="mt-6 text-base sm:text-lg lg:text-xl text-blue-50/80 max-w-xl max-md:mx-auto font-medium leading-relaxed"
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
                </motion.div>
            </div>

        </motion.section>
    );
}