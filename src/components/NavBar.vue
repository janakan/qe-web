<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Fingerprint } from 'lucide-vue-next'

const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)
const activeDropdown = ref(null)
let dropdownTimeout = null

const navGroups = [
  {
    label: 'Community',
    items: [
      { name: 'Circles', route: '/circles', desc: 'AI-powered communities that connect the right people' },
      { name: 'Events', route: '/events', desc: 'Reciprocity rings, dinner parties, and serendipitous gatherings' },
      { name: 'Superconnectors', route: '/superconnectors', desc: 'The AI agents that make extraordinary connections' },
    ],
  },
  {
    label: 'Lifestyle',
    items: [
      { name: 'Coaching', route: '/coaching', desc: 'AI + human coaching for every dimension of life' },
      { name: 'Learning', route: '/learning', desc: 'Personalized learning journeys powered by AI' },
      { name: 'Travel', route: '/travel', desc: 'Curated travel experiences you\'ll never forget' },
      { name: 'Dining', route: '/dining', desc: 'Exceptional dining, from hidden gems to private chefs' },
      { name: 'Retreats', route: '/retreats', desc: 'Immersive experiences for deep renewal' },
    ],
  },
  {
    label: 'Apps',
    items: [
      { name: 'Books', route: '/apps/books', desc: 'Powerful summaries and personalized reading journeys' },
      { name: 'News', route: '/apps/news', desc: 'News that matters to you, without the noise' },
      { name: 'Music', route: '/apps/music', desc: 'AI-composed music tailored to your mood and moment' },
    ],
  },
  {
    label: 'About',
    items: [
      { name: 'Mission', route: '/mission', desc: 'Why we exist and what we\'re building' },
      { name: 'Worldview', route: '/worldview', desc: 'What we believe about AI, humanity, and flourishing' },
      { name: 'Blog', route: '/blog', desc: 'Ideas, stories, and updates from the movement' },
    ],
  },
]

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function openDropdown(label) {
  clearTimeout(dropdownTimeout)
  activeDropdown.value = label
}

function closeDropdown() {
  dropdownTimeout = setTimeout(() => {
    activeDropdown.value = null
  }, 150)
}

function cancelClose() {
  clearTimeout(dropdownTimeout)
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value
  document.body.style.overflow = mobileOpen.value ? 'hidden' : ''
}

function closeMobile() {
  mobileOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav class="navbar" :class="{ scrolled, 'mobile-open': mobileOpen }">
    <div class="navbar-inner container-wide">
      <!-- Logo -->
      <router-link to="/" class="nav-logo" @click="closeMobile">
        <span class="logo-mark"><Fingerprint :size="22" :stroke-width="2.5" /></span>
        <span class="logo-text">Quintessential</span>
      </router-link>

      <!-- Desktop Nav -->
      <div class="nav-links">
        <div
          v-for="group in navGroups"
          :key="group.label"
          class="nav-group"
          @mouseenter="openDropdown(group.label)"
          @mouseleave="closeDropdown"
        >
          <button class="nav-link" :class="{ active: activeDropdown === group.label }">
            {{ group.label }}
            <svg class="nav-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <!-- Mega Menu Dropdown -->
          <transition name="dropdown">
            <div
              v-if="activeDropdown === group.label"
              class="dropdown-menu"
              @mouseenter="cancelClose"
              @mouseleave="closeDropdown"
            >
              <div class="dropdown-inner">
                <router-link
                  v-for="item in group.items"
                  :key="item.route"
                  :to="item.route"
                  class="dropdown-item"
                  @click="activeDropdown = null"
                >
                  <span class="dropdown-item-name">{{ item.name }}</span>
                  <span class="dropdown-item-desc">{{ item.desc }}</span>
                </router-link>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- CTA -->
      <router-link to="/contact" class="nav-cta btn btn-primary btn-sm">Join Free</router-link>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle" @click="toggleMobile" aria-label="Toggle navigation">
        <span class="hamburger" :class="{ open: mobileOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="mobileOpen" class="mobile-menu">
        <div class="mobile-menu-inner">
          <div v-for="group in navGroups" :key="group.label" class="mobile-group">
            <span class="mobile-group-label">{{ group.label }}</span>
            <router-link
              v-for="item in group.items"
              :key="item.route"
              :to="item.route"
              class="mobile-link"
              @click="closeMobile"
            >
              {{ item.name }}
            </router-link>
          </div>
          <div class="mobile-cta">
            <router-link to="/contact" class="btn btn-primary btn-lg" style="width: 100%" @click="closeMobile">
              Join Free
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  z-index: var(--z-nav);
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
}

.navbar.scrolled {
  background: var(--color-bg-nav);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 var(--space-2xl);
  flex: 1;
  margin: 0 auto;
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  z-index: 10;
}

.logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: transparent;
  color: #fff;
  border-radius: 8px;
}

.logo-text {
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  letter-spacing: -0.02em;
}

/* Desktop Nav Links */
.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  flex: 1;
}

.nav-group {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.5rem 1rem;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  transition: color var(--transition-fast);
  border-radius: var(--radius-sm);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text-primary);
}

.nav-chevron {
  transition: transform var(--transition-fast);
  opacity: 0.5;
}

.nav-link.active .nav-chevron {
  transform: rotate(180deg);
  opacity: 1;
}

/* Dropdown */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 320px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

.dropdown-inner {
  padding: var(--space-sm);
}

.dropdown-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast);
  text-decoration: none;
}

.dropdown-item:hover {
  background: var(--color-bg-tertiary);
}

.dropdown-item-name {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--color-text-primary);
}

.dropdown-item-desc {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  line-height: 1.4;
}

/* Dropdown transitions */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-4px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  transform: translateX(-50%) translateY(0);
}

/* CTA */
.nav-cta {
  text-decoration: none;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  z-index: 10;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--color-bg-primary);
  padding-top: var(--nav-height);
  overflow-y: auto;
  z-index: var(--z-nav);
}

.mobile-menu-inner {
  padding: var(--space-2xl);
}

.mobile-group {
  margin-bottom: var(--space-2xl);
}

.mobile-group-label {
  display: block;
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}

.mobile-link {
  display: block;
  padding: var(--space-md) 0;
  font-size: var(--text-xl);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast);
  border-bottom: 1px solid var(--color-border);
}

.mobile-link:hover {
  color: var(--color-text-primary);
}

.mobile-cta {
  margin-top: var(--space-2xl);
}

/* Mobile transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-links,
  .nav-cta {
    display: none;
  }

  .mobile-toggle {
    display: block;
  }
}
</style>
