<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Brain, Link2, Target, Waves, BarChart3, Lock } from 'lucide-vue-next'
useScrollReveal()

const capabilities = [
  {
    icon: Brain,
    title: 'Deep Understanding',
    description: 'A Superconnector doesn\'t just know your job title. It understands your ambitions, your communication style, what inspires you, and what you\'re struggling with right now.',
  },
  {
    icon: Link2,
    title: 'Intelligent Matching',
    description: 'It identifies connections that humans miss — the founder who needs the exact advice your career path can provide, the new parent who shares your exact philosophy on raising kids.',
  },
  {
    icon: Target,
    title: 'Contextual Introductions',
    description: 'Every introduction comes with context: why you\'re being connected, what you have in common, and a conversation starter that skips the small talk entirely.',
  },
  {
    icon: Waves,
    title: 'Facilitation',
    description: 'During events and gatherings, the Superconnector ensures every voice is heard, conversations stay meaningful, and follow-ups happen naturally.',
  },
  {
    icon: BarChart3,
    title: 'Community Health',
    description: 'It monitors the health of every Circle — noticing when someone goes quiet, when subgroups form, when new energy is needed — and acts before problems emerge.',
  },
  {
    icon: Lock,
    title: 'Trust Architecture',
    description: 'All member data is handled with extreme care. The Superconnector uses insights to serve the community, never to exploit it. Privacy is foundational, not a feature.',
  },
]

const principles = [
  {
    number: '01',
    title: 'AI should deepen trust, not replace it',
    description: 'The goal isn\'t to automate relationships — it\'s to remove the friction that prevents great relationships from forming. The Superconnector brings people to the door; the humans walk through it.',
  },
  {
    number: '02',
    title: 'Understanding precedes connection',
    description: 'A truly great connector — human or AI — invests deeply in understanding each person before making a single introduction. Our agents spend more time listening than matching.',
  },
  {
    number: '03',
    title: 'Small groups, deep bonds',
    description: 'Social science is clear: trust forms in groups of 5–15. Our Superconnectors are designed for intimate communities, not mass networks. Depth over breadth, always.',
  },
  {
    number: '04',
    title: 'The best connections are unexpected',
    description: 'Algorithms that match people to their mirrors create echo chambers. Our Superconnectors seek complementarity — the connections that surprise you, challenge you, and expand your world.',
  },
]

const stats = [
  { value: '94%', label: 'Say they met someone they\'d never have found on their own' },
  { value: '3.2', label: 'Average meaningful introductions per member per month' },
  { value: '87%', label: 'Of introduced pairs meet or speak within 2 weeks' },
  { value: '12k+', label: 'Connections facilitated across 32 countries' },
]

const testimonials = [
  {
    quote: 'The Superconnector introduced me to someone in my own city, in my own industry, who I\'d never have met. We\'re now collaborating on a project that could change both our careers.',
    name: 'Marcus Webb',
    role: 'CTO, Helix Robotics',
  },
  {
    quote: 'What surprised me most wasn\'t the quality of the introductions — it was how well the AI understood WHY each connection mattered. It felt like a brilliant friend who knows everyone.',
    name: 'Aisha Patel',
    role: 'Executive Coach',
  },
  {
    quote: 'I joined skeptical. I\'d been in plenty of networks. But the first introduction was so precisely right — someone grappling with the exact challenge I\'d just solved — that I was hooked.',
    name: 'Henrik Svensson',
    role: 'Managing Director, Nordea Ventures',
  },
]
</script>

