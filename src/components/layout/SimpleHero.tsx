"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface SimpleHeroProps {
    title: string;
    currentPage: string;
}

export const SimpleHero = ({ title, currentPage }: SimpleHeroProps) => {
    return (
        <section className="relative w-full h-[400px] lg:h-[500px] overflow-hidden flex items-center justify-center">
            {/* Background Image - Top down planning view */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/indian_planning_team.png" 
                    alt="Planning and Strategy"
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8">
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-5xl lg:text-[100px] font-[1000] text-white tracking-tighter uppercase leading-none"
                >
                    {title}
                </motion.h1>
            </div>

            {/* Bottom Border Ornament */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
        </section>
    );
};
