<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Users, Sparkles, AppWindow, Plane, UtensilsCrossed, Mountain, Brain, GraduationCap, Shield, Globe, Crown } from 'lucide-vue-next'
useScrollReveal()

const pillars = [
  {
    label: 'Community',
    title: 'Circles & Events',
    description: 'AI-powered networks that bring the right people together at the right time. The power of elite networks, now available to everyone.',
    route: '/circles',
    stat: '12,000+',
    statLabel: 'Lives Connected',
    icon: Users,
  },
  {
    label: 'Growth',
    title: 'Coaching, Learning & Peer Groups',
    description: 'World-class coaching, learning journeys, and weekly growth groups. Free for everyone. Forever. Because personal growth shouldn\'t be a luxury.',
    route: '/coaching',
    stat: '50,000+',
    statLabel: 'Hours of Free Coaching',
    icon: Brain,
  },
  {
    label: 'Life',
    title: 'Travel, Dining & Retreats',
    description: 'AI-curated travel, exceptional dining, and transformative retreats. Extraordinary experiences that help you live a life of depth and meaning.',
    route: '/travel',
    stat: '50+',
    statLabel: 'Countries',
    icon: Sparkles,
  },
  {
    label: 'Media',
    title: 'Books, News & Music',
    description: 'From personalized book summaries to AI-composed music — beautiful, intelligent media that enriches your daily life. Free for everyone.',
    route: '/apps/books',
    stat: '3',
    statLabel: 'Free Products',
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
    quote: 'As a first-generation university student, I never had the networks my peers took for granted. Quintessential changed that — and it\'s completely free. That\'s extraordinary.',
    name: 'Raj Patel',
    role: 'Software Developer, Mumbai',
    circle: 'Career Changers Group',
  },
  {
    quote: 'The Reciprocity Ring changed everything for me. In 45 minutes, six strangers became allies. The AI facilitator was remarkably human.',
    name: 'Elena Vasquez',
    role: 'Nonprofit Director',
    circle: 'Global Leaders Circle',
  },
]

const experiences = [
  { name: 'Travel', desc: 'AI-curated itineraries to extraordinary places', route: '/travel', icon: Plane },
  { name: 'Dining', desc: 'Hidden gems and private chef experiences', route: '/dining', icon: UtensilsCrossed },
  { name: 'Retreats', desc: 'Transformative immersions in stunning locations', route: '/retreats', icon: Mountain },
  { name: 'Coaching', desc: 'World-class coaching, free for everyone', route: '/coaching', icon: Brain },
  { name: 'Learning', desc: 'AI-personalized journeys to mastery', route: '/learning', icon: GraduationCap },
]

const blogPosts = [
  { title: 'The Promise and Peril of AI: Why We Run Two Organizations', category: 'Worldview', readTime: '10 min', slug: 'promise-and-peril' },
  { title: 'Why We Made Coaching Free', category: 'Product', readTime: '7 min', slug: 'coaching-free' },
]

const impactStats = [
  { value: '12,000+', label: 'Lives Touched' },
  { value: '32', label: 'Countries' },
  { value: '50,000+', label: 'Hours of Free Coaching' },
  { value: '$15M+', label: 'In Services Made Free' },
]

