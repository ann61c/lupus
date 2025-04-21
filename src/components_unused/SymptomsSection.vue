<template>
  <section id="symptoms" class="symptoms-section">
    <div class="container">
      <h2>Common Lupus Symptoms</h2>
      <p class="section-intro">
        Lupus affects different people in different ways. These are some of the most common symptoms experienced by women with lupus.
      </p>
      
      <div class="symptoms-grid">
        <div class="symptom-card">
          <div class="symptom-icon">
            <font-awesome-icon icon="sync-alt" />
          </div>
          <h3>Fatigue</h3>
          <p>Extreme tiredness that doesn't improve with rest. May come and go or be persistent.</p>
          <div class="symptom-actions">
            <button class="collapse-btn" @click="toggleDetails('fatigue')">
              {{ detailsOpen.fatigue ? 'Show Less' : 'Read More' }}
            </button>
          </div>
          <div class="symptom-details" :class="{ open: detailsOpen.fatigue }">
            <p>
              Fatigue in lupus can be debilitating and is one of the most common symptoms. It may be related to disease activity, 
              medications, pain, depression, or sleep disturbances. Managing fatigue often requires a combination of medication, 
              lifestyle changes, and energy conservation techniques.
            </p>
            <ul>
              <li>Try to maintain a regular sleep schedule</li>
              <li>Plan activities during your highest energy periods</li>
              <li>Take short rests before becoming exhausted</li>
            </ul>
          </div>
        </div>
        
        <div class="symptom-card">
          <div class="symptom-icon">
            <font-awesome-icon icon="allergies" />
          </div>
          <h3>Butterfly Rash</h3>
          <p>A red rash across the cheeks and nose, often in the shape of a butterfly.</p>
          <div class="symptom-actions">
            <button class="collapse-btn" @click="toggleDetails('rash')">
              {{ detailsOpen.rash ? 'Show Less' : 'Read More' }}
            </button>
          </div>
          <div class="symptom-details" :class="{ open: detailsOpen.rash }">
            <p>
              The butterfly rash (malar rash) is one of the most recognizable symptoms of lupus. It appears across the bridge 
              of the nose and cheeks in a butterfly pattern. The rash can be flat or raised and may worsen with sun exposure.
            </p>
            <ul>
              <li>Use broad-spectrum sunscreen (SPF 30+)</li>
              <li>Wear protective clothing and hats outdoors</li>
              <li>Avoid peak sun hours when possible</li>
            </ul>
          </div>
        </div>
        
        <div class="symptom-card">
          <div class="symptom-icon">
            <font-awesome-icon icon="bone" />
          </div>
          <h3>Joint Pain</h3>
          <p>Pain, stiffness, and swelling in joints, especially in the morning or after periods of inactivity.</p>
          <div class="symptom-actions">
            <button class="collapse-btn" @click="toggleDetails('joint')">
              {{ detailsOpen.joint ? 'Show Less' : 'Read More' }}
            </button>
          </div>
          <div class="symptom-details" :class="{ open: detailsOpen.joint }">
            <p>
              Joint pain (arthralgia) and inflammation (arthritis) commonly affect people with lupus. The pain typically 
              affects multiple joints and may migrate from one joint to another. Unlike rheumatoid arthritis, lupus arthritis 
              rarely causes permanent joint deformity.
            </p>
            <ul>
              <li>Apply warm or cold compresses to affected joints</li>
              <li>Engage in gentle exercise like swimming or walking</li>
              <li>Take prescribed anti-inflammatory medications</li>
            </ul>
          </div>
        </div>
        
        <div class="symptom-card">
          <div class="symptom-icon">
            <font-awesome-icon icon="sun" />
          </div>
          <h3>Photosensitivity</h3>
          <p>Skin rashes, fatigue, or joint pain triggered or worsened by sun exposure.</p>
          <div class="symptom-actions">
            <button class="collapse-btn" @click="toggleDetails('photo')">
              {{ detailsOpen.photo ? 'Show Less' : 'Read More' }}
            </button>
          </div>
          <div class="symptom-details" :class="{ open: detailsOpen.photo }">
            <p>
              Many people with lupus are extremely sensitive to ultraviolet light. Sun exposure can trigger flares affecting 
              not only the skin but internal organs as well. UV light can come from sunlight, fluorescent lights, or photocopiers.
            </p>
            <ul>
              <li>Use broad-spectrum sunscreen (SPF 50+) daily</li>
              <li>Wear UV-protective clothing and sunglasses</li>
              <li>Consider using UV shields on windows</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const detailsOpen = ref({
  fatigue: false,
  rash: false,
  joint: false,
  photo: false
});

const toggleDetails = (symptom) => {
  detailsOpen.value[symptom] = !detailsOpen.value[symptom];
};
</script>

<style scoped>
.symptoms-section {
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

.symptoms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.symptom-card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.symptom-card:hover {
  transform: translateY(-5px);
}

.symptom-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #8a2be2;
  text-align: center;
}

.symptom-card h3 {
  color: #8a2be2;
  margin-bottom: 0.5rem;
}

.symptom-actions {
  margin-top: 1rem;
}

.collapse-btn {
  background: transparent;
  border: none;
  color: #8a2be2;
  cursor: pointer;
  font-weight: bold;
  padding: 0;
  text-decoration: underline;
}

.symptom-details {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
}

.symptom-details.open {
  max-height: 500px;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  opacity: 1;
}

.symptom-details ul {
  padding-left: 1.2rem;
  margin-top: 0.5rem;
}

.symptom-details li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }
  
  .symptoms-section {
    padding: 3rem 1rem;
  }
}
</style> 