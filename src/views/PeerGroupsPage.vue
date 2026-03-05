<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Users, Target, BookOpen, Mic, TrendingUp, Heart, Shield, Calendar, Sparkles, Brain } from 'lucide-vue-next'
useScrollReveal()

const features = [
  {
    icon: Users,
    title: 'Small by Design',
    description: 'Groups of 5–8 people, carefully matched by AI for complementary perspectives and shared growth goals.',
  },
  {
    icon: Calendar,
    title: 'Weekly Rhythm',
    description: 'Each week brings readings, talks, reflection prompts, and optional group meetups — a consistent drumbeat for growth.',
  },
  {
    icon: BookOpen,
    title: 'Curated Content',
    description: 'World-class readings and talks from leading thinkers, curated by AI to match your group\'s interests and growth stage.',
  },
  {
    icon: Mic,
    title: 'Live Lectures & Workshops',
    description: 'Expert-led sessions on leadership, emotional intelligence, purpose, and more. Free for everyone.',
  },
  {
    icon: Target,
    title: 'Growth Challenges',
    description: 'Weekly challenges that push you beyond your comfort zone — with your group holding you accountable.',
  },
  {
    icon: Shield,
    title: 'Covenant of Trust',
    description: 'Every group operates under strict confidentiality. What\'s shared stays shared. Vulnerability is the currency of growth.',
  },
]

const exampleGroups = [
  {
    name: 'First-Time Founders',
    members: 6,
    focus: 'Entrepreneurship',
    description: 'Six founders navigating the chaos of their first startup together. Weekly case studies, honest feedback, and the kind of support only fellow founders understand.',
    icon: TrendingUp,
  },
  {
    name: 'New Parents Circle',
    members: 7,
    focus: 'Life Transition',
    description: 'Parents in their first two years navigating identity shifts, relationship changes, and the beautiful mess of early parenthood.',
    icon: Heart,
  },
  {
    name: 'Women in Leadership',
    members: 8,
    focus: 'Leadership',
    description: 'Senior women leaders developing their authentic leadership voice, navigating corporate politics, and supporting each other\'s ambitions.',
    icon: Sparkles,
  },
  {
    name: 'Career Changers',
    members: 5,
    focus: 'Career',
    description: 'Professionals mid-pivot — exploring new directions, building new skills, and holding each other accountable through the scary middle.',
    icon: Target,
  },
  {
    name: 'AI & Ethics Thinkers',
    members: 6,
    focus: 'Philosophy',
    description: 'Technologists, ethicists, and curious minds wrestling with what responsible AI looks like in practice, not just theory.',
    icon: Brain,
  },
  {
    name: 'Creative Recovery',
    members: 7,
    focus: 'Creativity',
    description: 'People reconnecting with their creative selves — writers, designers, musicians, and anyone who lost their spark and wants it back.',
    icon: BookOpen,
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Tell us who you are',
    description: 'Share your goals, your life stage, and what kind of growth matters most to you right now. Be honest — the AI matches better when you are.',
  },
  {
    step: '02',
    title: 'AI finds your group',
    description: 'Our matching algorithm considers personality, goals, experience level, and schedule to form groups with genuine chemistry and complementary perspectives.',
  },
  {
    step: '03',
    title: 'Join the weekly rhythm',
    description: 'Each week: curated readings and talks, optional group discussion, a growth challenge, and personal reflection. Show up as much or as little as you want.',
  },
  {
    step: '04',
    title: 'Grow together',
    description: 'Over weeks and months, your group becomes a trusted space for honest feedback, accountability, and the kind of support that actually changes lives.',
  },
]

const stats = [
  { value: '2,400+', label: 'Active Members' },
  { value: '340+', label: 'Peer Groups' },
  { value: '91%', label: 'Report Meaningful Growth' },
  { value: '88%', label: 'Still Meeting After 6 Months' },
]

const testimonials = [
  {
    quote: 'I\'ve spent £20k on executive coaching over the years. My Peer Group has been more transformative than all of it combined. There\'s something about being seen by peers that no coach can replicate.',
    name: 'Amara Diallo',
    role: 'Teacher, Lagos',
  },
  {
    quote: 'As a first-generation university student, I never had the networks my peers took for granted. Quintessential gave me a group of people who genuinely care about my growth. For free. That\'s extraordinary.',
    name: 'Raj Patel',
    role: 'Software Developer, Mumbai',
  },
]
</script>

