"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const AdBanner = () => {
    return (
        <section className="relative w-full h-[300px] lg:h-[400px] z-40 -mt-[150px] lg:-mt-[200px] mb-[-150px] lg:mb-[-200px] px-6 lg:px-12 pointer-events-none">
            <div className="max-w-[1700px] mx-auto h-full pointer-events-auto shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden group">
                <div className="relative w-full h-full">
                    {/* Background Image */}
                    <Image 
                        src="/indian_engineers.png" 
                        alt="Exclusive Construction Deals"
                        fill
                        className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-12 lg:px-24 py-12 gap-10">
                        <motion.h2 
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="text-white text-2xl lg:text-[2.8vw] font-[1000] tracking-tighter uppercase leading-[0.95] max-w-[900px] lg:max-w-max drop-shadow-2xl"
                        >
                            EXCLUSIVE DEALS ON<br />
                            BUILDING SERVICES
                        </motion.h2>

                        <button className="flex items-center bg-[#FFC107] hover:bg-[#FFD700] transition-all group overflow-hidden">
                            <div className="bg-white p-5 group-hover:p-6 transition-all border-r border-black/10">
                                <ArrowUpRight className="w-5 h-5 text-black group-hover:rotate-45 transition-transform" />
                            </div>
                            <span className="px-10 py-5 text-[13px] font-[1000] text-black tracking-widest uppercase">
                                DISCOVER NOW
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
