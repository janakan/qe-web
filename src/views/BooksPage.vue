<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Zap, Target, Map, Lightbulb, Users, Headphones, BookOpen, Star } from 'lucide-vue-next'
useScrollReveal()

const features = [
  {
    icon: Zap,
    title: 'Powerful Summaries',
    description: 'Not ChatGPT-generated fluff. Deep, thoughtful summaries that capture the essence, nuance, and actionable insights of every book.',
  },
  {
    icon: Target,
    title: 'Personalized Picks',
    description: 'Tell us what you\'re working on, what you\'re curious about, or what you\'re struggling with. The AI recommends books that genuinely help.',
  },
  {
    icon: Map,
    title: 'Reading Journeys',
    description: 'Curated sequences of books that build understanding over time. Not random lists — structured intellectual journeys with a destination.',
  },
  {
    icon: Lightbulb,
    title: 'Key Insights Engine',
    description: 'Extract the most important ideas from any book and connect them to insights from other books you\'ve read. Build a web of knowledge.',
  },
  {
    icon: Users,
    title: 'Reading Clubs',
    description: 'Join a group reading the same book. AI-facilitated discussions, shared annotations, and perspectives that deepen your understanding.',
  },
  {
    icon: Headphones,
    title: 'Listen or Read',
    description: 'Every summary available as text or audio. Perfect for commutes, walks, or when your eyes need a break. High-quality narration.',
  },
]

const popularBooks = [
  { title: 'The Courage to Be Disliked', author: 'Ichiro Kishimi', category: 'Psychology', readTime: '12 min', rating: 4.9 },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Decision Making', readTime: '18 min', rating: 4.8 },
  { title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgenson', category: 'Wealth & Wisdom', readTime: '14 min', rating: 4.9 },
  { title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History', readTime: '20 min', rating: 4.7 },
  { title: 'Atomic Habits', author: 'James Clear', category: 'Habits', readTime: '15 min', rating: 4.8 },
  { title: 'The Art of Possibility', author: 'Rosamund Zander', category: 'Mindset', readTime: '13 min', rating: 4.9 },
]

const journeys = [
  { title: 'The Founder\'s Library', books: 12, description: 'Essential reading for anyone building something from nothing.' },
  { title: 'Understanding the Mind', books: 8, description: 'From cognitive biases to consciousness — know thyself.' },
  { title: 'The Art of Leadership', books: 10, description: 'From Machiavelli to modern servant leadership.' },
  { title: 'Philosophy for Life', books: 9, description: 'Practical wisdom from the Stoics, Existentialists, and beyond.' },
]

const stats = [
  { value: '2,400+', label: 'Book Summaries' },
  { value: '12 min', label: 'Average Read Time' },
  { value: '4.8', label: 'Average Rating' },
  { value: '50+', label: 'Reading Journeys' },
]
</script>

<template>
  <div class="books-page">
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/books-hero.png" alt="Beautiful book collection" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Quintessential Books</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Read the world's<br>
          <span class="text-serif-italic text-gold">best thinking.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          Powerful book summaries and reading journeys — personalized by AI to 
          the ideas that matter most to your life right now.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Start Reading</router-link>
          <a href="#library" class="btn btn-secondary btn-lg">Browse Library</a>
        </div>
      </div>
    </section>

    <section class="stats-bar reveal">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="features section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Features</span>
          <h2 class="text-heading">Not just summaries.<br><span class="text-serif-italic text-gold">Understanding.</span></h2>
        </div>
        <div class="features-grid">
          <div v-for="(f, i) in features" :key="f.title" class="feature-card glass reveal" :class="`reveal-delay-${(i % 3) + 1}`">
            <component :is="f.icon" class="feature-icon" :size="28" :stroke-width="1.5" />
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="library" class="library section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Popular</span>
          <h2 class="text-heading">Trending in the<br><span class="text-serif-italic text-gold">library.</span></h2>
        </div>
        <div class="books-grid">
          <div v-for="(book, i) in popularBooks" :key="book.title" class="book-card card card-gold reveal" :class="`reveal-delay-${(i % 3) + 1}`">
            <div class="book-category">{{ book.category }}</div>
            <h3 class="book-title">{{ book.title }}</h3>
            <p class="book-author">{{ book.author }}</p>
            <div class="book-footer">
              <div class="book-meta">
                <span class="book-time"><BookOpen :size="14" :stroke-width="1.5" /> {{ book.readTime }}</span>
                <span class="book-rating"><Star :size="14" :stroke-width="1.5" /> {{ book.rating }}</span>
              </div>
              <router-link to="/contact" class="btn btn-sm btn-secondary">Read</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="journeys section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Curated Journeys</span>
          <h2 class="text-heading">Go deeper with<br><span class="text-serif-italic text-gold">structured paths.</span></h2>
        </div>
        <div class="journeys-grid">
          <div v-for="(j, i) in journeys" :key="j.title" class="journey-card card card-gold reveal" :class="`reveal-delay-${i + 1}`">
            <h3 class="journey-title">{{ j.title }}</h3>
            <p class="journey-desc">{{ j.description }}</p>
            <div class="journey-meta">
              <span>{{ j.books }} books</span>
              <router-link to="/contact" class="btn-ghost">Begin</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      label="Start Reading"
      title="The wisdom of thousands"
      title-accent="in minutes."
      description="Join Quintessential Books and get AI-personalized summaries, reading journeys, and insights from the world's best non-fiction."
      primary-text="Start Free"
      primary-link="/contact"
      secondary-text="Explore Quintessential News"
      secondary-link="/apps/news"
    />
  </div>
</template>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.7) 40%, rgba(10,10,10,0.95) 80%, var(--color-bg-primary) 100%); }
.hero-content { position: relative; z-index: 1; text-align: center; padding: var(--space-5xl) 0; display: flex; flex-direction: column; align-items: center; }
.hero-subtitle { max-width: 600px; margin-top: var(--space-xl); }
.hero-actions { display: flex; gap: var(--space-md); margin-top: var(--space-2xl); }