const promiseItems = [
  { icon: Shield, title: 'Free forever', desc: 'Core coaching, learning, communities, and media will always be free. Not a trial. A commitment.' },
  { icon: Globe, title: 'For every human', desc: 'We build for the whole world — not just English speakers, not just tech workers, not just the privileged.' },
  { icon: Crown, title: 'Q+ is optional', desc: 'We will never degrade the free experience to push upgrades. Q+ is for patrons who fund the mission.' },
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
          Every human deserves<br>
          <span class="text-serif-italic text-gold">to flourish.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          AI holds extraordinary promise for every person on earth — better health, deeper
          learning, richer relationships, more meaningful work. Quintessential exists to
          make that promise real, with tools that are free for everyone.
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Join Free</router-link>
          <router-link to="/mission" class="btn btn-secondary btn-lg">Our Mission</router-link>
        </div>
        <div class="hero-stats reveal reveal-delay-4">
          <div v-for="stat in impactStats" :key="stat.label" class="hero-stat">
            <span class="hero-stat-value">{{ stat.value }}</span>
            <span class="hero-stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
      <div class="hero-fade"></div>
    </section>

    <!-- MANIFESTO STRIP -->
    <section class="manifesto section reveal">
      <div class="container">
        <div class="manifesto-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            AI is making extraordinary things almost free — world-class coaching,
            curated communities, personalized learning, beautiful music.
            <span class="text-gold">We believe every human should have access to these.</span>
            Not just the privileged few. Everyone.
          </p>
        </div>
      </div>
    </section>

    <!-- FOUR PILLARS -->
    <section class="pillars section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">What We Build</span>
          <h2 class="text-heading">Four pillars of<br><span class="text-serif-italic text-gold">human flourishing.</span></h2>
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
              communities, world-class learning. We give these away — <strong>free, for everyone, forever</strong>.
              Our premium tier, Q+, unlocks more — and funds our mission to keep everything else accessible.
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
                <li>Weekly Peer Groups</li>
                <li>Book summaries</li>
                <li>Personalized news</li>
              </ul>
            </div>
            <div class="tension-card tension-card-plus glass">
              <span class="tension-card-badge tension-badge-gold">Q+</span>
              <h4>Fund the Mission</h4>
              <ul class="tension-list">
                <li>Everything in Free</li>
                <li>Create your own Circles</li>
                <li>Priority event access</li>
                <li>Blended AI + human coaching</li>
                <li>Premium expert lectures</li>
                <li>Exclusive in-person events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ECOSYSTEM -->
    <section class="ecosystem section section-border-top reveal">
      <div class="container">
        <div class="ecosystem-inner">
          <span class="text-label">The Bigger Picture</span>
          <h2 class="text-heading" style="margin-top: var(--space-md);">Pro-eutopian <span class="text-serif-italic text-gold">&</span> anti-dystopian.</h2>
          <p class="text-body-lg" style="margin-top: var(--space-lg); color: var(--color-text-secondary);">
            We're deeply passionate about AI's promise — but we're not naive about its risks.
            Mass unemployment, extreme surveillance, loss of truth: these threats are real.
          </p>
          <p class="text-body-lg" style="margin-top: var(--space-md); color: var(--color-text-secondary);">
            That's why we run two brands. <strong>Quintessential</strong> is our pro-eutopian arm — using AI to help
            people live, work, and connect better. Our sister organization,
            <a href="https://worldaiforum.org" target="_blank" rel="noopener noreferrer" class="text-gold" style="text-decoration: underline;">The World AI Forum</a>,
            focuses on the anti-dystopian side — regulation, education, and protecting humanity from AI's risks.
          </p>
          <p class="text-body" style="margin-top: var(--space-md); color: var(--color-text-tertiary); font-style: italic;">
            Together, we're working to ensure AI serves every human.
          </p>
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

    <!-- THE QUINTESSENTIAL PROMISE -->
    <section class="promise section section-border-top reveal">
      <div class="container">
        <div class="promise-wrapper">
          <div class="section-header">
            <span class="text-label">Our Commitment</span>
            <h2 class="text-heading">The Quintessential<br><span class="text-serif-italic text-gold">promise.</span></h2>
          </div>
          <div class="promise-grid">
            <div v-for="item in promiseItems" :key="item.title" class="promise-item">
              <component :is="item.icon" class="promise-icon" :size="24" :stroke-width="1.5" />
              <h4>{{ item.title }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
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
      description="Join thousands of people using AI to build deeper connections, grow as humans, and live extraordinary lives. Free for everyone. Forever."
      primary-text="Join Free Today"
      primary-link="/contact"
      secondary-text="Explore Q+"
      secondary-link="/plus"
    />
  </div>
</template>

<style scoped>
/* ===== HERO ===== */
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
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
.hero-content { position: relative; z-index: 1; text-align: center; padding: var(--space-5xl) 0; display: flex; flex-direction: column; align-items: center; }
.hero-badge { display: inline-flex; align-items: center; gap: var(--space-sm); padding: 0.5rem 1.25rem; font-size: var(--text-sm); color: var(--color-text-secondary); border: 1px solid var(--color-border); border-radius: var(--radius-full); margin-bottom: var(--space-2xl); }
.hero-badge-dot { width: 6px; height: 6px; background: var(--color-gold); border-radius: 50%; animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.hero-subtitle { max-width: 660px; margin-top: var(--space-xl); }
.hero-actions { display: flex; gap: var(--space-md); margin-top: var(--space-2xl); }
.hero-stats { display: flex; gap: var(--space-3xl); margin-top: var(--space-4xl); padding-top: var(--space-2xl); border-top: 1px solid var(--color-border); }
.hero-stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.hero-stat-value { font-size: var(--text-2xl); font-weight: var(--font-bold); color: var(--color-gold); }
.hero-stat-label { font-size: var(--text-xs); color: var(--color-text-tertiary); text-transform: uppercase; letter-spacing: 0.08em; }
.hero-fade { position: absolute; bottom: 0; left: 0; right: 0; height: 120px; background: linear-gradient(to bottom, transparent, var(--color-bg-primary)); z-index: 1; }

/* ===== MANIFESTO ===== */
.manifesto { padding: var(--space-4xl) 0; }
.manifesto-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }

/* ===== SECTION HEADER ===== */
.section-header { text-align: center; margin-bottom: var(--space-3xl); }
.section-header .text-label { display: block; margin-bottom: var(--space-md); }

/* ===== PILLARS ===== */
.pillars-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-xl); }
.pillar-card { display: flex; flex-direction: column; text-decoration: none; padding: var(--space-2xl); }
.pillar-icon { font-size: var(--text-3xl); color: var(--color-gold); margin-bottom: var(--space-lg); }
.pillar-title { font-size: var(--text-xl); font-weight: var(--font-semibold); margin: var(--space-sm) 0 var(--space-md); }
.pillar-desc { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; flex: 1; }
.pillar-stat { display: flex; align-items: baseline; gap: var(--space-sm); margin-top: var(--space-xl); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); }
.pillar-stat-value { font-size: var(--text-xl); font-weight: var(--font-bold); color: var(--color-gold); }
.pillar-stat-label { font-size: var(--text-xs); color: var(--color-text-tertiary); }
.pillar-link { margin-top: var(--space-md); }

