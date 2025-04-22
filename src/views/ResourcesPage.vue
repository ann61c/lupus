<template>
  <div class="resources-page">
    <div class="page-header">
      <div class="container">
        <h1>{{ t('resources') }}</h1>
        <p>{{ t('resourcesPageSubtitle') }}</p>
      </div>
    </div>
    
    <ResourcesSection />
  </div>
</template>

<script setup>
import ResourcesSection from '../components/ResourcesSection.vue'
import { useTranslation } from '../composables/useTranslation';

const { t } = useTranslation();
</script>

<style scoped>
.page-header {
  background-color: var(--color-primary);
  color: white;
  padding: 3rem 1rem;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .page-header {
    padding: 2rem 1rem;
  }
  
  h1 {
    font-size: 2rem;
  }
}
</style> 