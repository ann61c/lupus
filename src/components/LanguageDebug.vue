<template>
  <div class="language-debug">
    <p>Current language: <strong>{{ currentLanguage }}</strong></p>
    <div class="language-buttons">
      <button 
        v-for="(lang, code) in availableLanguages" 
        :key="code"
        class="debug-btn" 
        :class="{ 'active': isActive(code) }"
        @click="setLanguage(code)"
      >
        {{ lang.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage';

const { currentLanguage, availableLanguages, setLanguage, isActive } = useLanguage();
</script>

<style scoped>
.language-debug {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: rgba(138, 43, 226, 0.1);
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  font-size: 0.8rem;
}

.language-buttons {
  display: flex;
  gap: 5px;
  margin-top: 5px;
}

.debug-btn {
  background: #f0f0f0;
  border: 1px solid #ccc;
  padding: 2px 5px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.7rem;
}

.debug-btn.active {
  background: #8a2be2;
  color: white;
  border-color: #8a2be2;
}
</style> 