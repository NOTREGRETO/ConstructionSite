'use client'

import { useState, useMemo } from 'react'
import Image from "next/image"
import { ArrowUpRight, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Project } from "@/types/project"
import Link from "next/link"

export default function ProjectGridClient({
  projects,
  imageUrls,
}: {
  projects: Project[]
  imageUrls: Record<string, string>
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = useMemo(() => {
    const cats = new Set<string>()
    projects.forEach(p => {
      if (p.category) cats.add(p.category)
    })
    return Array.from(cats).sort()
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (!activeCategory) return projects
    return projects.filter(p => p.category === activeCategory)
  }, [projects, activeCategory])

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
          <div className="text-right">
            <p className="text-[15px] text-black/50 leading-relaxed max-w-[400px] font-medium uppercase tracking-tight mb-8">
                Explore our extensive portfolio of high-impact projects across India, from luxury residential towers to massive industrial hubs.
            </p>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap lg:justify-end gap-3">
                <button
                    onClick={() => setActiveCategory(null)}
                    className={`px-6 py-3 text-[11px] font-black tracking-widest uppercase transition-all duration-300 border ${!activeCategory ? 'bg-black text-white border-black' : 'bg-white text-black/40 border-black/10 hover:border-black'}`}
                >
                    ALL PROJECTS
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-3 text-[11px] font-black tracking-widest uppercase transition-all duration-300 border ${activeCategory === cat ? 'bg-black text-white border-black' : 'bg-white text-black/40 border-black/10 hover:border-black'}`}
                    >
                        {cat}
                    </button>
                ))}
                {activeCategory && (
                    <button
                        onClick={() => setActiveCategory(null)}
                        className="flex items-center gap-2 px-6 py-3 text-[11px] font-black tracking-widest uppercase bg-[#FFC107] text-black animate-in fade-in slide-in-from-right-4 duration-500"
                    >
                        <X className="w-3 h-3" />
                        RESET
                    </button>
                )}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link 
                  href={`/projects/${project.slug?.current}`}
                  className="group relative block"
                >
                  {/* Image Container */}
                  <div className="relative h-[500px] overflow-hidden bg-zinc-50 border border-black/[0.03]">
                    {imageUrls[project._id] && (
                      <Image
                        src={imageUrls[project._id]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-700" />

                    {/* Top Label */}
                    <div className="absolute top-8 left-8 flex flex-col gap-2 pointer-events-none">
                      {project.category && (
                        <div className="bg-[#E1EBF2] px-4 py-2 self-start">
                          <span className="text-[10px] font-black text-black tracking-widest uppercase">
                            {project.category}
                          </span>
                        </div>
                      )}
                      {project.location && (
                        <div className="bg-white/10 px-4 py-2 backdrop-blur-md self-start border border-white/10">
                          <span className="text-[10px] font-black text-white tracking-widest uppercase">
                            {project.location}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/0 group-hover:bg-black/60">
                      <h3 className="text-3xl font-[1000] text-white tracking-tighter uppercase leading-none mb-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[#FFC107] font-black text-[12px] tracking-widest uppercase translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">
                        View Case Study
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Decorative Border */}
                    <div className="absolute inset-6 border border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
