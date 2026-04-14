# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and blog site (siran.dev) built with Next.js 13 App Router, deployed on Vercel with a PostgreSQL database on Google Cloud.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint
- `npx prisma generate` — regenerate Prisma client (also runs on `npm install` via postinstall)
- `npx prisma migrate dev` — run database migrations
- `npx prisma migrate deploy` — apply migrations in production

## Architecture

**Next.js 13 App Router** with route groups:

- `app/(pages)/` — page routes: notes, projects, favorites, newPost, user
- `app/api/` — API route handlers: auth (`[...nextauth]`), post (CRUD + search), category, contact, login, user
- `app/components/_section/` — page-level layout components (Header, Footer, Notes, Projects, etc.)
- `app/components/_lib/` — reusable UI components (Card, Pagination, Filter, Tag, etc.)
- `app/components/_helper/` — app infrastructure (Providers, ModalProvider)
- `app/lib/` — client-side data fetching utilities and types (`db.ts`, `auth.ts`, `prisma.ts`, `jwt.ts`)

**State Management:** Redux Toolkit with two slices in `features/`:
- `fullList` — all posts list state
- `categoryList` — category-filtered list state

**Database:** PostgreSQL via Prisma ORM with `@prisma/adapter-pg` (pg Pool adapter). Models: User, Post, Category, Comment. Schema at `prisma/schema.prisma`.

**Auth:** NextAuth.js (`next-auth`) with custom credentials provider + JWT tokens.

**Styling:** Tailwind CSS + DaisyUI with custom light/dark themes. Custom color palette uses `warm-*` and `terracotta-*` tokens. Fonts: Manrope (body) and Instrument Serif (display), loaded via `next/font`.

**Post Content:** Posts store content as JSON. Supports both structured content and markdown (via `react-markdown` + `remark-gfm` + `rehype-highlight`). The `isMarkdown` flag on Post determines rendering mode.

## Environment Variables

- `DATABASE_URL` — PostgreSQL connection string
- `NEXT_PUBLIC_URL` — Base URL for API calls (client-side fetch uses this)
- `NEXTAUTH_SECRET` — NextAuth JWT secret

## Key Patterns

- All pages are force-dynamic (`export const dynamic = "force-dynamic"` in root layout)
- Prisma client is singleton-cached in development via global assignment (`app/lib/prisma.ts`)
- Images served from Cloudinary (`res.cloudinary.com/siran-chao`)
- API routes return CORS headers for all origins
