<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Handshake, Target, Heart, Globe, Smartphone, Sparkles } from 'lucide-vue-next'
useScrollReveal()

const upcomingEvents = [
  {
    type: 'Reciprocity Ring',
    title: 'Global Leaders Ring — March Edition',
    date: 'March 21, 2026',
    time: '7:00 PM GMT',
    location: 'Online (Zoom)',
    spots: 6,
    spotsLeft: 2,
  },
  {
    type: 'Dinner Party',
    title: 'Spring Supper — Mayfair',
    date: 'March 28, 2026',
    time: '7:30 PM GMT',
    location: 'The Connaught, London',
    spots: 12,
    spotsLeft: 3,
  },
  {
    type: 'Quintessential Coffee',
    title: 'Serendipity Coffee — Singapore',
    date: 'April 2, 2026',
    time: '10:00 AM SGT',
    location: 'Common Man Coffee, Singapore',
    spots: 2,
    spotsLeft: 1,
  },
  {
    type: 'Reciprocity Ring',
    title: 'Creative Directors Ring',
    date: 'April 5, 2026',
    time: '6:00 PM GMT',
    location: 'Online (Zoom)',
    spots: 6,
    spotsLeft: 4,
  },
]

const houseRules = [
  {
    icon: Handshake,
    title: 'Chatham House Rule',
    description: 'What\'s shared in a Quintessential event stays in the room. You may share insights, never identities.',
  },
  {
    icon: Target,
    title: 'No Pitching',
    description: 'These are spaces for genuine connection, not sales. Come as a human, not a business card.',
  },
  {
    icon: Heart,
    title: 'Radical Generosity',
    description: 'Lead with what you can give, not what you can get. The magic happens when everyone does this.',
  },
  {
    icon: Globe,
    title: 'Everyone Belongs',
    description: 'We celebrate diversity of thought, background, and experience. Every voice matters equally.',
  },
  {
    icon: Smartphone,
    title: 'Phones Away',
    description: 'For in-person events, we ask everyone to put phones away. Be fully present. It changes everything.',
  },
  {
    icon: Sparkles,
    title: 'Show Up Real',
    description: 'Drop the professional mask. Share what\'s actually going on. Vulnerability is strength here.',
  },
]

const typeTagColors = {
  'Reciprocity Ring': 'tag-ring',
  'Dinner Party': 'tag-dinner',
  'Quintessential Coffee': 'tag-coffee',
}
</script>

