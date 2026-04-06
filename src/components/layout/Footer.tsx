'use client'

import { motion } from "framer-motion"
import Image from "next/image"

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
        <footer className="relative bg-black text-white antialiased font-sans flex flex-col border-t border-white/5">
            <div className="max-w-[1700px] w-full mx-auto px-6 lg:px-12 pt-32 pb-20">
                
                {/* --- TOP SECTION: LINKS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-32">
                    {FOOTER_LINKS.map((section) => (
                        <div key={section.title} className="space-y-10 group">
                            <div className="space-y-4">
                                <h4 className="text-[13px] font-[1000] uppercase tracking-[0.3em] text-white flex items-center gap-3">
                                    <span className="text-[#FFC107] font-black">//</span> {section.title}
                                </h4>
                                <div className="w-full h-px bg-white/10 group-hover:bg-[#FFC107]/20 transition-colors duration-500" />
                            </div>
                            <ul className="space-y-4">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-white/40 hover:text-white transition-all text-[15px] font-[1000] tracking-tight block uppercase">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* --- MIDDLE LOGO SECTION --- */}
                <div className="flex flex-col items-center justify-center pt-20 border-t border-white/5">
                    <div className="flex flex-col items-center gap-10 group">
                        <Image 
                            src="/logo-transparent.png" 
                            alt="XNLC LANDMARK" 
                            width={1000} 
                            height={400} 
                            className="h-72 w-auto object-contain brightness-110 group-hover:scale-[1.02] transition-transform duration-700"
                            priority
                        />
                        
                        <div className="flex flex-col items-center gap-10 text-center">
                            <p className="text-[13px] leading-relaxed uppercase font-black text-white/30 tracking-[0.4em] max-w-lg">
                                Level 15, Omkar Tower, Worli, Mumbai - 400018, India
                            </p>
                            
                            <div className="flex flex-col lg:flex-row items-center gap-12 bg-zinc-900/40 p-1 px-10 rounded-none border border-white/5">
                                <p className="text-[#FFC107] text-4xl lg:text-[45px] font-[1000] tracking-tighter leading-none py-6">
                                    +91 98765 43210
                                </p>
                                <div className="hidden lg:block w-px h-10 bg-white/10" />
                                <p className="text-[12px] text-white/50 hover:text-[#FFC107] transition-colors cursor-pointer font-black uppercase tracking-[0.3em]">
                                    INFO@XNLC-LANDMARK.COM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- COPYRIGHT --- */}
                <div className="mt-32 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black text-white/20 tracking-[0.5em] uppercase">© 2026 XNLC Landmark Limited. All Rights Reserved.</p>
                    <div className="flex gap-10">
                        <a href="#" className="text-[10px] font-black text-white/20 hover:text-[#FFC107] tracking-[0.5em] uppercase transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[10px] font-black text-white/20 hover:text-[#FFC107] tracking-[0.5em] uppercase transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
