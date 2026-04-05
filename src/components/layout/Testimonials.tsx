"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        name: "MICHAEL JOHNSON",
        role: "Interior Designer",
        text: "From planning to completion, their dedication, skill, and innovative approach made our building project smooth, efficient, and stress-free entirely.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "DAVID THOMPSON",
        role: "Real Estate Developer",
        text: "Their expertise, integrity, and attention to detail resulted in a high-quality building, delivered on time and exceeding all expectations remarkably.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "EMMA ROBERTS",
        role: "Operations Director",
        text: "The team exceeded our expectations, providing high-quality materials, excellent workmanship, and reliable communication throughout every stage.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "JAMES ANDERSON",
        role: "Project Manager",
        text: "We are extremely impressed with the construction team's professionalism, innovative solutions, and attention to detail, delivering our project perfectly.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "ROBERT KING",
        role: "Senior Architect",
        text: "Their vision and execution are unparalleled. They managed to navigate complex zoning laws while maintaining a bold, contemporary design aesthetic seamlessly.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "SARAH LLOYD",
        role: "Site Consultant",
        text: "Efficiency is their middle name. The site coordination was flawless, and the final results exceeded our rigorous safety and quality benchmarks entirely.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "THOMAS MILLER",
        role: "Chief Engineer",
        text: "A masterclass in industrial construction. They handled the structural challenges with a level of expertise that gave the entire team immense confidence.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
        name: "EMILY WRIGHT",
        role: "Investor",
        text: "The ROI on their projects is incredible because the build quality is timeless. They don't just build structures; they build legacy assets for the future.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
    }
];

export const Testimonials = () => {
    return (
        <section className="bg-black py-24 relative overflow-visible">
            <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">
                
                {/* Header Section: 2-Column Discovery Layout (Re-aligned) */}
                <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] items-start mb-24 gap-12 border-b border-white/10 pb-16">
                    <div className="flex flex-col items-start gap-12">
                        <div className="bg-[#FFC107] px-4 py-2 inline-flex items-center shadow-lg">
                            <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                                // TRUSTED CLIENT REVIEWS
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-[4.8vw] font-[1000] text-white leading-[0.95] tracking-tighter uppercase text-left w-full">
                            REAL CUSTOMER<br />
                            FEEDBACK FROM OUR<br />
                            CLIENTS
                        </h2>
                    </div>
                    
                    <div className="flex flex-col items-start lg:items-end relative">
                         {/* Big Rating Badge - Thoda se aur upar (Lifting even higher) */}
                        <div className="bg-[#FFC107] p-8 lg:p-10 absolute right-[-1.5rem] lg:right-[-3rem] top-[-100px] lg:-top-[400px] flex flex-col justify-between h-[300px] lg:h-[400px] w-full lg:w-[320px] z-50 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
                            {/* Architectural Corner Cut */}
                            <div className="absolute top-0 right-0 w-16 h-16 bg-black" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>
                            
                            <div className="mt-8">
                                <span className="text-[60px] lg:text-[85px] font-[1000] text-black leading-none tracking-[2px] block whitespace-nowrap">4.9/5</span>
                            </div>

                            <div className="space-y-6 mb-4">
                                <div className="flex gap-1.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 fill-black text-black" />
                                    ))}
                                </div>
                                <p className="text-[14px] font-medium text-black leading-snug">
                                    4.9/5 based on<br />
                                    2,500+ reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative pt-40">
                    {/* Auto-sliding Carousel Track */}
                    <div className="relative overflow-hidden -mx-6 lg:-mx-12 px-6 lg:px-12">
                        <motion.div 
                            initial={{ x: "0%" }}
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ 
                                duration: 30, 
                                repeat: Infinity, 
                                ease: "linear",
                            }}
                            className="flex gap-6 w-fit"
                        >
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <div 
                                    key={index}
                                    className="bg-white p-10 flex flex-col justify-between group hover:bg-[#FFC107] transition-all duration-500 min-h-[400px] w-[350px] lg:w-[400px]"
                                >
                                    <div>
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(testimonial.stars)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-[#FFC107] text-[#FFC107] group-hover:fill-black group-hover:text-black" />
                                            ))}
                                        </div>
                                        <p className="text-[16px] lg:text-[17px] leading-relaxed text-black/80 font-medium italic">
                                            "{testimonial.text}"
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-black/10 pt-8 mt-10">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-black/5 overflow-hidden filter grayscale group-hover:grayscale-0 transition-all">
                                                <div className="w-full h-full bg-slate-300" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[13px] font-[1000] text-black tracking-tight uppercase">{testimonial.name}</span>
                                                <span className="text-[11px] font-bold text-black/40 uppercase tracking-widest">{testimonial.role}</span>
                                            </div>
                                        </div>
                                        <Quote className="w-8 h-8 text-[#FFC107] group-hover:text-black transition-colors opacity-50" />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
