'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import data from '../data.json';
import { usePathname } from 'next/navigation';
import servicesData from '../services.json';



const previewMap = {
    // Services
    'cctv-security-systems': servicesData.find(s => s.slug === 'cctv-security-systems'),
    'door-access-tna-systems': servicesData.find(s => s.slug === 'door-access-tna-systems'),
    'pabx-telephone-systems': servicesData.find(s => s.slug === 'pabx-telephone-systems'),
    'website-design-development': servicesData.find(s => s.slug === 'website-design-development'),
    'custom-software-development': servicesData.find(s => s.slug === 'custom-software-development'),
    'erp-inventory-applications': servicesData.find(s => s.slug === 'erp-inventory-applications'),
    // Company
    'careers': {
        title: 'Careers', badge: 'Join Us', shortDesc: 'We\'re growing!Explore career opportunities at Topform Technologies and build your future with an innovative IT company in Dubai.', image: '/assets/item2.png'
    },
    'gallery': { title: 'Gallery', badge: 'Our Work', shortDesc: 'Browse our project portfolio, installation photos, and behind-the-scenes glimpses of the Topform Technologies team in action.', image: '/assets/srv/cctv.png' },
    'about-us': {
        title: 'Company Profile', badge: 'About Us', shortDesc: 'Learn about Topform Technologies — our history, mission, vision, and the team behind UAE\'s premier IT solutions company.', image: '/assets/abt.jpg'
    },
};


const sublinkIcons = {
    'cctv-security-systems': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg>,
    'door-access-tna-systems': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    'pabx-telephone-systems': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    'website-design-development': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    'custom-software-development': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    'erp-inventory-applications': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    'about-us': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    'careers': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    'gallery': <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
};

// ── Preview panel ─────────────────────────────────────────────────────────────
const getSlug = (href) => href?.split('/').pop() || '';

