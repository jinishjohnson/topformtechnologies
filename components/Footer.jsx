import Link from 'next/link';
import data from '../data.json';

export default function Footer() {
    const { footer } = data;

    return (
        <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white mb-4 block">
                            <img src="/logo_web_dark.png" alt="Logo" width="150" height="150" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            {footer.description}
                        </p>
                    </div>

                    {footer.sections.map((section, idx) => (
                        <div key={idx}>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{section.title}</h3>
                            <ul className="space-y-3 text-sm">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} {footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
