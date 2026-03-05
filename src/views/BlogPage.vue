<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
useScrollReveal()

const posts = [
  {
    slug: 'ai-loneliness-paradox',
    title: 'The AI Loneliness Paradox: How Technology Can Cure What Technology Created',
    excerpt: 'We built the most connected generation in history — and the loneliest. Here\'s how we think AI can reverse the damage, not deepen it.',
    author: 'Janakan Arulkumarasan',
    role: 'Founder & CEO',
    date: 'February 28, 2026',
    readTime: '8 min',
    category: 'Philosophy',
    featured: true,
  },
  {
    slug: 'reciprocity-rings',
    title: 'What Happens When Six Strangers Actually Help Each Other',
    excerpt: 'Inside Q\'s Reciprocity Rings: the structured 60-minute online sessions where vulnerability meets generosity. And why they work.',
    author: 'Amara Obi',
    role: 'Head of Community',
    date: 'February 20, 2026',
    readTime: '6 min',
    category: 'Community',
  },
  {
    slug: 'coaching-free',
    title: 'Why We Made World-Class Coaching Free',
    excerpt: 'A £500/hour experience for £0. Here\'s why it makes sense, how AI makes it possible, and what we\'ve learned in the first year.',
    author: 'Dr. Elena Vasquez',
    role: 'Head of Coaching',
    date: 'February 12, 2026',
    readTime: '7 min',
    category: 'Product',
  },
  {
    slug: 'trust-architecture',
    title: 'The Architecture of Trust: How We Build Communities That Actually Work',
    excerpt: 'Most online communities fail. Here\'s the framework behind Quintessential Circles — and why starting small and trust-first changes everything.',
    author: 'Marcus Chen',
    role: 'CTO',
    date: 'January 30, 2026',
    readTime: '10 min',
    category: 'Engineering',
  },
]
</script>

<template>
  <div class="blog-page">
    <section class="hero-simple">
      <div class="container">
        <span class="text-label reveal">Blog</span>
        <h1 class="text-hero reveal reveal-delay-1">Ideas worth<br><span class="text-serif-italic text-gold">sharing.</span></h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          Thoughts on AI, human connection, community building, and what it means to live well.
        </p>
      </div>
    </section>

    <!-- FEATURED POST -->
    <section class="featured section" v-if="posts[0]">
      <div class="container">
        <div class="featured-card card card-gold reveal">
          <span class="featured-badge">Featured</span>
          <div class="featured-category">{{ posts[0].category }}</div>
          <h2 class="featured-title">{{ posts[0].title }}</h2>
          <p class="featured-excerpt">{{ posts[0].excerpt }}</p>
          <div class="featured-meta">
            <div class="featured-author">
              <div class="author-avatar">{{ posts[0].author.charAt(0) }}</div>
              <div>
                <div class="author-name">{{ posts[0].author }}</div>
                <div class="author-role">{{ posts[0].role }}</div>
              </div>
            </div>
            <div class="featured-info">
              <span>{{ posts[0].date }}</span>
              <span class="meta-sep">·</span>
              <span>{{ posts[0].readTime }} read</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ALL POSTS -->
    <section class="all-posts section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Latest</span>
          <h2 class="text-heading">Recent<br><span class="text-serif-italic text-gold">thinking.</span></h2>
        </div>
        <div class="posts-grid">
          <div v-for="(post, i) in posts.slice(1)" :key="post.slug" class="post-card card card-gold reveal" :class="`reveal-delay-${i + 1}`">
            <div class="post-category">{{ post.category }}</div>
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-excerpt">{{ post.excerpt }}</p>
            <div class="post-footer">
              <div class="post-author">
                <div class="author-avatar-sm">{{ post.author.charAt(0) }}</div>
                <span class="author-name-sm">{{ post.author }}</span>
              </div>
              <div class="post-meta">
                <span>{{ post.readTime }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-simple { padding: var(--space-5xl) 0 var(--space-3xl); text-align: center; }
.hero-subtitle { max-width: 550px; margin: var(--space-xl) auto 0; }

.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

/* Featured */
.featured-card { position: relative; padding: var(--space-3xl); }
.featured-badge { position: absolute; top: var(--space-lg); right: var(--space-lg); background: var(--color-gold); color: var(--color-text-inverse); font-size: var(--text-xs); font-weight: var(--font-semibold); text-transform: uppercase; letter-spacing: 0.06em; padding: 0.25rem 0.75rem; border-radius: var(--radius-full); }
.featured-category { font-size: var(--text-xs); color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; font-weight: var(--font-semibold); margin-bottom: var(--space-lg); }
.featured-title { font-size: var(--text-3xl); font-weight: var(--font-bold); line-height: 1.3; margin-bottom: var(--space-lg); max-width: 700px; }
.featured-excerpt { font-size: var(--text-lg); color: var(--color-text-secondary); line-height: 1.7; max-width: 600px; margin-bottom: var(--space-2xl); }
.featured-meta { display: flex; align-items: center; justify-content: space-between; padding-top: var(--space-xl); border-top: 1px solid var(--color-border); flex-wrap: wrap; gap: var(--space-md); }
.featured-author { display: flex; align-items: center; gap: var(--space-md); }
.author-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--color-gold); color: var(--color-text-inverse); display: flex; align-items: center; justify-content: center; font-weight: var(--font-bold); font-size: var(--text-sm); }
.author-name { font-size: var(--text-sm); font-weight: var(--font-semibold); }
.author-role { font-size: var(--text-xs); color: var(--color-text-tertiary); }
.featured-info { display: flex; gap: var(--space-sm); font-size: var(--text-sm); color: var(--color-text-tertiary); }
.meta-sep { color: var(--color-border-light); }

/* Posts Grid */
.posts-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
.post-card { display: flex; flex-direction: column; }
.post-category { font-size: var(--text-xs); color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; font-weight: var(--font-semibold); margin-bottom: var(--space-md); }
.post-title { font-size: var(--text-lg); font-weight: var(--font-semibold); line-height: 1.4; margin-bottom: var(--space-sm); }
.post-excerpt { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; flex: 1; }
.post-footer { display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); }
.post-author { display: flex; align-items: center; gap: var(--space-sm); }
.author-avatar-sm { width: 28px; height: 28px; border-radius: 50%; background: var(--color-gold); color: var(--color-text-inverse); display: flex; align-items: center; justify-content: center; font-weight: var(--font-bold); font-size: 0.65rem; }
.author-name-sm { font-size: var(--text-xs); font-weight: var(--font-medium); }
.post-meta { font-size: var(--text-xs); color: var(--color-text-tertiary); }

@media (max-width: 1024px) { .posts-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .posts-grid { grid-template-columns: 1fr; } }
</style>
