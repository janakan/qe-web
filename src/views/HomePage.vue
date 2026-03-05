<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Users, Sparkles, AppWindow, BookOpen, Newspaper, Music, Plane, UtensilsCrossed, Mountain, Brain, GraduationCap } from 'lucide-vue-next'
useScrollReveal()

const pillars = [
  {
    label: 'Community',
    title: 'Circles & Events',
    description: 'AI-powered communities that bring the right people together at the right time. From intimate Reciprocity Rings to serendipitous Dinner Parties.',
    route: '/circles',
    stat: '12,000+',
    statLabel: 'Members Connected',
    icon: Users,
  },
  {
    label: 'Lifestyle',
    title: 'Coaching & Experiences',
    description: 'World-class coaching, curated travel, exceptional dining, and transformative retreats — made accessible through AI.',
    route: '/coaching',
    stat: '50+',
    statLabel: 'Countries',
    icon: Sparkles,
  },
  {
    label: 'Apps',
    title: 'AI-Powered Living',
    description: 'From personalized news to AI-composed music, our apps cover every domain of life — beautifully crafted and deeply intelligent.',
    route: '/apps/books',
    stat: '7',
    statLabel: 'App Domains',
    icon: AppWindow,
  },
]

const testimonials = [
  {
    quote: 'Quintessential introduced me to three people who completely changed my career trajectory. The AI somehow knew exactly who I needed to meet.',
    name: 'Sarah Chen',
    role: 'CEO, Vantage Labs',
    circle: 'Tech Founders Circle',
  },
  {
    quote: 'I used to pay £500/month for coaching. Now I get better, more personalized support through Q — and most of it is free. It\'s genuinely transformative.',
    name: 'James Okonkwo',
    role: 'Head of Strategy, Meridian',
    circle: 'Q+ Member',
  },
  {
    quote: 'The Reciprocity Ring changed everything for me. In 45 minutes, six strangers became allies. The AI facilitator was remarkably human.',
    name: 'Elena Vasquez',
    role: 'Nonprofit Director',
    circle: 'Global Leaders Circle',
  },
]

const apps = [
  { name: 'Books', desc: 'Powerful summaries & reading journeys', route: '/apps/books', icon: BookOpen },
  { name: 'News', desc: 'Your world, thoughtfully curated', route: '/apps/news', icon: Newspaper },
  { name: 'Music', desc: 'AI-composed, mood-matched', route: '/apps/music', icon: Music },
]

const experiences = [
  { name: 'Travel', desc: 'AI-curated itineraries to extraordinary places', route: '/travel', icon: Plane },
  { name: 'Dining', desc: 'Hidden gems and private chef experiences', route: '/dining', icon: UtensilsCrossed },
  { name: 'Retreats', desc: 'Transformative immersions in stunning locations', route: '/retreats', icon: Mountain },
  { name: 'Coaching', desc: 'World-class coaching, free for everyone', route: '/coaching', icon: Brain },
  { name: 'Learning', desc: 'AI-personalized journeys to mastery', route: '/learning', icon: GraduationCap },
]

const blogPosts = [
  { title: 'The AI Loneliness Paradox', category: 'Philosophy', readTime: '8 min', slug: 'ai-loneliness-paradox' },
  { title: 'Why We Made Coaching Free', category: 'Product', readTime: '7 min', slug: 'coaching-free' },
]

const stats = [
  { value: '120+', label: 'Active Circles' },
  { value: '32', label: 'Countries' },
  { value: '12,000+', label: 'Members' },
  { value: '95%', label: 'Would Recommend' },
]
</script>

