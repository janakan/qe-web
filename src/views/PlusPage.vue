<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Heart, Users, GraduationCap, Brain, Sparkles, Globe, BookOpen, Music, Newspaper, Shield, Crown, Building2 } from 'lucide-vue-next'
useScrollReveal()

const plusStats = [
  { value: '12,000+', label: 'Members' },
  { value: '32', label: 'Countries' },
  { value: '2,150+', label: 'Events' },
  { value: '94%', label: 'Would Recommend' },
]

const whatYouUnlock = [
  { icon: Brain, title: 'Blended Coaching', description: 'AI coaching enhanced with real human coaches. The always-on intelligence of AI, combined with the depth and intuition of a world-class human coach.' },
  { icon: GraduationCap, title: 'Expert-Led Workshops', description: 'Curated lectures and workshops from leading thinkers, founders, and practitioners — depth you won\'t find anywhere else.' },
  { icon: Users, title: 'Create Your Own Groups', description: 'Launch your own Circles and Peer Groups. Bring your people together on the Quintessential platform.' },
  { icon: BookOpen, title: 'Advanced Growth Tools', description: 'Deeper personality assessments, advanced goal tracking, and AI-powered growth insights that go further.' },
  { icon: Newspaper, title: 'Priority Everything', description: 'Priority AI matching, early access to new features, and first invitations to intimate in-person events and retreats.' },
  { icon: Music, title: 'Signature Experiences', description: 'Curated retreat invitations, private dining events, and premium travel itineraries — the full Quintessential experience.' },
]

const tiers = [
  {
    name: 'Q+ Individual',
    icon: Sparkles,
    price: '$9',
    period: '/month',
    description: 'For individuals who want the full Quintessential experience — deeper coaching, curated content, and premium access.',
    features: [
      'Everything in Free — always',
      'Premium expert lectures & workshops',
      'Advanced growth assessments',
      'Create your own Circles & Peer Groups',
      'Priority AI matching for all products',
      'Curated retreat invitations',
      'Early access to new features',
      'Q+ member community',
    ],
    cta: 'Join Q+ Individual',
    ctaClass: 'btn-primary',
  },
  {
    name: 'Q+ Family',
    icon: Heart,
    price: '$19',
    period: '/month',
    description: 'The full Q+ experience for your whole household — up to 6 people. Grow together as a family.',
    features: [
      'Everything in Q+ Individual',
      'Up to 6 family members',
      'Family learning journeys',
      'Shared reading lists & book clubs',
      'Family growth challenges',
      'Parenting & relationship resources',
      'Family retreat access',
      'Priority family event invitations',
    ],
    cta: 'Join Q+ Family',
    ctaClass: 'btn-primary',
    featured: true,
  },
  {
    name: 'Q+ Corporate',
    icon: Building2,
    price: '$29',
    period: '/month per seat',
    description: 'Bring the full Quintessential experience to your team — leadership development, team coaching, and peer groups.',
    features: [
      'Everything in Q+ Individual',
      'Team Peer Groups',
      'Leadership development journeys',
      'Team coaching sessions',
      'Manager & culture tools',
      'Custom Circle creation',
      'Dedicated account support',
      'Company-wide analytics & insights',
    ],
    cta: 'Contact Us',
    ctaClass: 'btn-secondary',
  },
]

const testimonials = [
  {
    quote: 'The blended coaching alone is worth ten times the price. Having an AI coach available at 2am and a human coach who actually knows my story — that\'s something I\'ve never had before.',
    name: 'Maria Santos',
    role: 'VP Product, Lisbon',
  },
  {
    quote: 'Our entire leadership team is on Q+ Corporate. The peer groups and coaching have genuinely transformed our culture. And knowing our subscriptions help keep these tools free for everyone? That\'s the kind of company we want to be.',
    name: 'Anders Lindström',
    role: 'CEO, Brightpath',
  },
]
</script>

