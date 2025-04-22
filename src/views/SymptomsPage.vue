<template>
  <div class="symptoms-page">
    <div class="page-header">
      <div class="container">
        <h1>{{ t('symptomsPageTitle') }}</h1>
        <p>{{ t('symptomsPageSubtitle') }}</p>
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
            <h3>{{ t('fatigueTitle') }}</h3>
            <p>{{ t('fatigueDesc') }}</p>
            <div class="symptom-actions">
              <button class="collapse-btn" @click="toggleDetails('fatigue')">
                {{ detailsOpen.fatigue ? t('showLess') : t('readMore') }}
              </button>
            </div>
            <div class="symptom-details" :class="{ open: detailsOpen.fatigue }">
              <p>
                {{ t('fatigueDetails') }}
              </p>
              <ul>
                <li>{{ t('fatigueTip1') }}</li>
                <li>{{ t('fatigueTip2') }}</li>
                <li>{{ t('fatigueTip3') }}</li>
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
            <h3>{{ t('rashTitle') }}</h3>
            <p>{{ t('rashDesc') }}</p>
            <div class="symptom-actions">
              <button class="collapse-btn" @click="toggleDetails('rash')">
                {{ detailsOpen.rash ? t('showLess') : t('readMore') }}
              </button>
            </div>
            <div class="symptom-details" :class="{ open: detailsOpen.rash }">
              <p>
                {{ t('rashDetails') }}
              </p>
              <ul>
                <li>{{ t('rashTip1') }}</li>
                <li>{{ t('rashTip2') }}</li>
                <li>{{ t('rashTip3') }}</li>
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
            <h3>{{ t('jointTitle') }}</h3>
            <p>{{ t('jointDesc') }}</p>
            <div class="symptom-actions">
              <button class="collapse-btn" @click="toggleDetails('joint')">
                {{ detailsOpen.joint ? t('showLess') : t('readMore') }}
              </button>
            </div>
            <div class="symptom-details" :class="{ open: detailsOpen.joint }">
              <p>
                {{ t('jointDetails') }}
              </p>
              <ul>
                <li>{{ t('jointTip1') }}</li>
                <li>{{ t('jointTip2') }}</li>
                <li>{{ t('jointTip3') }}</li>
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
            <h3>{{ t('sunTitle') }}</h3>
            <p>{{ t('sunDesc') }}</p>
            <div class="symptom-actions">
              <button class="collapse-btn" @click="toggleDetails('photo')">
                {{ detailsOpen.photo ? t('showLess') : t('readMore') }}
              </button>
            </div>
            <div class="symptom-details" :class="{ open: detailsOpen.photo }">
              <p>
                {{ t('sunDetails') }}
              </p>
              <ul>
                <li>{{ t('sunTip1') }}</li>
                <li>{{ t('sunTip2') }}</li>
                <li>{{ t('sunTip3') }}</li>
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
            <h3>{{ t('kidneyTitle') }}</h3>
            <p>{{ t('kidneyDesc') }}</p>
            <div class="symptom-actions">
              <button class="collapse-btn" @click="toggleDetails('kidney')">
                {{ detailsOpen.kidney ? t('showLess') : t('readMore') }}
              </button>
            </div>
            <div class="symptom-details" :class="{ open: detailsOpen.kidney }">
              <p>
                {{ t('kidneyDetails') }}
              </p>
              <ul>
                <li>{{ t('kidneyTip1') }}</li>
                <li>{{ t('kidneyTip2') }}</li>
                <li>{{ t('kidneyTip3') }}</li>
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
import { useTranslation } from '../composables/useTranslation';

const { t } = useTranslation();

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
