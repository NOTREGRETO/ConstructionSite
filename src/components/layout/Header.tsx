"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const Header = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Services", href: "/projects" },
        { name: "Contact Us", href: "/contact" }
    ];

    return (
        <div className="absolute top-0 left-0 w-full z-50 p-6 lg:p-12 hidden lg:flex items-center justify-between pointer-events-none">
            {/* Left Side: Navigation Links */}
            <div className="flex-1 flex justify-start pointer-events-auto">
                <nav className="flex items-center gap-10 text-white text-[13px] font-[1000] tracking-widest uppercase">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <a 
                                key={link.name}
                                href={link.href} 
                                className={`relative pb-2 transition-colors ${isActive ? "text-[#FFC107]" : "hover:text-[#FFC107]"}`}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div 
                                        layoutId="nav-line"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFC107]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}
                </nav>
            </div>

            {/* Center: Floating Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center pointer-events-auto">
                <Image 
                    src="/logo-transparent.png" 
                    alt="XNLC LANDMARK" 
                    width={1000} 
                    height={300} 
                    className="h-44 w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    priority
                />
            </div>

            {/* Right Side: Call & CTA */}
            <div className="flex-1 flex justify-end items-center gap-6 pointer-events-auto">
                <div className="flex items-center bg-white shadow-2xl">
                    <div className="bg-[#FFC107] p-5 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-black" />
                    </div>
                    <div className="px-6 py-2">
                        <p className="text-[10px] text-black/60 font-bold uppercase tracking-widest leading-none mb-1">Call us:</p>
                        <p className="text-[13px] text-black font-[1000] tracking-tight">+91 98765 43210</p>
                    </div>
                </div>

                <button className="bg-black hover:bg-[#FFC107] text-white hover:text-black px-8 py-5 transition-all duration-300 flex items-center gap-4 group">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    <span className="text-[12px] font-[1000] tracking-widest uppercase text-nowrap">Get in Touch</span>
                </button>
            </div>
        </div>
    );
};
