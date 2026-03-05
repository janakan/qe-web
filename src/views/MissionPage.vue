<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Handshake, Globe, Lock, Sparkles, Brain, Sprout } from 'lucide-vue-next'
useScrollReveal()

const values = [
  { icon: Handshake, title: 'Human First', description: 'Technology serves people, never the other way around. Every feature we build must make someone\'s life genuinely better.' },
  { icon: Globe, title: 'Radically Accessible', description: 'The best things in life shouldn\'t be reserved for the few. We use AI to make luxury-quality experiences available to everyone.' },
  { icon: Lock, title: 'Trust is Sacred', description: 'Your data, your relationships, your growth — we treat them with the reverence they deserve. Privacy isn\'t a feature, it\'s a foundation.' },
  { icon: Sparkles, title: 'Depth Over Scale', description: 'We\'d rather change 1,000 lives profoundly than touch 1 million superficially. Depth of impact is our north star.' },
  { icon: Brain, title: 'AI With Soul', description: 'We believe AI can be warm, wise, and deeply human. Not cold efficiency — genuine understanding, empathy, and care.' },
  { icon: Sprout, title: 'Always Growing', description: 'We\'re students of life. We read, we question, we evolve. The moment we stop learning is the moment we stop being useful.' },
]

const milestones = [
  { year: '2024', title: 'The Spark', description: 'Founded with a simple question: what if AI could make you more human, not less?' },
  { year: '2024', title: 'First Circles', description: 'Launched the first Quintessential Circles — small, AI-curated communities of trust.' },
  { year: '2025', title: 'AI Coaching', description: 'Released Quintessential Coaching — world-class coaching available to everyone, free.' },
  { year: '2025', title: 'The Platform', description: 'Expanded to Books, News, Music, Events, Travel, and Dining.' },
  { year: '2026', title: 'Global Reach', description: '12,000+ members across 32 countries. The mission is working.' },
]
</script>

<template>
  <div class="mission-page">
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/mission-hero.png" alt="Connected humanity" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Our Mission</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Making humans<br><span class="text-serif-italic text-gold">more human.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          In a world where technology often isolates us, we're building AI that does the 
          opposite — deepening connection, expanding potential, and making 
          the extraordinary accessible to everyone.
        </p>
      </div>
    </section>

    <!-- THE TENSION -->
    <section class="tension section reveal">
      <div class="container">
        <div class="tension-grid">
          <div class="tension-text">
            <span class="text-label">The Tension We Resolve</span>
            <h2 class="text-heading" style="margin-top: var(--space-md);">Luxury meets<br><span class="text-serif-italic text-gold">accessibility.</span></h2>
            <p class="text-body" style="margin-top: var(--space-lg); color: var(--color-text-secondary); line-height: 1.8;">
              For centuries, the best coaching, the most transformative communities, the finest 
              experiences — they were reserved for the privileged few. A great executive coach costs 
              £500/hour. A world-class network requires the right school or the right parents.
            </p>
            <p class="text-body" style="margin-top: var(--space-md); color: var(--color-text-secondary); line-height: 1.8;">
              AI changes everything. Not by replacing the human elements that make these experiences 
              special, but by making them <strong style="color: var(--color-gold);">scalable without diluting them</strong>. 
              That's our mission: the quality of a private members' club, available to anyone who wants to grow.
            </p>
          </div>
          <div class="tension-stats">
            <div class="tension-stat">
              <span class="tension-stat-value">£0</span>
              <span class="tension-stat-label">Cost of AI coaching — forever</span>
            </div>
            <div class="tension-stat">
              <span class="tension-stat-value">12k+</span>
              <span class="tension-stat-label">Members across 32 countries</span>
            </div>
            <div class="tension-stat">
              <span class="tension-stat-value">94%</span>
              <span class="tension-stat-label">Say Q made their life better</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="values section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">What We Believe</span>
          <h2 class="text-heading">Our<br><span class="text-serif-italic text-gold">values.</span></h2>
        </div>
        <div class="values-grid">
          <div v-for="(v, i) in values" :key="v.title" class="value-card glass reveal" :class="`reveal-delay-${(i % 3) + 1}`">
            <component :is="v.icon" class="value-icon" :size="28" :stroke-width="1.5" />
            <h3 class="value-title">{{ v.title }}</h3>
            <p class="value-desc">{{ v.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="timeline section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Our Journey</span>
          <h2 class="text-heading">Where we've<br><span class="text-serif-italic text-gold">been.</span></h2>
        </div>
        <div class="timeline-list">
          <div v-for="(m, i) in milestones" :key="m.title" class="timeline-item reveal" :class="`reveal-delay-${(i % 3) + 1}`">
            <div class="timeline-year">{{ m.year }}</div>
            <div class="timeline-content">
              <h3 class="timeline-title">{{ m.title }}</h3>
              <p class="timeline-desc">{{ m.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      label="Join the Mission"
      title="Help us make the extraordinary"
      title-accent="accessible."
      description="Whether as a member, as a team member, or simply as a fellow human who believes the world can be better — there's a place for you here."
      primary-text="Join Q"
      primary-link="/contact"
      secondary-text="See Careers"
      secondary-link="/careers"
    />
  </div>
</template>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.65) 40%, rgba(10,10,10,0.95) 80%, var(--color-bg-primary) 100%); }
.hero-content { position: relative; z-index: 1; text-align: center; padding: var(--space-5xl) 0; display: flex; flex-direction: column; align-items: center; }
.hero-subtitle { max-width: 640px; margin-top: var(--space-xl); }

.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

/* Tension */
.tension-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: var(--space-4xl); align-items: center; }
.tension-stats { display: flex; flex-direction: column; gap: var(--space-xl); }
.tension-stat { padding: var(--space-xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); text-align: center; }
.tension-stat-value { display: block; font-size: var(--text-4xl); font-weight: var(--font-bold); color: var(--color-gold); margin-bottom: var(--space-xs); }
.tension-stat-label { font-size: var(--text-sm); color: var(--color-text-tertiary); }

/* Values */
.values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
.value-card { padding: var(--space-xl); border-radius: var(--radius-md); transition: all var(--transition-base); }
.value-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.value-icon { font-size: var(--text-2xl); display: block; margin-bottom: var(--space-md); }
.value-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.value-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

/* Timeline */
.timeline-list { max-width: 700px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; }
.timeline-item { display: flex; gap: var(--space-2xl); padding: var(--space-xl) 0; border-bottom: 1px solid var(--color-border); }
.timeline-item:last-child { border-bottom: none; }
.timeline-year { font-size: var(--text-sm); color: var(--color-gold); font-weight: var(--font-semibold); min-width: 60px; padding-top: 2px; }
.timeline-title { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-xs); }
.timeline-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

@media (max-width: 1024px) {
  .tension-grid { grid-template-columns: 1fr; }
  .values-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .values-grid { grid-template-columns: 1fr; }
}
</style>
