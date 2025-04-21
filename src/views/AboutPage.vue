<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container">
        <h1>About Lupus</h1>
        <p>Understanding systemic lupus erythematosus (SLE)</p>
      </div>
    </div>
    
    <section id="about" class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h3>What is Lupus?</h3>
            <p>
              Lupus is a condition where the immune system attacks healthy tissues and organs. This autoimmune response causes inflammation and can damage various body systems, including joints, skin, kidneys, heart, lungs, brain, and blood cells.
            </p>
            <p>
              Lupus is more common in women, particularly women of childbearing age (15-44). Certain racial and ethnic groups—including African Americans, Hispanics/Latinos, Asian Americans, and Native Americans—are also at higher risk.
            </p>
            
            <h3>Types of Lupus</h3>
            <div class="types-grid">
              <div class="type-card">
                <h4>Systemic Lupus Erythematosus (SLE)</h4>
                <p>The most common form that can affect multiple organs and body systems</p>
              </div>
              <div class="type-card">
                <h4>Cutaneous Lupus</h4>
                <p>Primarily affects the skin with rashes and lesions</p>
              </div>
              <div class="type-card">
                <h4>Drug-induced Lupus</h4>
                <p>Caused by certain medications and typically resolves when the medication is stopped</p>
              </div>
              <div class="type-card">
                <h4>Neonatal Lupus</h4>
                <p>A rare condition in newborns born to mothers with certain antibodies</p>
              </div>
            </div>
            
            <h3>Early Warning Signs</h3>
            <ul class="warning-signs">
              <li><strong>Fatigue</strong> that doesn't improve with rest</li>
              <li><strong>Joint pain, stiffness,</strong> and swelling</li>
              <li>A <strong>butterfly-shaped rash</strong> on the face</li>
              <li>Unexplained <strong>fever</strong></li>
              <li><strong>Skin rashes</strong> that appear or worsen with sun exposure</li>
              <li><strong>Fingers or toes</strong> that turn white or blue when cold</li>
              <li><strong>Shortness of breath</strong></li>
              <li><strong>Chest pain</strong></li>
              <li>Dry <strong>eyes</strong></li>
              <li><strong>Headaches, confusion,</strong> or memory loss</li>
            </ul>
          </div>
          
          <div class="about-image">
            <div 
              class="image-container" 
              tabindex="0" 
              role="button" 
              aria-label="Image of lupus facial rash. This image is blurred. Press Enter or Space to reveal, or hover with mouse."
              @keydown.space.prevent="toggleImage"
              @keydown.enter.prevent="toggleImage"
            >
              <div class="image-blur-notice">
                <span>This image shows lupus facial rash symptoms</span>
                <span class="hover-instruction">Hover or press Enter to view</span>
              </div>
              <img 
                src="../assets/lupus-facial-rash.jpeg" 
                alt="Lupus butterfly rash on face showing the characteristic red rash across cheeks and nose" 
                class="blurred-image" 
                :class="{ 'not-blurred': imageRevealed }"
              />
            </div>
            <div class="about-callout">
              <h3>Seeking Diagnosis</h3>
              <p>If you're experiencing several of these symptoms, consult a healthcare provider. Diagnosis typically involves a combination of blood tests, urine tests, and a thorough review of symptoms.</p>
              <p>Early diagnosis is key to effectively managing lupus and preventing complications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import CSS file
import '../assets/styles/views/AboutPage.css'
import { ref } from 'vue';

const imageRevealed = ref(false);

const toggleImage = () => {
  imageRevealed.value = !imageRevealed.value;
};
</script>

<style scoped>
/* Styles moved to AboutPage.css */
.not-blurred {
  filter: blur(0) !important;
}
</style> 