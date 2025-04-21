<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-section">
          <h3>LupusConnect</h3>
          <p>Empowering women living with lupus through accessible, culturally sensitive, and medically accurate health information.</p>
        </div>
        
        <div class="footer-section">
          <h3>{{ t('quickLinks') }}</h3>
          <ul class="footer-links">
            <li><router-link to="/">{{ t('home') }}</router-link></li>
            <li><router-link to="/about">{{ t('about') }}</router-link></li>
            <li><router-link to="/symptoms">{{ t('symptoms') }}</router-link></li>
            <li><router-link to="/treatments">{{ t('treatments') }}</router-link></li>
            <li><router-link to="/lifestyle">{{ t('lifestyle') }}</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>{{ t('resources') }}</h3>
          <ul class="footer-links">
            <li><router-link to="/community">{{ t('community') }}</router-link></li>
            <li><router-link to="/tracker">{{ t('tracker') }}</router-link></li>
            <li><router-link to="/faq">{{ t('faq') }}</router-link></li>
            <li><router-link to="/resources">{{ t('resources') }}</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>{{ t('languages') }}</h3>
          <div class="language-options">
            <button 
              v-for="(lang, code) in availableLanguages" 
              :key="code"
              class="language-btn" 
              :class="{ 'active': isActive(code) }"
              @click="setLanguage(code)"
            >
              {{ lang.name }}
            </button>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>{{ t('copyright') }}</p>
        <p class="disclaimer">{{ t('disclaimer') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage';
import { useTranslation } from '../composables/useTranslation';

const { availableLanguages, setLanguage, isActive } = useLanguage();
const { t } = useTranslation();
</script>

<style scoped>
.site-footer {
  background-color: #8a2be2;
  color: white;
  padding: 3rem 1rem 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: white;
  text-decoration: underline;
}

.language-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.language-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.language-btn.active {
  background: white;
  color: #8a2be2;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.disclaimer {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .site-footer {
    padding: 2rem 1rem 1rem;
  }
}
</style> 