<template>
  <div class="plus-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid-pattern"></div>
      </div>
      <div class="container hero-content">
        <h1 class="text-hero reveal reveal-delay-1">
          Go further.<br>
          <span class="text-serif-italic text-gold">Do more.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          Q+ is the full Quintessential experience — deeper coaching, intimate events,
          and curated experiences designed for those who want to get the most out of life.
          And because we're Quintessential, every Q+ membership also helps keep
          everything else free for everyone.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <a href="#tiers" class="btn btn-primary btn-lg">See Plans</a>
          <router-link to="/mission" class="btn btn-secondary btn-lg">Our Mission</router-link>
        </div>
      </div>
      <div class="hero-fade"></div>
    </section>

    <!-- STATS -->
    <section class="impact-stats reveal">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in plusStats" :key="stat.label" class="stat-item">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT YOU UNLOCK -->
    <section class="funds section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">The Q+ Experience</span>
          <h2 class="text-heading">What you<br><span class="text-serif-italic text-gold">unlock.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            Q+ is the concierge-level experience for those who want to go further.
            Here's what's waiting for you.
          </p>
        </div>
        <div class="funds-grid">
          <div
            v-for="(item, i) in whatYouUnlock"
            :key="item.title"
            class="fund-card glass reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <component :is="item.icon" class="fund-icon" :size="28" :stroke-width="1.5" />
            <h3 class="fund-title">{{ item.title }}</h3>
            <p class="fund-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TIERS -->
    <section id="tiers" class="tiers section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Choose Your Plan</span>
          <h2 class="text-heading">Find your<br><span class="text-serif-italic text-gold">fit.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            Individual, family, or team. Choose the experience that fits your life —
            and know that every membership helps us keep everything else free.
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
              <component :is="tier.icon" class="tier-icon" :size="28" :stroke-width="1.5" />
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

    <!-- PROMISE -->
    <section class="promise section section-border-top reveal">
      <div class="container">
        <div class="promise-inner">
          <div class="section-header">
            <span class="text-label">The Quintessential Promise</span>
            <h2 class="text-heading">What will<br><span class="text-serif-italic text-gold">never change.</span></h2>
          </div>
          <div class="promise-grid">
            <div class="promise-item">
              <Shield class="promise-icon" :size="24" :stroke-width="1.5" />
              <h4>Free forever</h4>
              <p>Core coaching, learning, communities, and media will always be free. This is not a trial. It's a commitment.</p>
            </div>
            <div class="promise-item">
              <Globe class="promise-icon" :size="24" :stroke-width="1.5" />
              <h4>For every human</h4>
              <p>We build for the whole world — not just English speakers, not just tech workers, not just the privileged.</p>
            </div>
            <div class="promise-item">
              <Crown class="promise-icon" :size="24" :stroke-width="1.5" />
              <h4>Q+ is optional</h4>
              <p>We will never degrade the free experience to push upgrades. Q+ is for people who want to do more — not need to.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Q+ Members</span>
          <h2 class="text-heading">Why they<br><span class="text-serif-italic text-gold">went Q+.</span></h2>
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

    <CtaBanner
      label="Join Q+"
      title="Ready to go"
      title-accent="further?"
      description="Get the premium Quintessential experience — and help us keep everything else free for everyone."
      primary-text="Join Q+ Today"
      primary-link="/contact"
      secondary-text="Read Our Mission"
      secondary-link="/mission"
    />
  </div>
</template>

<style scoped>
/* ===== HERO ===== */
.hero {
  position: relative; min-height: 100vh;
  display: flex; align-items: center; overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; z-index: 0; }
