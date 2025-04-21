<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2>About Lupus</h2>
      <p class="section-intro">
        Systemic lupus erythematosus (SLE), commonly known as lupus, is a chronic autoimmune disease that can affect multiple organs and systems in the body.
      </p>
      
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
          <img src="../assets/lupus-illustration.jpg" alt="Lupus illustration showing how it affects multiple systems in the body" />
          <div class="about-callout">
            <h3>Seeking Diagnosis</h3>
            <p>If you're experiencing several of these symptoms, consult a healthcare provider. Diagnosis typically involves a combination of blood tests, urine tests, and a thorough review of symptoms.</p>
            <p>Early diagnosis is key to effectively managing lupus and preventing complications.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// About Lupus component
</script>

<style scoped>
.about-section {
  padding: 5rem 1rem;
  background-color: white;
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

.about-content {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 2rem;
}

.about-text h3 {
  color: #8a2be2;
  margin: 2rem 0 1rem;
}

.about-text h3:first-child {
  margin-top: 0;
}

.about-text p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.type-card {
  background-color: #f8f5ff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.type-card h4 {
  color: #8a2be2;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.type-card p {
  margin: 0;
  font-size: 0.9rem;
}

.warning-signs {
  padding-left: 1.5rem;
  margin-top: 1rem;
}

.warning-signs li {
  margin-bottom: 0.75rem;
}

.about-image {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.about-callout {
  background-color: #8a2be2;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
}

.about-callout h3 {
  color: white;
  margin-top: 0;
  margin-bottom: 1rem;
}

.about-callout p {
  margin-bottom: 1rem;
}

.about-callout p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .about-section {
    padding: 3rem 1rem;
  }
}
</style> 