<template>
  <div class="events-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/events-hero.png" alt="Quintessential dinner party" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Events</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Gatherings that<br>
          <span class="text-serif-italic text-gold">change everything.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          From intimate online Reciprocity Rings to premium Dinner Parties and 
          serendipitous Quintessential Coffees — every format is designed for depth, not small talk.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Attend an Event</router-link>
          <a href="#formats" class="btn btn-secondary btn-lg">Explore Formats</a>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="philosophy-section section reveal">
      <div class="container">
        <div class="philosophy-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            Most events are designed for volume. Ours are designed for 
            <span class="text-gold">transformation</span>. Small groups. Real conversations. 
            AI-facilitated to ensure nobody is left out and every voice is heard.
          </p>
        </div>
      </div>
    </section>

    <!-- EVENT FORMATS -->
    <section id="formats" class="formats section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Three Formats</span>
          <h2 class="text-heading">Choose your<br><span class="text-serif-italic text-gold">experience.</span></h2>
        </div>

        <!-- RECIPROCITY RINGS -->
        <div class="format-block reveal">
          <div class="format-content">
            <div class="format-text">
              <div class="format-tag tag-ring">Online · 45 min · 6 people</div>
              <h3 class="format-title">Reciprocity Rings</h3>
              <p class="format-desc text-body-lg">
                Six strangers. Forty-five minutes. One powerful question: <em>"What do you need right now?"</em>
              </p>
              <p class="format-desc-detail">
                Each participant shares one genuine need — a career intro, advice, a resource, 
                emotional support. The group then rallies to help. It's structured reciprocity, 
                facilitated by our AI Facilitator agent who ensures everyone contributes and everyone receives.
              </p>
              <ul class="format-features">
                <li>AI matches participants for maximum mutual value</li>
                <li>Facilitated by a trained AI agent that reads the room</li>
                <li>Follow-up introductions made automatically after the session</li>
                <li>Free for all members</li>
              </ul>
              <router-link to="/contact" class="btn btn-primary">Join a Ring</router-link>
            </div>
            <div class="format-image image-overlay">
              <img src="/images/reciprocity-ring.png" alt="Reciprocity Ring session" />
            </div>
          </div>
        </div>

        <!-- DINNER PARTIES -->
        <div class="format-block reveal">
          <div class="format-content format-content-reverse">
            <div class="format-text">
              <div class="format-tag tag-dinner">In-Person · 3 hours · 8–14 people</div>
              <h3 class="format-title">Dinner Parties</h3>
              <p class="format-desc text-body-lg">
                Exquisite food. Extraordinary company. Conversations you'll remember for years.
              </p>
              <p class="format-desc-detail">
                Our Dinner Parties bring together a carefully curated group of 8–14 people at 
                exceptional restaurants in cities worldwide. The AI curates the guest list to 
                maximize serendipity — you'll sit next to someone who challenges your thinking, 
                and across from someone who shares your passion.
              </p>
              <ul class="format-features">
                <li>Hosted at outstanding restaurants in London, Singapore, New York, and more</li>
                <li>AI-curated guest list for maximum serendipity</li>
                <li>Conversation starters designed to skip small talk entirely</li>
                <li>Q+ members get priority access</li>
              </ul>
              <router-link to="/contact" class="btn btn-primary">Reserve a Seat</router-link>
            </div>
            <div class="format-image image-overlay">
              <img src="/images/events-hero.png" alt="Dinner Party at The Connaught" />
            </div>
          </div>
        </div>

        <!-- Q COFFEES -->
        <div class="format-block reveal">
          <div class="format-content">
            <div class="format-text">
              <div class="format-tag tag-coffee">In-Person · 1 hour · 2 people</div>
              <h3 class="format-title">Quintessential Coffees</h3>
              <p class="format-desc text-body-lg">
                The best meetings are the ones you didn't plan. We plan them for you.
              </p>
              <p class="format-desc-detail">
                Quintessential Coffees are 1:1 meetings with someone remarkable — matched by AI based on your 
                goals, interests, and what you're working on right now. No agenda. No obligations. 
                Just two people who the AI knows will spark something interesting.
              </p>
              <ul class="format-features">
                <li>AI identifies your most valuable potential connection</li>
                <li>Suggests a time, place, and even a conversation starter</li>
                <li>Often leads to collaborations, friendships, and breakthroughs</li>
                <li>Free for all members</li>
              </ul>
              <router-link to="/contact" class="btn btn-primary">Get Matched</router-link>
            </div>
            <div class="format-image image-overlay">
              <img src="/images/q-coffee.png" alt="Quintessential Coffee meeting" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- UPCOMING EVENTS -->
    <section class="upcoming section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">What's Coming</span>
          <h2 class="text-heading">Upcoming<br><span class="text-serif-italic text-gold">events.</span></h2>
        </div>
        <div class="events-list">
          <div
            v-for="(event, i) in upcomingEvents"
            :key="event.title"
            class="event-row card card-gold reveal"
            :class="`reveal-delay-${(i % 4) + 1}`"
          >
            <div class="event-type-tag" :class="typeTagColors[event.type]">{{ event.type }}</div>
            <div class="event-info">
              <h3 class="event-title">{{ event.title }}</h3>
              <div class="event-meta">
                <span class="event-date">{{ event.date }}</span>
                <span class="event-separator">·</span>
                <span class="event-time">{{ event.time }}</span>
                <span class="event-separator">·</span>
                <span class="event-location">{{ event.location }}</span>
              </div>
            </div>
            <div class="event-availability">
              <span class="event-spots">{{ event.spotsLeft }} spot{{ event.spotsLeft > 1 ? 's' : '' }} left</span>
              <router-link to="/contact" class="btn btn-sm btn-primary">RSVP</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOUSE RULES -->
    <section class="house-rules section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Our Culture</span>
          <h2 class="text-heading">House<br><span class="text-serif-italic text-gold">rules.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            These aren't policies — they're the culture we build together. 
            They're what makes Quintessential events feel like nowhere else.
          </p>
        </div>
        <div class="rules-grid">
          <div
            v-for="(rule, i) in houseRules"
            :key="rule.title"
            class="rule-card glass reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <component :is="rule.icon" class="rule-icon" :size="24" :stroke-width="1.5" />
            <h4 class="rule-title">{{ rule.title }}</h4>
            <p class="rule-desc">{{ rule.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      label="Join an Event"
      title="Ready for a conversation"
      title-accent="that matters?"
      description="Whether online or in person, intimate or grand — every Quintessential event is designed for the kind of human connection that changes trajectories."
      primary-text="Attend an Event"
      primary-link="/contact"
      secondary-text="Explore Circles"
      secondary-link="/circles"
    />
  </div>
</template>

<style scoped>
/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.4) 0%,
    rgba(10, 10, 10, 0.65) 40%,
    rgba(10, 10, 10, 0.95) 80%,
    var(--color-bg-primary) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--space-5xl) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-subtitle {
  max-width: 640px;
  margin-top: var(--space-xl);
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
}

