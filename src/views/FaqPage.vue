<template>
  <div class="faq-page">
    <div class="page-header">
      <div class="container">
        <h1>Frequently Asked Questions</h1>
        <p>Answers to common questions about lupus</p>
      </div>
    </div>
    
    <FaqSection />
  </div>
</template>

<script setup>
import FaqSection from '../components/FaqSection.vue'
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