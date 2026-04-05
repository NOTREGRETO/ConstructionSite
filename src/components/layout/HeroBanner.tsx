"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroBanner = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center">
            {/* Cinematic Background with Discovery Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image 
                    src="/scaffolding-workers.png" 
                    alt="Construction site depth"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-20" />
            </div>

            {/* Massive Brutalist Text */}
            <div className="relative z-30 max-w-[1700px] mx-auto px-6 lg:px-12 w-full pt-20">
                <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="flex flex-col relative"
                >
                    <h1 className="text-[6.5vw] font-[900] text-white leading-[1.1] tracking-tighter uppercase whitespace-nowrap drop-shadow-2xl">
                        BUILDING STRENGTH
                    </h1>
                    
                    <h1 className="text-[6.5vw] font-[900] text-white leading-[1.1] tracking-tighter uppercase ml-[15vw] lg:ml-[25vw] mt-2 drop-shadow-2xl">
                        WITH INTEGRITY
                    </h1>
                </motion.div>
            </div>

            {/* Crossing Hazard Tapes */}
            <div className="absolute bottom-[10%] left-0 w-full h-32 z-20 flex items-center justify-center pointer-events-none">
                {/* Tape 1: Bowed Top-Left to Bottom-Right */}
                <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ 
                        scaleX: 1, 
                        opacity: 1,
                        backgroundPosition: ["0px 0px", "120px 0px"] 
                    }}
                    transition={{ 
                        scaleX: { duration: 1.5, delay: 0.8, ease: "easeOut" },
                        opacity: { duration: 1.5, delay: 0.8 },
                        backgroundPosition: { repeat: Infinity, duration: 2, ease: "linear" }
                    }}
                    className="absolute w-[140%] h-10 bg-[#FFD700] -rotate-6 shadow-2xl flex items-center overflow-hidden"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            45deg,
                            #FFD700,
                            #FFD700 30px,
                            #000000 30px,
                            #000000 60px
                        )`,
                        backgroundSize: "60px 60px",
                        clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)" // Subtle bow
                    }}
                />
                
                {/* Tape 2: Bowed Bottom-Left to Top-Right */}
                <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ 
                        scaleX: 1, 
                        opacity: 1,
                        backgroundPosition: ["0px 0px", "-120px 0px"] 
                    }}
                    transition={{ 
                        scaleX: { duration: 1.5, delay: 0.8, ease: "easeOut" },
                        opacity: { duration: 1.5, delay: 0.8 },
                        backgroundPosition: { repeat: Infinity, duration: 2, ease: "linear" }
                    }}
                    className="absolute w-[140%] h-10 bg-[#FFD700] rotate-6 shadow-2xl flex items-center overflow-hidden"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            -45deg,
                            #FFD700,
                            #FFD700 30px,
                            #000000 30px,
                            #000000 60px
                        )`,
                        backgroundSize: "60px 60px",
                        clipPath: "polygon(0 0, 100% 10%, 100% 100%, 0 90%)" // Subtle bow
                    }}
                />
            </div>

            {/* Base Darkening Area */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
};
