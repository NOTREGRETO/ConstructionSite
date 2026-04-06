"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const supportItems = [
    {
        title: "TEAM SUPPORT",
        description: "Our dedicated team provides responsive assistance to ensure every client receives dependable guidance throughout projects.",
        image: "/indian_workers.png"
    },
    {
        title: "QUICK ASSISTANCE",
        description: "We deliver fast, clear solutions to help clients resolve concerns and maintain steady project progress efficiently.",
        image: "/indian_planning_team.png"
    },
    {
        title: "PROJECT GUIDANCE",
        description: "Expert advice helps clients navigate construction decisions confidently, ensuring each step aligns with project goals effectively.",
        image: "/indian_engineers.png"
    }
];

export const SupportGrid = () => {
    return (
        <section className="bg-white relative">
            {/* Header Section with Background */}
            <div className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
                <Image 
                    src="/indian_planning_team.png"
                    alt="Planning Session"
                    fill
                    className="object-cover brightness-[0.3]"
                />
                <div className="relative z-10 text-center space-y-6 px-6">
                    <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
                        <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                            // LET'S WORK TOGETHER
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-[70px] font-[1000] text-white leading-[0.9] tracking-tighter uppercase">
                        NEED MORE HELP?<br />
                        CONTACT OUR TEAM
                    </h2>
                </div>
            </div>

            {/* Three Column Grid (Overlapping) */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 -mt-32 relative z-20 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {supportItems.map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white shadow-2xl p-8 lg:p-10 flex flex-col space-y-8"
                        >
                            <div className="relative h-[250px] w-full overflow-hidden">
                                <Image 
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                                />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-[1000] text-black tracking-tighter uppercase leading-none">
                                    {item.title}
                                </h3>
                                <p className="text-[14px] leading-relaxed text-black/60 font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
