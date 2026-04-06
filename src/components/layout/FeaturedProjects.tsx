import { sanityFetch } from "@/lib/sanity"
import { getFeaturedProjectsQuery } from "@/lib/queries"
import { Project } from "@/types/project"
import { urlFor } from "@/lib/image-url"
import FeaturedProjectsClient from "./FeaturedProjectsClient"

export const FeaturedProjects = async () => {
  let projects: Project[] = []

  try {
    projects = await sanityFetch({
      query: getFeaturedProjectsQuery,
      tags: ["projects"],
    })
  } catch (error) {
    console.warn('Failed to fetch featured projects from Sanity:', error)
    // Return empty state when Sanity is not configured
    return <FeaturedProjectsClient projects={[]} imageUrls={{}} />
  }

  const imageUrls = projects.reduce((acc, project) => {
    if (project.image?.asset) {
      acc[project._id] = urlFor(project.image).width(1200).height(600).url()
    }
    return acc
  }, {} as Record<string, string>)

  return <FeaturedProjectsClient projects={projects} imageUrls={imageUrls} />
}
