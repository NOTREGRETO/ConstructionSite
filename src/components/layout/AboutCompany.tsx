"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const AboutCompany = () => {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
            {/* Left Image Side */}
            <div className="relative w-full h-[500px] lg:h-auto overflow-hidden">
                <motion.div 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image 
                        src="/indian_heritage_build.png"
                        alt="Industrial team at work"
                        fill
                        className="object-cover contrast-[1.05]"
                    />
                </motion.div>
                {/* Subtle Overlay for depth */}
                <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Right Content Side (Light Blue) */}
            <div className="bg-[#E6EFF5] p-12 lg:p-24 flex flex-col justify-center">
                <div className="max-w-[600px] space-y-10">
                    {/* Top Section */}
                    <div className="space-y-6">
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                            <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                                // ABOUT COMPANY
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-[4.5vw] font-[1000] text-black leading-[1] tracking-tighter uppercase">
                            INNOVATIVE SOLUTIONS<br />
                            FOR EVERY BUILD
                        </h2>
                        <p className="text-[15px] text-black/60 leading-relaxed max-w-[500px]">
                            We deliver innovative solutions for every build, combining modern technology and expert craftsmanship to ensure exceptional results.
                        </p>
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <ArrowUpRight className="w-4 h-4 text-black" />
                            <span className="text-[12px] font-black text-black tracking-widest uppercase border-b border-black/20 pb-0.5 group-hover:border-black transition-colors">
                                ABOUT US NOW
                            </span>
                        </div>
                    </div>

                    {/* Mission/Vision Rows */}
                    <div className="pt-10 border-t border-black/5 space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-[150px,1fr] gap-8 items-start">
                            <h3 className="text-[14px] font-[1000] text-black uppercase tracking-widest pt-1">
                                OUR MISSION
                            </h3>
                            <p className="text-[14px] text-black/60 leading-relaxed">
                                Our mission is to create durable, efficient construction projects that prioritize safety, innovation, and customer satisfaction.
                            </p>
                        </div>
                        <div className="pt-8 border-t border-black/5 grid grid-cols-1 lg:grid-cols-[150px,1fr] gap-8 items-start">
                            <h3 className="text-[14px] font-[1000] text-black uppercase tracking-widest pt-1">
                                OUR VISION
                            </h3>
                            <p className="text-[14px] text-black/60 leading-relaxed">
                                Our vision is to build innovative, sustainable environments that inspire growth and create long-term value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
