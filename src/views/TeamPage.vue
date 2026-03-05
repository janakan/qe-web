<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Brain, Heart, Rocket, Sprout } from 'lucide-vue-next'
useScrollReveal()

const leadership = [
  { name: 'Janakan Arulkumarasan', role: 'Founder & CEO', initials: 'JA', bio: 'Cambridge mathematician turned community builder. Previously built AI systems at Google DeepMind. Believes the meaning of life is the relationships we build.' },
  { name: 'Dr. Elena Vasquez', role: 'Chief Coaching Officer', initials: 'EV', bio: 'Clinical psychologist and executive coach with 20 years of experience. Led coaching programs at McKinsey and Stanford. Passionate about making therapy accessible.' },
  { name: 'Marcus Chen', role: 'CTO', initials: 'MC', bio: 'Systems architect and AI researcher. Ex-Anthropic, ex-Stripe. Obsessed with building technology that respects privacy and amplifies human connection.' },
  { name: 'Amara Obi', role: 'Head of Community', initials: 'AO', bio: 'Community strategist who built member networks at Soho House and The Wing. Believes the best communities are small, trust-first, and deeply human.' },
  { name: 'James Nakamura', role: 'Head of Design', initials: 'JN', bio: 'Product designer from Apple and Airbnb. Brings a philosophy of "invisible design" — interfaces that feel so natural, you forget they\'re technology.' },
  { name: 'Priya Sharma', role: 'Head of AI', initials: 'PS', bio: 'NLP researcher and MIT PhD. Previously led dialogue systems at Google. Working to make AI genuinely empathetic — not just good at pretending to be.' },
]

const values = [
  { icon: Brain, title: 'Think deeply', description: 'We value rigorous thinking over fast opinions.' },
  { icon: Heart, title: 'Care genuinely', description: 'Every member, colleague, and decision gets our full heart.' },
  { icon: Rocket, title: 'Build boldly', description: 'We\'re here to change things, not iterate cautiously.' },
  { icon: Sprout, title: 'Grow always', description: 'We hire learners. Stagnation is the only real failure.' },
]
</script>

<template>
  <div class="team-page">
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/team-hero.png" alt="The Q team collaborating" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Our Team</span>
        <h1 class="text-hero reveal reveal-delay-1">The people behind<br><span class="text-serif-italic text-gold">the mission.</span></h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          A small, passionate team building technology that makes humans more human.
        </p>
      </div>
    </section>

    <!-- CULTURE VALUES -->
    <section class="culture section reveal">
      <div class="container">
        <div class="culture-grid">
          <div v-for="v in values" :key="v.title" class="culture-item">
            <component :is="v.icon" class="culture-icon" :size="28" :stroke-width="1.5" />
            <h3 class="culture-title">{{ v.title }}</h3>
            <p class="culture-desc">{{ v.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- LEADERSHIP -->
    <section class="leadership section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Leadership</span>
          <h2 class="text-heading">Meet the<br><span class="text-serif-italic text-gold">team.</span></h2>
        </div>
        <div class="team-grid">
          <div v-for="(m, i) in leadership" :key="m.name" class="member-card card card-gold reveal" :class="`reveal-delay-${(i % 3) + 1}`">
            <div class="member-avatar">{{ m.initials }}</div>
            <h3 class="member-name">{{ m.name }}</h3>
            <p class="member-role">{{ m.role }}</p>
            <p class="member-bio">{{ m.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner label="Join Us" title="Want to work" title-accent="with us?" description="We're always looking for extraordinary people who care deeply about human flourishing." primary-text="See Open Roles" primary-link="/careers" secondary-text="Our Mission" secondary-link="/mission" />
  </div>
</template>

<style scoped>
.hero { position: relative; min-height: 80vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 80%, var(--color-bg-primary) 100%); }
.hero-content { position: relative; z-index: 1; text-align: center; padding: var(--space-5xl) 0; display: flex; flex-direction: column; align-items: center; }
.hero-subtitle { max-width: 550px; margin-top: var(--space-xl); }
.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

.culture-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-xl); text-align: center; }
.culture-icon { color: var(--color-gold); display: block; margin-bottom: var(--space-sm); margin: 0 auto var(--space-sm); }
.culture-title { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-xs); }
.culture-desc { font-size: var(--text-sm); color: var(--color-text-secondary); }

.team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
.member-card { text-align: center; }
.member-avatar { width: 72px; height: 72px; border-radius: 50%; background: var(--color-gold); color: var(--color-text-inverse); display: flex; align-items: center; justify-content: center; font-weight: var(--font-bold); font-size: var(--text-lg); margin: 0 auto var(--space-lg); }
.member-name { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: 2px; }
.member-role { font-size: var(--text-sm); color: var(--color-gold); margin-bottom: var(--space-md); }
.member-bio { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

@media (max-width: 1024px) { .team-grid { grid-template-columns: repeat(2, 1fr); } .culture-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .team-grid, .culture-grid { grid-template-columns: 1fr; } }
</style>
