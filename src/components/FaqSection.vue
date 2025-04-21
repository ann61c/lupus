<template>
  <section id="faq" class="faq-section">
    <div class="container">
      <h2>Frequently Asked Questions</h2>
      <p class="section-intro">
        Find answers to commonly asked questions about lupus, its symptoms, treatments, and living with the condition.
      </p>
      
      <div class="faq-container">
        <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
          <div class="faq-question" @click="toggleFaq(index)">
            <h3>{{ faq.question }}</h3>
            <div class="faq-icon" :class="{ 'active': faq.isOpen }">+</div>
          </div>
          <div class="faq-answer" :class="{ 'open': faq.isOpen }">
            <p v-html="faq.answer"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const faqs = ref([
  {
    question: "What is lupus?",
    answer: "Lupus (systemic lupus erythematosus or SLE) is a chronic autoimmune disease where the immune system attacks healthy tissues in the body. This can cause inflammation and damage to joints, skin, kidneys, heart, lungs, blood vessels, and the brain. Lupus is not contagious and varies widely in severity from person to person.",
    isOpen: true
  },
  {
    question: "What causes lupus flares?",
    answer: "Common triggers for lupus flares include:<ul><li>Sunlight exposure (UV rays)</li><li>Stress</li><li>Infections</li><li>Certain medications</li><li>Exhaustion</li><li>Injury</li><li>Emotional stress</li><li>Pregnancy or childbirth</li></ul>Identifying your personal triggers through tracking can help you prevent flares.",
    isOpen: false
  },
  {
    question: "Is lupus curable?",
    answer: "Currently, there is no cure for lupus. However, with proper treatment and lifestyle management, many people with lupus can control their symptoms and achieve long periods of remission. Medical advancements continue to improve quality of life and long-term outcomes for people with lupus.",
    isOpen: false
  },
  {
    question: "How is lupus treated?",
    answer: "Treatment for lupus is individualized based on symptoms and severity. Common treatments include:<ul><li>Anti-inflammatory medications (NSAIDs)</li><li>Antimalarial drugs (like hydroxychloroquine)</li><li>Corticosteroids</li><li>Immunosuppressants</li><li>Biologics (like belimumab)</li></ul>Treatment plans also often include lifestyle modifications and regular monitoring.",
    isOpen: false
  },
  {
    question: "Is lupus fatal?",
    answer: "With modern treatments, most people with lupus can expect to live a normal or near-normal lifespan. However, lupus can be life-threatening in severe cases, particularly when major organs like the kidneys or heart are affected. Early diagnosis, consistent treatment, and careful monitoring are essential for preventing serious complications.",
    isOpen: false
  },
  {
    question: "Can I get pregnant if I have lupus?",
    answer: "Many women with lupus can have successful pregnancies. However, pregnancy with lupus is considered high-risk and requires close monitoring. It's recommended to plan pregnancies during periods of lupus remission and to work closely with both a rheumatologist and a high-risk obstetrician throughout the pregnancy.",
    isOpen: false
  },
  {
    question: "Is lupus hereditary?",
    answer: "Lupus is not directly inherited, but there appears to be a genetic component that may make some people more susceptible. If you have a family member with lupus or another autoimmune disease, your risk may be slightly higher, but many people with lupus have no family history of the disease.",
    isOpen: false
  },
  {
    question: "How do I know if my symptoms are a lupus flare?",
    answer: "Common signs of a lupus flare include increased fatigue, joint pain, rash, fever, headaches, and general feeling of being unwell. Tracking your symptoms regularly can help you identify patterns that indicate the beginning of a flare. If you suspect you're experiencing a flare, contact your healthcare provider promptly.",
    isOpen: false
  }
]);

const toggleFaq = (index) => {
  faqs.value = faqs.value.map((faq, i) => {
    if (i === index) {
      return { ...faq, isOpen: !faq.isOpen };
    } else {
      return { ...faq, isOpen: false };
    }
  });
};
</script>

<style scoped>
.faq-section {
  padding: 5rem 1rem;
  background-color: #f8f5ff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #8a2be2;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.section-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  color: #555;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 1rem;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question h3 {
  margin: 0;
  font-size: 1.1rem;
  color: #333;
}

.faq-icon {
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.faq-icon.active {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  padding: 0 1.5rem;
}

.faq-answer.open {
  max-height: 1000px;
  padding: 0 1.5rem 1.5rem;
}

.faq-answer p {
  margin-top: 0;
}

.faq-answer ul {
  padding-left: 1.5rem;
}

.faq-answer li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }
  
  .faq-section {
    padding: 3rem 1rem;
  }
}
</style>