<template>
  <div class="peer-groups-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid-pattern"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Peer Groups</span>
        <h1 class="text-hero reveal reveal-delay-1">
          The power of networks,<br>
          <span class="text-serif-italic text-gold">now for everyone.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          For centuries, the most transformative growth happened in elite networks —
          old-boy clubs, closed cohorts, boardroom confidants. Quintessential Peer Groups
          bring that power to every human. <strong>Free.</strong>
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Join a Peer Group</router-link>
          <a href="#how-it-works" class="btn btn-secondary btn-lg">How It Works</a>
        </div>
      </div>
      <div class="hero-fade"></div>
    </section>

    <!-- STATS -->
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

    <!-- PHILOSOPHY -->
    <section class="philosophy-section section reveal">
      <div class="container">
        <div class="philosophy-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            The best personal growth doesn't happen alone — it happens in the company of
            people who <span class="text-gold">challenge, support, and see you clearly</span>.
            Peer Groups are weekly growth communities matched by AI for maximum
            chemistry, accountability, and transformation.
          </p>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">What You Get</span>
          <h2 class="text-heading">A weekly rhythm of<br><span class="text-serif-italic text-gold">growth.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            Every week, your Peer Group receives curated content,
            meets for honest conversation, and takes on challenges that stretch you.
            Free for everyone. Forever.
          </p>
        </div>
        <div class="features-grid">
          <div
            v-for="(feature, i) in features"
            :key="feature.title"
            class="feature-card glass reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <component :is="feature.icon" class="feature-icon" :size="24" :stroke-width="1.5" />
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-desc">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section id="how-it-works" class="how-it-works section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">How It Works</span>
          <h2 class="text-heading">From individual to<br><span class="text-serif-italic text-gold">peer group.</span></h2>
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

    <!-- EXAMPLE GROUPS -->
    <section class="example-groups section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Example Groups</span>
          <h2 class="text-heading">Find your<br><span class="text-serif-italic text-gold">people.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            Every group is unique. Here's a glimpse at the kinds of Peer Groups forming right now.
          </p>
        </div>
        <div class="groups-grid">
          <div
            v-for="(group, i) in exampleGroups"
            :key="group.name"
            class="group-card card card-gold reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <div class="group-card-header">
              <component :is="group.icon" class="group-icon" :size="24" :stroke-width="1.5" />
              <span class="group-focus">{{ group.focus }}</span>
            </div>
            <h3 class="group-name">{{ group.name }}</h3>
            <p class="group-desc">{{ group.description }}</p>
            <div class="group-footer">
              <span class="group-members">{{ group.members }} members</span>
              <router-link to="/contact" class="btn btn-sm btn-secondary">Join</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FREE + Q+ COMPARISON -->
    <section class="tiers section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Access</span>
          <h2 class="text-heading">Free for everyone.<br><span class="text-serif-italic text-gold">Enhanced for Q+.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            Peer Groups are completely free. Q+ members get additional depth —
            but the core experience is available to every human on earth.
          </p>
        </div>
        <div class="tiers-grid">
          <div class="tier-card reveal reveal-delay-1">
            <div class="tier-header">
              <span class="tier-badge badge-free">Free</span>
              <h3 class="tier-name">For Everyone</h3>
              <div class="tier-price">
                <span class="tier-amount">$0</span>
                <span class="tier-period">forever</span>
              </div>
              <p class="tier-desc">Everything you need to grow — weekly content, group discussions, challenges, and genuine community.</p>
            </div>
            <ul class="tier-features">
              <li>AI-matched Peer Group</li>
              <li>Weekly curated readings & talks</li>
              <li>Group discussion access</li>
              <li>Growth challenges</li>
              <li>Personal reflection tools</li>
              <li>Community lectures</li>
            </ul>
            <router-link to="/contact" class="btn btn-secondary" style="width: 100%; margin-top: auto;">Join Free</router-link>
          </div>
          <div class="tier-card tier-featured reveal reveal-delay-2">
            <div class="tier-header">
              <span class="tier-badge badge-gold">Q+</span>
              <h3 class="tier-name">Enhanced</h3>
              <div class="tier-price">
                <span class="tier-amount">$9</span>
                <span class="tier-period">/month</span>
              </div>
              <p class="tier-desc">Go deeper with premium content, curated workshops, and advanced growth tools — and help keep Peer Groups free for everyone.</p>
            </div>
            <ul class="tier-features">
              <li>Everything in Free</li>
              <li>Premium expert lectures</li>
              <li>Advanced growth assessments</li>
              <li>Create your own Peer Group</li>
              <li>Priority AI matching</li>
              <li>Curated retreat invitations</li>
            </ul>
            <router-link to="/plus" class="btn btn-primary" style="width: 100%; margin-top: auto;">Join Q+</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Stories</span>
          <h2 class="text-heading">Growth that's<br><span class="text-serif-italic text-gold">real.</span></h2>
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
      label="Find Your Group"
      title="Ready to grow with"
      title-accent="people who get it?"
      description="Join thousands of people using Peer Groups to become better leaders, parents, partners, and humans. Free for everyone. Forever."
      primary-text="Join a Peer Group"
      primary-link="/contact"
      secondary-text="Explore Coaching"
      secondary-link="/coaching"
    />
  </div>
</template>

<style scoped>
/* ===== HERO ===== */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg { position: absolute; inset: 0; z-index: 0; }