function PreviewPanel({ sublink }) {
    const slug = getSlug(sublink?.href);
    const info = previewMap[slug];
    if (!info) return null;
    return (
        <div className="rounded-2xl overflow-hidden bg-white border border-blue-100/60 flex flex-col h-full">
            {/* Image */}
            <div className="relative w-full h-32 bg-blue-100 shrink-0">
                <img
                    src={info.image}
                    alt={info.title}
                    className="w-full h-full object-contain p-4"
                />
            </div>
            {/* Content */}
            <div className="p-4 w-full flex flex-col gap-2 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
                    {info.badge}
                </span>
                <p className="text-sm font-semibold text-gray-900 leading-tight">{info.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-4">{info.shortDesc}</p>
                <Link href={sublink?.href ?? '#'} className="mt-auto text-xs font-semibold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all duration-150">
                    Learn more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
function NavDropdown({ link, scrolled, isActive }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(link.sublinks?.[0] ?? null);
    const timeoutRef = useRef(null);

    const show = () => { clearTimeout(timeoutRef.current); setOpen(true); };
    const hide = () => { timeoutRef.current = setTimeout(() => setOpen(false), 150); };

    return (
        <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
            <Link
                href={link.href}
                className={`
                    flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium
                    transition-all duration-200 select-none
                    ${isActive
                        ? 'bg-blue-600 text-white'
                        : scrolled
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }
                `}
            >
                {link.name}
                <svg
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </Link>

            {/* Mega-menu panel */}
            <div
                className={`
                    absolute left-1/2 -translate-x-1/2 mt-3 z-50
                    transition-all duration-200 ease-out origin-top
                    ${open
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                    }
                `}
            >
                <div className="rounded-2xl bg-white/95 backdrop-blur-3xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.18),0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100/80 overflow-hidden flex rtl:flex-row-reverse">

                    {/* Left: link list */}
                    <div className="flex flex-col py-2 min-w-[220px] border-r rtl:border-r-0 rtl:border-l border-gray-100">
                        {link.sublinks.map((sublink, i) => (
                            <Link
                                key={sublink.name}
                                href={sublink.href}
                                onMouseEnter={() => { show(); setHovered(sublink); }}
                                className={`
                                    flex items-center gap-3 px-4 py-3
                                    text-sm font-medium transition-colors duration-150 group
                                    rtl:flex-row-reverse
                                    ${pathname === sublink.href
                                        ? 'bg-blue-100 text-blue-600'
                                        : hovered?.name === sublink.name
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                    }
                                `}
                            >
                                <span className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-150 group-hover:bg-blue-100 group-hover:text-blue-600 bg-blue-50 text-blue-400">
                                    {sublinkIcons[getSlug(sublink.href)] || (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    )}
                                </span>
                                <span className="rtl:text-right grow">{sublink.name}</span>
                                <svg className="w-3.5 h-3.5 ml-auto rtl:ml-0 rtl:mr-auto text-gray-300 group-hover:text-blue-400 transition-colors rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    {/* Right: preview box */}
                    <div className="w-52 p-3 bg-gray-50/50">
                        <PreviewPanel sublink={hovered} />
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── Main Navbar ───────────────────────────────────────────────────────────────
import { useLanguage } from './LanguageContext';

export default function Navbar() {
    const { lang, toggleLanguage, t } = useLanguage();
    const { navbar } = t;
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            {/* ── Desktop Navbar ── */}
            <header
                className={`
                    fixed z-50 left-1/2 -translate-x-1/2 top-4 w-[92%] max-w-6xl px-5 py-3.5 rounded-full hidden md:flex
                    transition-all duration-500 ease-in-out border
                    ${scrolled
                        ? 'bg-white/90 backdrop-blur-4xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-white/60'
                        : 'bg-white/90 backdrop-blur-md shadow-lg border-white/20'
                    }
                `}
            >
                <div className="w-full mx-auto flex items-center justify-between rtl:flex-row-reverse">
                    <Link href="/" className="flex-shrink-0">
                        <img
                            src="/logo.svg"
                            alt="Topform Technologies"
                            className={`transition-all duration-500 ${scrolled ? 'w-28 h-auto' : 'w-36 h-auto'}`}
                        />
                    </Link>

                    <nav className="flex items-center gap-1 rtl:flex-row-reverse">

                        {navbar.links.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                link.sublinks?.some(s => pathname === s.href);

                            return link.sublinks ? (
                                <NavDropdown
                                    key={link.name}
                                    link={link}
                                    scrolled={scrolled}
                                    isActive={isActive}
                                />
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        flex items-center px-4 py-2 rounded-full text-sm font-medium
                                        transition-all duration-200
                                        ${isActive
                                            ? 'bg-blue-600 text-white'
                                            : scrolled
                                                ? 'bg-blue-50 text-blue-600'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                        }
                                    `}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3 rtl:flex-row-reverse">
                        <button
                            onClick={toggleLanguage}
                            className={`
                                flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase transition-all
                                ${scrolled ? 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white' : 'bg-blue-600 text-white hover:bg-blue-600/90'}
                            `}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                            {lang === 'en' ? 'عربي' : 'English'}
                        </button>

                        {/* <Link
                            href={navbar.cta.href}
                            className={`
                                inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold
                                transition-all duration-300 hover:-translate-y-0.5
                                ${scrolled
                                    ? 'bg-blue-600 text-white shadow-md hover:shadow-blue-500/40 hover:bg-blue-700'
                                    : 'bg-blue-600 text-white border border-white/40 hover:bg-blue-600/90 backdrop-blur-md'
                                }
                            `}
                        >
                            {navbar.cta.text}
                        </Link> */}
                    </div>
                </div>
            </header>

            {/* ── Mobile Navbar ── */}
            <header className="md:hidden fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-100 shadow-sm">
                <div className="flex items-center justify-between px-4 h-16">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src="/logo.svg" alt="Topform Technologies" className="w-28 h-auto" />
                    </Link>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-600 text-xs font-bold uppercase"
                        >
                            {lang === 'en' ? 'عربي' : 'English'}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMobileMenuOpen
                                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                }
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 pb-6 pt-2 space-y-1 overflow-y-auto border-t border-gray-100 rtl:text-right">
                        {navbar.links.map((link) => (
                            <div key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => !link.sublinks && setIsMobileMenuOpen(false)}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors rtl:flex rtl:flex-row-reverse rtl:justify-between ${link.sublinks
                                        ? 'text-blue-600 bg-blue-50 font-semibold'
                                        : 'text-gray-700/90 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                >
                                    <span>{link.name}</span>
                                    {link.sublinks && (
                                        <svg className="w-3.5 h-3.5 rotate-90 rtl:-rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>
                                {link.sublinks && (
                                    <div className="pl-4 pr-4 mt-1 space-y-0.5">
                                        {link.sublinks.map((sublink) => (
                                            <Link
                                                key={sublink.name}
                                                href={sublink.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors rtl:flex-row-reverse"
                                            >
                                                <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                                                    {sublinkIcons[sublink.name] || (
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                        </svg>
                                                    )}
                                                </span>
                                                <span className="grow">{sublink.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-3 border-t border-gray-100">
                            <Link
                                href={navbar.cta.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center w-full px-6 py-3 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                            >
                                {navbar.cta.text}
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
