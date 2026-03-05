<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { MapPin, Sparkles, Users, UtensilsCrossed, Bot, RefreshCw } from 'lucide-vue-next'
useScrollReveal()

const retreats = [
  {
    title: 'The Renewal Retreat',
    location: 'Ubud, Bali',
    duration: '5 nights',
    theme: 'Mindfulness & Restoration',
    description: 'Five days of silence, stillness, and surrender. Yoga at dawn. Meditation in rice paddies. Balinese healing rituals. Return to yourself.',
    price: 'From £2,800',
    nextDate: 'April 14–19, 2026',
    features: ['Daily yoga & meditation', 'Healing spa treatments', 'Farm-to-table cuisine', 'Jungle villa accommodation'],
  },
  {
    title: 'The Leadership Forge',
    location: 'Scottish Highlands',
    duration: '4 nights',
    theme: 'Leadership & Clarity',
    description: 'For leaders who need to think clearly again. Wilderness walks, executive coaching, fireside conversations, and the silence to hear your own wisdom.',
    price: 'From £3,200',
    nextDate: 'May 8–12, 2026',
    features: ['1:1 executive coaching', 'Guided wilderness hikes', 'Leadership workshops', 'Historic estate accommodation'],
  },
  {
    title: 'The Creative Awakening',
    location: 'Tuscany, Italy',
    duration: '6 nights',
    theme: 'Creativity & Expression',
    description: 'Unlock your creative voice in the Tuscan hills. Writing workshops, painting en plein air, storytelling by candlelight, and wine that flows freely.',
    price: 'From £3,500',
    nextDate: 'June 2–8, 2026',
    features: ['Multi-disciplinary workshops', 'Professional artist mentors', 'Italian cooking classes', 'Villa with vineyard views'],
  },
]

const whatToExpect = [
  {
    icon: 'MapPin',
    title: 'Extraordinary Venues',
    description: 'Every retreat is held in a stunning location — from Balinese jungle villas to Scottish Highland estates to Tuscan vineyards.',
  },
  {
    icon: 'Sparkles',
    title: 'Expert Facilitation',
    description: 'Led by world-class facilitators, coaches, and practitioners. Supported by AI before, during, and after to ensure lasting transformation.',
  },
  {
    icon: 'Users',
    title: 'Small & Intentional',
    description: '12–20 guests maximum. Every retreat is curated for chemistry. You\'ll leave with deep friendships, not just business cards.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Exceptional Nourishment',
    description: 'Farm-to-table meals, local wine, and dietary customization. Food is part of the experience, never an afterthought.',
  },
  {
    icon: 'Bot',
    title: 'AI-Enhanced Journey',
    description: 'Pre-retreat preparation, personalized session recommendations, and 90-day post-retreat integration support — all AI-powered.',
  },
  {
    icon: 'RefreshCw',
    title: '90-Day Integration',
    description: 'The retreat is just the beginning. AI coaching and peer check-ins for 90 days afterwards ensure insights become lasting change.',
  },
]

const iconComponents = { MapPin, Sparkles, Users, UtensilsCrossed, Bot, RefreshCw }

const testimonials = [
  {
    quote: 'I went to Bali expecting relaxation. I got a complete reset. The AI follow-up afterwards kept the momentum going — I\'m still living differently six months later.',
    name: 'Natasha Ivanova',
    role: 'Creative Director, Reframe Studio',
  },
  {
    quote: 'The Leadership Forge was the most important four days of my career. No slides. No keynotes. Just walks, conversations, and the space to finally think clearly.',
    name: 'Michael Adebayo',
    role: 'CEO, Catalyst Ventures',
  },
]
</script>

