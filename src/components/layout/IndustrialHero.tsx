"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

const heroImages = [
    "/mumbai_hero.png",
    "/indian_engineers.png",
    "/indian_action.png"
];

export const IndustrialHero = () => {
    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-center">
            {/* Background Image Carousel with Cinematic Cross-fade */}
            <div className="absolute inset-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image 
                            src={heroImages[currentImage]} 
                            alt={`Hero Background ${currentImage + 1}`}
                            fill
                            sizes="100vw"
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
            </div>

            {/* Content Container */}
            <div className="relative z-20 max-w-[1700px] mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-[800px]">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[#FFC107] text-[13px] font-[1000] tracking-widest uppercase mb-6 drop-shadow-lg">
                            // BUILDING WITH INTEGRITY AND EXCELLENCE
                        </p>
                        
                        <h1 className="text-white text-5xl lg:text-[100px] font-[1000] leading-[0.95] tracking-tighter uppercase mb-10 drop-shadow-2xl">
                            BUILDING<br />
                            CONSTRUCTION<br />
                            SOLUTIONS
                        </h1>

                        <p className="text-white/80 text-base lg:text-lg max-w-[500px] mb-12 leading-relaxed font-medium">
                            We shape each design with careful planning, accurate execution, and dedicated expertise to create spaces that support lasting growth.
                        </p>

                        <div className="flex items-center gap-6">
                            <button className="flex items-center group overflow-hidden bg-[#FFC107] hover:bg-[#FFD700] transition-colors rounded-none">
                                <div className="bg-white p-4 group-hover:bg-black group-hover:text-white transition-colors">
                                    <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white" />
                                </div>
                                <span className="px-8 py-4 text-[13px] font-[1000] text-black tracking-widest uppercase">
                                    DISCOVER NOW
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side Stats Box */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-20 right-6 lg:right-12 z-30 hidden md:block"
            >
                <div className="bg-black p-12 relative border-l-4 border-[#FFC107] group">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 group-hover:bg-[#FFC107]/20 transition-colors" />
                    <h2 className="text-white text-[80px] font-[1000] leading-none mb-2 tracking-tighter">
                        30+
                    </h2>
                    <p className="text-white text-[13px] font-[1000] tracking-widest uppercase mb-4">
                        YEARS OF EXPERIENCE
                    </p>
                    <p className="text-white/40 text-[11px] leading-relaxed max-w-[180px] uppercase font-bold">
                        Decades of expertise providing trusted construction services.
                    </p>
                </div>
            </motion.div>
            
            {/* Cinematic Editorial Header */}
            <div className="absolute top-0 left-0 w-full z-50 p-6 lg:p-12 hidden lg:flex items-center justify-between pointer-events-none">
                {/* Left Side: Navigation Links */}
                <div className="flex-1 flex justify-start pointer-events-auto">
                    <nav className="flex items-center gap-10 text-white text-[13px] font-[1000] tracking-widest uppercase">
                        <a href="/" className="relative group border-b-2 border-[#FFC107] pb-1 hover:text-[#FFC107] transition-colors">Home</a>
                        <a href="/about" className="hover:text-[#FFC107] transition-colors">About Us</a>
                        <a href="/projects" className="hover:text-[#FFC107] transition-colors">Projects</a>
                        <a href="/projects" className="hover:text-[#FFC107] transition-colors">Services</a>
                        <a href="/about" className="hover:text-[#FFC107] transition-colors">Contact Us</a>
                    </nav>
                </div>

                {/* Center: Floating Logo */}
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center pointer-events-auto">
                    <Image 
                        src="/logo-transparent.png" 
                        alt="XNLC LANDMARK" 
                        width={1200} 
                        height={400} 
                        className="h-56 w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                        priority
                    />
                </div>

                {/* Right Side: Call & CTA */}
                <div className="flex-1 flex justify-end items-center gap-6 pointer-events-auto">
                    <div className="flex items-center bg-white shadow-2xl">
                        <div className="bg-[#FFC107] p-5 flex items-center justify-center">
                            <Phone className="w-4 h-4 text-black" />
                        </div>
                        <div className="px-6 py-2">
                            <p className="text-[10px] text-black/60 font-bold uppercase tracking-widest leading-none mb-1">Call us:</p>
                            <p className="text-[13px] text-black font-[1000] tracking-tight">+91 98765 43210</p>
                        </div>
                    </div>

                    <button className="bg-black hover:bg-[#FFC107] text-white hover:text-black px-8 py-5 transition-all duration-300 flex items-center gap-4 group">
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                        <span className="text-[12px] font-[1000] tracking-widest uppercase text-nowrap">Get in Touch</span>
                    </button>
                </div>
            </div>
        </section>
    );
};
