import { ref, watch } from 'vue'

// Create a reactive state for the current language with English as default
const currentLanguage = ref(localStorage.getItem('language') || 'en')

// Watch for changes to save to localStorage
watch(currentLanguage, (newLanguage) => {
  localStorage.setItem('language', newLanguage)
  document.documentElement.setAttribute('lang', newLanguage)
  // You could emit a custom event here if needed
})

// Available languages
const availableLanguages = {
  en: {
    name: 'English',
    code: 'en',
  },
  es: {
    name: 'Español',
    code: 'es',
  },
  zh: {
    name: '中文',
    code: 'zh',
  }
}

export function useLanguage() {
  // Function to change the language
  const setLanguage = (langCode) => {
    if (availableLanguages[langCode]) {
      currentLanguage.value = langCode
    }
  }

  // Check if the language is currently active
  const isActive = (langCode) => {
    return currentLanguage.value === langCode
  }

  return {
    currentLanguage,
    availableLanguages,
    setLanguage,
    isActive
  }
} 