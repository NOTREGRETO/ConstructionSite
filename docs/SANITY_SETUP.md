# Sanity CMS Integration Setup Guide

## Overview
The project is now ready to connect to Sanity for dynamic project management. Both `FeaturedProjects` and `ProjectGrid` components have been converted to fetch data from Sanity.

## Getting Started

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and sign up/log in
2. Create a new project:
   - **Name**: Titan Construction (or your choice)
   - **Dataset**: `production`
   - **Template**: Start blank

### 2. Get Your Project ID

After creating your project:
- Copy your **Project ID** (found in project settings)
- Update `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Run the Dev Server

```bash
npm run dev
```

### 4. Access the Sanity Studio

Navigate to: **`http://localhost:3000/admin`**

The Sanity Studio will load at `/admin` and allow you to:
- Create and edit projects
- Upload images
- Manage featured/grid visibility
- Control display order

### 5. Create Test Projects

In the Studio, create a few test projects with:
- **Title** (required): e.g., "The Orion Towers, Mumbai"
- **Slug** (auto-generated from title)
- **Label** (optional): e.g., "HIGH-RISE"
- **Location** (optional): e.g., "MUMBAI"
- **Category** (optional): e.g., "RESIDENTIAL"
- **Description** (optional): Project details
- **Image**: Upload a project image
- **Featured** (boolean): Check for homepage carousel
- **Display Order** (optional): Number for ordering

### 6. Verify the Integration

- Featured projects appear in the carousel on homepage (`/`)
- All projects appear in the grid on `/projects`
- Update a project in Sanity Studio and refresh the page

## Project Structure

### Key Files Created:

- **`sanity.config.ts`** — Sanity configuration (root)
- **`schemas/project.ts`** — Project schema definition
- **`schemas/index.ts`** — Schema exports
- **`src/lib/sanity.ts`** — Sanity client utility (with fallbacks)
- **`src/lib/queries.ts`** — GROQ queries for fetching data
- **`src/lib/image-url.ts`** — Image URL builder
- **`src/types/project.ts`** — TypeScript type definitions
- **`src/components/layout/FeaturedProjects.tsx`** — Server component (async fetch)
- **`src/components/layout/FeaturedProjectsClient.tsx`** — Client component (carousel logic)
- **`src/components/layout/ProjectGrid.tsx`** — Server component (async fetch)
- **`src/components/layout/ProjectGridClient.tsx`** — Client component (grid logic)
- **`src/app/admin/[[...tool]]/page.tsx`** — Studio route
- **`.env.local`** — Environment variables (gitignored)

## Architecture

### Server-Side Rendering
- `FeaturedProjects.tsx` and `ProjectGrid.tsx` are async server components
- They fetch data from Sanity at build/request time
- Images are optimized and pre-generated

### Client-Side Interactivity
- `FeaturedProjectsClient.tsx` handles carousel navigation (Framer Motion)
- `ProjectGridClient.tsx` handles hover interactions and animations
- Uses `useState` and motion for smooth animations

### Graceful Fallbacks
- If Sanity is not configured, components render empty
- Build succeeds even without Sanity credentials
- Warning logs appear in console if fetch fails

## GROQ Queries

Two queries are available in `src/lib/queries.ts`:

1. **`getFeaturedProjectsQuery`** — Fetches `featured == true` projects, ordered by `order`
2. **`getAllProjectsQuery`** — Fetches all projects, ordered by `order`

Modify these in `src/lib/queries.ts` if you need different data.

## Image Optimization

Images are automatically resized via `@sanity/image-url`:
- **FeaturedProjects**: 1200×600px
- **ProjectGrid**: 800×450px

Change dimensions in `FeaturedProjects.tsx` and `ProjectGrid.tsx` as needed.

## Next Steps

1. ✅ Set up `.env.local` with your Sanity Project ID
2. ✅ Run `npm run dev`
3. ✅ Create test projects in `/admin`
4. ✅ Verify data appears on homepage and projects page
5. (Optional) Customize project fields in `schemas/project.ts`
6. (Optional) Add more schema types (blog posts, team, etc.)

## Troubleshooting

**Studio not loading at `/admin`?**
- Check `.env.local` has correct `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Restart dev server

**No projects appearing?**
- Verify projects are created in Sanity Studio with images
- Check browser console for warnings
- Check that `featured` is true for FeaturedProjects

**Build failing?**
- Ensure `.env.local` has valid project ID (or is empty)
- Components are wrapped in try/catch for safety

---

Happy building! 🚀
