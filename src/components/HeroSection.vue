<template>
  <div class="hero">
    <div class="hero-content">
      <h1>{{ t('heroTitle') }}</h1>
      <p>{{ t('heroSubtitle') }}</p>
      <div class="hero-buttons">
        <router-link to="/symptoms" class="btn btn-primary">{{ t('symptoms') }}</router-link>
        <router-link to="/tracker" class="btn btn-secondary">{{ t('tracker') }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTranslation } from '../composables/useTranslation';

const { t } = useTranslation();
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(138, 43, 226, 0.8), rgba(138, 43, 226, 0.6)), url('../assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0 1rem;
}

.hero-content {
  max-width: 800px;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: white;
  color: #8a2be2;
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
}
</style> 