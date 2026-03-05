# Quintessential Website — Rollout Instructions

> **For AI assistants**: When the user asks you to "continue the rollout" or "build the next page", read this file, check which batch is next, and follow the workflow below.

## Project Context

Quintessential is a global movement to help humans flourish in the age of AI. It's a cross between a social justice movement, a tech company, and an ultra-luxury brand. The website is built with **Vue 3 + Vite**, uses a **dark-mode, Apple-like design** with gold/champagne accents, and is located at `/Users/janakan/Code/quintessential/qe-web`.

## Design Principles

- **Dark-first**: Deep charcoal/near-black backgrounds (#0a0a0a, #141414)
- **Gold accents**: Champagne/gold (#c9a96e, #d4af37) for CTAs, highlights, borders
- **Typography**: Inter font, generous whitespace, large hero text
- **Motion**: Scroll-triggered fade-in animations, subtle parallax
- **Layout**: Full-width hero sections, card grids, editorial feel
- **Vibe**: Apple.com meets luxury hospitality. Premium AND accessible/missional

## Brand Philosophy

AI should make humans MORE human. Quintessential makes extraordinary experiences (coaching, community, dining, travel, etc.) accessible to everyone through AI — while offering a premium Q+ tier for power users. The tension between "luxury" and "accessible" is intentional and celebrated.

---

## Workflow for Each Page

1. **Read the codebase** — Understand existing components, design system, and patterns
2. **Interview the user** — Ask 3-5 focused questions about the page's content, tone, and key messages
3. **Build the page** — Create the Vue component and route, using existing design patterns
4. **Show the user** — Open it in the browser, take a screenshot if helpful
5. **Iterate** — Incorporate feedback, refine until the user is happy
6. **Move to next** — Continue with the next page in the batch, or tell the user to start a new conversation if the batch is complete

---

## Rollout Batches

### ✅ Batch 0: Foundation (COMPLETE)
- [x] Project scaffold (Vue 3 + Vite)
- [x] Design system (CSS tokens, typography, components)
- [x] Shared layout (Navbar with mega-menu, Footer)
- [x] Draft Homepage (will be finalized in Batch 6 after all content pages exist)

---

### ✅ Batch 1: Community Pages (COMPLETE)
- [x] **Circles** (`/circles`) — AI-powered community building. Community Builder agent brings the right people together. Example circles: Cambridge Alumni, New Mums in Singapore, Tech Founders London, etc.
- [x] **Events** (`/events`) — All event formats on one page: Online Reciprocity Rings (6-person facilitated sessions), Dinner Parties (premium in-person), Q Coffees (casual serendipitous). Facilitator agent. Calendar/event types showcase.
- [x] **Superconnectors** (`/superconnectors`) — The AI agents that power Q communities. How they deeply understand each member, make introductions, facilitate gatherings. The philosophy of AI-driven human connection.

---

### ✅ Batch 2: Lifestyle Pages (Part 1) (COMPLETE)
- [x] **Coaching** (`/coaching`) — AI + human coaching hybrid. Free AI coaching tier, blended tier, premium human coaching. Domains: career, relationships, health, purpose, leadership.
- [x] **Learning** (`/learning`) — AI-curated learning journeys. Courses, workshops, skill development, personal growth. Powered by AI to personalize the learning path.

---

### ✅ Batch 3: Lifestyle Pages (Part 2) (COMPLETE)
- [x] **Travel** (`/travel`) — AI-curated luxury travel. Personalized itineraries, hidden gems, concierge service. Destinations showcase.
- [x] **Dining** (`/dining`) — Curated dining experiences. Restaurant discovery, private dining events, chef experiences. City-by-city guides.
- [x] **Retreats** (`/retreats`) — Immersive retreats for deep renewal. Locations, themes (mindfulness, creativity, leadership), what to expect.

---

### ✅ Batch 4: Apps Pages (COMPLETE)
- [x] **Books** (`/apps/books`) — Powerful book summaries & reading journeys. AI-personalized recommendations, key insights extraction, reading clubs.
- [x] **News** (`/apps/news`) — Deeply personalized news curation. No clickbait, no doom-scrolling. AI understands what matters to YOU.
- [x] **Music** (`/apps/music`) — AI-generated music tailored to mood, activity, and taste. Playlists, ambient soundscapes, focus music.

---

### ✅ Batch 5: About & Company Pages (COMPLETE)
- [x] **Mission** (`/mission`) — The "why" behind Quintessential. The luxury × accessibility tension. AI making humans more human. Core values and beliefs.
- [x] **Worldview** (`/worldview`) — Manifesto/philosophy page. What we believe about human flourishing, AI, community, purpose. Think "letter to the world" energy.
- [x] **Blog** (`/blog`) — Articles, thought leadership, announcements. Create 3-4 sample posts with realistic content.
- [x] **Team** (`/team`) — Leadership team with generated photos, bios, and roles. Show culture and diversity.
- [x] **Careers** (`/careers`) — Open positions, culture values, "join the movement." Show 4-6 sample roles.
- [x] **Contact** (`/contact`) — Contact form, key info.
- [x] **Terms** (`/terms`) + **Privacy** (`/privacy`) — Legal pages with realistic content.

---

### ✅ Batch 6: Homepage Finalization (COMPLETE)
- [x] **Homepage** (`/`) — Finalized with Experiences showcase (5 lifestyle cards), Blog preview (2 articles), shared CtaBanner. All sections link to real content pages.

---

## Notes

- All content can be invented (quotes, numbers, names, photos). Accuracy doesn't matter — **vibe, branding, and concept** are what matter.
- Use AI image generation for any needed imagery.
- Every page should feel complete and "real" — this is a vision document for the team.
- Each page should use the shared design system and feel cohesive with existing pages.
- When a batch is complete, mark items with `[x]` in this file.
