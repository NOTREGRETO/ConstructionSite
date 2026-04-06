"use client";

import Image from "next/image";
import { ArrowUpRight, Wrench, Hammer, HardHat, Drill } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "SERVICE EXCELLENCE",
        label: "RELIABLE QUALITY DELIVERY",
        icon: <Wrench className="w-12 h-12 text-[#FFC107]" />
    },
    {
        title: "INNOVATIVE SOLUTIONS",
        label: "CREATIVE, EFFICIENT, SUSTAINABLE",
        icon: <Drill className="w-12 h-12 text-[#FFC107]" />
    },
    {
        title: "CUSTOMER FOCUS",
        label: "RESPONSIVE, PERSONALIZED, RELIABLE",
        icon: <HardHat className="w-12 h-12 text-[#FFC107]" />
    },
    {
        title: "RELIABLE DELIVERY",
        label: "EXPERT CONSTRUCTION TEAM",
        icon: <Hammer className="w-12 h-12 text-[#FFC107]" />
    }
];

export const ServicesSection = () => {
    return (
        <section className="bg-[#E1EBF2] relative overflow-hidden">
            {/* Top Hazard Stripe Border */}
            <div className="w-full h-8 bg-black relative flex items-center overflow-hidden">
                <motion.div 
                    animate={{ backgroundPosition: ["0px 0px", "60px 0px"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-[200%] h-full"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, #FFC107, #FFC107 15px, #000 15px, #000 30px)`,
                        backgroundSize: "60px 100%"
                    }}
                />
            </div>

            <div className="max-w-full relative px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] gap-0">
                    
                    {/* Left: Content Area (Light Blue Background) */}
                    <div className="px-6 lg:px-24 py-20 flex flex-col justify-center items-start">
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center mb-8">
                            <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                                // WHY CHOOSE US
                            </span>
                        </div>
                        
                        <h2 className="text-4xl lg:text-[4.5vw] font-[1000] text-black leading-[0.9] tracking-tighter uppercase mb-10">
                            CHOOSE US FOR RELIABLE,<br />
                            HIGH-QUALITY SERVICE
                        </h2>

                        <p className="text-[14px] text-black/60 leading-relaxed font-medium max-w-[400px] mb-12">
                            Our construction company delivers high quality, reliable services, creating durable, efficient, and innovative building solutions.
                        </p>

                        <a href="#" className="flex items-center gap-2 group pt-2">
                            <div className="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight className="w-4 h-4 text-black" />
                            </div>
                            <span className="text-[13px] font-black tracking-widest uppercase border-b-2 border-transparent group-hover:border-black transition-all">
                                View All Services
                            </span>
                        </a>
                    </div>

                    {/* Right: Architectural Image Contained in Grid */}
                    <div className="relative h-[400px] lg:h-auto w-full overflow-hidden">
                        <Image 
                            src="/indian_heritage_build.png"
                            alt="Modern Indian Heritage-Fusion Building"
                            fill
                            className="object-cover contrast-[1.05]"
                            priority
                        />
                    </div>
                </div>

                {/* Overlapping White Cards at the bottom - Full width grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch border-t border-black/5 bg-[#E1EBF2]">
                    {services.map((service, i) => (
                        <div 
                            key={i}
                            className="bg-white p-10 py-16 border-r border-b border-black/5 flex flex-col justify-between min-h-[380px] last:border-r-0 hover:bg-[#FFC107] transition-all duration-500 group"
                        >
                            <div className="space-y-12">
                                <span className="text-[10px] font-bold text-black/30 tracking-[0.1em] uppercase block">{service.label}</span>
                                <div className="transition-transform duration-500 group-hover:scale-110 origin-left text-[#FFC107] group-hover:text-black">
                                    {service.icon}
                                </div>
                            </div>
                            
                            <h4 className="text-[18px] lg:text-[23px] font-[1000] text-black tracking-tighter uppercase leading-none group-hover:text-black">
                                {service.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

