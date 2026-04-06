"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const WhoWeAre = () => {
    return (
        <section className="bg-white py-24 px-6 lg:px-12">
            <div className="max-w-[1700px] mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-20 relative">
                    <div className="absolute top-0 left-0 hidden lg:block">
                        <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                            <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                                // WHO WE ARE
                            </span>
                        </div>
                    </div>
                    
                    <h2 className="text-4xl lg:text-[56px] font-[1000] text-black leading-tight tracking-tighter uppercase max-w-[900px] mb-8">
                        CRAFTING RELIABLE SPACES<br />
                        WITH EXPERT PRECISION
                    </h2>
                    
                    <p className="text-black/60 text-sm lg:text-base max-w-[600px] leading-relaxed mb-8">
                        Our construction company provides reliable, high-quality building solutions, combining skilled teams and modern technology to deliver durable projects.
                    </p>
                    
                    <button className="flex items-center gap-2 text-[11px] font-[1000] text-black tracking-widest uppercase group transition-all">
                        <span className="border-b-2 border-black pb-1 group-hover:border-[#FFC107]">JOIN US NOW</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Primary Panel Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {/* Panel 1: Construction Image */}
                    <div className="aspect-[4/5] relative overflow-hidden">
                        <Image 
                            src="/mumbai_hero.png" 
                            alt="Construction site"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Panel 2: Yellow Brand Card */}
                    <div className="aspect-[4/5] bg-[#FFC107] p-10 flex flex-col justify-between relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-[34px] font-[1000] text-black leading-tight tracking-tighter uppercase mb-6">
                                QUALITY<br />
                                CONSTRUCTION,<br />
                                LASTING VALUE
                            </h3>
                            <p className="text-black/70 text-[14px] leading-relaxed max-w-[240px]">
                                Delivering exceptional craftsmanship and durable results for every project.
                            </p>
                        </div>
                        {/* City Skyline Line Art */}
                        <div className="absolute inset-0 pointer-events-none flex items-end">
                            <svg viewBox="0 0 400 200" className="w-full opacity-30 text-black fill-none stroke-current stroke-[0.3]">
                                <path d="M20,180 L20,100 L60,100 L60,180 M60,180 L60,80 L100,80 L100,180 M100,180 L100,120 L140,120 L140,180 M140,180 L140,60 L180,60 L180,180 M180,180 L180,90 L220,90 L220,180 M220,180 L220,110 L260,110 L260,180 M260,180 L260,70 L300,70 L300,180 M300,180 L300,130 L340,130 L340,180 M340,180 L340,100 L380,100 L380,180" />
                                <path d="M40,180 L40,110 M80,180 L80,90 M120,180 L120,130 M160,180 L160,70 M200,180 L200,100 M240,180 L240,120 M280,180 L280,80 M320,180 L320,140 M360,180 L360,110" />
                                <path d="M20,150 L380,150 M20,120 L380,120 M20,90 L380,90 M20,60 L380,60" />
                            </svg>
                        </div>
                    </div>

                    {/* Panel 3: Modern Building Image */}
                    <div className="aspect-[4/5] relative overflow-hidden">
                        <Image 
                            src="/indian_workers.png" 
                            alt="Modern Architecture"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Panel 4: Black Brand Card */}
                    <div className="aspect-[4/5] bg-black p-10 flex flex-col justify-between relative overflow-hidden group">
                        <div className="relative z-10">
                            <p className="text-white text-[15px] leading-relaxed max-w-[200px]">
                                Ensuring dependable<br />
                                building solutions that<br />
                                stand the test.
                            </p>
                        </div>
                        
                        {/* Architectural Wireframe */}
                        <div className="absolute top-1/4 right-0 w-full opacity-20 pointer-events-none">
                             <svg viewBox="0 0 200 200" className="w-[120%] h-auto text-white fill-none stroke-current stroke-[0.3] rotate-12 translate-x-10">
                                <rect x="20" y="20" width="80" height="140" />
                                <rect x="40" y="40" width="60" height="100" />
                                <path d="M20,50 L100,50 M20,80 L100,80 M20,110 L100,110 M20,140 L100,140" />
                                <path d="M40,20 L40,160 M60,20 L60,160 M80,20 L80,160" />
                                <path d="M100,20 L150,50 L150,170 L100,140" />
                                <path d="M100,50 L150,80 M100,80 L150,110 M100,110 L150,140" />
                             </svg>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-[34px] font-[1000] text-white leading-tight tracking-tighter uppercase">
                                RELIABLE<br />
                                CONSTRUCTION,<br />
                                LASTING VALUE
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Bottom Service Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { title: "COMPLETED PROJECTS", desc: "Successfully delivering diverse construction projects on time, exceeding expectations." },
                        { title: "HAPPY CUSTOMER", desc: "Committed to ensuring client satisfaction through exceptional building services." },
                        { title: "COMPANY VALUE", desc: "Building trust, integrity, and excellence as our core principles." },
                        { title: "AWARDS WINNING", desc: "Recognized nationally and internationally for outstanding construction achievements." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-4 border-t border-black/10 pt-6">
                            <h4 className="text-[13px] font-[1000] text-black tracking-tighter uppercase">{item.title}</h4>
                            <p className="text-[13px] text-black/60 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
