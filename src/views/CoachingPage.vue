<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Rocket, Heart, Brain, Zap, Sparkles, Sprout } from 'lucide-vue-next'
useScrollReveal()

const domains = [
  {
    icon: Rocket,
    title: 'Career & Purpose',
    description: 'Navigate transitions, find meaning in work, accelerate growth, and align your career with who you\'re becoming.',
  },
  {
    icon: Heart,
    title: 'Relationships',
    description: 'Deepen connections, navigate conflict, strengthen partnerships, and build the relationships that sustain you.',
  },
  {
    icon: Brain,
    title: 'Leadership',
    description: 'Lead with authenticity, build high-trust teams, make hard decisions, and grow into the leader your people need.',
  },
  {
    icon: Zap,
    title: 'Health & Energy',
    description: 'Build sustainable habits, manage stress, optimize performance, and create a life that doesn\'t burn you out.',
  },
  {
    icon: Sparkles,
    title: 'Purpose & Meaning',
    description: 'Explore the big questions — who am I, what matters, what\'s my contribution — with depth and honesty.',
  },
  {
    icon: Sprout,
    title: 'Personal Growth',
    description: 'Develop emotional intelligence, overcome limiting beliefs, build resilience, and step into your full potential.',
  },
]

const tiers = [
  {
    name: 'AI Coaching',
    badge: 'Free',
    badgeClass: 'badge-free',
    price: '£0',
    period: 'forever',
    description: 'World-class coaching powered entirely by AI. Available 24/7, deeply personalized, and genuinely transformative.',
    features: [
      'Unlimited AI coaching sessions',
      'Personalized goal tracking',
      'Daily reflection prompts',
      'All 6 coaching domains',
      'Progress insights & patterns',
      'Community access',
    ],
    cta: 'Start Free',
    ctaClass: 'btn-secondary',
  },
  {
    name: 'Blended',
    badge: 'Q+',
    badgeClass: 'badge-gold',
    price: '£49',
    period: '/month',
    description: 'AI coaching enhanced with regular human coach sessions. The best of both worlds — always-on AI plus periodic human depth.',
    features: [
      'Everything in Free',
      '2 human coaching sessions/month',
      'Coach-AI handoff notes',
      'Priority AI availability',
      'Advanced personality insights',
      'Exclusive coaching workshops',
    ],
    cta: 'Join Q+',
    ctaClass: 'btn-primary',
    featured: true,
  },
  {
    name: 'Premium',
    badge: 'Elite',
    badgeClass: 'badge-elite',
    price: '£299',
    period: '/month',
    description: 'A dedicated world-class human coach supported by AI preparation, continuity, and follow-through. Unmatched depth.',
    features: [
      'Everything in Blended',
      'Weekly 1:1 human coaching',
      'Dedicated coach (matched by AI)',
      'Between-session AI support',
      '360° feedback integration',
      'Executive retreat invitations',
    ],
    cta: 'Apply',
    ctaClass: 'btn-secondary',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Share your story',
    description: 'Tell us where you are and where you want to be. The AI listens deeply — not just to your words, but to the patterns beneath them.',
  },
  {
    step: '02',
    title: 'Get matched',
    description: 'Our AI coach adapts to your personality, communication style, and goals. For blended/premium, it also matches you with the ideal human coach.',
  },
  {
    step: '03',
    title: 'Grow consistently',
    description: 'Weekly sessions, daily check-ins, and real-time support. The AI never forgets what you said three months ago — and notices when you\'re stuck.',
  },
  {
    step: '04',
    title: 'See transformation',
    description: 'Track your growth over time with insights that surprise you. Members report breakthroughs within weeks, not years.',
  },
]

const testimonials = [
  {
    quote: 'I was skeptical about AI coaching. Then it asked me a question my therapist of 5 years never thought to ask. I cried. In a good way.',
    name: 'Rachel Torres',
    role: 'VP of Engineering, Dataflow',
  },
  {
    quote: 'The blended model is genius. My AI coach keeps things moving between sessions, so when I meet my human coach, we go straight to the deep stuff.',
    name: 'Kwame Adjei',
    role: 'Founder, Akoma Ventures',
  },
  {
    quote: 'I\'ve had executive coaches that cost £500/hour. This is better. Not because the humans are worse, but because the AI fills every gap between sessions.',
    name: 'Victoria Lindqvist',
    role: 'CFO, Nordvest Group',
  },
]

const stats = [
  { value: '89%', label: 'Report meaningful progress within 4 weeks' },
  { value: '4.8', label: 'Average satisfaction score (out of 5)' },
  { value: '12k+', label: 'Active coaching relationships' },
  { value: '3x', label: 'More sessions than traditional coaching' },
]
</script>

