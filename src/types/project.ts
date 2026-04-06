import { SanityImageAssetDocument } from 'next-sanity'

export interface Project {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: {
    current: string
  }
  label?: string
  location?: string
  category?: string
  description?: string
  image?: {
    asset: SanityImageAssetDocument
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
  }
  featured: boolean
  order?: number
}
