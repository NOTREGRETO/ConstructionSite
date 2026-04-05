"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const EquipmentShowcase = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left side: Technical Specs & Authority */}
                    <div className="relative z-10">
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center mb-10">
                            <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                                // INDUSTRIAL EQUIPMENT AUTHORITY
                            </span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-[70px] font-[1000] text-black leading-[0.95] tracking-tighter uppercase mb-12">
                            MODERN<br />
                            MACHINE<br />
                            SOLUTIONS
                        </h2>

                        <div className="grid grid-cols-2 gap-10 mb-16 border-t border-black/10 pt-10">
                            <div>
                                <h4 className="text-[12px] font-black text-black/40 uppercase tracking-widest mb-2">Power Capacity</h4>
                                <p className="text-2xl font-[1000] text-black tracking-tighter uppercase">580 HP TURBO</p>
                            </div>
                            <div>
                                <h4 className="text-[12px] font-black text-black/40 uppercase tracking-widest mb-2">Operating Weight</h4>
                                <p className="text-2xl font-[1000] text-black tracking-tighter uppercase">35,000 KG</p>
                            </div>
                            <div>
                                <h4 className="text-[12px] font-black text-black/40 uppercase tracking-widest mb-2">Bucket Capacity</h4>
                                <p className="text-2xl font-[1000] text-black tracking-tighter uppercase">5.5 Cubic M</p>
                            </div>
                            <div>
                                <h4 className="text-[12px] font-black text-black/40 uppercase tracking-widest mb-2">Fuel Efficiency</h4>
                                <p className="text-2xl font-[1000] text-black tracking-tighter uppercase">ECO-TECH III</p>
                            </div>
                        </div>

                        <button className="bg-black text-white hover:bg-[#FFC107] hover:text-black transition-all px-10 py-5 text-[13px] font-[1000] tracking-widest uppercase flex items-center gap-3 group">
                            VIEW FULL FLEET
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>

                    {/* Right side: Realistic Machine Image - Isolated on White */}
                    <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
                        {/* Background Architectural Ornament */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-5 pointer-events-none">
                            <svg viewBox="0 0 1000 1000" className="w-full h-full text-black fill-none stroke-current stroke-1">
                                <circle cx="500" cy="500" r="400" />
                                <circle cx="500" cy="500" r="300" />
                                <path d="M100,500 L900,500 M500,100 L500,900" />
                            </svg>
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, rotate: -5 }}
                            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative w-full h-full lg:w-[120%]"
                        >
                            <Image 
                                src="/loader_commercial_studio_isolated_1775403085812.png" 
                                alt="Realistic Caterpillar Wheel Loader"
                                fill
                                className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.15)]"
                                priority
                            />
                        </motion.div>
                        
                        {/* Realistic Shadow Base */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/5 blur-3xl rounded-[100%]" />
                    </div>
                </div>
            </div>

            {/* Side Branding Ornament */}
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 rotate-90 hidden lg:block">
                <span className="text-[120px] font-[1000] text-black/5 tracking-tighter uppercase select-none">EQUIPMENT</span>
            </div>
        </section>
    );
};