<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-gradient"></div>
        <div class="hero-grid-pattern"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-badge reveal">
          <span class="hero-badge-dot"></span>
          A global movement for human flourishing
        </div>
        <h1 class="text-hero reveal reveal-delay-1">
          Extraordinary lives,<br>
          <span class="text-serif-italic text-gold">powered by AI.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          Quintessential brings together AI and human wisdom to unlock communities,
          coaching, experiences, and apps that help you become more fully human.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Join Free</router-link>
          <router-link to="/mission" class="btn btn-secondary btn-lg">Our Mission</router-link>
        </div>
        <div class="hero-stats reveal reveal-delay-4">
          <div v-for="stat in stats" :key="stat.label" class="hero-stat">
            <span class="hero-stat-value">{{ stat.value }}</span>
            <span class="hero-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="hero-fade"></div>
    </section>

    <!-- PHILOSOPHY STRIP -->
    <section class="philosophy section reveal">
      <div class="container">
        <div class="philosophy-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            AI is making extraordinary things almost free — world-class coaching, 
            curated communities, personalized learning, beautiful music. 
            <span class="text-gold">We believe this changes everything.</span>
          </p>
        </div>
      </div>
    </section>

    <!-- THREE PILLARS -->
    <section class="pillars section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">What We Do</span>
          <h2 class="text-heading">Three pillars of<br><span class="text-serif-italic text-gold">human flourishing.</span></h2>
        </div>
        <div class="pillars-grid">
          <router-link
            v-for="(pillar, i) in pillars"
            :key="pillar.label"
            :to="pillar.route"
            class="pillar-card card card-gold reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <component :is="pillar.icon" class="pillar-icon" :size="32" :stroke-width="1.5" />
            <span class="text-label" style="font-size: 0.7rem;">{{ pillar.label }}</span>
            <h3 class="pillar-title">{{ pillar.title }}</h3>
            <p class="pillar-desc">{{ pillar.description }}</p>
            <div class="pillar-stat">
              <span class="pillar-stat-value">{{ pillar.stat }}</span>
              <span class="pillar-stat-label">{{ pillar.statLabel }}</span>
            </div>
            <span class="pillar-link btn-ghost">Explore</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- TENSION STATEMENT -->
    <section class="tension section section-border-top reveal">
      <div class="container">
        <div class="tension-inner">
          <div class="tension-text">
            <span class="text-label">Our Philosophy</span>
            <h2 class="text-heading">Premium <span class="text-serif-italic text-gold">&</span> accessible.</h2>
            <p class="text-body-lg">
              We're often asked: are you a luxury brand or a social movement? 
              The answer is yes. We believe the premium and the universal aren't opposites 
              — they're partners.
            </p>
            <p class="text-body-lg">
              AI makes incredible things nearly free: personalized coaching, curated 
              communities, world-class music and media. We give these away. Our premium 
              tier, Q+, unlocks more — and our real-world experiences like dining, travel, 
              and retreats sustain our mission.
            </p>
            <router-link to="/worldview" class="btn-ghost">Read our worldview</router-link>
          </div>
          <div class="tension-visual">
            <div class="tension-card tension-card-free glass">
              <span class="tension-card-badge">Free</span>
              <h4>For Everyone</h4>
              <ul class="tension-list">
                <li>Join any Circle</li>
                <li>Attend online events</li>
                <li>AI coaching sessions</li>
                <li>Core app access</li>
                <li>Book summaries</li>
                <li>Personalized news</li>
              </ul>
            </div>
            <div class="tension-card tension-card-plus glass">
              <span class="tension-card-badge tension-badge-gold">Q+</span>
              <h4>Elevated</h4>
              <ul class="tension-list">
                <li>Everything in Free</li>
                <li>Create your own Circles</li>
                <li>Priority event access</li>
                <li>Blended AI + human coaching</li>
                <li>Unlimited app access</li>
                <li>Exclusive in-person events</li>
              </ul>
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
          <h2 class="text-heading">Hear from<br><span class="text-serif-italic text-gold">our members.</span></h2>
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

    <!-- APPS PREVIEW -->
    <section class="apps-preview section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Apps</span>
          <h2 class="text-heading">AI for every domain<br><span class="text-serif-italic text-gold">of life.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            We're shipping beautiful, intelligent apps that enrich your daily life. 
            Each one stands alone — together, they transform it.
          </p>
        </div>
        <div class="apps-grid">
          <router-link
            v-for="(app, i) in apps"
            :key="app.name"
            :to="app.route"
            class="app-card card card-gold reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <component :is="app.icon" class="app-icon" :size="36" :stroke-width="1.5" />
            <h3 class="app-name">Q {{ app.name }}</h3>
            <p class="app-desc">{{ app.desc }}</p>
            <span class="pillar-link btn-ghost">Explore</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- EXPERIENCES -->
    <section class="experiences section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Experiences</span>
          <h2 class="text-heading">Live<br><span class="text-serif-italic text-gold">extraordinarily.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            From AI-curated travel to transformative retreats, 
            we help you live a life worth talking about.
          </p>
        </div>
        <div class="experiences-grid">
          <router-link
            v-for="(exp, i) in experiences"
            :key="exp.name"
            :to="exp.route"
            class="experience-card glass reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <component :is="exp.icon" class="experience-icon" :size="28" :stroke-width="1.5" />
            <h3 class="experience-name">{{ exp.name }}</h3>
            <p class="experience-desc">{{ exp.desc }}</p>
            <span class="pillar-link btn-ghost">Explore</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- BLOG PREVIEW -->
    <section class="blog-preview section section-border-top">
      <div class="container">
        <div class="blog-preview-inner reveal">
          <div class="blog-preview-header">
            <div>
              <span class="text-label" style="display: block; margin-bottom: var(--space-sm);">From the Blog</span>
              <h2 class="text-heading">Ideas worth<br><span class="text-serif-italic text-gold">sharing.</span></h2>
            </div>
            <router-link to="/blog" class="btn btn-secondary">View All</router-link>
          </div>
          <div class="blog-preview-posts">
            <router-link v-for="post in blogPosts" :key="post.slug" to="/blog" class="blog-preview-post card card-gold">
              <span class="blog-post-category">{{ post.category }}</span>
              <h3 class="blog-post-title">{{ post.title }}</h3>
              <span class="blog-post-time">{{ post.readTime }} read</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <CtaBanner
      label="Join the Movement"
      title="Ready to"
      title-accent="flourish?"
      description="Join thousands of people using AI to build deeper connections, grow as humans, and live extraordinary lives."
      primary-text="Join Free Today"
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% 20%, rgba(201, 169, 110, 0.08) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 50%, rgba(201, 169, 110, 0.04) 0%, transparent 50%);
}