<template>
  <div class="retreats-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/retreats-hero.png" alt="Luxury wellness retreat" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Retreats</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Step away.<br>
          <span class="text-serif-italic text-gold">Come back whole.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          Immersive retreats in extraordinary locations. Designed for deep renewal, 
          creative breakthroughs, and the kind of clarity that only comes from stepping 
          out of your routine entirely.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">View Retreats</router-link>
          <a href="#retreats" class="btn btn-secondary btn-lg">What to Expect</a>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="philosophy-section section reveal">
      <div class="container">
        <div class="philosophy-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            You can't think your way to clarity from inside the noise. Sometimes you need to 
            <span class="text-gold">leave everything behind</span> — the inbox, the routine, 
            the identity — and remember who you are underneath it all.
          </p>
        </div>
      </div>
    </section>

    <!-- WHAT TO EXPECT -->
    <section id="retreats" class="expect section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">The Experience</span>
          <h2 class="text-heading">What makes a retreat<br><span class="text-serif-italic text-gold">extraordinary.</span></h2>
        </div>
        <div class="expect-grid">
          <div v-for="(item, i) in whatToExpect" :key="item.title" class="expect-card glass reveal" :class="`reveal-delay-${(i % 3) + 1}`">
            <component :is="iconComponents[item.icon]" class="expect-icon" :size="28" :stroke-width="1.5" />
            <h3 class="expect-title">{{ item.title }}</h3>
            <p class="expect-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- UPCOMING RETREATS -->
    <section class="upcoming-retreats section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Upcoming Retreats</span>
          <h2 class="text-heading">Choose your<br><span class="text-serif-italic text-gold">escape.</span></h2>
        </div>
        <div class="retreats-list">
          <div v-for="(r, i) in retreats" :key="r.title" class="retreat-card card card-gold reveal" :class="`reveal-delay-${i + 1}`">
            <div class="retreat-header">
              <div>
                <span class="retreat-theme">{{ r.theme }}</span>
                <h3 class="retreat-title">{{ r.title }}</h3>
              </div>
              <div class="retreat-price-block">
                <span class="retreat-price">{{ r.price }}</span>
                <span class="retreat-duration">{{ r.duration }}</span>
              </div>
            </div>
            <div class="retreat-body">
              <div class="retreat-details">
                <p class="retreat-desc">{{ r.description }}</p>
                <div class="retreat-meta">
                  <div class="retreat-meta-item">
                    <span class="retreat-meta-label">Location</span>
                    <span class="retreat-meta-value">{{ r.location }}</span>
                  </div>
                  <div class="retreat-meta-item">
                    <span class="retreat-meta-label">Next Date</span>
                    <span class="retreat-meta-value">{{ r.nextDate }}</span>
                  </div>
                </div>
              </div>
              <div class="retreat-features">
                <h4 class="retreat-features-title">Includes</h4>
                <ul class="retreat-features-list">
                  <li v-for="f in r.features" :key="f">{{ f }}</li>
                </ul>
                <router-link to="/contact" class="btn btn-primary" style="width: 100%; margin-top: var(--space-lg);">Reserve Your Spot</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Stories</span>
          <h2 class="text-heading">Retreats that<br><span class="text-serif-italic text-gold">reset everything.</span></h2>
        </div>
        <div class="testimonials-grid">
          <div v-for="(t, i) in testimonials" :key="t.name" class="testimonial-card card reveal" :class="`reveal-delay-${i + 1}`">
            <blockquote class="testimonial-quote">"{{ t.quote }}"</blockquote>
            <div class="testimonial-author">
              <div class="testimonial-avatar">{{ t.name.charAt(0) }}</div>
              <div>
                <div class="testimonial-name">{{ t.name }}</div>
                <div class="testimonial-role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      label="Book a Retreat"
      title="Ready to"
      title-accent="reset?"
      description="Leave the noise behind. Our retreats are designed for the kind of deep renewal that changes everything — and the AI-powered integration ensures it lasts."
      primary-text="View Retreats"
      primary-link="/contact"
      secondary-text="Explore Travel"
      secondary-link="/travel"
    />
  </div>
