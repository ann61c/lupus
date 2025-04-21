<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/lupus-logo.svg" alt="LupusConnect Logo" />
        <h1>LupusConnect</h1>
      </router-link>
    </div>
    <div class="nav-links">
      <router-link to="/" exact-active-class="router-link-active" class="nav-link">{{ t('home') }}</router-link>
      <router-link to="/about" class="nav-link">{{ t('about') }}</router-link>
      <router-link to="/symptoms" class="nav-link">{{ t('symptoms') }}</router-link>
      <router-link to="/treatments" class="nav-link">{{ t('treatments') }}</router-link>
      <router-link to="/lifestyle" class="nav-link">{{ t('lifestyle') }}</router-link>
      <router-link to="/tracker" class="nav-link">{{ t('tracker') }}</router-link>
    </div>
    
    <button class="mobile-menu-btn" @click="toggleMobileMenu">
      <font-awesome-icon icon="bars" />
    </button>
    
    <div class="mobile-nav" :class="{ 'open': mobileMenuOpen }">
      <button class="close-menu-btn" @click="toggleMobileMenu">
        <font-awesome-icon icon="times" />
      </button>
      <router-link to="/" @click="toggleMobileMenu" class="mobile-nav-link">{{ t('home') }}</router-link>
      <router-link to="/about" @click="toggleMobileMenu" class="mobile-nav-link">{{ t('about') }}</router-link>
      <router-link to="/symptoms" @click="toggleMobileMenu" class="mobile-nav-link">{{ t('symptoms') }}</router-link>
      <router-link to="/treatments" @click="toggleMobileMenu" class="mobile-nav-link">{{ t('treatments') }}</router-link>
      <router-link to="/lifestyle" @click="toggleMobileMenu" class="mobile-nav-link">{{ t('lifestyle') }}</router-link>
      <router-link to="/tracker" @click="toggleMobileMenu" class="mobile-nav-link">{{ t('tracker') }}</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useTranslation } from '../composables/useTranslation';

const { t } = useTranslation();
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  
  // Prevent scrolling when menu is open
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #8a2be2;
  color: white;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
}

.logo a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.logo h1 {
  font-size: 1.5rem;
  margin: 0;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
}

.nav-link:hover,
.router-link-active {
  text-decoration: underline;
  opacity: 1;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: #8a2be2;
  padding: 2rem;
  z-index: 1000;
  transition: right 0.3s ease;
  flex-direction: column;
  gap: 1rem;
}

.mobile-nav.open {
  right: 0;
}

.close-menu-btn {
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.mobile-nav-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }
  
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .mobile-nav {
    display: flex;
  }
}
</style> 