<template>
  <div class="coaching-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/coaching-hero.png" alt="Premium coaching session" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Coaching</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Your wisest<br>
          <span class="text-serif-italic text-gold">counsel.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          World-class coaching that's always available, deeply personalized, and — 
          for the first time — accessible to everyone. AI-powered, human-enhanced.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Start Free</router-link>
          <a href="#tiers" class="btn btn-secondary btn-lg">See Plans</a>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="philosophy-section section reveal">
      <div class="container">
        <div class="philosophy-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            Great coaching used to cost £300/hour. AI makes it 
            <span class="text-gold">nearly free</span>. But we didn't stop there — 
            we built a system where AI and human coaches work together, 
            creating something <em>better</em> than either could alone.
          </p>
        </div>
      </div>
    </section>

    <!-- COACHING DOMAINS -->
    <section class="domains section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Domains</span>
          <h2 class="text-heading">Every dimension of<br><span class="text-serif-italic text-gold">your life.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            Whatever you're working on, we have depth. Our AI coaches are trained across 
            six core domains — and they understand how they interconnect.
          </p>
        </div>
        <div class="domains-grid">
          <div
            v-for="(domain, i) in domains"
            :key="domain.title"
            class="domain-card glass reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <component :is="domain.icon" class="domain-icon" :size="28" :stroke-width="1.5" />
            <h3 class="domain-title">{{ domain.title }}</h3>
            <p class="domain-desc">{{ domain.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="how-it-works section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">The Experience</span>
          <h2 class="text-heading">How Quintessential Coaching<br><span class="text-serif-italic text-gold">works.</span></h2>
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

    <!-- PRICING TIERS -->
    <section id="tiers" class="tiers section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Plans</span>
          <h2 class="text-heading">Choose your<br><span class="text-serif-italic text-gold">level.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            Start free. Upgrade when you're ready. Every tier delivers 
            genuine transformation — the difference is depth and human involvement.
          </p>
        </div>
        <div class="tiers-grid">
          <div
            v-for="(tier, i) in tiers"
            :key="tier.name"
            class="tier-card reveal"
            :class="[`reveal-delay-${i + 1}`, { 'tier-featured': tier.featured }]"
          >
            <div class="tier-header">
              <span class="tier-badge" :class="tier.badgeClass">{{ tier.badge }}</span>
              <h3 class="tier-name">{{ tier.name }}</h3>
              <div class="tier-price">
                <span class="tier-amount">{{ tier.price }}</span>
                <span class="tier-period">{{ tier.period }}</span>
              </div>
              <p class="tier-desc">{{ tier.description }}</p>
            </div>
            <ul class="tier-features">
              <li v-for="feature in tier.features" :key="feature">{{ feature }}</li>
            </ul>
            <router-link to="/contact" class="btn" :class="tier.ctaClass" style="width: 100%; margin-top: auto;">
              {{ tier.cta }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats-section section section-border-top">
      <div class="container">
        <div class="stats-grid">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="stat-card reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Stories</span>
          <h2 class="text-heading">Coaching that<br><span class="text-serif-italic text-gold">transforms.</span></h2>
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
      label="Start Your Journey"
      title="Ready to grow with"
      title-accent="real guidance?"
      description="Whether you choose AI, blended, or premium — you're choosing a coaching experience that genuinely understands you and never lets you plateau."
      primary-text="Start Free Today"
      primary-link="/contact"
      secondary-text="Explore Learning"
      secondary-link="/learning"
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
  max-width: 620px;
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

/* ===== DOMAINS ===== */
.domains-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}

.domain-card {
  padding: var(--space-xl);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.domain-card:hover {
  border-color: var(--color-gold-border);
  transform: translateY(-2px);
}

.domain-icon {
  font-size: var(--text-2xl);
  display: block;
  margin-bottom: var(--space-md);
}

.domain-title {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
}

.domain-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* ===== HOW IT WORKS ===== */
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

/* ===== PRICING TIERS ===== */
.tiers-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
  align-items: start;
}

.tier-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
  transition: all var(--transition-base);
}

.tier-card:hover {
  border-color: var(--color-border-hover);
  transform: translateY(-2px);
}

.tier-featured {
  border-color: var(--color-gold-border);
  box-shadow: var(--shadow-glow);
  position: relative;
}

.tier-featured::before {
  content: 'Most Popular';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-gold);
  color: var(--color-text-inverse);
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.25rem 1rem;
  border-radius: var(--radius-full);
  white-space: nowrap;
}

.tier-header {
  margin-bottom: var(--space-xl);
}

.tier-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-md);
}

.badge-free {
  background: rgba(255, 255, 255, 0.08);
  color: var(--color-text-secondary);
}

.badge-gold {
  background: rgba(201, 169, 110, 0.15);
  color: var(--color-gold);
  border: 1px solid var(--color-gold-border);
}

.badge-elite {
  background: rgba(147, 130, 220, 0.15);
  color: #b8a9e8;
  border: 1px solid rgba(147, 130, 220, 0.3);
}

.tier-name {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
}

.tier-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: var(--space-md);
}

.tier-amount {
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  color: var(--color-gold);
}

.tier-period {
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.tier-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.tier-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
  flex: 1;
}

.tier-features li {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding-left: var(--space-lg);
  position: relative;
  line-height: 1.6;
}

.tier-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-gold);
  font-size: var(--text-xs);
}

/* ===== STATS ===== */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-xl);
}

.stat-card {
  text-align: center;
  padding: var(--space-2xl) var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
}

.stat-value {
  display: block;
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  color: var(--color-gold);
  margin-bottom: var(--space-md);
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
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
  .domains-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tiers-grid {
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
  }

  .stats-grid {
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

  .domains-grid {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
