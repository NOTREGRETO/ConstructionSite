"use client";

import { Handshake, Construction, ShieldCheck } from "lucide-react";

const services = [
    {
        title: "CUSTOMER FOCUS",
        label: "RESPONSIVE, PERSONALIZED, RELIABLE",
        icon: <Handshake className="w-10 h-10 text-[#FFC107]" />
    },
    {
        title: "RELIABLE DELIVERY",
        label: "EXPERT CONSTRUCTION TEAM",
        icon: <Construction className="w-10 h-10 text-[#FFC107]" />
    },
    {
        title: "SERVICE EXCELLENCE",
        label: "RELIABLE QUALITY DELIVERY",
        icon: <ShieldCheck className="w-10 h-10 text-[#FFC107]" />
    }
];

export const WorkExpertise = () => {
    return (
        <section className="bg-white pt-24 pb-48 lg:pb-72 px-6 lg:px-12 relative">
            <div className="max-w-[1700px] mx-auto">
                {/* Header */}
                <div className="space-y-6 mb-20 text-center lg:text-left">
                    <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                        <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                            // WHAT WE DO
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-[4.2vw] font-[1000] text-black leading-[1] tracking-tighter uppercase">
                        EXPERT CONSTRUCTION<br />
                        BRINGING PLANS ALIVE
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/5">
                    {services.map((service, i) => (
                        <div 
                            key={i} 
                            className="bg-white p-12 lg:p-20 border-r border-b lg:border-b-0 border-black/5 last:border-r-0 hover:bg-[#F8F9FA] transition-all group"
                        >
                            <div className="space-y-12">
                                <span className="text-[10px] font-bold text-black/30 tracking-[0.2em] uppercase block">
                                    {service.label}
                                </span>
                                <div className="group-hover:scale-110 transition-transform origin-left duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl lg:text-[28px] font-[1000] text-black tracking-tighter uppercase leading-none">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