/* ===== PHILOSOPHY ===== */
.philosophy-section {
  padding: var(--space-4xl) 0;
}

.philosophy-inner {
  padding: var(--space-3xl);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
}

/* ===== SECTION HEADER ===== */
.section-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.section-header .text-label {
  display: block;
  margin-bottom: var(--space-md);
}

/* ===== FORMAT BLOCKS ===== */
.format-block {
  margin-bottom: var(--space-5xl);
}

.format-block:last-child {
  margin-bottom: 0;
}

.format-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-3xl);
  align-items: center;
}

.format-content-reverse {
  direction: rtl;
}

.format-content-reverse > * {
  direction: ltr;
}

.format-tag {
  display: inline-block;
  padding: 0.375rem 1rem;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-lg);
}

.tag-ring {
  background: rgba(147, 130, 220, 0.15);
  color: #b8a9e8;
  border: 1px solid rgba(147, 130, 220, 0.3);
}

.tag-dinner {
  background: rgba(201, 169, 110, 0.15);
  color: var(--color-gold);
  border: 1px solid var(--color-gold-border);
}

.tag-coffee {
  background: rgba(110, 170, 140, 0.15);
  color: #8ed4b0;
  border: 1px solid rgba(110, 170, 140, 0.3);
}

.format-title {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-md);
}

.format-desc {
  margin-bottom: var(--space-md);
}

.format-desc-detail {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
}

.format-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
}

.format-features li {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding-left: var(--space-lg);
  position: relative;
  line-height: 1.6;
}

.format-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-gold);
  font-size: var(--text-xs);
}

.format-image {
  aspect-ratio: 4/3;
  border-radius: var(--radius-lg);
}

.format-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ===== UPCOMING EVENTS ===== */
.events-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.event-row {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  padding: var(--space-lg) var(--space-xl);
}

.event-type-tag {
  padding: 0.3rem 0.75rem;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-radius: var(--radius-full);
  white-space: nowrap;
  flex-shrink: 0;
}

.event-info {
  flex: 1;
}

.event-title {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-bottom: 4px;
}

.event-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.event-separator {
  color: var(--color-border-light);
}

.event-availability {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  flex-shrink: 0;
}

.event-spots {
  font-size: var(--text-sm);
  color: var(--color-gold);
  font-weight: var(--font-medium);
  white-space: nowrap;
}

/* ===== HOUSE RULES ===== */
.rules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.rule-card {
  padding: var(--space-xl);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.rule-card:hover {
  border-color: var(--color-gold-border);
  transform: translateY(-2px);
}

.rule-icon {
  font-size: var(--text-2xl);
  display: block;
  margin-bottom: var(--space-md);
}

.rule-title {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
}

.rule-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .format-content,
  .format-content-reverse {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  .format-image {
    order: -1;
  }

  .rules-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .event-row {
    flex-wrap: wrap;
    gap: var(--space-md);
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: 80vh;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .rules-grid {
    grid-template-columns: 1fr;
  }

  .event-meta {
    flex-wrap: wrap;
  }

  .event-availability {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
