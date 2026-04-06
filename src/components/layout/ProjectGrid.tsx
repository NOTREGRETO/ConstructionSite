"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    { title: "THE ORION TOWERS", location: "MUMBAI", category: "RESIDENTIAL", image: "/mumbai_hero.png" },
    { title: "RAJMAHAL HERITAGE", location: "JAIPUR", category: "HERITAGE", image: "/indian_heritage_build.png" },
    { title: "BENGALURU TECH CENTER", location: "BENGALURU", category: "COMMERCIAL", image: "/indian_corporate.png" },
    { title: "COORG VALLEY VILLAS", location: "COORG", category: "RESIDENTIAL", image: "/project_villas.png" },
    { title: "CYBER HEIGHTS", location: "BENGALURU", category: "IT PARK", image: "/architectural_highrise_glass_1775406181687.png" },
    { title: "CRYSTAL HUB", location: "NOIDA", category: "CORPORATE", image: "/geometric_glass_building_1775406686713.png" },
    { title: "TECH PARK PHASE II", location: "HYDERABAD", category: "INNOVATION", image: "/indian_corporate_park_modern_1775441243306.png" },
    { title: "SKYLINE COMPLEX", location: "MUMBAI", category: "RESIDENTIAL", image: "/indian_luxury_towers_mumbai_1775440759759.png" },
    { title: "MODULAR SMART HOMES", location: "PUNE", category: "MIXED USE", image: "/news-modular.png" },
    { title: "HERITAGE RESTORATION", location: "KOLKATA", category: "INSTITUTIONAL", image: "/service_renovation.png" },
    { title: "INDUSTRIAL CORE", location: "AHMEDABAD", category: "MANUFACTURING", image: "/service_structural.png" },
    { title: "SUNSET SKY SCRAPER", location: "MUMBAI", category: "RESIDENTIAL", image: "/mumbai_skyscraper_sunset_hero_1775440701808.png" },
    { title: "THE ARCHITECTURAL HUB", location: "DELHI", category: "OFFICE", image: "/service_consulting.png" },
    { title: "RESIDENTIAL SEA-VIEW", location: "MUMBAI", category: "HIGH-RISE", image: "/mumbai_residential.png" },
    { title: "URBAN MODERNITY", location: "CHENNAI", category: "COMMERCIAL", image: "/indian_action.png" }
];

export const ProjectGrid = () => {
    return (
        <section className="bg-white py-24 px-6 lg:px-12">
            <div className="max-w-[1700px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
                    <div className="space-y-6">
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                            <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                                // GLOBAL PORTFOLIO
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-[5vw] font-[1000] text-black leading-[0.9] tracking-tighter uppercase">
                            OUR COMPLETED<br />
                            LANDMARKS
                        </h2>
                    </div>
                    <p className="text-[15px] text-black/50 leading-relaxed max-w-[400px] font-medium">
                        Explore our extensive portfolio of 15+ high-impact projects across India, from luxury residential towers to massive industrial hubs.
                    </p>
                </div>

                {/* 15 Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative cursor-pointer"
                        >
                            {/* Image Container */}
                            <div className="relative h-[450px] overflow-hidden">
                                <Image 
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                                
                                {/* Top Label */}
                                <div className="absolute top-6 left-6 flex gap-2">
                                    <div className="bg-[#E1EBF2] px-4 py-1.5 backdrop-blur-sm">
                                        <span className="text-[10px] font-black text-black tracking-widest uppercase">
                                            {project.category}
                                        </span>
                                    </div>
                                    <div className="bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                                        <span className="text-[10px] font-black text-white tracking-widest uppercase">
                                            {project.location}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Overlay (Reveals on Hover) */}
                                <div className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <h3 className="text-2xl font-[1000] text-white tracking-tighter uppercase leading-none mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-[#FFC107] font-black text-[12px] tracking-widest uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        View Case Study
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
