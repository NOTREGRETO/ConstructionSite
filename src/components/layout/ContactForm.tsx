"use client";

import React from "react";
import { Phone, Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const infoBlocks = [
    {
        icon: <Phone className="w-5 h-5 text-black" />,
        title: "CONTACT US",
        content: ["Phone 01: +91 98765 43210", "Phone 02: +91 98765 43211"]
    },
    {
        icon: <Mail className="w-5 h-5 text-black" />,
        title: "EMAIL ADDRESS",
        content: ["SUPPORT@XNLC-LANDMARK.COM", "INFO@XNLC-LANDMARK.COM"]
    },
    {
        icon: <Clock className="w-5 h-5 text-black" />,
        title: "OPENING HOURS",
        content: ["Mon - Sat: 7.00 am - 8.00 pm", "Sunday: 8.00 am - 6.00 pm"]
    },
    {
        icon: <MapPin className="w-5 h-5 text-black" />,
        title: "OUR OFFICE",
        content: ["56/2, Institutional Area, South Delhi", "New Delhi, Delhi 110016, India"]
    }
];

export const ContactForm = () => {
    return (
        <section className="bg-white py-24 px-6 lg:px-12 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20">
                
                {/* Left: Info Grid */}
                <div className="w-full lg:w-1/2 space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-4xl lg:text-[60px] font-[1000] text-black leading-[0.95] tracking-tighter uppercase">
                            GET IN TOUCH FOR<br />
                            PROJECT GUIDANCE
                        </h2>
                        <p className="text-[15px] text-black/60 leading-relaxed font-medium max-w-[500px]">
                            Contact our team today for reliable support, clear communication, and professional assistance with your construction needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
                        {infoBlocks.map((block, i) => (
                            <div key={i} className="space-y-6">
                                <div className="bg-[#FFC107] w-12 h-12 flex items-center justify-center">
                                    {block.icon}
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-[15px] font-[1000] text-black tracking-widest uppercase">{block.title}</h4>
                                    <div className="space-y-1">
                                        {block.content.map((line, idx) => (
                                            <p key={idx} className="text-[13px] text-black/60 font-bold uppercase tracking-tight">{line}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Modern Form */}
                <div className="w-full lg:w-1/2 bg-[#E1EBF2] p-8 lg:p-16 relative">
                    <div className="space-y-2 mb-10 text-center">
                        <h3 className="text-3xl font-[1000] text-black tracking-tighter uppercase">LET'S CONTACT TODAY</h3>
                        <p className="text-[14px] text-black/40 font-bold uppercase tracking-tight">Send your details for quick and reliable assistance.</p>
                    </div>

                    <form className="space-y-4">
                        <input 
                            type="text" 
                            placeholder="Your name*" 
                            className="w-full bg-white px-8 py-5 text-[13px] font-black uppercase tracking-widest outline-none border border-transparent focus:border-[#FFC107] transition-all placeholder:text-black/30"
                        />
                        <input 
                            type="email" 
                            placeholder="Email address*" 
                            className="w-full bg-white px-8 py-5 text-[13px] font-black uppercase tracking-widest outline-none border border-transparent focus:border-[#FFC107] transition-all placeholder:text-black/30"
                        />
                        <input 
                            type="text" 
                            placeholder="Your phone*" 
                            className="w-full bg-white px-8 py-5 text-[13px] font-black uppercase tracking-widest outline-none border border-transparent focus:border-[#FFC107] transition-all placeholder:text-black/30"
                        />
                        <input 
                            type="text" 
                            placeholder="Subject" 
                            className="w-full bg-white px-8 py-5 text-[13px] font-black uppercase tracking-widest outline-none border border-transparent focus:border-[#FFC107] transition-all placeholder:text-black/30"
                        />
                        <textarea 
                            placeholder="Message*" 
                            className="w-full bg-white px-8 py-5 text-[13px] font-black uppercase tracking-widest outline-none border border-transparent focus:border-[#FFC107] transition-all placeholder:text-black/30 min-h-[150px] resize-none"
                        />
                        
                        <button className="w-full flex items-center group overflow-hidden bg-[#FFC107] hover:bg-black transition-all duration-500 rounded-none">
                            <div className="bg-white p-5 flex items-center justify-center group-hover:bg-black transition-colors">
                                <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white group-hover:rotate-45 transition-all" />
                            </div>
                            <span className="flex-1 px-8 py-5 text-[13px] font-[1000] text-black group-hover:text-white tracking-widest uppercase">
                                SEND A MESSAGE
                            </span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};