/* ===== TENSION ===== */
.tension-inner { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4xl); align-items: center; }
.tension-text { display: flex; flex-direction: column; gap: var(--space-lg); }
.tension-text .text-heading { margin-bottom: var(--space-sm); }
.tension-visual { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); }
.tension-card { padding: var(--space-xl); border-radius: var(--radius-md); }
.tension-card-badge { display: inline-block; font-size: var(--text-xs); font-weight: var(--font-semibold); text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-text-secondary); margin-bottom: var(--space-md); }
.tension-badge-gold { color: var(--color-gold); }
.tension-card h4 { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-lg); }
.tension-list { display: flex; flex-direction: column; gap: var(--space-sm); }
.tension-list li { font-size: var(--text-sm); color: var(--color-text-secondary); padding-left: var(--space-lg); position: relative; }
.tension-list li::before { content: '✓'; position: absolute; left: 0; color: var(--color-gold); font-size: var(--text-xs); }
.tension-card-plus { border-color: var(--color-gold-border); }

/* ===== ECOSYSTEM ===== */
.ecosystem-inner { max-width: 750px; margin: 0 auto; text-align: center; }

/* ===== TESTIMONIALS ===== */
.testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
.testimonial-card { display: flex; flex-direction: column; }
.testimonial-quote { font-size: var(--text-base); color: var(--color-text-secondary); line-height: 1.7; font-style: italic; flex: 1; margin-bottom: var(--space-xl); }
.testimonial-author { display: flex; align-items: center; gap: var(--space-md); padding-top: var(--space-lg); border-top: 1px solid var(--color-border); }
.testimonial-avatar { width: 40px; height: 40px; border-radius: 50%; background: var(--color-gold); color: var(--color-text-inverse); display: flex; align-items: center; justify-content: center; font-weight: var(--font-bold); font-size: var(--text-sm); flex-shrink: 0; }
.testimonial-name { font-size: var(--text-sm); font-weight: var(--font-semibold); }
.testimonial-role { font-size: var(--text-xs); color: var(--color-text-tertiary); }
.testimonial-circle { font-size: var(--text-xs); color: var(--color-gold); margin-top: 2px; }

/* ===== EXPERIENCES ===== */
.experiences-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: var(--space-lg); }
.experience-card { text-decoration: none; text-align: center; padding: var(--space-xl) var(--space-lg); border-radius: var(--radius-md); transition: all var(--transition-base); display: flex; flex-direction: column; align-items: center; }
.experience-card:hover { border-color: var(--color-gold-border); transform: translateY(-2px); }
.experience-icon { font-size: var(--text-3xl); margin-bottom: var(--space-md); }
.experience-name { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-xs); }
.experience-desc { font-size: var(--text-xs); color: var(--color-text-tertiary); line-height: 1.5; margin-bottom: var(--space-md); }

/* ===== PROMISE ===== */
.promise-wrapper { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }
.promise-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
.promise-item { text-align: center; }
.promise-icon { color: var(--color-gold); margin-bottom: var(--space-md); }
.promise-item h4 { font-size: var(--text-base); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); }
.promise-item p { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.6; }

/* ===== BLOG PREVIEW ===== */
.blog-preview-inner { padding: var(--space-3xl); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-bg-secondary); }
.blog-preview-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: var(--space-2xl); }
.blog-preview-posts { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-lg); }
.blog-preview-post { text-decoration: none; display: flex; flex-direction: column; }
.blog-post-category { font-size: var(--text-xs); color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.08em; font-weight: var(--font-semibold); margin-bottom: var(--space-md); }
.blog-post-title { font-size: var(--text-lg); font-weight: var(--font-semibold); margin-bottom: var(--space-sm); flex: 1; }
.blog-post-time { font-size: var(--text-xs); color: var(--color-text-tertiary); }

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .pillars-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonials-grid { grid-template-columns: 1fr; }
  .experiences-grid { grid-template-columns: repeat(3, 1fr); }
  .tension-inner { grid-template-columns: 1fr; gap: var(--space-2xl); }
  .hero-stats { flex-wrap: wrap; justify-content: center; gap: var(--space-xl); }
  .blog-preview-posts { grid-template-columns: 1fr; }
  .blog-preview-header { flex-direction: column; align-items: flex-start; gap: var(--space-lg); }
  .promise-grid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .pillars-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; width: 100%; max-width: 320px; }
  .hero-actions .btn { width: 100%; }
  .tension-visual { grid-template-columns: 1fr; }
  .experiences-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
