<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Rocket, GraduationCap, Heart, Palette, Globe, Sparkles, Target, Handshake, Shield, Users } from 'lucide-vue-next'
useScrollReveal()

const featuredCircles = [
  {
    name: 'Tech Founders London',
    members: 48,
    category: 'Entrepreneurship',
    description: 'Founders building the future — sharing lessons, making intros, and supporting each other through the chaos of startup life.',
    icon: Rocket,
  },
  {
    name: 'Cambridge Alumni Network',
    members: 124,
    category: 'Alumni',
    description: 'Cantabs across industries and continents, reconnecting with purpose and building meaningful post-university relationships.',
    icon: GraduationCap,
  },
  {
    name: 'New Mums Singapore',
    members: 36,
    category: 'Parenting',
    description: 'First-time mothers navigating parenthood together — from sleep schedules to identity shifts, with radical honesty.',
    icon: Heart,
  },
  {
    name: 'Creative Directors Circle',
    members: 62,
    category: 'Design & Culture',
    description: 'Senior creatives pushing boundaries in brand, film, and digital. Portfolio reviews, collaborations, and honest feedback.',
    icon: Palette,
  },
  {
    name: 'Global Leaders Network',
    members: 89,
    category: 'Leadership',
    description: 'C-suite executives and emerging leaders developing wisdom, resilience, and purpose-driven leadership together.',
    icon: Globe,
  },
  {
    name: 'Faith & Flourishing',
    members: 55,
    category: 'Spirituality',
    description: 'Exploring the intersection of ancient wisdom, modern psychology, and human flourishing across all faith traditions.',
    icon: Sparkles,
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Tell us about you',
    description: 'Share your interests, goals, profession, and what kind of connections matter most to you right now.',
  },
  {
    step: '02',
    title: 'AI finds your people',
    description: 'Our Community Builder agent deeply understands each member and identifies remarkable matches — people you\'d never find on your own.',
  },
  {
    step: '03',
    title: 'Join your Circles',
    description: 'Get invited to Circles that fit. Each one is intimate (8–50 people), curated, and designed for real relationships — not networking.',
  },
  {
    step: '04',
    title: 'Grow together',
    description: 'The AI facilitates introductions, suggests meetups, and surfaces shared interests over time. Your Circle deepens naturally.',
  },
]

const stats = [
  { value: '120+', label: 'Active Circles' },
  { value: '32', label: 'Countries' },
  { value: '94%', label: 'Made a New Friend' },
  { value: '12,000+', label: 'Members' },
]

const testimonials = [
  {
    quote: 'I moved to London knowing nobody. Within two weeks, my Circle felt like old friends. The AI matched me with people who genuinely get me.',
    name: 'Priya Mehta',
    role: 'Product Designer, Stripe',
    circle: 'Creative Directors Circle',
  },
  {
    quote: 'I\'ve been in dozens of professional networks. This is the first one where people actually show up as themselves. The trust is extraordinary.',
    name: 'David Aronsson',
    role: 'Managing Partner, Northstar Capital',
    circle: 'Global Leaders Network',
  },
]
</script>

