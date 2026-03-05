<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Search, Wine, ChefHat, Globe, MapPin } from 'lucide-vue-next'
useScrollReveal()

const experiences = [
  {
    icon: Search,
    title: 'Restaurant Discovery',
    description: 'AI-curated recommendations that go far beyond stars and reviews. Our system understands cuisine, ambiance, service style, and what you\'re in the mood for tonight.',
  },
  {
    icon: Wine,
    title: 'Private Dining Events',
    description: 'Intimate chef-curated dinners for Quintessential members. Seasonal menus, sommelier pairings, and conversations that flow as freely as the wine.',
  },
  {
    icon: ChefHat,
    title: 'Chef Experiences',
    description: 'Go behind the pass. Behind-the-scenes kitchen tours, cooking masterclasses, and market visits with exceptional chefs in cities worldwide.',
  },
  {
    icon: Globe,
    title: 'City Guides',
    description: 'AI-powered dining guides for every city you visit — from the neighborhood bistro to the destination restaurant, all matched to your palate.',
  },
]

const cities = [
  { name: 'London', restaurants: 84, specialty: 'Modern British & Global Fusion' },
  { name: 'Tokyo', restaurants: 127, specialty: 'Omakase, Ramen & Izakaya' },
  { name: 'Paris', restaurants: 96, specialty: 'Classic French & Natural Wine' },
  { name: 'New York', restaurants: 112, specialty: 'Diverse Everything' },
  { name: 'Singapore', restaurants: 73, specialty: 'Hawker Culture & Fine Dining' },
  { name: 'Mexico City', restaurants: 58, specialty: 'Contemporary Mexican' },
]

const upcomingDinners = [
  {
    title: 'Spring Tasting — Ottolenghi Private',
    date: 'March 22, 2026',
    location: 'London, UK',
    chef: 'Yotam Ottolenghi',
    seats: 14,
    seatsLeft: 3,
  },
  {
    title: 'Kappo Evening — Sushi Saito Alumni',
    date: 'April 8, 2026',
    location: 'Tokyo, Japan',
    chef: 'Chef Takashi Ono',
    seats: 8,
    seatsLeft: 2,
  },
  {
    title: 'Vineyard Supper — Napa Valley',
    date: 'April 18, 2026',
    location: 'Napa Valley, CA',
    chef: 'Alice Waters',
    seats: 16,
    seatsLeft: 5,
  },
]

const testimonials = [
  {
    quote: 'The AI recommended a tiny Sicilian place in East London I\'d walked past a hundred times. It\'s now my favorite restaurant. It knew I love handmade pasta before I told it.',
    name: 'Oliver Chen',
    role: 'London, UK',
  },
  {
    quote: 'The Quintessential dinner in Paris was the highlight of my year. Eight strangers, a private room, a chef who cooked just for us, and a conversation about AI ethics that lasted until 1am.',
    name: 'Camille Dubois',
    role: 'Founder, Lumière Studios',
  },
]
</script>

