import servicesData from "@/services.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
    const service = servicesData.find((s) => s.slug === params.slug);
    if (!service) return {};
    return {
        title: `${service.title} | Topform Technologies`,
        description: service.shortDesc,
    };
}

export default function ServiceDetailPage({ params }) {
    const service = servicesData.find((s) => s.slug === params.slug);
    if (!service) notFound();

    return (
        <main className="min-h-screen bg-white">

            {/* ── Hero Banner ── */}
            <section className={`relative bg-linear-to-br ${service.heroColor} text-white overflow-hidden`}>
                {/* Decorative blobs */}
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 -left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="flex-1">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                            {service.badge}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                            {service.title}
                        </h1>
                        <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-8">
                            {service.shortDesc}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact-us"
                                className="bg-white text-gray-900 font-semibold px-7 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Get a Free Quote →
                            </Link>
                            <Link
                                href="/service"
                                className="border border-white/40 text-white font-medium px-7 py-3 rounded-full hover:bg-white/10 transition-colors"
                            >
                                ← All Services
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full lg:w-5/12 flex justify-center">
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-xl" />
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-contain relative z-10 drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Long Description ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* About section */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                            About This{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                                Service
                            </span>
                        </h2>
                        {service.longDesc.split("\n\n").map((para, i) => (
                            <p key={i} className="text-gray-600 leading-relaxed mb-4 text-base">
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">What&apos;s Included</h3>
                        <ul className="space-y-4">
                            {service.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-4 group">
                                    <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors">{feat}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── Why Us Banner ── */}
            <section className="bg-linear-to-br from-blue-50 to-indigo-50 py-16">
                <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Choose Topform?</h3>
                    <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto mb-8">{service.whyUs}</p>
                    <Link
                        href="/contact-us"
                        className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3.5 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Talk to Our Experts →
                    </Link>
                </div>
            </section>

            {/* ── Other Services ── */}
            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Explore Other Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {servicesData
                        .filter((s) => s.slug !== service.slug)
                        .slice(0, 3)
                        .map((s) => (
                            <Link
                                key={s.id}
                                href={`/service/${s.slug}`}
                                className="group flex gap-4 items-center p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative w-14 h-14 shrink-0">
                                    <Image src={s.image} alt={s.title} fill className="object-contain" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm leading-snug">{s.title}</p>
                                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">{s.shortDesc}</p>
                                </div>
                            </Link>
                        ))}
                </div>
            </section>
        </main>
    );
}
