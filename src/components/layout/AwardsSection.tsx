"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const awardCards = [
    {
        year: "2021",
        title: "US GREEN – TOP 5 SUSTAINABLE DESIGN",
        icon: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-white opacity-90">
                <circle cx="50" cy="50" r="10" fill="currentColor" />
                <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
        )
    },
    {
        year: "2022",
        title: "BOSTON AWARD FOR ARCHITECTURE",
        icon: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-white opacity-90">
                <rect x="30" y="30" width="40" height="40" rx="15" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="25" y="25" width="50" height="50" rx="20" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
        )
    },
    {
        year: "2023",
        title: "AIA G – BEST DOMESTIC DESIGN",
        icon: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-white opacity-90">
                <path d="M50 20 C30 20 20 40 20 50 C20 60 30 80 50 80 C70 80 80 60 80 50 C80 40 70 20 50 20 Z" fill="none" stroke="currentColor" strokeWidth="6" />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
            </svg>
        )
    },
    {
        year: "2024",
        title: "ECO VISION – TOP 10 GREEN ARCHITECTURE",
        icon: (
            <svg viewBox="0 0 100 100" className="w-16 h-16 text-white opacity-90">
                <path d="M50 10 L65 35 L90 40 L72 60 L78 85 L50 72 L22 85 L28 60 L10 40 L35 35 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
        )
    }
];

export const AwardsSection = () => {
    return (
        <section className="bg-black pt-48 lg:pt-64 pb-24 lg:pb-40 px-6 lg:px-12 relative overflow-hidden selection:bg-[#FFC107] selection:text-black">
            <div className="max-w-[1700px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start relative pb-40 lg:pb-0">
                    
                    {/* Left side: Header and Crane */}
                    <div className="space-y-16 lg:sticky lg:top-40">
                        <div className="space-y-10">
                            <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                                <span className="text-[11px] font-[1000] text-black tracking-[0.2em] uppercase">
                                    // AWARDED FOR QUALITY
                                </span>
                            </div>
                            
                            <h2 className="text-5xl lg:text-[6.5vw] font-[1000] text-white leading-[0.9] tracking-tighter uppercase max-w-[800px]">
                                HONORING QUALITY<br />
                                AND EXCELLENCE
                            </h2>
                            
                            <p className="text-[15px] text-white/40 leading-relaxed font-medium max-w-[480px]">
                                Our numerous awards and achievements showcase our dedication, expertise, and commitment to delivering exceptional quality and lasting value.
                            </p>

                            <button className="flex items-center gap-2 text-[#FFC107] group cursor-pointer">
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                                <span className="text-[13px] font-black tracking-widest uppercase border-b-2 border-transparent group-hover:border-[#FFC107] transition-all">
                                    JOIN US NOW
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right side: Industrial Award Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                        {awardCards.map((award, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="aspect-square bg-white/[0.03] border border-white/5 p-12 lg:p-16 flex flex-col justify-between group hover:bg-white/[0.07] hover:border-white/10 transition-all duration-500"
                            >
                                <div className="flex justify-end items-start h-20">
                                    <div className="transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                                        {award.icon}
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <span className="text-[13px] font-black text-[#FFC107] tracking-[0.2em] block">
                                        {award.year}
                                    </span>
                                    <h4 className="text-[20px] lg:text-[24px] font-[1000] text-white tracking-tighter uppercase leading-tight group-hover:translate-x-2 transition-transform duration-500">
                                        {award.title}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Right Sticky Arrow indicator like the screenshot */}
            <div className="absolute bottom-12 right-12 z-50">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#FFC107] transition-all group">
                    <ArrowUpRight className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                </button>
            </div>
        </section>
    );
};
