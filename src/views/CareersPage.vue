<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
useScrollReveal()

const roles = [
  { title: 'Senior AI Engineer', team: 'Engineering', location: 'London / Remote', type: 'Full-time', description: 'Build the AI systems that power Quintessential Coaching, Superconnectors, and personalization. Work on NLP, recommendation systems, and dialogue.' },
  { title: 'Product Designer', team: 'Design', location: 'London', type: 'Full-time', description: 'Shape the experience of Q\'s web and mobile products. Create interfaces that feel invisible — warm, intuitive, and deeply human.' },
  { title: 'Community Lead', team: 'Community', location: 'London / Singapore', type: 'Full-time', description: 'Build and nurture Quintessential Circles worldwide. Design events, facilitate connections, and help members find their people.' },
  { title: 'Full Stack Developer', team: 'Engineering', location: 'Remote', type: 'Full-time', description: 'Build features across the Q platform using Vue, Node, and PostgreSQL. Ship fast, care deeply, and build for humans.' },
  { title: 'Content & Editorial Lead', team: 'Content', location: 'Remote', type: 'Full-time', description: 'Lead the editorial voice of Quintessential Books and Quintessential News. Write, curate, and ensure every word reflects our values of depth and honesty.' },
  { title: 'Head of Partnerships', team: 'Business', location: 'London', type: 'Full-time', description: 'Build strategic partnerships with coaches, restaurants, retreat venues, and travel providers. Make Q\'s real-world experiences extraordinary.' },
]

const perks = [
  'Competitive salary + meaningful equity',
  'Remote-first with London HQ',
  'Unlimited learning budget',
  'Annual Q Retreat for all team members',
  '30 days holiday + your birthday',
  'Free Q+ membership (of course)',
  'Enhanced parental leave',
  'Weekly coaching sessions (AI + human)',
]
</script>

<template>
  <div class="careers-page">
    <section class="hero-simple">
      <div class="container">
        <span class="text-label reveal">Careers</span>
        <h1 class="text-hero reveal reveal-delay-1">Build something that<br><span class="text-serif-italic text-gold">matters.</span></h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          We're looking for people who believe technology should make humans more human — 
          and want to spend their career proving it.
        </p>
      </div>
    </section>

    <!-- PERKS -->
    <section class="perks section reveal">
      <div class="container">
        <div class="perks-inner">
          <h2 class="text-heading" style="text-align: center; margin-bottom: var(--space-2xl);"><span class="text-serif-italic text-gold">Why Q</span></h2>
          <div class="perks-grid">
            <div v-for="perk in perks" :key="perk" class="perk-item">{{ perk }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ROLES -->
    <section class="roles section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Open Roles</span>
          <h2 class="text-heading">Join the<br><span class="text-serif-italic text-gold">team.</span></h2>
        </div>
        <div class="roles-list">
          <div v-for="(role, i) in roles" :key="role.title" class="role-card card card-gold reveal" :class="`reveal-delay-${(i % 3) + 1}`">
            <div class="role-top">
              <div>
                <h3 class="role-title">{{ role.title }}</h3>
                <p class="role-desc">{{ role.description }}</p>
              </div>
            </div>
            <div class="role-footer">
              <div class="role-tags">
                <span class="role-tag">{{ role.team }}</span>
                <span class="role-tag">{{ role.location }}</span>
                <span class="role-tag">{{ role.type }}</span>
              </div>
              <router-link to="/contact" class="btn btn-sm btn-secondary">Apply</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner label="Don't See Your Role?" title="We're always looking for" title-accent="extraordinary people." description="If you're passionate about our mission but don't see a perfect fit, send us a note. The best hires are often the ones we didn't plan for." primary-text="Get in Touch" primary-link="/contact" secondary-text="Our Mission" secondary-link="/mission" />
  </div>
</template>

<style scoped>
.hero-simple { padding: var(--space-5xl) 0 var(--space-3xl); text-align: center; }
.hero-subtitle { max-width: 600px; margin: var(--space-xl) auto 0; }
.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

.perks-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }
.perks-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-md); max-width: 600px; margin: 0 auto; }
.perk-item { font-size: var(--text-sm); color: var(--color-text-secondary); padding: var(--space-sm) 0; }

.roles-list { display: flex; flex-direction: column; gap: var(--space-lg); }
.role-card { display: flex; flex-direction: column; }
.role-title { font-size: var(--text-xl); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.role-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }
.role-footer { display: flex; align-items: center; justify-content: space-between; margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); flex-wrap: wrap; gap: var(--space-md); }
.role-tags { display: flex; gap: var(--space-sm); flex-wrap: wrap; }
.role-tag { display: inline-block; padding: 0.2rem 0.6rem; font-size: 0.7rem; background: rgba(255,255,255,0.05); border: 1px solid var(--color-border); border-radius: var(--radius-full); color: var(--color-text-tertiary); }

@media (max-width: 640px) { .perks-grid { grid-template-columns: 1fr; } .role-footer { flex-direction: column; align-items: flex-start; } }
</style>
