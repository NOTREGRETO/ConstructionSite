'use client'

import { useState, useMemo } from 'react'
import Image from "next/image"
import { ArrowUpRight, X, ArrowLeft, MapPin, Tag, Building2, Calendar } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Project } from "@/types/project"
import { urlFor } from "@/lib/image-url"

export default function ProjectGridClient({
  projects,
  imageUrls,
}: {
  projects: Project[]
  imageUrls: Record<string, string>
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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

  // If a project is selected, show the details view
  if (selectedProject) {
    const detailImageUrl = selectedProject.image?.asset 
      ? urlFor(selectedProject.image).width(1920).height(1080).url() 
      : null

    return (
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white"
      >
        {/* Detail Hero */}
        <div className="relative h-[60vh] w-full overflow-hidden bg-black">
          {detailImageUrl ? (
            <Image
              src={detailImageUrl}
              alt={selectedProject.title}
              fill
              className="object-cover opacity-60"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border-b border-white/5">
              <span className="text-white/20 italic text-4xl uppercase font-black tracking-widest">
                XNLC Visuals
              </span>
            </div>
          )}
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-24 bg-gradient-to-t from-black/80 to-transparent">
            <div className="max-w-[1700px] mx-auto w-full space-y-6">
              <button 
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#FFC107] transition-colors font-bold uppercase tracking-widest text-[12px] mb-8 group cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to portfolio
              </button>
              
              <div className="space-y-4">
                <div className="bg-[#FFC107] px-4 py-1.5 inline-block">
                  <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                    // {selectedProject.category || "Project Landmark"}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-[6vw] font-[1000] text-white leading-[0.85] tracking-tighter uppercase max-w-[1200px]">
                  {selectedProject.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Content */}
        <div className="py-24 px-6 lg:px-12">
          <div className="max-w-[1700px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              
              {/* Specs */}
              <div className="lg:col-span-4 space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-black/30 font-black uppercase tracking-widest text-[11px]">
                      <MapPin className="w-4 h-4 text-[#FFC107]" />
                      Location
                    </div>
                    <p className="text-xl font-[1000] text-black uppercase tracking-tight">{selectedProject.location || "Confidential"}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-black/30 font-black uppercase tracking-widest text-[11px]">
                      <Tag className="w-4 h-4 text-[#FFC107]" />
                      Category
                    </div>
                    <p className="text-xl font-[1000] text-black uppercase tracking-tight">{selectedProject.category || "Industrial"}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-black/30 font-black uppercase tracking-widest text-[11px]">
                      <Building2 className="w-4 h-4 text-[#FFC107]" />
                      Project Type
                    </div>
                    <p className="text-xl font-[1000] text-black uppercase tracking-tight">Turnkey Execution</p>
                  </div>
                </div>

                <div className="pt-12 border-t border-black/5">
                  <button className="bg-black text-white hover:bg-[#FFC107] hover:text-black px-12 py-6 text-[13px] font-[1000] transition-all uppercase tracking-widest cursor-pointer">
                    Request Information
                  </button>
                </div>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-8 space-y-12">
                <div className="space-y-8">
                  <h2 className="text-3xl font-[1000] text-black tracking-tighter uppercase border-l-4 border-[#FFC107] pl-8">
                    Vision & Execution
                  </h2>
                  <div className="text-[17px] text-black/70 leading-relaxed font-medium space-y-6">
                    {selectedProject.description ? (
                      <p>{selectedProject.description}</p>
                    ) : (
                      <p>This landmark project represents the pinnacle of modern engineering and architectural excellence. Executed with precision and adhering to the highest global standards, this structure stands as a testament to our commitment to building the future.</p>
                    )}
                    <p>Our team provided end-to-end solutions, encompassing advanced structural engineering, site management, and high-quality material sourcing. The project was completed ahead of schedule, showcasing our operational agility and technical prowess in handling complex building requirements.</p>
                  </div>
                </div>

                {/* Technical Overview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 border-t border-black/5">
                  <div className="space-y-4">
                    <h4 className="text-[12px] font-black tracking-widest text-[#FFC107] uppercase">// Structural</h4>
                    <p className="text-[14px] text-black/60 leading-relaxed">Reinforced concrete core with specialized architectural glass facade.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[12px] font-black tracking-widest text-[#FFC107] uppercase">// Sustainability</h4>
                    <p className="text-[14px] text-black/60 leading-relaxed">LEED Gold Certified construction methods and materials.</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[12px] font-black tracking-widest text-[#FFC107] uppercase">// Innovation</h4>
                    <p className="text-[14px] text-black/60 leading-relaxed">Integrated smart building systems with IoT-enabled maintenance.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.section>
    )
  }

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
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
