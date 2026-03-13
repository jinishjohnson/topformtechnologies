"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";

export default function FloatingButtons() {
    const [visible, setVisible] = useState(false);
    const whatsappBtnRef = useRef(null);

    // Show/hide scroll button based on scroll position
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // WhatsApp gentle pulse
    useEffect(() => {
        if (!whatsappBtnRef.current) return;
        const ctx = gsap.context(() => {
            gsap.to(whatsappBtnRef.current, {
                scale: 1.08,
                duration: 1.6,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });
        return () => ctx.revert();
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Replace with your actual WhatsApp number (country code + number, no + or spaces)
    const whatsappUrl = "https://wa.me/971500000000";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
            {/* WhatsApp — top of the stack */}
            <a
                ref={whatsappBtnRef}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-colors duration-200"
            >
                <FaWhatsapp className="text-2xl" />
            </a>

            {/* Scroll to top — bottom of the stack */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`
                    w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white
                    rounded-full shadow-lg flex items-center justify-center
                    transition-all duration-300
                    hover:-translate-y-1 hover:shadow-blue-500/40 hover:shadow-xl
                    ${visible
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }
                `}
            >
                <FaArrowUp className="text-base" />
            </button>
        </div>
    );
}