<template>
  <div class="circles-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/circles-hero.png" alt="Quintessential Circles gathering" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Community</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Find your<br>
          <span class="text-serif-italic text-gold">people.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          AI-powered communities that bring the right people together at the right time.
          Intimate, curated, and built for real relationships — not superficial networking.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Join a Circle</router-link>
          <a href="#how-it-works" class="btn btn-secondary btn-lg">How It Works</a>
        </div>
      </div>
    </section>

    <!-- STATS BAR -->
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

    <!-- WHAT IS A CIRCLE -->
    <section class="concept section">
      <div class="container">
        <div class="concept-grid">
          <div class="concept-text reveal">
            <span class="text-label">The Concept</span>
            <h2 class="text-heading">
              More than a network.<br>
              <span class="text-serif-italic text-gold">A community of trust.</span>
            </h2>
            <p class="text-body-lg">
              A Circle is a small, curated group of people who share something meaningful in common — 
              an industry, a life stage, a city, a passion. Unlike traditional networks, Circles are 
              designed for depth, not breadth.
            </p>
            <p class="text-body-lg">
              Every Circle has a Superconnector — our AI agent that deeply understands each member's 
              goals, challenges, and gifts. It makes introductions, suggests gatherings, and ensures 
              nobody falls through the cracks.
            </p>
            <router-link to="/superconnectors" class="btn-ghost">Meet the Superconnectors</router-link>
          </div>
          <div class="concept-features reveal reveal-delay-2">
            <div class="feature-card glass">
              <Target class="feature-icon" :size="24" :stroke-width="1.5" />
              <h4>Intimate by Design</h4>
              <p>8–50 members per Circle. Small enough to know everyone, large enough for serendipity.</p>
            </div>
            <div class="feature-card glass">
              <Handshake class="feature-icon" :size="24" :stroke-width="1.5" />
              <h4>AI-Curated Matching</h4>
              <p>Our AI doesn't just match profiles — it understands aspirations, personalities, and life context.</p>
            </div>
            <div class="feature-card glass">
              <Users class="feature-icon" :size="24" :stroke-width="1.5" />
              <h4>Events & Introductions</h4>
              <p>Regular gatherings, 1:1 introductions, and spontaneous connections — all facilitated by your Superconnector.</p>
            </div>
            <div class="feature-card glass">
              <Shield class="feature-icon" :size="24" :stroke-width="1.5" />
              <h4>Trust-First Culture</h4>
              <p>Every Circle operates under a covenant of trust: what's shared stays shared. No pitching. No posturing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how-it-works" class="how-it-works section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">How It Works</span>
          <h2 class="text-heading">From stranger to<br><span class="text-serif-italic text-gold">Circle member.</span></h2>
        </div>
        <div class="steps-grid">
          <div
            v-for="(step, i) in howItWorks"
            :key="step.step"
            class="step-card reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <div class="step-number">{{ step.step }}</div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURED CIRCLES -->
    <section class="featured section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Featured Circles</span>
          <h2 class="text-heading">Discover<br><span class="text-serif-italic text-gold">your people.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            From alumni networks to founder communities, there's a Circle waiting for you.
          </p>
        </div>
        <div class="circles-grid">
          <div
            v-for="(circle, i) in featuredCircles"
            :key="circle.name"
            class="circle-card card card-gold reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <div class="circle-card-header">
              <component :is="circle.icon" class="circle-icon" :size="24" :stroke-width="1.5" />
              <span class="circle-category">{{ circle.category }}</span>
            </div>
            <h3 class="circle-name">{{ circle.name }}</h3>
            <p class="circle-desc">{{ circle.description }}</p>
            <div class="circle-footer">
              <div class="circle-members">
                <div class="member-dots">
                  <span class="member-dot" v-for="n in 4" :key="n"></span>
                  <span class="member-count">+{{ circle.members - 4 }}</span>
                </div>
                <span class="circle-members-label">{{ circle.members }} members</span>
              </div>
              <router-link to="/contact" class="btn btn-sm btn-secondary">Join</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Member Stories</span>
          <h2 class="text-heading">Real connections,<br><span class="text-serif-italic text-gold">real impact.</span></h2>
        </div>
        <div class="testimonials-grid">
          <div
            v-for="(t, i) in testimonials"
            :key="t.name"
            class="testimonial-card card reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <blockquote class="testimonial-quote">"{{ t.quote }}"</blockquote>
            <div class="testimonial-author">
              <div class="testimonial-avatar">{{ t.name.charAt(0) }}</div>
              <div>
                <div class="testimonial-name">{{ t.name }}</div>
                <div class="testimonial-role">{{ t.role }}</div>
                <div class="testimonial-circle">{{ t.circle }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      label="Find Your Circle"
      title="Ready to meet"
      title-accent="your people?"
      description="Whether you're building a company, raising a family, exploring your faith, or starting somewhere new — there's a Circle for you."
      primary-text="Join a Circle"
      primary-link="/contact"
      secondary-text="Explore Events"
      secondary-link="/events"
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
    rgba(10, 10, 10, 0.5) 0%,
    rgba(10, 10, 10, 0.7) 40%,
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
  max-width: 600px;
  margin-top: var(--space-xl);
}

.hero-actions {
  display: flex;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
}

/* ===== STATS BAR ===== */
.stats-bar {
  padding: var(--space-3xl) 0;
  border-bottom: 1px solid var(--color-border);
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: var(--space-4xl);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-value {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-gold);
}

.stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* ===== CONCEPT ===== */
.concept-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: start;
}

.concept-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.concept-text .text-heading {
  margin-bottom: var(--space-sm);
}

.concept-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.feature-card {
  padding: var(--space-xl);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.feature-card:hover {
  border-color: var(--color-gold-border);
  transform: translateY(-2px);
}

.feature-icon {
  color: var(--color-gold);
  margin-bottom: var(--space-md);
}

.feature-card h4 {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
}

.feature-card p {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* ===== HOW IT WORKS ===== */
.section-header {
  text-align: center;
  margin-bottom: var(--space-3xl);
}

.section-header .text-label {
  display: block;
  margin-bottom: var(--space-md);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.step-card {
  text-align: center;
  padding: var(--space-2xl) var(--space-lg);
}

.step-number {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-gold);
  opacity: 0.3;
  margin-bottom: var(--space-lg);
  font-family: var(--font-serif);
}

.step-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-md);
}

.step-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* ===== FEATURED CIRCLES ===== */
.circles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.circle-card {
  display: flex;
  flex-direction: column;
}

.circle-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-lg);
}

.circle-icon {
  color: var(--color-gold);
}

.circle-category {
  font-size: var(--text-xs);
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: var(--font-semibold);
}

.circle-name {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
}

.circle-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  flex: 1;
}

.circle-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}

.circle-members {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.member-dots {
  display: flex;
  align-items: center;
}

.member-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--color-bg-tertiary);
  border: 2px solid var(--color-bg-card);
  margin-right: -8px;
}

.member-dot:nth-child(1) { background: #c9a96e; }
.member-dot:nth-child(2) { background: #7a8b9a; }
.member-dot:nth-child(3) { background: #9a7ab8; }
.member-dot:nth-child(4) { background: #7ab89a; }

.member-count {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  margin-left: var(--space-sm);
}

.circle-members-label {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}

/* ===== TESTIMONIALS ===== */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.testimonial-card {
  display: flex;
  flex-direction: column;
}

.testimonial-quote {
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-style: italic;
  flex: 1;
  margin-bottom: var(--space-xl);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}

.testimonial-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-gold);
  color: var(--color-text-inverse);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-bold);
  font-size: var(--text-sm);
  flex-shrink: 0;
}

.testimonial-name {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
}

.testimonial-role {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}

.testimonial-circle {
  font-size: var(--text-xs);
  color: var(--color-gold);
  margin-top: 2px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .concept-grid {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .circles-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    gap: var(--space-2xl);
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

  .concept-features {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .circles-grid {
    grid-template-columns: 1fr;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    flex-wrap: wrap;
    gap: var(--space-xl);
  }
}
</style>
