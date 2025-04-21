import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/symptoms',
    name: 'Symptoms',
    component: () => import('../views/SymptomsPage.vue')
  },
  {
    path: '/treatments',
    name: 'Treatments',
    component: () => import('../views/TreatmentsPage.vue')
  },
  {
    path: '/lifestyle',
    name: 'Lifestyle',
    component: () => import('../views/LifestylePage.vue')
  },
  {
    path: '/community',
    name: 'Community',
    component: () => import('../views/CommunityPage.vue')
  },
  {
    path: '/tracker',
    name: 'Tracker',
    component: () => import('../views/TrackerPage.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FaqPage.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('../views/ResourcesPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top when navigating to a new page
    return { top: 0 }
  }
})

export default router 