.stats-bar { padding: var(--space-3xl) 0; border-bottom: 1px solid var(--color-border); }
.stats-grid { display: flex; justify-content: center; gap: var(--space-4xl); }
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.stat-value { font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-gold); }
.stat-label { font-size: var(--text-xs); color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; }

.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
.feature-card { padding: var(--space-xl); border-radius: var(--radius-md); transition: all var(--transition-base); }
.feature-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.feature-icon { color: var(--color-gold); margin-bottom: var(--space-md); }
.feature-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.feature-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

.books-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
.book-card { display: flex; flex-direction: column; }
.book-category { font-size: var(--text-xs); color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; font-weight: var(--font-semibold); margin-bottom: var(--space-md); }
.book-title { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-xs); }
.book-author { font-size: var(--text-sm); color: var(--color-text-tertiary); flex: 1; }
.book-footer { display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); }
.book-meta { display: flex; gap: var(--space-md); font-size: var(--text-xs); color: var(--color-text-tertiary); }
.book-time, .book-rating { display: inline-flex; align-items: center; gap: 4px; }
.book-rating { color: var(--color-gold); }

.journeys-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl); }
.journey-card { display: flex; flex-direction: column; }
.journey-title { font-size: var(--text-xl); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.journey-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; flex: 1; }
.journey-meta { display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); font-size: var(--text-sm); color: var(--color-text-tertiary); }

@media (max-width: 1024px) {
  .features-grid, .books-grid { grid-template-columns: repeat(2, 1fr); }
  .journeys-grid { grid-template-columns: 1fr; }
  .stats-grid { gap: var(--space-2xl); }
}
@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
  .hero-actions .btn { width: 100%; }
  .features-grid, .books-grid { grid-template-columns: 1fr; }
  .stats-grid { flex-wrap: wrap; gap: var(--space-xl); }
}
</style>
