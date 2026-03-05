import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomePage.vue'),
  },
  // Community
  {
    path: '/circles',
    name: 'circles',
    component: () => import('../views/CirclesPage.vue'),
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsPage.vue'),
  },
  {
    path: '/superconnectors',
    name: 'superconnectors',
    component: () => import('../views/SuperconnectorsPage.vue'),
  },
  // Lifestyle
  {
    path: '/coaching',
    name: 'coaching',
    component: () => import('../views/CoachingPage.vue'),
  },
  {
    path: '/learning',
    name: 'learning',
    component: () => import('../views/LearningPage.vue'),
  },
  {
    path: '/travel',
    name: 'travel',
    component: () => import('../views/TravelPage.vue'),
  },
  {
    path: '/dining',
    name: 'dining',
    component: () => import('../views/DiningPage.vue'),
  },
  {
    path: '/retreats',
    name: 'retreats',
    component: () => import('../views/RetreatsPage.vue'),
  },
  // Apps
  {
    path: '/apps/books',
    name: 'books',
    component: () => import('../views/BooksPage.vue'),
  },
  {
    path: '/apps/news',
    name: 'news',
    component: () => import('../views/NewsPage.vue'),
  },
  {
    path: '/apps/music',
    name: 'music',
    component: () => import('../views/MusicPage.vue'),
  },
  // About
  {
    path: '/mission',
    name: 'mission',
    component: () => import('../views/MissionPage.vue'),
  },
  {
    path: '/worldview',
    name: 'worldview',
    component: () => import('../views/WorldviewPage.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogPage.vue'),
  },
  // Company
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/TeamPage.vue'),
  },
  {
    path: '/careers',
    name: 'careers',
    component: () => import('../views/CareersPage.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactPage.vue'),
  },
  // Legal
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/TermsPage.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
