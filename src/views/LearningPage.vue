<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
import CtaBanner from '../components/CtaBanner.vue'
import { Target, Brain, Lightbulb, BarChart3, Globe, Sparkles, Bot, FileText, Users, Trophy, BookOpen, Mic } from 'lucide-vue-next'
useScrollReveal()

const journeys = [
  {
    icon: Target,
    title: 'Leadership Mastery',
    lessons: 24,
    duration: '12 weeks',
    level: 'Intermediate',
    description: 'From managing people to inspiring movements. Build the leadership skills that create trust, clarity, and extraordinary results.',
    topics: ['Authentic Leadership', 'Difficult Conversations', 'Building Culture', 'Strategic Thinking'],
  },
  {
    icon: Brain,
    title: 'Emotional Intelligence',
    lessons: 18,
    duration: '8 weeks',
    level: 'All Levels',
    description: 'Understand yourself deeply, connect with others powerfully, and navigate complexity with grace. The ultimate life skill.',
    topics: ['Self-Awareness', 'Empathy', 'Emotional Regulation', 'Social Intelligence'],
  },
  {
    icon: Lightbulb,
    title: 'Creative Thinking',
    lessons: 16,
    duration: '6 weeks',
    level: 'All Levels',
    description: 'Break free from linear thinking. Learn the frameworks and habits that make breakthrough ideas inevitable, not accidental.',
    topics: ['Design Thinking', 'First Principles', 'Lateral Thinking', 'Innovation Methods'],
  },
  {
    icon: BarChart3,
    title: 'AI Literacy',
    lessons: 20,
    duration: '10 weeks',
    level: 'Beginner',
    description: 'Understand AI deeply — not just how to use tools, but how the technology works, where it\'s headed, and what it means for your career.',
    topics: ['AI Fundamentals', 'Prompt Engineering', 'AI Ethics', 'Future of Work'],
  },
  {
    icon: Globe,
    title: 'Public Speaking',
    lessons: 14,
    duration: '6 weeks',
    level: 'All Levels',
    description: 'Find your voice and make it heard. From boardroom presentations to keynotes, learn to speak with clarity, conviction, and charisma.',
    topics: ['Storytelling', 'Presence & Delivery', 'Handling Nerves', 'Audience Connection'],
  },
  {
    icon: Sparkles,
    title: 'Philosophy of Flourishing',
    lessons: 12,
    duration: '8 weeks',
    level: 'All Levels',
    description: 'Drawing from ancient wisdom and modern psychology, explore what it truly means to live well — and build a practical framework for it.',
    topics: ['Stoicism', 'Positive Psychology', 'Meaning & Purpose', 'Eudaimonia'],
  },
]

const features = [
  {
    icon: Bot,
    title: 'AI-Personalized Path',
    description: 'Every journey adapts to your pace, learning style, and goals. Skip what you know, go deeper where you need it.',
  },
  {
    icon: FileText,
    title: 'Reflection & Application',
    description: 'Lessons are followed by personalized reflection prompts and real-world application exercises. Knowledge becomes practice.',
  },
  {
    icon: Users,
    title: 'Learning Cohorts',
    description: 'Join a small group working through the same journey. Discuss ideas, share insights, and hold each other accountable.',
  },
  {
    icon: Trophy,
    title: 'Micro-Credentials',
    description: 'Earn shareable credentials as you complete journeys. Not vanity metrics — genuine signals of demonstrated competence.',
  },
  {
    icon: BookOpen,
    title: 'Integrated with Quintessential Books',
    description: 'Relevant book summaries are woven into every journey. Read the best thinking on every topic without buying 50 books.',
  },
  {
    icon: Mic,
    title: 'Expert Masterclasses',
    description: 'Live sessions with world-class practitioners and thinkers. Q+ members get exclusive access and Q&A time.',
  },
]

const stats = [
  { value: '50+', label: 'Learning Journeys' },
  { value: '92%', label: 'Completion Rate' },
  { value: '4.9', label: 'Average Rating' },
  { value: '85%', label: 'Applied at Work Within a Week' },
]

const testimonials = [
  {
    quote: 'Traditional online courses feel like watching TV. This feels like having a brilliant tutor who knows exactly where I\'m stuck and what example will make it click.',
    name: 'Sophia Chen',
    role: 'Product Manager, Scale AI',
  },
  {
    quote: 'The cohort model is what makes it special. Going through the Leadership journey with five other people meant I wasn\'t just learning — I was being held accountable.',
    name: 'James Okafor',
    role: 'Director, Barclays',
  },
]
</script>

