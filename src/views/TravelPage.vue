<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Bot, Gem, Hotel, UtensilsCrossed, UserCircle, Handshake } from 'lucide-vue-next'
useScrollReveal()

const destinations = [
  {
    name: 'Amalfi Coast, Italy',
    region: 'Europe',
    description: 'Cliffside villages, hidden coves, and the world\'s best limoncello. Our AI finds the trattorias the guidebooks miss.',
    duration: '5–7 days',
    bestFor: 'Romance, Culture, Food',
    image: '/images/travel-hero.png',
  },
  {
    name: 'Kyoto, Japan',
    region: 'Asia',
    description: 'Ancient temples, zen gardens, and kaiseki dining. Experience Japan\'s spiritual heart with a deeply personalized itinerary.',
    duration: '7–10 days',
    bestFor: 'Culture, Mindfulness, Food',
    image: '/images/travel-hero.png',
  },
  {
    name: 'Patagonia, Argentina',
    region: 'South America',
    description: 'Glaciers, wild landscapes, and estancia stays. For those who want adventure wrapped in extraordinary comfort.',
    duration: '8–12 days',
    bestFor: 'Adventure, Nature, Solitude',
    image: '/images/travel-hero.png',
  },
  {
    name: 'Marrakech, Morocco',
    region: 'Africa',
    description: 'Ancient medinas, stunning riads, and Atlas Mountain excursions. Where sensory overload meets profound peace.',
    duration: '4–6 days',
    bestFor: 'Culture, Design, Wellness',
    image: '/images/travel-hero.png',
  },
]

const features = [
  {
    icon: Bot,
    title: 'AI-Curated Itineraries',
    description: 'Tell us what you love, how you travel, and what matters most. Our AI builds a day-by-day itinerary that feels like it was made by a friend who knows the city intimately.',
  },
  {
    icon: Gem,
    title: 'Hidden Gems',
    description: 'Skip the tourist traps. Our AI surfaces the restaurants, streets, experiences, and viewpoints that locals treasure — the ones that never make the top-10 lists.',
  },
  {
    icon: Hotel,
    title: 'Curated Stays',
    description: 'From boutique hotels to private villas, every recommendation is matched to your taste, budget, and the vibe you\'re looking for.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Dining Reservations',
    description: 'We handle the bookings — from Michelin-starred restaurants to the hole-in-the-wall that serves the best cacio e pepe in Rome.',
  },
  {
    icon: UserCircle,
    title: 'Concierge on Demand',
    description: 'Need a last-minute change? Want a sunrise hike recommendation? Your AI concierge is always available and always informed.',
  },
  {
    icon: Handshake,
    title: 'Travel with Your Circle',
    description: 'Coordinate group trips with your Quintessential Circle. The AI handles scheduling, preferences, and compromise so everyone has an extraordinary time.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Dream',
    description: 'Tell us where you want to go — or let the AI surprise you based on your preferences, season, and what you need most right now.',
  },
  {
    step: '02',
    title: 'Discover',
    description: 'Receive a personalized itinerary with curated stays, dining, activities, and hidden gems — all tailored to your style.',
  },
  {
    step: '03',
    title: 'Refine',
    description: 'Tweak anything. Add more adventure, swap a restaurant, extend a stay. The AI adjusts everything instantly and intelligently.',
  },
  {
    step: '04',
    title: 'Experience',
    description: 'Travel with your AI concierge by your side. Real-time suggestions, reservation changes, and local insights — wherever you are.',
  },
]

const testimonials = [
  {
    quote: 'We asked for "somewhere in Italy that isn\'t touristy but has amazing food." The AI sent us to a village in Puglia we\'d never heard of. Best trip of our lives.',
    name: 'Tom & Ellie Watts',
    role: 'London, UK',
  },
  {
    quote: 'The itinerary felt like it was written by someone who actually knows me. The morning temple visits. The free afternoon for sketching. It was eerie how perfect it was.',
    name: 'Yuki Tanaka',
    role: 'Architect, Tokyo',
  },
]
</script>

