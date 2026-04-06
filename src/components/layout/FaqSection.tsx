"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "CAN I MAKE CHANGES DURING THE CONSTRUCTION PROCESS?",
        answer: "Yes, clients can request modifications during construction. Our team evaluates feasibility, adjusts plans accordingly, and ensures changes integrate seamlessly without compromising quality, safety, or project timelines."
    },
    {
        question: "HOW DO YOU ENSURE QUALITY AND SAFETY?",
        answer: "We adhere to strict safety protocols and international building standards. Regular site inspections, premium materials, and certified engineering oversight ensure that every square inch of our build meets XNLC's elite quality benchmarks."
    },
    {
        question: "DO YOU PROVIDE WARRANTIES OR GUARANTEES?",
        answer: "Absolutely. We stand by our craftsmanship. Every institutional and residential project comes with a comprehensive structural warranty and post-completion support guarantee to ensure long-term peace of mind."
    },
    {
        question: "DO YOU OFFER ONGOING MAINTENANCE OR REPAIR SERVICES?",
        answer: "Yes, XNLC LANDMARK provides full lifecycle support. Our dedicated maintenance teams offer periodic structural health checks and repair services for all our completed developments across India."
    },
    {
        question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
        answer: "We accept all corporate and institutional payment standards, including milestone-based escrow payments, direct banking transfers, and structured project financing options."
    },
    {
        question: "WHAT MAKES YOU DIFFERENT FROM OTHER DESIGN FIRMS?",
        answer: "Our unique fusion of industrial grit with luxury refinement sets us apart. We don't just build; we engineer landmarks with a focus on institutional legacy and premium Indian aesthetics."
    }
];

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-white py-24 px-6 lg:px-12 relative">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="space-y-8 mb-16">
                    <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                        <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                            // FREQUENTLY ASKED QUESTIONS
                        </span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-[60px] font-[1000] text-black leading-[0.9] tracking-tighter uppercase">
                        GUIDING YOU THROUGH<br />
                        COMMON QUESTIONS
                    </h2>
                </div>

                {/* FAQ Accordion Grid */}
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-black/5 last:border-0 overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className={`w-full flex items-center justify-between p-6 lg:px-10 lg:py-8 text-left transition-colors duration-300 ${openIndex === i ? "bg-[#E1EBF2]" : "bg-[#F8FAFC] hover:bg-[#E1EBF2]/50"}`}
                            >
                                <span className="text-[15px] lg:text-[18px] font-[1000] text-black tracking-tight uppercase">
                                    {faq.question}
                                </span>
                                {openIndex === i ? (
                                    <ChevronUp className="w-5 h-5 text-black" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-black/40" />
                                )}
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="p-10 lg:px-16 lg:pb-12 bg-white">
                                            <p className="text-[15px] lg:text-[17px] leading-relaxed text-black/60 font-medium max-w-[900px]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
