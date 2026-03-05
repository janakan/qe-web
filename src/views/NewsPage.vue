<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Target, Ban, Heart, Globe, BarChart3, Clock, Sun, Microscope, BookOpen, Zap } from 'lucide-vue-next'
useScrollReveal()

const principles = [
  { icon: Target, title: 'Deeply Personal', description: 'Not algorithmic engagement bait. News curated to genuinely inform YOUR life, career, and curiosity — based on what actually matters to you.' },
  { icon: Ban, title: 'No Clickbait', description: 'Zero sensationalism. No misleading headlines. No outrage farming. Just clear, honest reporting on things that are genuinely important.' },
  { icon: Heart, title: 'No Doom-Scrolling', description: 'We designed Quintessential News to leave you informed, not anxious. Finite feeds. Clear stopping points. Your wellbeing matters more than our engagement metrics.' },
  { icon: Globe, title: 'Global Perspective', description: 'Break out of your bubble. Our AI surfaces perspectives from around the world — not to upset you, but to make you wiser.' },
  { icon: BarChart3, title: 'Context, Not Just Facts', description: 'Every story comes with AI-generated context: why it matters, what led to it, what experts think, and how it connects to other things you\'ve read.' },
  { icon: Clock, title: 'Respect Your Time', description: 'Your daily briefing takes 10 minutes. Deep dives are there when you want them. We never waste a second of your attention.' },
]

const formatTypes = [
  { name: 'Morning Briefing', time: '5 min', description: 'Your daily essentials — the 5–8 stories that matter most to you, with context and analysis. Ready when you wake up.', icon: Sun },
  { name: 'Deep Dives', time: '10–15 min', description: 'Long-form analysis on the topics you care about most. AI-written to match your knowledge level — no explaining what you already know.', icon: Microscope },
  { name: 'Weekend Read', time: '20 min', description: 'A curated collection of the week\'s most important ideas, beautifully assembled. Perfect with Saturday morning coffee.', icon: BookOpen },
  { name: 'Breaking Alerts', time: 'Real-time', description: 'Genuinely important breaking news — not every earthquake and celebrity tweet. Only the events that actually affect your world.', icon: Zap },
]

const topics = [
  'Technology', 'AI & Machine Learning', 'Geopolitics', 'Climate & Energy', 
  'Business & Finance', 'Science & Health', 'Culture & Arts', 'Philosophy & Ideas',
  'Startups & VC', 'Education', 'Space & Astronomy', 'Psychology',
]

const stats = [
  { value: '10 min', label: 'Average Daily Read' },
  { value: '0', label: 'Clickbait Articles' },
  { value: '50+', label: 'Source Countries' },
  { value: '96%', label: 'Feel More Informed' },
]
</script>

<template>
  <div class="news-page">
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/news-hero.png" alt="Quintessential News visualization" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Quintessential News</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Your world,<br>
          <span class="text-serif-italic text-gold">thoughtfully curated.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          Deeply personalized news without the clickbait, doom-scrolling, or 
          algorithmic outrage. AI that understands what matters to <em>you</em>.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Get Started</router-link>
          <a href="#principles" class="btn btn-secondary btn-lg">Our Approach</a>
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

    <section id="principles" class="principles section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Our Promise</span>
          <h2 class="text-heading">News designed for<br><span class="text-serif-italic text-gold">humans, not engagement.</span></h2>
        </div>
        <div class="principles-grid">
          <div v-for="(p, i) in principles" :key="p.title" class="principle-card glass reveal" :class="`reveal-delay-${(i % 3) + 1}`">
            <component :is="p.icon" class="principle-icon" :size="28" :stroke-width="1.5" />
            <h3 class="principle-title">{{ p.title }}</h3>
            <p class="principle-desc">{{ p.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="formats section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Formats</span>
          <h2 class="text-heading">Choose how you<br><span class="text-serif-italic text-gold">stay informed.</span></h2>
        </div>
        <div class="formats-grid">
          <div v-for="(f, i) in formatTypes" :key="f.name" class="format-card card card-gold reveal" :class="`reveal-delay-${i + 1}`">
            <div class="format-header">
              <component :is="f.icon" class="format-icon-svg" :size="24" :stroke-width="1.5" />
              <span class="format-time">{{ f.time }}</span>
            </div>
            <h3 class="format-name">{{ f.name }}</h3>
            <p class="format-desc">{{ f.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="topics section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Topics</span>
          <h2 class="text-heading">Follow what<br><span class="text-serif-italic text-gold">fascinates you.</span></h2>
        </div>
        <div class="topics-cloud reveal">
          <span v-for="topic in topics" :key="topic" class="topic-tag">{{ topic }}</span>
        </div>
      </div>
    </section>

    <CtaBanner
      label="Stay Informed"
      title="News that makes you"
      title-accent="wiser, not anxious."
      description="Join Quintessential News for a daily briefing that respects your time, expands your world, and never manipulates your emotions for clicks."
      primary-text="Start Free"
      primary-link="/contact"
      secondary-text="Explore Quintessential Music"
      secondary-link="/apps/music"
    />
  </div>
</template>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 80%, var(--color-bg-primary) 100%); }
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

.principles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
.principle-card { padding: var(--space-xl); border-radius: var(--radius-md); transition: all var(--transition-base); }
.principle-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.principle-icon { color: var(--color-gold); margin-bottom: var(--space-md); }
.principle-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.principle-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

.formats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-lg); }
.format-card { display: flex; flex-direction: column; }
.format-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-lg); }
.format-icon-svg { color: var(--color-gold); }
.format-time { font-size: var(--text-xs); color: var(--color-gold); font-weight: var(--font-semibold); text-transform: uppercase; letter-spacing: 0.06em; }
.format-name { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.format-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

.topics-cloud { display: flex; flex-wrap: wrap; justify-content: center; gap: var(--space-sm); max-width: 700px; margin: 0 auto; }
.topic-tag { display: inline-block; padding: 0.5rem 1.25rem; font-size: var(--text-sm); background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-full); color: var(--color-text-secondary); transition: all var(--transition-base); cursor: default; }
.topic-tag:hover { border-color: var(--color-gold-border); color: var(--color-gold); transform: translateY(-1px); }

@media (max-width: 1024px) {
  .principles-grid { grid-template-columns: repeat(2, 1fr); }
  .formats-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-grid { gap: var(--space-2xl); }
}
@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
  .hero-actions .btn { width: 100%; }
  .principles-grid, .formats-grid { grid-template-columns: 1fr; }
  .stats-grid { flex-wrap: wrap; gap: var(--space-xl); }
}
</style>
