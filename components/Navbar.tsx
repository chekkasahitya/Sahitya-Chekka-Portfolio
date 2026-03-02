"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, BarChart3 } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/#skills" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-background py-8 mb-8 sticky top-0 z-50 border-b border-transparent dark:border-border transition-colors duration-300">
            <div className="container mx-auto px-4 flex flex-col items-center">
                {/* Logo Section */}
                <Link href="/" className="mb-8 group text-center">
                    <h1 className="text-3xl md:text-5xl font-serif tracking-tight text-foreground mb-2 font-light">
                        Sahitya Chekka
                    </h1>
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground border-t border-border pt-2 inline-block">
                        Data • Strategy • Analytics
                    </p>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-12">
                    {navItems.map((item) => {
                        const isHashLink = item.href.startsWith("/#");

                        return isHashLink ? (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`text-xs font-bold uppercase tracking-widest hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-muted-foreground`}
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-xs font-bold uppercase tracking-widest hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${pathname === item.href ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1" : "text-muted-foreground"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <div className="ml-4">
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden absolute top-8 right-8 flex items-center gap-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="lg:hidden bg-background border-t border-border py-4 animate-in slide-in-from-top-2">
                    <div className="container mx-auto px-4 flex flex-col space-y-4 text-center items-center">
                        {navItems.map((item) => {
                            const isHashLink = item.href.startsWith("/#");

                            return isHashLink ? (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={`text-sm font-bold uppercase tracking-widest hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 text-muted-foreground`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-sm font-bold uppercase tracking-widest hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 ${pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-muted-foreground"
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </nav>
    );
}