<template>
  <div class="superconnectors-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/superconnectors-hero.png" alt="Superconnector neural network" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Technology</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Meet the<br>
          <span class="text-serif-italic text-gold">Superconnectors.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          The AI agents that deeply understand every member of your community — 
          and use that understanding to forge the connections that change lives.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/circles" class="btn btn-primary btn-lg">Join a Circle</router-link>
          <a href="#philosophy" class="btn btn-secondary btn-lg">Our Approach</a>
        </div>
      </div>
    </section>

    <!-- THE BIG IDEA -->
    <section class="big-idea section">
      <div class="container">
        <div class="big-idea-inner reveal">
          <div class="big-idea-content">
            <span class="text-label">The Vision</span>
            <h2 class="text-heading">
              Communities of trust,<br>
              <span class="text-serif-italic text-gold">amplified by intelligence.</span>
            </h2>
            <p class="text-body-lg">
              Imagine a friend who knows everyone in your community deeply — their dreams, 
              their expertise, their struggles, their gifts. A friend who never forgets, 
              never plays favorites, and is endlessly generous with introductions.
            </p>
            <p class="text-body-lg">
              That's a Superconnector. It's an AI agent assigned to every Circle, 
              trained not to replace human connection but to <strong class="text-gold">catalyze it</strong>. 
              The result: communities where trust runs deep and serendipity is the norm.
            </p>
          </div>
          <div class="big-idea-visual">
            <div class="visual-ring">
              <div class="visual-ring-inner">
                <div class="visual-core">
                  <span class="visual-core-icon">◎</span>
                  <span class="visual-core-label">Superconnector</span>
                </div>
              </div>
              <div class="visual-node" v-for="n in 6" :key="n" :style="{ '--i': n }">
                <span class="visual-node-dot"></span>
              </div>
              <svg class="visual-lines" viewBox="0 0 300 300">
                <line v-for="n in 6" :key="n"
                  x1="150" y1="150"
                  :x2="150 + 110 * Math.cos((n * Math.PI * 2) / 6 - Math.PI / 2)"
                  :y2="150 + 110 * Math.sin((n * Math.PI * 2) / 6 - Math.PI / 2)"
                  stroke="rgba(201, 169, 110, 0.2)"
                  stroke-width="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CAPABILITIES -->
    <section class="capabilities section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Capabilities</span>
          <h2 class="text-heading">What a Superconnector<br><span class="text-serif-italic text-gold">actually does.</span></h2>
        </div>
        <div class="capabilities-grid">
          <div
            v-for="(cap, i) in capabilities"
            :key="cap.title"
            class="capability-card glass reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <component :is="cap.icon" class="capability-icon" :size="28" :stroke-width="1.5" />
            <h3 class="capability-title">{{ cap.title }}</h3>
            <p class="capability-desc">{{ cap.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- IMPACT STATS -->
    <section class="impact section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Impact</span>
          <h2 class="text-heading">The numbers<br><span class="text-serif-italic text-gold">speak.</span></h2>
        </div>
        <div class="impact-grid">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="impact-card reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <span class="impact-value">{{ stat.value }}</span>
            <span class="impact-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section id="philosophy" class="principles section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Philosophy</span>
          <h2 class="text-heading">Our beliefs about<br><span class="text-serif-italic text-gold">AI and connection.</span></h2>
        </div>
        <div class="principles-list">
          <div
            v-for="(p, i) in principles"
            :key="p.number"
            class="principle-item reveal"
            :class="`reveal-delay-${(i % 4) + 1}`"
          >
            <div class="principle-number">{{ p.number }}</div>
            <div class="principle-content">
              <h3 class="principle-title">{{ p.title }}</h3>
              <p class="principle-desc">{{ p.description }}</p>
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
          <h2 class="text-heading">When AI gets<br><span class="text-serif-italic text-gold">connection right.</span></h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner
      label="Experience It"
      title="See the Superconnector"
      title-accent="in action."
      description="Join a Circle and meet the AI agent that powers it. Your first introduction is usually the one that convinces you."
      primary-text="Join a Circle"
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
  opacity: 0.6;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.3) 0%,
    rgba(10, 10, 10, 0.6) 40%,
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

/* ===== BIG IDEA ===== */
.big-idea-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

.big-idea-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.big-idea-content .text-heading {
  margin-bottom: var(--space-sm);
}

/* Visual Ring */
.big-idea-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-ring {
  position: relative;
  width: 300px;
  height: 300px;
}

.visual-ring-inner {
  position: absolute;
  inset: 80px;
  border: 1px solid var(--color-gold-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-secondary);
}

.visual-core {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.visual-core-icon {
  font-size: var(--text-2xl);
  color: var(--color-gold);
}

.visual-core-label {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.visual-node {
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  left: calc(50% - 8px);
  transform: rotate(calc(var(--i) * 60deg)) translateY(-110px) rotate(calc(var(--i) * -60deg));
}

.visual-node-dot {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-gold);
  opacity: 0.6;
  animation: nodePulse 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.4s);
}

@keyframes nodePulse {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.3); }
}

.visual-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
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

/* ===== CAPABILITIES ===== */
.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.capability-card {
  padding: var(--space-xl);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.capability-card:hover {
  border-color: var(--color-gold-border);
  transform: translateY(-2px);
}

.capability-icon {
  font-size: var(--text-2xl);
  display: block;
  margin-bottom: var(--space-md);
}

.capability-title {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
}

.capability-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* ===== IMPACT ===== */
.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.impact-card {
  text-align: center;
  padding: var(--space-2xl) var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
}

.impact-value {
  display: block;
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-gold);
  margin-bottom: var(--space-md);
}

.impact-label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
}

/* ===== PRINCIPLES ===== */
.principles-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
}

.principle-item {
  display: flex;
  gap: var(--space-xl);
  padding-bottom: var(--space-2xl);
  border-bottom: 1px solid var(--color-border);
}

.principle-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.principle-number {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-gold);
  opacity: 0.3;
  font-family: var(--font-serif);
  flex-shrink: 0;
  min-width: 60px;
}

.principle-content {
  flex: 1;
}

.principle-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-md);
}

.principle-desc {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.7;
}

/* ===== TESTIMONIALS ===== */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.testimonial-card {
  display: flex;
  flex-direction: column;
}

.testimonial-quote {
  font-size: var(--text-base);
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

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .big-idea-inner {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .capabilities-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
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

  .capabilities-grid {
    grid-template-columns: 1fr;
  }

  .impact-grid {
    grid-template-columns: 1fr;
  }

  .principle-item {
    flex-direction: column;
    gap: var(--space-md);
  }

  .principle-number {
    min-width: auto;
  }
}
</style>
