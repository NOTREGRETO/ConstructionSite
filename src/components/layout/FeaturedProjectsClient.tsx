'use client'

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Project } from "@/types/project"
import Link from "next/link"

export default function FeaturedProjectsClient({
  projects,
  imageUrls,
}: {
  projects: Project[]
  imageUrls: Record<string, string>
}) {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, projects.length - 2)

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex))
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0))

  return (
    <section className="bg-white pt-12 overflow-hidden relative">
      <div className="max-w-[1700px] mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Area: Tag Left, Heading Center, Nav Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[150px,1fr,150px] gap-8 items-center mb-12 w-full">
          {/* Left Tag */}
          <div className="hidden lg:block text-left">
            <div className="bg-[#FFC107] px-4 py-1.5 inline-flex items-center">
              <span className="text-[11px] font-[1000] text-black tracking-widest uppercase truncate">
                // FEATURED PROJECTS
              </span>
            </div>
          </div>

          {/* Centered Heading */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-[4.2vw] font-[1000] text-black leading-[0.9] tracking-tighter uppercase max-w-[1200px] mx-auto">
              SHOWCASING EXCEPTIONAL<br />
              PROJECTS WITH QUALITY
            </h2>
          </div>

          {/* Right Navigation */}
          <div className="flex gap-4 justify-center lg:justify-end pr-4">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-12 h-12 border border-black/10 bg-white flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed group z-30"
            >
              <ArrowLeft className="w-6 h-6 text-black transition-transform group-hover:-translate-x-1" stroke="currentColor" strokeWidth={2.5} />
            </button>
            <button
              onClick={next}
              disabled={index === maxIndex}
              className="w-12 h-12 border border-black/10 bg-white flex items-center justify-center disabled:opacity-20 disabled:cursor-not-allowed group z-30"
            >
              <ArrowRight className="w-6 h-6 text-black transition-transform group-hover:translate-x-1" stroke="currentColor" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Sliding Carousel Track */}
        <div className="relative mb-12">
          <motion.div
            initial={false}
            animate={{ x: `${-index * 51.5}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="flex gap-10"
          >
            {projects.map((project) => (
              <div key={project._id} className="group relative min-w-[100%] lg:min-w-[48.5%] flex-shrink-0">
                {/* Image Container */}
                <div className="relative h-[400px] lg:h-[600px] w-full overflow-hidden">
                  {imageUrls[project._id] && (
                    <Image
                      src={imageUrls[project._id]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    />
                  )}
                  {/* Blueish Label Tag (Top-Left) */}
                  {project.label && (
                    <div className="absolute top-0 left-0 bg-[#E1EBF2] px-6 py-2">
                      <span className="text-[10px] font-black text-black tracking-widest uppercase">
                        {project.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* White Overlapping Content Card (Bottom-Left Alignment) */}
                <Link 
                  href={`/projects/${project.slug?.current}`}
                  className="absolute bottom-[-10px] left-[-0px] lg:bottom-0 lg:left-0 bg-white p-8 lg:p-14 w-full lg:w-[80%] shadow-2xl z-20 group/card block"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl lg:text-[28px] font-[1000] text-black tracking-tighter uppercase leading-none group-hover/card:text-[#FFC107] transition-colors">
                      {project.title}
                    </h3>
                    {project.description && (
                      <p className="text-[13px] text-black/60 leading-relaxed font-medium max-w-[400px]">
                        {project.description}
                      </p>
                    )}
                  </div>
                  {/* Yellow Action Button */}
                  <div className="absolute bottom-0 right-0 w-12 h-14 bg-[#FFC107] flex items-center justify-center hover:bg-black transition-colors cursor-pointer group/btn">
                    <ArrowUpRight className="w-5 h-5 text-black group-hover/btn:text-white transition-colors" />
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Massive Bottom Marquee with Diamond Symbol */}
      <div className="w-full py-16 overflow-hidden border-t border-black/5">
        <motion.div
          animate={{ x: [0, -2800] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap items-center gap-20"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-20">
              <span className="text-[10vw] font-[1000] text-black/5 uppercase tracking-tighter leading-none">
                BUILDING SUCCESS TOGETHER
              </span>
              <div className="w-12 h-12 flex items-center justify-center opacity-5">
                <div className="w-10 h-10 bg-black rotate-45" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
