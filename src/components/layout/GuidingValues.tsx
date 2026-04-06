"use client";

import Image from "next/image";
import { Check, Diamond, Hammer } from "lucide-react";
import { motion } from "framer-motion";

const values = [
    { text: "Committed to Quality Construction" },
    { text: "Building Strong and Lasting Foundations" },
    { text: "Innovative Solutions for Every Project" },
    { text: "Client Satisfaction Is Our Priority" },
    { text: "Reliable Project Delivery Every Time" },
    { text: "Integrity and Trust in Every Build" }
];

export const GuidingValues = () => {
    return (
        <section className="bg-white py-24 relative overflow-hidden">
            <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Left: Image Side */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative h-[500px] lg:h-[700px] w-full"
                    >
                        <Image 
                            src="/indian_rope_painter.png" 
                            alt="Indian Rope Painter on Mumbai Skyscraper"
                            fill
                            className="object-cover grayscale-[0.2] contrast-[1.1]"
                            priority
                        />
                        {/* Decorative Border/Frame element if needed */}
                    </motion.div>

                    {/* Right: Content Side */}
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                                <span className="text-[11px] font-black text-black tracking-widest uppercase">
                                    // OUR GUIDING VALUES
                                </span>
                            </div>
                            
                            <h2 className="text-3xl lg:text-[2.8vw] font-[1000] text-black leading-[1.1] tracking-tighter uppercase max-w-[500px]">
                                COMMITTED TO QUALITY<br />
                                AND INTEGRITY
                            </h2>
                        </div>

                        {/* Two-Column Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-black/10 pb-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 border border-black/10 flex items-center justify-center">
                                        <Diamond className="w-5 h-5 text-black" />
                                    </div>
                                    <h4 className="text-[14px] font-black uppercase tracking-tight">QUALITY COMMITMENT</h4>
                                </div>
                                <p className="text-[14px] text-black/60 leading-relaxed font-medium">
                                    Delivering high-quality, reliable construction with excellence and precision.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 border border-black/10 flex items-center justify-center">
                                        <Hammer className="w-5 h-5 text-black" />
                                    </div>
                                    <h4 className="text-[14px] font-black uppercase tracking-tight">TRUSTED EXPERTISE</h4>
                                </div>
                                <p className="text-[14px] text-black/60 leading-relaxed font-medium">
                                    Providing reliable guidance built on experience, professionalism, and proven capability.
                                </p>
                            </div>
                        </div>

                        {/* Bullet Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            {values.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-4 h-4 bg-[#FFC107] flex items-center justify-center rounded-full">
                                        <Check className="w-2.5 h-2.5 text-black stroke-[4px]" />
                                    </div>
                                    <span className="text-[14px] font-black text-black/80 uppercase tracking-tight">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};
