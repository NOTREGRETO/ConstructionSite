"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Footer = () => {
    const FOOTER_LINKS = [
      {
        title: "ABOUT US",
        links: ["Our Story", "Leadership", "Sustainability", "Careers", "Media Kit"],
      },
      {
        title: "PROJECTS",
        links: ["High-Rise Towers", "Infrastructure", "Heritage Fusion", "Luxury Villas", "Corporate Parks"],
      },
      {
        title: "SERVICES",
        links: ["Renovations", "Planning", "Consulting", "Structural Design", "Urban Planning"],
      },
      {
        title: "COLLABORATE",
        links: ["Partners", "Partners Program", "Join Our Team", "Community", "Contact Us"],
      },
    ];

    return (
        <footer className="relative bg-black text-white selection:bg-primary selection:text-black antialiased font-sans flex flex-col">
            
            {/* --- TOP SECTION: FULL-WIDTH SPREAD --- */}
            <div className="max-w-[95%] w-full mx-auto px-12 lg:px-16 pt-24 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
                    
                    {/* Nav Sections - All on Left - Centered for symmetry */}
                    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 lg:justify-items-center">
                        {FOOTER_LINKS.map((section) => (
                            <div key={section.title} className="space-y-10 w-full max-w-[220px]">
                                <div className="space-y-4">
                                    <h4 className="text-[12.5px] font-[1000] uppercase tracking-[0.25em] text-white flex items-center gap-2">
                                        <span className="text-[#FFC107] font-bold opacity-100">//</span> {section.title}
                                    </h4>
                                    <div className="w-full h-px bg-white/10" />
                                </div>
                                <ul className="space-y-[18px]">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-[#888888] hover:text-white transition-all text-[15px] font-[1000] tracking-tight block uppercase">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- MIDDLE LOGO SECTION --- */}
                <div className="w-full pt-20 pb-20 flex flex-col items-center justify-center animate-fade-in border-t border-white/5 mt-16">
                    <div className="flex flex-col items-center gap-8 group cursor-pointer">
                        <Image 
                            src="/logo-transparent.png" 
                            alt="XNLC LANDMARK" 
                            width={1000} 
                            height={400} 
                            className="h-64 w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-700"
                        />
                        
                        <div className="flex flex-col items-center gap-6 text-[#888888] font-medium tracking-widest text-center mt-4">
                            <p className="text-[14.5px] leading-relaxed uppercase font-bold text-white/40">
                                Level 15, Omkar Tower, Worli, Mumbai - 400018, India
                            </p>
                            
                            <div className="flex flex-col lg:flex-row items-center gap-12 pt-6">
                                <p className="text-[#FFC107] text-4xl font-[1000] tracking-tighter leading-none">
                                    +91 98765 43210
                                </p>
                                <p className="text-[14px] text-white/60 hover:text-[#FFC107] transition-colors cursor-pointer font-black uppercase tracking-[0.25em]">
                                    INFO@XNLC-LANDMARK.COM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
