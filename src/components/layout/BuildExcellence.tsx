"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const progressBars = [
    { label: "TIMELY EXECUTION", value: 80 },
    { label: "STRUCTURES", value: 85 },
    { label: "PROJECT FOUNDATION", value: 90 }
];

export const BuildExcellence = () => {
    return (
        <section className="bg-white py-24 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                
                {/* Left Column: Image with Overlapping Yellow Card */}
                <div className="relative group">
                    <div className="relative h-[600px] w-full lg:w-[85%] overflow-hidden shadow-2xl">
                        <Image 
                            src="/excellence_worker.png"
                            alt="Indian Construction Excellence"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                        />
                    </div>
                    {/* Overlapping Yellow Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="absolute bottom-[-40px] left-[-10px] lg:bottom-[-30px] lg:left-[-30px] bg-[#FFC107] p-8 lg:p-12 shadow-2xl z-20 max-w-[280px] lg:max-w-[320px]"
                    >
                        <div className="space-y-3">
                            <span className="text-[48px] lg:text-[60px] font-[1000] text-black leading-none tracking-tighter">99%</span>
                            <div className="space-y-3">
                                <h4 className="text-[16px] lg:text-[18px] font-[1000] text-black uppercase leading-none tracking-tight">HAPPY CUSTOMER</h4>
                                <p className="text-[11px] text-black/70 font-black leading-relaxed uppercase tracking-tighter">
                                    Delivering satisfaction with every project through unwavering dedication.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Content and Progress Bars */}
                <div className="space-y-12">
                    <div className="space-y-10">
                        {/* Yellow Tag */}
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                            <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                                // QUALITY CONSTRUCTION
                            </span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-[4.5vw] font-[1000] text-black leading-[0.95] tracking-tighter uppercase mb-6">
                            BUILDING EXCELLENCE<br />
                            WITH PRECISION
                        </h2>
                        
                        <p className="text-[15px] text-black/60 leading-relaxed max-w-[500px] font-medium">
                            We focus on superior craftsmanship, durable materials, and professional execution to deliver consistently outstanding construction results across all sectors.
                        </p>

                        <button className="flex items-center gap-2 group">
                            <ArrowUpRight className="w-5 h-5 text-black transition-transform group-hover:rotate-45" />
                            <span className="text-[13px] font-black tracking-widest uppercase border-b-2 border-transparent group-hover:border-black transition-all">
                                VIEW ALL PROJECTS
                            </span>
                        </button>
                    </div>

                    {/* Progress Bars Section */}
                    <div className="space-y-10 pt-10 border-t border-black/5">
                        {progressBars.map((bar, i) => (
                            <div key={i} className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <span className="text-[13px] font-black text-black tracking-tighter uppercase">{bar.label}</span>
                                    <span className="text-[13px] font-black text-black tracking-tighter">{bar.value}%</span>
                                </div>
                                <div className="w-full h-[6px] bg-black/5 overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${bar.value}%` }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.2 }}
                                        viewport={{ once: true }}
                                        className="h-full bg-[#FFC107]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
