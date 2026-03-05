<script setup>
defineProps({
  label: { type: String, default: 'Join the Movement' },
  title: { type: String, default: 'Ready to' },
  titleAccent: { type: String, default: 'flourish?' },
  description: { type: String, default: 'Join thousands of people using AI to build deeper connections, grow as humans, and live extraordinary lives.' },
  primaryText: { type: String, default: 'Join Free Today' },
  primaryLink: { type: String, default: '/contact' },
  secondaryText: { type: String, default: '' },
  secondaryLink: { type: String, default: '' },
})
</script>

<template>
  <section class="cta-banner section">
    <div class="container">
      <div class="cta-banner-inner reveal">
        <div class="cta-glow"></div>
        <span class="text-label">{{ label }}</span>
        <h2 class="text-display">{{ title }} <span class="text-serif-italic text-gold">{{ titleAccent }}</span></h2>
        <p class="cta-banner-desc text-body-lg">{{ description }}</p>
        <div class="cta-banner-actions">
          <router-link :to="primaryLink" class="btn btn-primary btn-lg">{{ primaryText }}</router-link>
          <router-link v-if="secondaryText" :to="secondaryLink" class="btn btn-secondary btn-lg">{{ secondaryText }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-banner-inner {
  text-align: center;
  padding: var(--space-5xl) var(--space-2xl);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;
}

.cta-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201, 169, 110, 0.06) 0%, transparent 60%);
  pointer-events: none;
}

.cta-banner-inner .text-label {
  display: block;
  margin-bottom: var(--space-md);
  position: relative;
}

.cta-banner-inner .text-display {
  position: relative;
}

.cta-banner-desc {
  max-width: 560px;
  margin: var(--space-lg) auto 0;
  position: relative;
}

.cta-banner-actions {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
  position: relative;
}

@media (max-width: 640px) {
  .cta-banner-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
