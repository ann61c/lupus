<template>
  <div class="about-page">
    <div class="page-header">
      <div class="container">
        <h1>{{ t('aboutPageTitle') }}</h1>
        <p>{{ t('aboutPageSubtitle') }}</p>
      </div>
    </div>
    
    <section id="about" class="about-section">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h3>{{ t('whatIsLupus') }}</h3>
            <p>
              {{ t('whatIsLupusDesc1') }}
            </p>
            <p>
              {{ t('whatIsLupusDesc2') }}
            </p>
            
            <h3>{{ t('typesOfLupus') }}</h3>
            <div class="types-grid">
              <div class="type-card">
                <h4>{{ t('typeSLE') }}</h4>
                <p>{{ t('typeSLEDesc') }}</p>
              </div>
              <div class="type-card">
                <h4>{{ t('typeCutaneous') }}</h4>
                <p>{{ t('typeCutaneousDesc') }}</p>
              </div>
              <div class="type-card">
                <h4>{{ t('typeDrugInduced') }}</h4>
                <p>{{ t('typeDrugInducedDesc') }}</p>
              </div>
              <div class="type-card">
                <h4>{{ t('typeNeonatal') }}</h4>
                <p>{{ t('typeNeonatalDesc') }}</p>
              </div>
            </div>
            
            <h3>{{ t('warningSigns') }}</h3>
            <ul class="warning-signs">
              <li><strong>{{ t('warningFatigue').split(' ')[0] }}</strong> {{ t('warningFatigue').split(' ').slice(1).join(' ') }}</li>
              <li><strong>{{ t('warningJointPain').split(',')[0] }},</strong>{{ t('warningJointPain').split(',').slice(1).join(',') }}</li>
              <li>{{ t('warningRash').replace('A ', 'A <strong>').replace(' rash', '</strong> rash') }}</li>
              <li>{{ t('warningFever').replace('Unexplained ', 'Unexplained <strong>').replace(' fever', '</strong> fever') }}</li>
              <li><strong>{{ t('warningSkinRashes').split(' ')[0] + ' ' + t('warningSkinRashes').split(' ')[1] }}</strong> {{ t('warningSkinRashes').split(' ').slice(2).join(' ') }}</li>
              <li><strong>{{ t('warningFingers').split(' ')[0] + ' ' + t('warningFingers').split(' ')[1] }}</strong> {{ t('warningFingers').split(' ').slice(2).join(' ') }}</li>
              <li><strong>{{ t('warningBreath') }}</strong></li>
              <li><strong>{{ t('warningChestPain') }}</strong></li>
              <li>{{ t('warningEyes').replace('Dry ', 'Dry <strong>').replace(' eyes', '</strong> eyes') }}</li>
              <li><strong>{{ t('warningHeadaches').split(',')[0] }},</strong>{{ t('warningHeadaches').split(',').slice(1).join(',') }}</li>
            </ul>
          </div>
          
          <div class="about-image">
            <div 
              class="image-container" 
              tabindex="0" 
              role="button" 
              :aria-label="t('imageBlurNotice') + '. Press Enter or Space to reveal, or hover with mouse.'"
              @keydown.space.prevent="toggleImage"
              @keydown.enter.prevent="toggleImage"
            >
              <div class="image-blur-notice">
                <span>{{ t('imageBlurNotice') }}</span>
                <span class="hover-instruction">{{ t('imageHoverInstruction') }}</span>
              </div>
              <img 
                src="../assets/lupus-facial-rash.jpeg" 
                :alt="t('imageAltText')" 
                class="blurred-image" 
                :class="{ 'not-blurred': imageRevealed }"
              />
            </div>
            <div class="about-callout">
              <h3>{{ t('seekingDiagnosis') }}</h3>
              <p>{{ t('seekingDiagnosisDesc1') }}</p>
              <p>{{ t('seekingDiagnosisDesc2') }}</p>
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
import { useTranslation } from '../composables/useTranslation';

const { t } = useTranslation();
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