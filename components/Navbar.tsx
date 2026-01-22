"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, BarChart3 } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white py-8 mb-8">
            <div className="container mx-auto px-4 flex flex-col items-center">
                {/* Logo Section */}
                <Link href="/" className="mb-8 group text-center">
                    <h1 className="text-5xl font-serif tracking-tight text-slate-900 mb-2 font-light">
                        Sahitya Chekka
                    </h1>
                    <p className="text-xs tracking-[0.3em] uppercase text-slate-500 border-t border-slate-200 pt-2 inline-block">
                        Data • Strategy • Analytics
                    </p>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-12">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors ${pathname === item.href ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-500"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden absolute top-8 right-8">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-slate-600 hover:text-blue-600 focus:outline-none"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 py-4">
                    <div className="container mx-auto px-4 flex flex-col space-y-4 text-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-bold uppercase tracking-widest hover:text-blue-600 transition-colors py-2 ${pathname === item.href ? "text-blue-600" : "text-slate-500"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
