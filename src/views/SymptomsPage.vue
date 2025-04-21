<template>
  <div class="symptoms-page">
    <div class="page-header">
      <div class="container">
        <h1>Lupus Symptoms</h1>
        <p>Recognizing the common symptoms of lupus</p>
      </div>
    </div>

    <section id="symptoms" class="symptoms-section">
      <div class="container">
        <div class="symptoms-grid">
          <!-- Fatigue Card -->
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
              <p class="reference">
                Sources: NIH/NIAMS <a href="https://www.niams.nih.gov/health-topics/lupus/diagnosis-treatment-and-steps-to-take#tab-id-5" target="_blank" rel="noopener noreferrer">Managing Symptoms</a>; Mayo Clinic <a href="https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789" target="_blank" rel="noopener noreferrer">Symptoms & Causes</a>
              </p>
            </div>
          </div>

          <!-- Butterfly Rash Card -->
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
              <p class="reference">
                Sources: NIH/NIAMS <a href="https://www.niams.nih.gov/health-topics/lupus#tab-symptoms" target="_blank" rel="noopener noreferrer">Lupus Symptoms</a>; Mayo Clinic <a href="https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789" target="_blank" rel="noopener noreferrer">Symptoms & Causes</a>
              </p>
            </div>
          </div>

          <!-- Joint Pain Card -->
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
              <p class="reference">
                Sources: NIH/NIAMS <a href="https://www.niams.nih.gov/health-topics/lupus#tab-symptoms" target="_blank" rel="noopener noreferrer">Lupus Symptoms</a>; Arthritis Foundation <a href="https://www.arthritis.org/diseases/lupus" target="_blank" rel="noopener noreferrer">Lupus Information</a>
              </p>
            </div>
          </div>

          <!-- Photosensitivity Card -->
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
               <p class="reference">
                Sources: NIH/NIAMS <a href="https://www.niams.nih.gov/health-topics/lupus/diagnosis-treatment-and-steps-to-take#tab-id-5" target="_blank" rel="noopener noreferrer">Managing Photosensitivity</a>; Mayo Clinic <a href="https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789" target="_blank" rel="noopener noreferrer">Symptoms & Causes</a>
              </p>
            </div>
          </div>

          <!-- Kidney Issues Card -->
          <div class="symptom-card">
            <div class="symptom-icon">
              <font-awesome-icon icon="heartbeat" />
            </div>
            <h3>Kidney Issues</h3>
            <p>Lupus nephritis can cause kidney inflammation, potentially leading to protein in urine and kidney dysfunction.</p>
            <div class="symptom-actions">
              <button class="collapse-btn" @click="toggleDetails('kidney')">
                {{ detailsOpen.kidney ? 'Show Less' : 'Read More' }}
              </button>
            </div>
            <div class="symptom-details" :class="{ open: detailsOpen.kidney }">
              <p>
                Lupus nephritis is a serious complication that can cause permanent kidney damage if not treated promptly. Early signs include foamy urine, blood in urine, swelling in legs, and high blood pressure.
              </p>
              <ul>
                <li>Regular kidney function tests are important for early detection</li>
                <li>Follow a kidney-friendly diet if recommended by your doctor</li>
                <li>Take prescribed medications to protect kidney function</li>
              </ul>
              <p class="reference">
                Sources: Mayo Clinic <a href="https://www.mayoclinic.org/diseases-conditions/lupus-nephritis/symptoms-causes/syc-20354335" target="_blank" rel="noopener noreferrer">Lupus Nephritis</a>; National Kidney Foundation <a href="https://www.kidney.org/atoz/content/lupus" target="_blank" rel="noopener noreferrer">Lupus and Kidney Disease</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '../assets/styles/views/SymptomsPage.css';

const detailsOpen = ref({
  fatigue: false,
  rash: false,
  joint: false,
  photo: false,
  kidney: false
});

const toggleDetails = (symptom) => {
  detailsOpen.value[symptom] = !detailsOpen.value[symptom];
};
</script>

<style scoped>
/* Styles moved to SymptomsPage.css */
</style>
