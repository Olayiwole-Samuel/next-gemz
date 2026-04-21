"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all flex items-center justify-between px-5 md:px-10 lg:px-16 duration-300 ${
                scrolled
                    ? "bg-black/80 backdrop-blur-md py-3 shadow-lg"
                    : "bg-transparent py-5"
            }`}
        >
            {/* Logo */}
            <div className="flex items-center gap-3">
                <Image
                    src="/download.png"
                    alt="Gemz Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                />

                <div className="flex flex-col leading-tight">
                    <h1 className="text-lg md:text-2xl font-bold text-white tracking-wide">
                        Gemz
                    </h1>

                    <p className="text-[8px] md:text-[10px] tracking-[0.35em] text-white/80 font-medium">
                        SOFTWARE INNOVATIVE
                    </p>
                </div>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10 text-lg">
                {[
                    { name: "Home", href: "#" },
                    { name: "Services", href: "#service" },
                    { name: "Contact", href: "#contact-us" },
                ].map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="relative text-white font-semibold tracking-wide group"
                    >
                        {link.name}
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            {/* CTA (Desktop) */}
            <div className="hidden md:block">
                <a
                    href="#contact-us"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black text-sm font-semibold tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300 inline-block"
                >
                    Get Started
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center gap-6 py-6 transition-all duration-300 ${
                    menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#service" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#contact-us" onClick={() => setMenuOpen(false)}>Contact</a>

                <a
                    href="#contact-us"
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black text-sm font-semibold"
                >
                    Get Started
                </a>
            </div>
        </nav>
    );
};

export default Navbar;