.hero-grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, black 20%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 30%, black 20%, transparent 70%);
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

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 0.5rem 1.25rem;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  margin-bottom: var(--space-2xl);
}

.hero-badge-dot {
  width: 6px;
  height: 6px;
  background: var(--color-gold);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
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

.hero-stats {
  display: flex;
  gap: var(--space-3xl);
  margin-top: var(--space-4xl);
  padding-top: var(--space-2xl);
  border-top: 1px solid var(--color-border);
}

.hero-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.hero-stat-value {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--color-gold);
}

.hero-stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, var(--color-bg-primary));
  z-index: 1;
}

/* ===== PHILOSOPHY ===== */
.philosophy {
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

/* ===== PILLARS ===== */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.pillar-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: var(--space-2xl);
}

.pillar-icon {
  font-size: var(--text-3xl);
  color: var(--color-gold);
  margin-bottom: var(--space-lg);
}

.pillar-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin: var(--space-sm) 0 var(--space-md);
}

.pillar-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  flex: 1;
}

.pillar-stat {
  display: flex;
  align-items: baseline;
  gap: var(--space-sm);
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}

.pillar-stat-value {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-gold);
}

.pillar-stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}

.pillar-link {
  margin-top: var(--space-md);
}

/* ===== TENSION ===== */
.tension-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

.tension-text {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.tension-text .text-heading {
  margin-bottom: var(--space-sm);
}

.tension-visual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.tension-card {
  padding: var(--space-xl);
  border-radius: var(--radius-md);
}

.tension-card-badge {
  display: inline-block;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
}

.tension-badge-gold {
  color: var(--color-gold);
}

.tension-card h4 {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-lg);
}

.tension-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.tension-list li {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  padding-left: var(--space-lg);
  position: relative;
}

.tension-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-gold);
  font-size: var(--text-xs);
}

.tension-card-plus {
  border-color: var(--color-gold-border);
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
  width: 40px;
  height: 40px;
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

/* ===== APPS ===== */
.apps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.app-card {
  text-align: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-icon {
  font-size: var(--text-4xl);
  margin-bottom: var(--space-lg);
}

.app-name {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
}

.app-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-md);
}

/* ===== EXPERIENCES ===== */
.experiences-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--space-lg);
}

.experience-card {
  text-decoration: none;
  text-align: center;
  padding: var(--space-xl) var(--space-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.experience-card:hover {
  border-color: var(--color-gold-border);
  transform: translateY(-2px);
}

.experience-icon {
  font-size: var(--text-3xl);
  margin-bottom: var(--space-md);
}

.experience-name {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-xs);
}

.experience-desc {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  line-height: 1.5;
  margin-bottom: var(--space-md);
}

/* ===== BLOG PREVIEW ===== */
.blog-preview-inner {
  padding: var(--space-3xl);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
}

.blog-preview-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-2xl);
}

.blog-preview-posts {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

.blog-preview-post {
  text-decoration: none;
  display: flex;
  flex-direction: column;
}

.blog-post-category {
  font-size: var(--text-xs);
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-md);
}

.blog-post-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
  flex: 1;
}

.blog-post-time {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .pillars-grid,
  .testimonials-grid,
  .apps-grid {
    grid-template-columns: 1fr;
  }

  .experiences-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .tension-inner {
    grid-template-columns: 1fr;
    gap: var(--space-2xl);
  }

  .hero-stats {
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-xl);
  }

  .blog-preview-posts {
    grid-template-columns: 1fr;
  }

  .blog-preview-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-lg);
  }
}

@media (max-width: 640px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .tension-visual {
    grid-template-columns: 1fr;
  }

  .experiences-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
