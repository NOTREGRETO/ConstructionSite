"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
    return (
        <section className="bg-white overflow-hidden relative border-b border-black/5">
            <div className="flex flex-col lg:flex-row min-h-[700px] items-stretch">
                
                {/* Left: Text Content & Contact Blocks */}
                <div className="w-full lg:w-[45%] flex flex-col">
                    <div className="bg-[#E1EBF2] p-12 lg:py-16 lg:px-24 flex-1 flex flex-col justify-center items-start space-y-10 relative">
                        {/* Yellow Tag */}
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center self-start">
                            <span className="text-[11px] font-black text-black tracking-widest uppercase">
                                // Let's work together
                            </span>
                        </div>

                        {/* Massive Industrial Heading */}
                        <h2 className="text-4xl lg:text-[5vw] font-[1000] text-black leading-[0.9] tracking-tighter uppercase grayscale-[0.2]">
                            Connect with our<br />
                            team today
                        </h2>

                        {/* Description */}
                        <div className="max-w-[400px]">
                            <p className="text-[14px] leading-relaxed text-black/60 font-medium font-sans">
                                Contact our team today for reliable support, clear communication, and professional assistance with your construction needs.
                            </p>
                        </div>

                        {/* Link */}
                        <a href="#" className="flex items-center gap-2 group">
                            <div className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                            </div>
                            <span className="text-[12px] font-black tracking-widest uppercase border-b-2 border-transparent group-hover:border-black transition-all">
                                Join us now
                            </span>
                        </a>
                    </div>

                    {/* Bottom Contact Blocks (Stacked on Left) */}
                    <div className="flex flex-col md:flex-row items-stretch h-auto md:h-32 border-t border-black/5">
                        <div className="flex-1 bg-[#FFC107] p-8 md:p-10 flex flex-col justify-center gap-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Contact Us:</span>
                            <span className="text-2xl font-[1000] text-black tracking-tighter whitespace-nowrap">+91 98765 43210</span>
                        </div>
                        <div className="flex-1 bg-black p-8 md:p-10 flex flex-col justify-center gap-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Email Address:</span>
                            <span className="text-xl lg:text-[22px] font-[1000] text-white tracking-tighter whitespace-nowrap">INFO@XNLC-LANDMARK.COM</span>
                        </div>
                    </div>
                </div>

                {/* Right: Worker Image Section (Full Height) */}
                <div className="w-full lg:w-[55%] relative min-h-[500px]">
                    <Image 
                        src="/indian_planning_team.png"
                        alt="Indian Professional Engineering Team"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/10" />
                </div>
            </div>

            {/* Industrial "Running" Hazard Stripe Bottom Border */}
            <div className="w-full h-4 bg-black relative flex items-center overflow-hidden">
                <motion.div 
                    animate={{ 
                        backgroundPosition: ["0px 0px", "60px 0px"] 
                    }}
                    transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="absolute inset-0 w-[200%] h-full"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #FFC107, #FFC107 15px, #000 15px, #000 30px)`,
                        backgroundSize: "60px 100%"
                    }}
                />
            </div>
        </section>
    );
};
