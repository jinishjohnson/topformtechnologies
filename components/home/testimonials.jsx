"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import testimonialsData from "@/testimonials.json";
import TestimonialCard from "@/components/TestimonialCard";

export default function TestimonialSection() {
    const featured = testimonialsData[0];
    const rest = testimonialsData.slice(1);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        Customer Stories
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                        Hear what our{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                            Clients
                        </span>{" "}
                        say
                    </h2>
                    <p className="text-gray-500 mt-3 text-base">
                        Trusted by 100+ businesses across the UAE and beyond.
                    </p>
                </div>

                {/* Featured Card */}
                <div className="relative mb-12 rounded-3xl bg-linear-to-r from-[#15A5E7] to-[#1C2A73] p-8 md:p-12 shadow-2xl shadow-blue-500/20 text-white overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-cyan-400/20 rounded-full blur-2xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                        <div className="flex-1">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-white/90">
                                &ldquo;{featured.message}&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <img
                                    src={featured.image}
                                    alt={featured.name}
                                    className="w-12 h-12 rounded-full ring-2 ring-white/60"
                                />
                                <div>
                                    <p className="font-semibold text-white">{featured.name}</p>
                                    <p className="text-blue-200 text-sm">{featured.role}</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-col items-center gap-2 bg-white/10 rounded-2xl px-8 py-6 text-center shrink-0 backdrop-blur-sm">
                            <span className="text-5xl font-extrabold text-white">4.9</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-blue-200 text-xs font-medium mt-1">100+ Reviews</p>
                        </div>
                    </div>
                </div>

                {/* Swiper Cards */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    centeredSlides={false}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-12"
                >
                    {testimonialsData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <TestimonialCard item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}