.hero-gradient {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201, 169, 110, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 50%, rgba(201, 169, 110, 0.04) 0%, transparent 50%);
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

.hero-subtitle { max-width: 660px; margin-top: var(--space-xl); }

.hero-actions { display: flex; gap: var(--space-md); margin-top: var(--space-2xl); }

.hero-fade {
  position: absolute; bottom: 0; left: 0; right: 0; height: 120px;
  background: linear-gradient(to bottom, transparent, var(--color-bg-primary));
  z-index: 1;
}

/* ===== STATS ===== */
.stats-bar { padding: var(--space-3xl) 0; border-bottom: 1px solid var(--color-border); }
.stats-grid { display: flex; justify-content: center; gap: var(--space-4xl); }
.stat-item { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.stat-value { font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-gold); }
.stat-label { font-size: var(--text-xs); color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; }

/* ===== PHILOSOPHY ===== */
.philosophy-section { padding: var(--space-4xl) 0; }
.philosophy-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }

/* ===== SECTION HEADER ===== */
.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

/* ===== FEATURES ===== */
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-lg); }
.feature-card { padding: var(--space-xl); border-radius: var(--radius-md); transition: all var(--transition-base); }
.feature-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.feature-icon { font-size: var(--text-2xl); display: block; margin-bottom: var(--space-md); }
.feature-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.feature-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

/* ===== HOW IT WORKS ===== */
.steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-xl); }
.step-card { text-align: center; padding: var(--space-2xl) var(--space-lg); }
.step-number { font-size: var(--text-4xl); font-weight: var(--font-bold); color: var(--color-gold); opacity: 0.3; margin-bottom: var(--space-lg); font-family: var(--font-serif); }
.step-title { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-md); }
.step-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7; }

/* ===== EXAMPLE GROUPS ===== */
.groups-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
.group-card { display: flex; flex-direction: column; }
.group-card-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-lg); }
.group-icon { color: var(--color-gold); }
.group-focus { font-size: var(--text-xs); color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; font-weight: var(--font-semibold); }
.group-name { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.group-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; flex: 1; }
.group-footer { display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); }
.group-members { font-size: var(--text-xs); color: var(--color-text-tertiary); }

/* ===== TIERS ===== */
.tiers-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-xl); max-width: 700px; margin: 0 auto; }
.tier-card { background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: var(--space-2xl); display: flex; flex-direction: column; transition: all var(--transition-base); }
.tier-card:hover { border-color: var(--color-border-hover); transform: translateY(-2px); }
.tier-featured { border-color: var(--color-gold-border); box-shadow: var(--shadow-glow); position: relative; }
.tier-featured::before { content: 'Supports the Mission'; position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--color-gold); color: var(--color-text-inverse); font-size: var(--text-xs); font-weight: var(--font-semibold); text-transform: uppercase; letter-spacing: 0.06em; padding: 0.25rem 1rem; border-radius: var(--radius-full); white-space: nowrap; }
.tier-header { margin-bottom: var(--space-xl); }
.tier-badge { display: inline-block; padding: 0.25rem 0.75rem; font-size: var(--text-xs); font-weight: var(--font-semibold); text-transform: uppercase; letter-spacing: 0.06em; border-radius: var(--radius-full); margin-bottom: var(--space-md); }
.badge-free { background: rgba(255, 255, 255, 0.08); color: var(--color-text-secondary); }
.badge-gold { background: rgba(201, 169, 110, 0.15); color: var(--color-gold); border: 1px solid var(--color-gold-border); }
.tier-name { font-size: var(--text-xl); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.tier-price { display: flex; align-items: baseline; gap: 4px; margin-bottom: var(--space-md); }
.tier-amount { font-size: var(--text-3xl); font-weight: var(--font-bold); color: var(--color-gold); }
.tier-period { font-size: var(--text-sm); color: var(--color-text-tertiary); }
.tier-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }
.tier-features { display: flex; flex-direction: column; gap: var(--space-sm); margin-bottom: var(--space-xl); flex: 1; }
.tier-features li { font-size: var(--text-sm); color: var(--color-text-secondary); padding-left: var(--space-lg); position: relative; line-height: 1.6; }
.tier-features li::before { content: '✓'; position: absolute; left: 0; color: var(--color-gold); font-size: var(--text-xs); }

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
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .steps-grid { grid-template-columns: repeat(2, 1fr); }
  .groups-grid { grid-template-columns: repeat(2, 1fr); }
  .tiers-grid { grid-template-columns: 1fr; max-width: 420px; }
  .stats-grid { gap: var(--space-2xl); }
  .testimonials-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
  .hero-actions .btn { width: 100%; }
  .features-grid { grid-template-columns: 1fr; }
  .steps-grid { grid-template-columns: 1fr; }
  .groups-grid { grid-template-columns: 1fr; }
  .stats-grid { flex-wrap: wrap; gap: var(--space-xl); }
}
</style>
