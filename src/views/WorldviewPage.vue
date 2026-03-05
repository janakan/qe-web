<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
useScrollReveal()

const beliefs = [
  {
    number: '01',
    title: 'Human flourishing is the point of everything.',
    body: 'Not GDP. Not productivity. Not engagement metrics. The ultimate measure of any technology, institution, or community is whether it helps people live deeper, more connected, more meaningful lives.',
  },
  {
    number: '02',
    title: 'AI should make us more human, not less.',
    body: 'The tragedy of most technology is that it pulls us away from the things that matter — relationships, presence, growth. AI, done right, can do the opposite: handle the shallow so we can go deep.',
  },
  {
    number: '03',
    title: 'The best things in life shouldn\'t be gatekept.',
    body: 'The best coaching. The best communities. The best experiences. For centuries they\'ve been reserved for the privileged few. AI makes it possible to democratize quality without diluting it.',
  },
  {
    number: '04',
    title: 'Trust is the foundation of everything good.',
    body: 'Great relationships, great communities, great societies — they all run on trust. We believe in building systems where trust isn\'t assumed but earned, maintained, and protected.',
  },
  {
    number: '05',
    title: 'Community is the antidote to loneliness.',
    body: 'The loneliness epidemic isn\'t about being alone. It\'s about not being truly known. We believe in small, intimate communities where every person is seen, understood, and valued.',
  },
  {
    number: '06',
    title: 'Growth is a lifelong conversation.',
    body: 'Not a destination. Not a productivity hack. Growth is the never-ending, deeply personal conversation between who you are and who you\'re becoming. We want to be part of that conversation.',
  },
]
</script>

<template>
  <div class="worldview-page">
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/worldview-hero.png" alt="Golden cosmic network" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Our Worldview</span>
        <h1 class="text-hero reveal reveal-delay-1">
          What we<br><span class="text-serif-italic text-gold">believe.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          A letter to anyone who thinks the world can be better, 
          that technology can serve humanity, and that human connection 
          is the most powerful force on earth.
        </p>
      </div>
    </section>

    <!-- MANIFESTO INTRO -->
    <section class="manifesto-intro section reveal">
      <div class="container">
        <div class="manifesto-text">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center; line-height: 1.8;">
            We live in a time of <span class="text-gold">extraordinary paradox</span>. We're more connected than ever 
            and more lonely than ever. We have more information and less wisdom. More tools and less time. 
            More friends online and fewer people who truly know us.
          </p>
          <p class="text-body-lg" style="max-width: 700px; margin: var(--space-2xl) auto 0; text-align: center; color: var(--color-text-secondary); line-height: 1.8;">
            We started Quintessential because we believe this paradox isn't inevitable. 
            Because we believe the same technology that created these problems can — if built 
            with the right values — become the solution.
          </p>
        </div>
      </div>
    </section>

    <!-- BELIEFS -->
    <section class="beliefs section">
      <div class="container">
        <div class="beliefs-list">
          <div v-for="(b, i) in beliefs" :key="b.number" class="belief-item reveal" :class="`reveal-delay-${(i % 2) + 1}`">
            <div class="belief-number">{{ b.number }}</div>
            <div class="belief-content">
              <h2 class="belief-title">{{ b.title }}</h2>
              <p class="belief-body">{{ b.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CLOSING -->
    <section class="closing section section-border-top reveal">
      <div class="container">
        <div class="closing-inner">
          <p class="text-heading" style="font-size: var(--text-2xl); text-align: center; max-width: 700px; margin: 0 auto; line-height: 1.6;">
            "The measure of a life well-lived is not what you 
            <span class="text-serif-italic text-gold">achieved</span>, 
            but who you <span class="text-serif-italic text-gold">became</span> 
            and how deeply you <span class="text-serif-italic text-gold">connected</span>."
          </p>
          <p class="text-body" style="text-align: center; margin-top: var(--space-xl); color: var(--color-text-tertiary);">
            — The Quintessential Team
          </p>
        </div>
      </div>
    </section>

    <CtaBanner
      label="Join Us"
      title="If this resonates,"
      title-accent="you belong here."
      description="We're building something for people who believe in depth, connection, and genuine human flourishing. Come be part of it."
      primary-text="Join Quintessential"
      primary-link="/contact"
      secondary-text="Read Our Mission"
      secondary-link="/mission"
    />
  </div>
</template>

<style scoped>
.hero { position: relative; min-height: 90vh; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.95) 80%, var(--color-bg-primary) 100%); }
.hero-content { position: relative; z-index: 1; text-align: center; padding: var(--space-5xl) 0; display: flex; flex-direction: column; align-items: center; }
.hero-subtitle { max-width: 640px; margin-top: var(--space-xl); }

/* Beliefs */
.beliefs-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; }
.belief-item { display: flex; gap: var(--space-2xl); padding: var(--space-3xl) 0; border-bottom: 1px solid var(--color-border); }
.belief-item:first-child { padding-top: 0; }
.belief-item:last-child { border-bottom: none; }
.belief-number { font-size: var(--text-4xl); font-weight: var(--font-bold); color: var(--color-gold); opacity: 0.25; font-family: var(--font-serif); min-width: 70px; padding-top: 4px; }
.belief-title { font-size: var(--text-xl); font-weight: var(--font-semibold); line-height: 1.4; margin-bottom: var(--space-md); }
.belief-body { font-size: var(--text-base); color: var(--color-text-secondary); line-height: 1.8; }

/* Closing */
.closing-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }

@media (max-width: 640px) {
  .hero { min-height: 80vh; }
  .belief-item { flex-direction: column; gap: var(--space-sm); }
  .belief-number { font-size: var(--text-2xl); min-width: auto; }
}
</style>
