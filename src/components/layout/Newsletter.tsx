"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const Newsletter = ({ 
    imageSrc = "/realistic-loader.png", 
    imageAlt = "High-Fidelity Wheel Loader Authority",
    bgColor = "#F3F3F3"
}: { 
    imageSrc?: string; 
    imageAlt?: string; 
    bgColor?: string;
}) => {
    return (
        <section className="pt-8 pb-12 relative overflow-hidden" style={{ backgroundColor: bgColor }}>
            {/* Centered Container ~1700px */}
            <div className="max-w-[1700px] w-full mx-auto px-6 lg:px-12 relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0 relative">
                    
                    {/* Left Column: Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        {/* Yellow Label Badge */}
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center self-start">
                            <span className="text-[11px] font-black text-black tracking-widest uppercase">
                                // Newsletter Signup
                            </span>
                        </div>

                        {/* Large Bold Heading */}
                        <h2 className="text-4xl lg:text-[4.8rem] font-[1000] text-black leading-[0.95] tracking-tighter uppercase">
                            Join our newsletter<br />
                            for weekly updates
                        </h2>
                    </motion.div>

                    {/* Right Column: Loader Image with Overflow */}
                    <div className="relative h-[400px] lg:h-[550px] w-full lg:w-[130%] lg:-mr-[30%]">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                                x: { duration: 1, ease: "easeOut", delay: 0.2 },
                                opacity: { duration: 1, delay: 0.2 },
                                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                            animate={{ y: [0, -15, 0] }}
                            viewport={{ once: true }}
                            className="absolute inset-0 flex items-center justify-end"
                        >
                            <Image 
                                src={imageSrc}
                                alt={imageAlt}
                                width={1200}
                                height={1200}
                                priority
                                className="object-contain w-full h-full scale-[1.3] origin-center -translate-x-[10%] mix-blend-multiply filter brightness-[1.03] contrast-[1.02]"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Thin Horizontal Divider (Under Heading/Image Section) */}
                <div className="w-full h-px bg-black/10 mt-16 mb-12" />

                {/* Lower Row: Description and Form */}
                <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-12">
                    
                    {/* Muted Gray Description */}
                    <div className="max-w-[480px]">
                        <p className="text-[14.5px] leading-relaxed text-[#666666] font-medium font-sans">
                            Subscribe to our newsletter to receive updates, insights, and valuable content delivered straight to your inbox.
                        </p>
                    </div>

                    {/* Horizontal Email Form (Aligned to Right) */}
                    <div className="flex flex-col sm:flex-row items-stretch gap-0 w-full lg:w-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email ..." 
                            className="bg-[#EBEBEB] border border-black/5 px-8 h-[55px] min-w-[380px] text-[14px] font-black outline-none focus:border-[#FFC107] transition-all text-black uppercase placeholder:text-black/30"
                        />
                        <button className="bg-[#FFC107] hover:bg-black hover:text-white transition-all duration-500 h-[55px] flex items-center group cursor-pointer min-w-[240px]">
                            <div className="bg-white group-hover:bg-white/10 w-[55px] h-full flex items-center justify-center transition-colors border-r border-black/5">
                                <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
                            </div>
                            <span className="flex-1 text-[13px] font-black tracking-widest uppercase text-center px-6">
                                Subscribe Today
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};
