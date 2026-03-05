<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Music, Brain, Headphones, SlidersHorizontal, Waves, Infinity, Target, Zap, Flower2, Compass } from 'lucide-vue-next'
useScrollReveal()

const features = [
  { icon: Music, title: 'AI-Generated Music', description: 'Original compositions created in real-time by AI — not recycled tracks with different labels. Music that never existed before you pressed play.' },
  { icon: Brain, title: 'Mood-Matched', description: 'Tell us how you feel, or let the AI sense it. Need energy? Calm? Focus? Melancholy? The music matches your emotional state perfectly.' },
  { icon: Headphones, title: 'Activity-Aware', description: 'Working, exercising, meditating, cooking, reading — each activity gets music specifically designed to enhance it, not just accompany it.' },
  { icon: SlidersHorizontal, title: 'Taste-Adaptive', description: 'Quintessential Music learns your taste over time — your preferred genres, instruments, tempos, and textures. Every listen trains it to know you better.' },
  { icon: Waves, title: 'Ambient Soundscapes', description: 'Immersive audio environments — rain on a cabin roof, a Japanese garden, a Parisian café. AI-generated, infinitely varied, never repetitive.' },
  { icon: Infinity, title: 'Never Repeats', description: 'Every piece is generated uniquely for you, in that moment. Press play tomorrow and it\'ll be different — but equally perfect.' },
]

const modes = [
  { name: 'Focus', icon: Target, description: 'Deep concentration music. No lyrics, no distracting melodies — just the right frequencies to lock you into flow state.' },
  { name: 'Energy', icon: Zap, description: 'Get moving. Dynamic, driving compositions that fuel workouts, morning routines, and moments that need momentum.' },
  { name: 'Calm', icon: Flower2, description: 'Gentle, soothing compositions for winding down, meditation, or moments when the world feels too loud.' },
  { name: 'Explore', icon: Compass, description: 'Eclectic, surprising, genre-blending compositions. For when you want to discover something you\'ve never heard before.' },
]

const stats = [
  { value: '∞', label: 'Unique Compositions' },
  { value: '24/7', label: 'Always Available' },
  { value: '4.9', label: 'User Rating' },
  { value: '0', label: 'Ads, Ever' },
]
</script>

<template>
  <div class="music-page">
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/music-hero.png" alt="Quintessential Music sound waves" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Quintessential Music</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Music made<br>
          <span class="text-serif-italic text-gold">for you.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          AI-generated music tailored to your mood, your activity, and your 
          taste. Original compositions that never existed before you pressed play.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Start Listening</router-link>
          <a href="#modes" class="btn btn-secondary btn-lg">Explore Modes</a>
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

    <section class="philosophy-section section reveal">
      <div class="container">
        <div class="philosophy-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            Streaming services give you someone else's music and call it personalized. 
            Quintessential Music creates music that <span class="text-gold">never existed before</span> — 
            composed by AI, shaped by your taste, and perfectly matched to this exact moment of your life.
          </p>
        </div>
      </div>
    </section>

    <section id="modes" class="modes section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Modes</span>
          <h2 class="text-heading">Choose your<br><span class="text-serif-italic text-gold">frequency.</span></h2>
        </div>
        <div class="modes-grid">
          <div v-for="(mode, i) in modes" :key="mode.name" class="mode-card card card-gold reveal" :class="`reveal-delay-${i + 1}`">
            <div class="mode-header">
              <component :is="mode.icon" class="mode-icon-svg" :size="28" :stroke-width="1.5" />
              <div class="mode-visualizer">
                <span class="viz-bar" v-for="n in 5" :key="n" :style="{ '--delay': n * 0.15 + 's', height: (15 + Math.random() * 25) + 'px' }"></span>
              </div>
            </div>
            <h3 class="mode-name">{{ mode.name }}</h3>
            <p class="mode-desc">{{ mode.description }}</p>
            <router-link to="/contact" class="btn-ghost" style="margin-top: auto; padding-top: var(--space-md);">Play now</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="features section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">How It Works</span>
          <h2 class="text-heading">Music that<br><span class="text-serif-italic text-gold">understands you.</span></h2>
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

    <CtaBanner
      label="Start Listening"
      title="Press play on music"
      title-accent="made for you."
      description="No playlists to browse. No algorithms gaming your attention. Just beautiful, original music that matches exactly what you need, right now."
      primary-text="Listen Free"
      primary-link="/contact"
      secondary-text="Explore Quintessential Books"
      secondary-link="/apps/books"
    />
  </div>
</template>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.5; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 80%, var(--color-bg-primary) 100%); }
.hero-content { position: relative; z-index: 1; text-align: center; padding: var(--space-5xl) 0; display: flex; flex-direction: column; align-items: center; }
.hero-subtitle { max-width: 600px; margin-top: var(--space-xl); }
.hero-actions { display: flex; gap: var(--space-md); margin-top: var(--space-2xl); }

.stats-bar { padding: var(--space-3xl) 0; border-bottom: 1px solid var(--color-border); }
.stats-grid { display: flex; justify-content: center; gap: var(--space-4xl); }
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.stat-value { font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-gold); }
.stat-label { font-size: var(--text-xs); color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; }

.philosophy-section { padding: var(--space-4xl) 0; }
.philosophy-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }

.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

.modes-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-lg); }
.mode-card { display: flex; flex-direction: column; }
.mode-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: var(--space-lg); }
.mode-icon-svg { color: var(--color-gold); }
.mode-visualizer { display: flex; align-items: flex-end; gap: 3px; height: 40px; }
.viz-bar { width: 4px; background: var(--color-gold); border-radius: 2px; opacity: 0.4; animation: vizPulse 1.5s ease-in-out infinite; animation-delay: var(--delay); }
@keyframes vizPulse {
  0%, 100% { opacity: 0.2; transform: scaleY(0.6); }
  50% { opacity: 0.7; transform: scaleY(1); }
}
.mode-name { font-size: var(--text-xl); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.mode-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
.feature-card { padding: var(--space-xl); border-radius: var(--radius-md); transition: all var(--transition-base); }
.feature-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.feature-icon { color: var(--color-gold); margin-bottom: var(--space-md); }
.feature-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.feature-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

@media (max-width: 1024px) {
  .modes-grid { grid-template-columns: repeat(2, 1fr); }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-grid { gap: var(--space-2xl); }
}
@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
  .hero-actions .btn { width: 100%; }
  .modes-grid, .features-grid { grid-template-columns: 1fr; }
  .stats-grid { flex-wrap: wrap; gap: var(--space-xl); }
}
</style>
