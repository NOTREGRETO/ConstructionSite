import { sanityFetch } from "@/lib/sanity"
import { getAllProjectsQuery } from "@/lib/queries"
import { Project } from "@/types/project"
import { urlFor } from "@/lib/image-url"
import ProjectGridClient from "./ProjectGridClient"

export const ProjectGrid = async () => {
  let projects: Project[] = []

  try {
    projects = await sanityFetch({
      query: getAllProjectsQuery,
      tags: ["projects"],
    })
  } catch (error) {
    console.warn('Failed to fetch projects from Sanity:', error)
    // Return empty state when Sanity is not configured
    return <ProjectGridClient projects={[]} imageUrls={{}} />
  }

  const imageUrls = projects.reduce((acc, project) => {
    if (project.image?.asset) {
      acc[project._id] = urlFor(project.image).width(800).height(450).url()
    }
    return acc
  }, {} as Record<string, string>)

  return <ProjectGridClient projects={projects} imageUrls={imageUrls} />
}