</template>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.95) 80%, var(--color-bg-primary) 100%); }
.hero-content { position: relative; z-index: 1; text-align: center; padding: var(--space-5xl) 0; display: flex; flex-direction: column; align-items: center; }
.hero-subtitle { max-width: 640px; margin-top: var(--space-xl); }
.hero-actions { display: flex; gap: var(--space-md); margin-top: var(--space-2xl); }

.philosophy-section { padding: var(--space-4xl) 0; }
.philosophy-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }

.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

/* Expect */
.expect-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
.expect-card { padding: var(--space-xl); border-radius: var(--radius-md); transition: all var(--transition-base); }
.expect-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.expect-icon { color: var(--color-gold); margin-bottom: var(--space-md); }
.expect-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.expect-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

/* Retreats */
.retreats-list { display: flex; flex-direction: column; gap: var(--space-xl); }
.retreat-card { padding: 0; overflow: hidden; }
.retreat-header { display: flex; justify-content: space-between; align-items: flex-start; padding: var(--space-xl) var(--space-2xl); border-bottom: 1px solid var(--color-border); }
.retreat-theme { font-size: var(--text-xs); color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; font-weight: var(--font-semibold); display: block; margin-bottom: var(--space-xs); }
.retreat-title { font-size: var(--text-2xl); font-weight: var(--font-bold); }
.retreat-price-block { text-align: right; }
.retreat-price { display: block; font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--color-gold); }
.retreat-duration { font-size: var(--text-sm); color: var(--color-text-tertiary); }

.retreat-body { display: grid; grid-template-columns: 1.5fr 1fr; }
.retreat-details { padding: var(--space-2xl); border-right: 1px solid var(--color-border); }
.retreat-desc { font-size: var(--text-base); color: var(--color-text-secondary); line-height: 1.7; margin-bottom: var(--space-xl); }
.retreat-meta { display: flex; gap: var(--space-2xl); }
.retreat-meta-item { display: flex; flex-direction: column; gap: 2px; }
.retreat-meta-label { font-size: var(--text-xs); color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.06em; }
.retreat-meta-value { font-size: var(--text-sm); font-weight: var(--font-medium); }

.retreat-features { padding: var(--space-2xl); display: flex; flex-direction: column; }
.retreat-features-title { font-size: var(--text-sm); font-weight: var(--font-semibold); text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-tertiary); margin-bottom: var(--space-md); }
.retreat-features-list { display: flex; flex-direction: column; gap: var(--space-sm); flex: 1; }
.retreat-features-list li { font-size: var(--text-sm); color: var(--color-text-secondary); padding-left: var(--space-lg); position: relative; line-height: 1.6; }
.retreat-features-list li::before { content: '✓'; position: absolute; left: 0; color: var(--color-gold); font-size: var(--text-xs); }

/* Testimonials */
.testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl); }
.testimonial-card { display: flex; flex-direction: column; }
.testimonial-quote { font-size: var(--text-lg); color: var(--color-text-secondary); line-height: 1.7; font-style: italic; flex: 1; margin-bottom: var(--space-xl); }
.testimonial-author { display: flex; align-items: center; gap: var(--space-md); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); }
.testimonial-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--color-gold); color: var(--color-text-inverse); display: flex; align-items: center; justify-content: center; font-weight: var(--font-bold); font-size: var(--text-sm); flex-shrink: 0; }
.testimonial-name { font-size: var(--text-sm); font-weight: var(--font-semibold); }
.testimonial-role { font-size: var(--text-xs); color: var(--color-text-tertiary); }

@media (max-width: 1024px) {
  .expect-grid { grid-template-columns: repeat(2, 1fr); }
  .retreat-body { grid-template-columns: 1fr; }
  .retreat-details { border-right: none; border-bottom: 1px solid var(--color-border); }
  .testimonials-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
  .hero-actions .btn { width: 100%; }
  .expect-grid { grid-template-columns: 1fr; }
  .retreat-header { flex-direction: column; gap: var(--space-md); }
  .retreat-price-block { text-align: left; }
  .retreat-meta { flex-direction: column; gap: var(--space-md); }
}
</style>
