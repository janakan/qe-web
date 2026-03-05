<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  category: { type: String, default: '' },
})
</script>

<template>
  <div class="placeholder-page">
    <div class="container">
      <div class="placeholder-hero">
        <span v-if="category" class="text-label">{{ category }}</span>
        <h1 class="text-hero gradient-text">{{ title }}</h1>
        <p v-if="subtitle" class="text-body-lg">{{ subtitle }}</p>
      </div>
      <div class="placeholder-content">
        <div class="placeholder-card card">
          <div class="placeholder-icon">✦</div>
          <p class="text-body-lg">This page is being crafted with care. Check back soon.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.placeholder-page {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
}

.placeholder-hero {
  text-align: center;
  padding: var(--space-5xl) 0 var(--space-3xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
}

.placeholder-content {
  display: flex;
  justify-content: center;
  padding-bottom: var(--space-5xl);
}

.placeholder-card {
  text-align: center;
  max-width: 480px;
}

.placeholder-icon {
  font-size: var(--text-4xl);
  color: var(--color-gold);
  margin-bottom: var(--space-lg);
}
</style>