<template>
  <div class="learning-page">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-bg">
        <img src="/images/learning-hero.png" alt="Beautiful learning environment" class="hero-img" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <span class="text-label reveal">Learning</span>
        <h1 class="text-hero reveal reveal-delay-1">
          Learn like you<br>
          <span class="text-serif-italic text-gold">mean it.</span>
        </h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          AI-curated learning journeys that adapt to you — your pace, your style, 
          your goals. Not courses. <em>Transformations.</em>
        </p>
        <div class="hero-actions reveal reveal-delay-3">
          <router-link to="/contact" class="btn btn-primary btn-lg">Start Learning</router-link>
          <a href="#journeys" class="btn btn-secondary btn-lg">Explore Journeys</a>
        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section class="philosophy-section section reveal">
      <div class="container">
        <div class="philosophy-inner">
          <p class="text-subheading" style="max-width: 800px; margin: 0 auto; text-align: center;">
            Most online learning is content you consume and forget. Ours is a 
            <span class="text-gold">journey you live</span> — personalized by AI, 
            reinforced through practice, and deepened by community. 
            Knowledge that sticks because it matters to <em>you</em>.
          </p>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats-section reveal">
      <div class="container">
        <div class="stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- LEARNING JOURNEYS -->
    <section id="journeys" class="journeys section">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Journeys</span>
          <h2 class="text-heading">Choose your<br><span class="text-serif-italic text-gold">transformation.</span></h2>
          <p class="text-body-lg" style="max-width: 600px; margin: var(--space-lg) auto 0;">
            Each journey is a structured path to genuine mastery — 
            not a playlist of videos, but a carefully designed experience.
          </p>
        </div>
        <div class="journeys-grid">
          <div
            v-for="(journey, i) in journeys"
            :key="journey.title"
            class="journey-card card card-gold reveal"
            :class="`reveal-delay-${(i % 3) + 1}`"
          >
            <div class="journey-header">
              <component :is="journey.icon" class="journey-icon" :size="24" :stroke-width="1.5" />
              <span class="journey-level">{{ journey.level }}</span>
            </div>
            <h3 class="journey-title">{{ journey.title }}</h3>
            <p class="journey-desc">{{ journey.description }}</p>
            <div class="journey-topics">
              <span v-for="topic in journey.topics" :key="topic" class="journey-topic">{{ topic }}</span>
            </div>
            <div class="journey-footer">
              <div class="journey-meta">
                <span>{{ journey.lessons }} lessons</span>
                <span class="meta-dot">·</span>
                <span>{{ journey.duration }}</span>
              </div>
              <router-link to="/contact" class="btn btn-sm btn-secondary">Start</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">What Makes Us Different</span>
          <h2 class="text-heading">Not another<br><span class="text-serif-italic text-gold">online course.</span></h2>
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

    <!-- TESTIMONIALS -->
    <section class="testimonials section section-border-top">
      <div class="container">
        <div class="section-header reveal">
          <span class="text-label">Stories</span>
          <h2 class="text-heading">Learning that<br><span class="text-serif-italic text-gold">actually lands.</span></h2>
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
      label="Start Learning"
      title="Ready to grow"
      title-accent="with purpose?"
      description="Pick a journey that matters to you and start today. AI adapts every lesson to your pace, and a cohort of fellow learners keeps you accountable."
      primary-text="Explore Journeys"
      primary-link="/contact"
      secondary-text="Try Coaching"
      secondary-link="/coaching"
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
  max-width: 600px;
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

/* ===== STATS ===== */
.stats-section {
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
  text-align: center;
}

/* ===== LEARNING JOURNEYS ===== */
.journeys-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.journey-card {
  display: flex;
  flex-direction: column;
}

.journey-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-lg);
}

.journey-icon {
  font-size: var(--text-2xl);
}

.journey-level {
  font-size: var(--text-xs);
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: var(--font-semibold);
}

.journey-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
}

.journey-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
  flex: 1;
}

.journey-topics {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}

.journey-topic {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  font-size: 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-tertiary);
}

.journey-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}

.journey-meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
}

.meta-dot {
  color: var(--color-border-light);
}

/* ===== FEATURES ===== */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  font-size: var(--text-2xl);
  display: block;
  margin-bottom: var(--space-md);
}

.feature-title {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-sm);
}

.feature-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
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

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .journeys-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    gap: var(--space-2xl);
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

  .journeys-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    flex-wrap: wrap;
    gap: var(--space-xl);
  }
}
</style>
