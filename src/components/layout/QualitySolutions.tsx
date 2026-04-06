"use client";

import Image from "next/image";
import { Hammer, ClipboardList, HardHat, Ruler } from "lucide-react";

const solutions = [
    {
        title: "RENOVATION & REMODELING",
        icon: Hammer,
        image: "/service_renovation.png"
    },
    {
        title: "CONSTRUCTION PLANNING",
        icon: ClipboardList,
        image: "/indian_engineers.png"
    },
    {
        title: "CONSULTING SERVICES",
        icon: HardHat,
        image: "/service_consulting.png"
    },
    {
        title: "STRUCTURAL DESIGN",
        icon: Ruler,
        image: "/service_structural.png"
    }
];

export const QualitySolutions = () => {
    return (
        <section className="bg-black py-24 px-6 lg:px-12">
            <div className="max-w-[1700px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center mb-20 text-center relative">
                    <div className="absolute top-0 left-0 hidden lg:block">
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                            <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                                // EXPLORE OUR SERVICES
                            </span>
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-[60px] font-[1000] text-white leading-tight tracking-tighter uppercase max-w-[900px]">
                        QUALITY CONSTRUCTION<br />
                        SOLUTIONS PROVIDED
                    </h2>
                </div>

                {/* Grid of Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10">
                    {solutions.map((item, i) => (
                        <div 
                            key={i} 
                            className={`relative p-12 lg:p-16 flex flex-col justify-between min-h-[450px] group cursor-pointer overflow-hidden transition-colors ${
                                i !== solutions.length - 1 ? "lg:border-r border-white/10" : ""
                            } ${i < 2 ? "border-b lg:border-b-0 border-white/10" : "border-b md:border-b-0 border-white/10"}`}
                        >
                            {/* Background Image Layer */}
                            <div className="absolute inset-0 z-0">
                                <Image 
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 flex items-center justify-center group-hover:bg-[#FFC107] transition-colors">
                                    <item.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                                </div>
                            </div>
                            
                            <h3 className="relative z-10 text-2xl lg:text-[28px] font-[1000] text-white leading-none tracking-tighter uppercase mt-24 drop-shadow-lg">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
