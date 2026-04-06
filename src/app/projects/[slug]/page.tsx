import { sanityFetch } from "@/lib/sanity"
import { getProjectBySlugQuery } from "@/lib/queries"
import { Project } from "@/types/project"
import { urlFor } from "@/lib/image-url"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import Image from "next/image"
import { ArrowLeft, MapPin, Tag, Building2, Calendar } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  let project: Project | null = null

  try {
    project = await sanityFetch({
      query: getProjectBySlugQuery,
      params: { slug },
      tags: [`project:${slug}`],
    })
  } catch (error) {
    console.error('Failed to fetch project:', error)
  }

  if (!project) {
    notFound()
  }

  const imageUrl = project.image?.asset 
    ? urlFor(project.image).width(1920).height(1080).url() 
    : null

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-black">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={project.title}
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
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#FFC107] transition-colors font-bold uppercase tracking-widest text-[12px] mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to portfolio
            </Link>
            
            <div className="space-y-4">
              <div className="bg-[#FFC107] px-4 py-1.5 inline-block">
                <span className="text-[11px] font-[1000] text-black tracking-widest uppercase">
                  // {project.category || "Project Landmark"}
                </span>
              </div>
              <h1 className="text-4xl lg:text-[6.5vw] font-[1000] text-white leading-[0.85] tracking-tighter uppercase max-w-[1200px]">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left side: Specs */}
            <div className="lg:col-span-4 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-black/30 font-black uppercase tracking-widest text-[11px]">
                    <MapPin className="w-4 h-4 text-[#FFC107]" />
                    Location
                  </div>
                  <p className="text-xl font-[1000] text-black uppercase tracking-tight">{project.location || "Confidential"}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-black/30 font-black uppercase tracking-widest text-[11px]">
                    <Tag className="w-4 h-4 text-[#FFC107]" />
                    Category
                  </div>
                  <p className="text-xl font-[1000] text-black uppercase tracking-tight">{project.category || "Industrial"}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-black/30 font-black uppercase tracking-widest text-[11px]">
                    <Building2 className="w-4 h-4 text-[#FFC107]" />
                    Project Type
                  </div>
                  <p className="text-xl font-[1000] text-black uppercase tracking-tight">Turnkey Execution</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-black/30 font-black uppercase tracking-widest text-[11px]">
                    <Calendar className="w-4 h-4 text-[#FFC107]" />
                    Completed
                  </div>
                  <p className="text-xl font-[1000] text-black uppercase tracking-tight">2024</p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-12 border-t border-black/5">
                <button className="bg-black text-white hover:bg-[#FFC107] hover:text-black px-12 py-6 text-[13px] font-[1000] transition-all uppercase tracking-widest cursor-pointer">
                  Request Information
                </button>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-8">
                <h2 className="text-3xl font-[1000] text-black tracking-tighter uppercase border-l-4 border-[#FFC107] pl-8">
                  Project <br />Vision & Execution
                </h2>
                <div className="text-[17px] text-black/70 leading-relaxed font-medium space-y-6">
                  {project.description ? (
                    <p>{project.description}</p>
                  ) : (
                    <p>This landmark project represents the pinnacle of modern engineering and architectural excellence. Executed with precision and adhering to the highest global standards, this structure stands as a testament to our commitment to building the future. Every element of this {project.category?.toLowerCase()} development has been meticulously planned to ensure maximum efficiency, sustainability, and aesthetic impact.</p>
                  )}
                  <p>Our team provided end-to-end solutions, encompassing advanced structural engineering, site management, and high-quality material sourcing. The project was completed ahead of schedule, showcasing our operational agility and technical prowess in handling complex building requirements.</p>
                </div>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-16 border-t border-black/5">
                <div className="space-y-4">
                  <h4 className="text-[12px] font-black tracking-widest text-[#FFC107] uppercase">// Structural</h4>
                  <p className="text-[14px] text-black/60 leading-relaxed">Reinforced concrete core with specialized architectural glass facade treatment for maximum thermal efficiency.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[12px] font-black tracking-widest text-[#FFC107] uppercase">// Sustainability</h4>
                  <p className="text-[14px] text-black/60 leading-relaxed">LEED Gold Certified construction methods, utilizing recycled materials and low-carbon footprint logistics.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[12px] font-black tracking-widest text-[#FFC107] uppercase">// Innovation</h4>
                  <p className="text-[14px] text-black/60 leading-relaxed">Integrated smart building systems with IoT-enabled maintenance scheduling and real-time energy monitoring.</p>
                </div>
              </div>

              {/* Large Secondary Image */}
              <div className="relative h-[600px] w-full overflow-hidden bg-black border border-black/5 group">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-105 group-hover:scale-100"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="text-[10px] font-black tracking-[0.4em] text-white opacity-50 uppercase">Architecture Details // {project.title}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
