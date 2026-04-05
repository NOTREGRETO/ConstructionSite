"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const CtaSection = () => {
    return (
        <section className="relative w-full h-[600px] lg:h-[700px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image 
                    src="/cta-worker.png"
                    alt="Professional Construction Worker"
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="max-w-[1700px] w-full mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left side: Heading - Moved thoda left & Limited width */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: -20 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:-ml-20 max-w-[700px]"
                    >
                        <h2 className="text-4xl lg:text-[3vw] font-[1000] text-white leading-[1.1] tracking-tighter uppercase whitespace-normal drop-shadow-2xl">
                            Building strong<br />
                            foundations,<br />
                            delivering<br />
                            excellence every time
                        </h2>
                    </motion.div>

                    {/* Right side: Description & Action */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-start lg:items-end space-y-10"
                    >
                        <div className="max-w-[400px] lg:text-right">
                            <p className="text-[16px] lg:text-[18px] leading-relaxed text-white font-medium font-sans grayscale-[0.2]">
                                We deliver high-quality construction projects, combining skilled teams, modern technology, and commitment to client satisfaction.
                            </p>
                        </div>

                        {/* Yellow Action Button */}
                        <button className="bg-[#FFC107] hover:bg-white transition-all duration-500 h-[65px] flex items-center group cursor-pointer min-w-[280px]">
                            <div className="bg-white group-hover:bg-black w-[65px] h-full flex items-center justify-center transition-colors">
                                <ArrowUpRight className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                            </div>
                            <span className="flex-1 text-[14px] font-black tracking-widest uppercase text-center px-8 text-black group-hover:text-black">
                                Discover Now
                            </span>
                        </button>
                    </motion.div>

                </div>
            </div>
            
            {/* Bottom Hazard Stripe Ornament */}
            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-black overflow-hidden flex items-center">
                <div 
                    className="w-[200%] h-full shrink-0" 
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #FFC107, #FFC107 10px, transparent 10px, transparent 20px)`,
                        backgroundSize: "20px 100%"
                    }}
                />
            </div>
        </section>
    );
};