.hero-gradient {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201, 169, 110, 0.1) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 50%, rgba(201, 169, 110, 0.05) 0%, transparent 50%);
}
.hero-grid-pattern {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, black 20%, transparent 70%);
}
.hero-content {
  position: relative; z-index: 1; text-align: center;
  padding: var(--space-5xl) 0;
  display: flex; flex-direction: column; align-items: center;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: var(--space-sm);
  padding: 0.5rem 1.25rem; font-size: var(--text-sm);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border); border-radius: var(--radius-full);
  margin-bottom: var(--space-2xl);
}
.hero-badge-dot { width: 6px; height: 6px; background: var(--color-gold); border-radius: 50%; animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.hero-subtitle { max-width: 660px; margin-top: var(--space-xl); }
.hero-actions { display: flex; gap: var(--space-md); margin-top: var(--space-2xl); }
.hero-fade {
  position: absolute; bottom: 0; left: 0; right: 0; height: 120px;
  background: linear-gradient(to bottom, transparent, var(--color-bg-primary)); z-index: 1;
}

/* ===== MISSION IMPACT ===== */
.mission-impact { padding: var(--space-4xl) 0; }
.mission-impact-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }

/* ===== STATS ===== */
.impact-stats { padding: var(--space-3xl) 0; border-bottom: 1px solid var(--color-border); }
.stats-grid { display: flex; justify-content: center; gap: var(--space-4xl); flex-wrap: wrap; }
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.stat-value { font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-gold); }
.stat-label { font-size: var(--text-xs); color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; text-align: center; }

/* ===== SECTION HEADER ===== */
.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

/* ===== FUNDS ===== */
.funds-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
.fund-card { padding: var(--space-xl); border-radius: var(--radius-md); transition: all var(--transition-base); }
.fund-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.fund-icon { display: block; margin-bottom: var(--space-md); color: var(--color-gold); }
.fund-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.fund-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

/* ===== TIERS ===== */
.tiers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); align-items: start; }
.tier-card {
  background: var(--color-bg-card); border: 1px solid var(--color-border);
  border-radius: var(--radius-lg); padding: var(--space-2xl);
  display: flex; flex-direction: column; transition: all var(--transition-base);
}
.tier-card:hover { border-color: var(--color-border-hover); transform: translateY(-2px); }
.tier-featured { border-color: var(--color-gold-border); box-shadow: var(--shadow-glow); position: relative; }
.tier-featured::before {
  content: 'Most Popular'; position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
  background: var(--color-gold); color: var(--color-text-inverse);
  font-size: var(--text-xs); font-weight: var(--font-semibold);
  text-transform: uppercase; letter-spacing: 0.06em;
  padding: 0.25rem 1rem; border-radius: var(--radius-full); white-space: nowrap;
}
.tier-header { margin-bottom: var(--space-xl); }
.tier-icon { color: var(--color-gold); margin-bottom: var(--space-md); }
.tier-name { font-size: var(--text-xl); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.tier-price { display: flex; align-items: baseline; gap: 4px; margin-bottom: var(--space-md); }
.tier-amount { font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-gold); }
.tier-period { font-size: var(--text-sm); color: var(--color-text-tertiary); }
.tier-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }
.tier-features { display: flex; flex-direction: column; gap: var(--space-sm); margin-bottom: var(--space-xl); flex: 1; }
.tier-features li { font-size: var(--text-sm); color: var(--color-text-secondary); padding-left: var(--space-lg); position: relative; line-height: 1.6; }
.tier-features li::before { content: '✓'; position: absolute; left: 0; color: var(--color-gold); font-size: var(--text-xs); }

/* ===== PROMISE ===== */
.promise-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }
.promise-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
.promise-item { text-align: center; }
.promise-icon { color: var(--color-gold); margin-bottom: var(--space-md); }
.promise-item h4 { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.promise-item p { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

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
  .funds-grid { grid-template-columns: repeat(2, 1fr); }
  .tiers-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
  .promise-grid { grid-template-columns: 1fr; gap: var(--space-xl); }
  .stats-grid { gap: var(--space-2xl); }
  .testimonials-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
  .hero-actions .btn { width: 100%; }
  .funds-grid { grid-template-columns: 1fr; }
  .stats-grid { flex-wrap: wrap; gap: var(--space-xl); }
}
</style>
