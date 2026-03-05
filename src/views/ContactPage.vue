<script setup>
import { useScrollReveal } from '../composables/useScrollReveal.js'
useScrollReveal()
</script>

<template>
  <div class="contact-page">
    <section class="hero-simple">
      <div class="container">
        <span class="text-label reveal">Contact</span>
        <h1 class="text-hero reveal reveal-delay-1">Let's<br><span class="text-serif-italic text-gold">talk.</span></h1>
        <p class="hero-subtitle text-body-lg reveal reveal-delay-2">
          Whether you want to join, partner, invest, or just say hello — we'd love to hear from you.
        </p>
      </div>
    </section>

    <section class="contact-section section">
      <div class="container">
        <div class="contact-grid">
          <!-- FORM -->
          <div class="form-card card card-gold reveal">
            <h2 class="form-title">Send us a message</h2>
            <form class="contact-form" @submit.prevent>
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label" for="firstName">First Name</label>
                  <input class="form-input" id="firstName" type="text" placeholder="Your first name" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="lastName">Last Name</label>
                  <input class="form-input" id="lastName" type="text" placeholder="Your last name" />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input class="form-input" id="email" type="email" placeholder="you@example.com" />
              </div>
              <div class="form-group">
                <label class="form-label" for="subject">Subject</label>
                <select class="form-input" id="subject">
                  <option value="">Select a topic</option>
                  <option>Membership Inquiry</option>
                  <option>Partnership Opportunity</option>
                  <option>Press & Media</option>
                  <option>Investment</option>
                  <option>Careers</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="message">Message</label>
                <textarea class="form-input form-textarea" id="message" placeholder="Tell us more..." rows="5"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
            </form>
          </div>

          <!-- INFO -->
          <div class="info-column reveal reveal-delay-1">
            <div class="info-block">
              <h3 class="info-title">Headquarters</h3>
              <p class="info-text">71 Rivington Street<br>London, EC2A 3AY<br>United Kingdom</p>
            </div>
            <div class="info-block">
              <h3 class="info-title">Email</h3>
              <p class="info-text"><a href="mailto:hello@quintessential.com" class="info-link">hello@quintessential.com</a></p>
            </div>
            <div class="info-block">
              <h3 class="info-title">Social</h3>
              <div class="social-links">
                <a href="#" class="info-link">Twitter / X</a>
                <a href="#" class="info-link">LinkedIn</a>
                <a href="#" class="info-link">Instagram</a>
              </div>
            </div>
            <div class="info-block">
              <h3 class="info-title">Press</h3>
              <p class="info-text">For media inquiries, please email<br><a href="mailto:press@quintessential.com" class="info-link">press@quintessential.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-simple { padding: var(--space-5xl) 0 var(--space-3xl); text-align: center; }
.hero-subtitle { max-width: 500px; margin: var(--space-xl) auto 0; }

.contact-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: var(--space-4xl); align-items: start; }

.form-title { font-size: var(--text-xl); font-weight: var(--font-semibold); margin-bottom: var(--space-xl); }
.contact-form { display: flex; flex-direction: column; gap: var(--space-lg); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
.form-label { display: block; font-size: var(--text-sm); font-weight: var(--font-medium); margin-bottom: var(--space-xs); color: var(--color-text-secondary); }
.form-input { width: 100%; padding: 0.75rem 1rem; font-size: var(--text-sm); background: var(--color-bg-primary); border: 1px solid var(--color-border); border-radius: var(--radius-md); color: var(--color-text-primary); font-family: inherit; transition: border-color var(--transition-base); }
.form-input:focus { outline: none; border-color: var(--color-gold-border); }
.form-input::placeholder { color: var(--color-text-tertiary); }
.form-textarea { resize: vertical; min-height: 120px; }
select.form-input { appearance: none; cursor: pointer; }

.info-column { display: flex; flex-direction: column; gap: var(--space-2xl); padding-top: var(--space-xl); }
.info-title { font-size: var(--text-sm); font-weight: var(--font-semibold); text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-text-tertiary); margin-bottom: var(--space-sm); }
.info-text { font-size: var(--text-sm); color: var(--color-text-secondary); line-height: 1.7; }
.info-link { color: var(--color-gold); text-decoration: none; transition: opacity var(--transition-base); }
.info-link:hover { opacity: 0.8; }
.social-links { display: flex; flex-direction: column; gap: var(--space-xs); }

@media (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr; } }
@media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } }
</style>
