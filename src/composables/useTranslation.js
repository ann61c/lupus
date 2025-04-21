import { computed } from 'vue'
import { useLanguage } from './useLanguage'
import { translations } from './translations'

export function useTranslation() {
  const { currentLanguage } = useLanguage()
  
  // Function to get translation based on key
  const t = (key) => {
    const lang = currentLanguage.value
    
    // Get translations for current language, fallback to English
    const langTranslations = translations[lang] || translations.en
    
    // Get translation for the key
    const translatedText = langTranslations[key] || translations.en[key] || key
    
    // Handle dynamic content like year
    return translatedText.replace('{year}', new Date().getFullYear())
  }
  
  // Computed property to get all translations for the current language
  const tAll = computed(() => {
    return translations[currentLanguage.value] || translations.en
  })
  
  return {
    t,
    tAll
  }
} 