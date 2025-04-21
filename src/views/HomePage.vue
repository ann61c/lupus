<template>
  <div class="home-page">
    <HeroSection />
    
    <section class="highlights-section">
      <div class="container">
        <h2>Welcome to LupusConnect</h2>
        <p class="section-intro">
          Your resource for understanding, managing, and living well with lupus.
        </p>
        
        <div class="highlights-grid">
          <div class="highlight-card">
            <div class="highlight-icon">
              <font-awesome-icon icon="info-circle" />
            </div>
            <h3>Learn About Lupus</h3>
            <p>Explore comprehensive information about lupus, its symptoms, and treatment options.</p>
            <router-link to="/about" class="highlight-link">{{ t('about') }}</router-link>
          </div>
          
          <div class="highlight-card">
            <div class="highlight-icon">
              <font-awesome-icon icon="clipboard-list" />
            </div>
            <h3>Track Your Symptoms</h3>
            <p>Use our symptom tracker to monitor changes and identify patterns in your health.</p>
            <router-link to="/tracker" class="highlight-link">{{ t('tracker') }}</router-link>
          </div>
          
          <div class="highlight-card">
            <div class="highlight-icon">
              <font-awesome-icon icon="user-md" />
            </div>
            <h3>Treatment Options</h3>
            <p>Learn about different treatment approaches and management strategies for lupus.</p>
            <router-link to="/treatments" class="highlight-link">{{ t('treatments') }}</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import '../assets/styles/views/HomePage.css'
import { useTranslation } from '../composables/useTranslation';

const { t } = useTranslation();
</script>

<style scoped>
/* Styles moved to HomePage.css */
</style> 