<template>
  <div class="travel-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/travel-hero.png" alt="Luxury travel destination" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Travel</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Travel that<br>
          <span class="text-serif-italic text-gold">transforms.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          AI-curated itineraries that go beyond the guidebook. Every trip personalized 
          to your tastes, pace, and sense of wonder.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Plan a Trip</router-link>
          <a href="#destinations" class="btn btn-secondary btn-lg">Explore Destinations</a>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="philosophy-section section reveal">
      <div class="container">
        <div class="philosophy-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            The best travel experiences aren't found in a search engine. They come from someone who 
            <span class="text-gold">deeply knows you</span> and deeply knows the destination. 
            Our AI is that someone.
          </p>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="how-it-works section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">The Experience</span>
          <h2 class="text-heading">From dream to<br><span class="text-serif-italic text-gold">departure.</span></h2>
        </div>
        <div class="steps-grid">
          <div v-for="(step, i) in howItWorks" :key="step.step" class="step-card reveal" :class="`reveal-delay-${i + 1}`">
            <div class="step-number">{{ step.step }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">What You Get</span>
          <h2 class="text-heading">Your AI<br><span class="text-serif-italic text-gold">travel companion.</span></h2>
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

    <!-- DESTINATIONS -->
    <section id="destinations" class="destinations section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Destinations</span>
          <h2 class="text-heading">Where will you<br><span class="text-serif-italic text-gold">go next?</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            These are a few of our members' favorites. But our AI can plan a trip to 
            anywhere on earth — including places you've never considered.
          </p>
        </div>
        <div class="destinations-grid">
          <div v-for="(d, i) in destinations" :key="d.name" class="destination-card card card-gold reveal" :class="`reveal-delay-${(i % 2) + 1}`">
            <div class="destination-header">
              <span class="destination-region">{{ d.region }}</span>
              <span class="destination-duration">{{ d.duration }}</span>
            </div>
            <h3 class="destination-name">{{ d.name }}</h3>
            <p class="destination-desc">{{ d.description }}</p>
            <div class="destination-tags">
              <span v-for="tag in d.bestFor.split(', ')" :key="tag" class="destination-tag">{{ tag }}</span>
            </div>
            <router-link to="/contact" class="btn-ghost" style="margin-top: var(--space-md);">Plan this trip</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Stories</span>
          <h2 class="text-heading">Trips that<br><span class="text-serif-italic text-gold">stay with you.</span></h2>
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
            Every Q+ travel itinerary helps fund
            <span class="text-gold">free coaching and community access</span>
            for thousands of people worldwide. Travel well, and do good.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      label="Start Planning"
      title="Your next great trip"
      title-accent="starts here."
      description="Tell us where you dream of going — or let our AI surprise you. Every itinerary is built around who you are and what you love."
      primary-text="Plan a Trip"
      primary-link="/contact"
      secondary-text="Explore Dining"
      secondary-link="/dining"
    />
  </div>
</template>

<style scoped>
/* ===== HERO ===== */
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 80%, var(--color-bg-primary) 100%); }
.hero-content { position: relative; z-index: 1; text-align: center; padding: var(--space-5xl) 0; display: flex; flex-direction: column; align-items: center; }
.hero-subtitle { max-width: 600px; margin-top: var(--space-xl); }
.hero-actions { display: flex; gap: var(--space-md); margin-top: var(--space-2xl); }

/* ===== PHILOSOPHY ===== */
.philosophy-section { padding: var(--space-4xl) 0; }
.philosophy-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }

/* ===== SECTION HEADER ===== */
.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

/* ===== HOW IT WORKS ===== */
.steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-xl); }
.step-card { text-align: center; padding: var(--space-2xl) var(--space-lg); }
.step-number { font-size: var(--text-4xl); font-weight: var(--font-bold); color: var(--color-gold); opacity: 0.3; margin-bottom: var(--space-lg); font-family: var(--font-serif); }
.step-title { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-md); }
.step-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7; }

/* ===== FEATURES ===== */
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
.feature-card { padding: var(--space-xl); border-radius: var(--radius-md); transition: all var(--transition-base); }
.feature-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.feature-icon { color: var(--color-gold); margin-bottom: var(--space-md); }
.feature-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.feature-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

/* ===== DESTINATIONS ===== */
.destinations-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl); }
.destination-card { display: flex; flex-direction: column; }
.destination-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-lg); }
.destination-region { font-size: var(--text-xs); color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; font-weight: var(--font-semibold); }
.destination-duration { font-size: var(--text-xs); color: var(--color-text-tertiary); }
.destination-name { font-size: var(--text-xl); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.destination-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; flex: 1; }
.destination-tags { display: flex; flex-wrap: wrap; gap: var(--space-xs); margin-top: var(--space-lg); }
.destination-tag { display: inline-block; padding: 0.2rem 0.6rem; font-size: 0.7rem; background: rgba(255,255,255,0.05); border: 1px solid var(--color-border); border-radius: var(--radius-full); color: var(--color-text-tertiary); }

/* ===== TESTIMONIALS ===== */
.testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl); }
.testimonial-card { display: flex; flex-direction: column; }
.testimonial-quote { font-size: var(--text-lg); color: var(--color-text-secondary); line-height: 1.7; font-style: italic; flex: 1; margin-bottom: var(--space-xl); }
.testimonial-author { display: flex; align-items: center; gap: var(--space-md); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); }
.testimonial-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--color-gold); color: var(--color-text-inverse); display: flex; align-items: center; justify-content: center; font-weight: var(--font-bold); font-size: var(--text-sm); flex-shrink: 0; }
.testimonial-name { font-size: var(--text-sm); font-weight: var(--font-semibold); }
.testimonial-role { font-size: var(--text-xs); color: var(--color-text-tertiary); }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .steps-grid { grid-template-columns: repeat(2, 1fr); }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .destinations-grid { grid-template-columns: 1fr; }
  .testimonials-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
  .hero-actions .btn { width: 100%; }
  .steps-grid { grid-template-columns: 1fr; }
  .features-grid { grid-template-columns: 1fr; }
}
</style>