<template>
  <div class="dining-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/dining-hero.png" alt="Fine dining experience" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Dining</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Eat with<br>
          <span class="text-serif-italic text-gold">intention.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          AI-curated dining experiences — from hidden neighborhood gems to 
          intimate private dinners with world-class chefs. Every meal, meaningful.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Explore Dining</router-link>
          <a href="#dinners" class="btn btn-secondary btn-lg">Upcoming Dinners</a>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="philosophy-section section reveal">
      <div class="container">
        <div class="philosophy-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            Food isn't fuel — it's <span class="text-gold">culture, connection, and joy</span>. 
            Whether it's a Tuesday night takeaway recommendation or a once-in-a-lifetime 
            chef's table, our AI helps you eat remarkably well.
          </p>
        </div>
      </div>
    </section>

    <!-- EXPERIENCES -->
    <section class="experiences section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">What We Offer</span>
          <h2 class="text-heading">Four ways to dine<br><span class="text-serif-italic text-gold">extraordinarily.</span></h2>
        </div>
        <div class="experiences-grid">
          <div v-for="(exp, i) in experiences" :key="exp.title" class="experience-card card card-gold reveal" :class="`reveal-delay-${i + 1}`">
            <component :is="exp.icon" class="experience-icon" :size="28" :stroke-width="1.5" />
            <h3 class="experience-title">{{ exp.title }}</h3>
            <p class="experience-desc">{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CITY GUIDES -->
    <section class="city-guides section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">City Guides</span>
          <h2 class="text-heading">Eat like a local,<br><span class="text-serif-italic text-gold">anywhere.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            AI-powered dining guides for the world's greatest food cities. 
            Constantly updated, deeply personalized to your palate.
          </p>
        </div>
        <div class="cities-grid">
          <div v-for="(city, i) in cities" :key="city.name" class="city-card glass reveal" :class="`reveal-delay-${(i % 3) + 1}`">
            <MapPin class="city-icon" :size="28" :stroke-width="1.5" />
            <h3 class="city-name">{{ city.name }}</h3>
            <p class="city-specialty">{{ city.specialty }}</p>
            <div class="city-stat">
              <span class="city-stat-value">{{ city.restaurants }}</span>
              <span class="city-stat-label">curated spots</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- UPCOMING DINNERS -->
    <section id="dinners" class="upcoming section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Private Dinners</span>
          <h2 class="text-heading">Upcoming<br><span class="text-serif-italic text-gold">experiences.</span></h2>
        </div>
        <div class="dinners-list">
          <div v-for="(d, i) in upcomingDinners" :key="d.title" class="dinner-row card card-gold reveal" :class="`reveal-delay-${i + 1}`">
            <div class="dinner-info">
              <h3 class="dinner-title">{{ d.title }}</h3>
              <div class="dinner-meta">
                <span>{{ d.date }}</span>
                <span class="dinner-sep">·</span>
                <span>{{ d.location }}</span>
                <span class="dinner-sep">·</span>
                <span class="dinner-chef">Chef: {{ d.chef }}</span>
              </div>
            </div>
            <div class="dinner-action">
              <span class="dinner-spots">{{ d.seatsLeft }} seat{{ d.seatsLeft > 1 ? 's' : '' }} left</span>
              <router-link to="/contact" class="btn btn-sm btn-primary">Reserve</router-link>
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
          <h2 class="text-heading">Meals that<br><span class="text-serif-italic text-gold">linger.</span></h2>
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

    <!-- MISSION MOMENT -->
    <section class="mission-moment section section-border-top reveal">
      <div class="container">
        <div class="mission-inner" style="padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary);">
          <p class="text-body-lg" style="max-width: 700px; margin: 0 auto; text-align: center; color: var(--color-text-secondary);">
            Our AI-powered restaurant recommendations are
            <span class="text-gold">free for every member</span>.
            Q+ members unlock private dining events and chef experiences —
            and their support helps us keep the core experience accessible to all.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      label="Dine Differently"
      title="Ready for meals that"
      title-accent="matter?"
      description="From your next Tuesday night to a once-in-a-lifetime chef's table — let our AI transform how you eat."
      primary-text="Explore Dining"
      primary-link="/contact"
      secondary-text="Explore Retreats"
      secondary-link="/retreats"
    />
  </div>
</template>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 80%, var(--color-bg-primary) 100%); }
.hero-content { position: relative; z-index: 1; text-align: center; padding: var(--space-5xl) 0; display: flex; flex-direction: column; align-items: center; }
.hero-subtitle { max-width: 600px; margin-top: var(--space-xl); }
.hero-actions { display: flex; gap: var(--space-md); margin-top: var(--space-2xl); }

.philosophy-section { padding: var(--space-4xl) 0; }
.philosophy-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }

.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

/* Experiences */
.experiences-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl); }
.experience-card { display: flex; flex-direction: column; }
.experience-icon { color: var(--color-gold); margin-bottom: var(--space-lg); }
.experience-title { font-size: var(--text-xl); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.experience-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7; }

/* Cities */
.cities-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
.city-card { padding: var(--space-xl); border-radius: var(--radius-md); text-align: center; transition: all var(--transition-base); }
.city-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.city-icon { color: var(--color-gold); margin-bottom: var(--space-md); }
.city-name { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-xs); }
.city-specialty { font-size: var(--text-sm); color: var(--color-text-secondary); margin-bottom: var(--space-lg); }
.city-stat { display: flex; align-items: baseline; justify-content: center; gap: var(--space-xs); }
.city-stat-value { font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--color-gold); }
.city-stat-label { font-size: var(--text-xs); color: var(--color-text-tertiary); }

/* Upcoming */
.dinners-list { display: flex; flex-direction: column; gap: var(--space-md); }
.dinner-row { display: flex; align-items: center; justify-content: space-between; padding: var(--space-lg) var(--space-xl); }
.dinner-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: 4px; }
.dinner-meta { display: flex; align-items: center; gap: var(--space-sm); font-size: var(--text-sm); color: var(--color-text-tertiary); flex-wrap: wrap; }
.dinner-sep { color: var(--color-border-light); }
.dinner-chef { color: var(--color-gold); }
.dinner-action { display: flex; align-items: center; gap: var(--space-lg); flex-shrink: 0; }
.dinner-spots { font-size: var(--text-sm); color: var(--color-gold); font-weight: var(--font-medium); white-space: nowrap; }

/* Testimonials */
.testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl); }
.testimonial-card { display: flex; flex-direction: column; }
.testimonial-quote { font-size: var(--text-lg); color: var(--color-text-secondary); line-height: 1.7; font-style: italic; flex: 1; margin-bottom: var(--space-xl); }
.testimonial-author { display: flex; align-items: center; gap: var(--space-md); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); }
.testimonial-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--color-gold); color: var(--color-text-inverse); display: flex; align-items: center; justify-content: center; font-weight: var(--font-bold); font-size: var(--text-sm); flex-shrink: 0; }
.testimonial-name { font-size: var(--text-sm); font-weight: var(--font-semibold); }
.testimonial-role { font-size: var(--text-xs); color: var(--color-text-tertiary); }

@media (max-width: 1024px) {
  .experiences-grid { grid-template-columns: 1fr; }
  .cities-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonials-grid { grid-template-columns: 1fr; }
  .dinner-row { flex-wrap: wrap; gap: var(--space-md); }
}
@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
  .hero-actions .btn { width: 100%; }
  .cities-grid { grid-template-columns: 1fr; }
  .dinner-action { width: 100%; justify-content: space-between; }
}
</style>
