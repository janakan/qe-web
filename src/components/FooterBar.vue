<script setup>
import { Fingerprint } from 'lucide-vue-next'
const currentYear = new Date().getFullYear()

const footerLinks = {
  movement: [
    { name: 'Mission', route: '/mission' },
    { name: 'Worldview', route: '/worldview' },
    { name: 'Q+', route: '/plus' },
    { name: 'World AI Forum', url: 'https://worldaiforum.org', external: true },
  ],
  company: [
    { name: 'Team', route: '/team' },
    { name: 'Careers', route: '/careers' },
    { name: 'Blog', route: '/blog' },
    { name: 'Contact', route: '/contact' },
  ],
  legal: [
    { name: 'Terms of Service', route: '/terms' },
    { name: 'Privacy Policy', route: '/privacy' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: 'linkedin', url: '#' },
  { name: 'Instagram', icon: 'instagram', url: '#' },
  { name: 'X', icon: 'x', url: '#' },
  { name: 'YouTube', icon: 'youtube', url: '#' },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <!-- Main footer content -->
      <div class="footer-grid">
        <!-- Brand column -->
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <span class="footer-logo-mark"><Fingerprint :size="18" :stroke-width="2.5" /></span>
            <span class="footer-logo-text">Quintessential</span>
          </router-link>
          <p class="footer-tagline">
            Every human deserves to flourish.<br>We're building the tools to make it happen.
          </p>
          <div class="footer-social">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <!-- LinkedIn -->
              <svg v-if="social.icon === 'linkedin'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <!-- Instagram -->
              <svg v-if="social.icon === 'instagram'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <!-- X (Twitter) -->
              <svg v-if="social.icon === 'x'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <!-- YouTube -->
              <svg v-if="social.icon === 'youtube'" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Link columns -->
        <div class="footer-col">
          <h4 class="footer-col-title">The Movement</h4>
          <template v-for="link in footerLinks.movement" :key="link.name">
            <a
              v-if="link.external"
              :href="link.url"
              class="footer-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.name }} ↗
            </a>
            <router-link
              v-else
              :to="link.route"
              class="footer-link"
            >
              {{ link.name }}
            </router-link>
          </template>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Company</h4>
          <router-link
            v-for="link in footerLinks.company"
            :key="link.route"
            :to="link.route"
            class="footer-link"
          >
            {{ link.name }}
          </router-link>
        </div>

        <div class="footer-col">
          <h4 class="footer-col-title">Legal</h4>
          <router-link
            v-for="link in footerLinks.legal"
            :key="link.route"
            :to="link.route"
            class="footer-link"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p class="footer-copyright">
          © {{ currentYear }} Quintessential. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-4xl) 0 var(--space-2xl);
  background: var(--color-bg-primary);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-3xl);
}

/* Brand */
.footer-logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  margin-bottom: var(--space-lg);
}

.footer-logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  color: #fff;
  border-radius: 6px;
}

.footer-logo-text {
  font-weight: var(--font-semibold);
  font-size: var(--text-base);
  letter-spacing: -0.02em;
}

.footer-tagline {
  color: var(--color-text-tertiary);
  font-size: var(--text-sm);
  line-height: 1.6;
  margin-bottom: var(--space-xl);
}

/* Social */
.footer-social {
  display: flex;
  gap: var(--space-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  color: var(--color-text-tertiary);
  transition: all var(--transition-fast);
}

.social-link:hover {
  color: var(--color-gold);
  border-color: var(--color-gold-border);
  background: var(--color-gold-subtle);
}

/* Link columns */
.footer-col-title {
  font-size: var(--text-xs);
  font-weight: var(--font-semibold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
}

.footer-link {
  display: block;
  font-size: var(--text-sm);
  color: var(--color-text-tertiary);
  text-decoration: none;
  padding: var(--space-xs) 0;
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-text-primary);
}

/* Bottom */
.footer-bottom {
  margin-top: var(--space-3xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-border);
}

.footer-copyright {
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
}

/* Responsive */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
  }

  .footer-brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
