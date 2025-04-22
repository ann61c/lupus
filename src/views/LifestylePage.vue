<template>
  <div class="lifestyle-page">
    <div class="page-header">
      <div class="container">
        <h1>{{ t('lifestylePageTitle') }}</h1>
        <p>{{ t('lifestylePageSubtitle') }}</p>
      </div>
    </div>

    <section id="lifestyle" class="lifestyle-section">
      <div class="container">
        <div class="tips-container">
          <div class="tip-card">
            <div class="tip-icon">
              <font-awesome-icon icon="sun" />
            </div>
            <h3>{{ t('sunProtectionTitle') }}</h3>
            <ul>
              <li>{{ t('sunProtectionTip1') }}</li>
              <li>{{ t('sunProtectionTip2') }}</li>
              <li>{{ t('sunProtectionTip3') }}</li>
            </ul>
            <p class="reference">
              Sources: Strand et al. (2019) <a href="https://doi.org/10.1002/acr.23788" target="_blank" data-doi="10.1002/acr.23788">[DOI]</a>; Herzinger et al. (2004) <a href="https://doi.org/10.1002/art.20426" target="_blank" data-doi="10.1002/art.20426">[DOI]</a>
            </p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">
              <font-awesome-icon icon="carrot" />
            </div>
            <h3>{{ t('healthyDietTitle') }}</h3>
            <ul>
              <li>{{ t('healthyDietTip1') }}</li>
              <li>{{ t('healthyDietTip2') }}</li>
              <li>{{ t('healthyDietTip3') }}</li>
            </ul>
            <p class="reference">
              Sources: UMass Chan Medical School (2023); MDPI (2022) <a href="https://doi.org/10.3389/fimmu.2022.918749" target="_blank" data-doi="10.3389/fimmu.2022.918749">[DOI]</a>
            </p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">
              <font-awesome-icon icon="spa" />
            </div>
            <h3>{{ t('stressManagementTitle') }}</h3>
            <ul>
              <li>{{ t('stressManagementTip1') }}</li>
              <li>{{ t('stressManagementTip2') }}</li>
              <li>{{ t('stressManagementTip3') }}</li>
            </ul>
            <p class="reference">
              Sources: Taub et al. (2020) <a href="https://doi.org/10.1136/lupus-2020-000441" target="_blank" data-doi="10.1136/lupus-2020-000441">[DOI]</a>; Wiley Online Library (2022) <a href="https://doi.org/10.1002/acr.25076" target="_blank" data-doi="10.1002/acr.25076">[DOI]</a>
            </p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">
              <font-awesome-icon icon="bed" />
            </div>
            <h3>{{ t('sleepTitle') }}</h3>
            <ul>
              <li>{{ t('sleepTip1') }}</li>
              <li>{{ t('sleepTip2') }}</li>
              <li>{{ t('sleepTip3') }}</li>
            </ul>
            <p class="reference">
              Sources: SAGE Journals (2021) <a href="https://doi.org/10.1177/09612033211062521" target="_blank" data-doi="10.1177/09612033211062521">[DOI]</a>; Frontiers in Immunology (2022) <a href="https://doi.org/10.3389/fimmu.2022.918749" target="_blank" data-doi="10.3389/fimmu.2022.918749">[DOI]</a>
            </p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">
              <font-awesome-icon icon="walking" />
            </div>
            <h3>{{ t('exerciseTitle') }}</h3>
            <ul>
              <li>{{ t('exerciseTip1') }}</li>
              <li>{{ t('exerciseTip2') }}</li>
              <li>{{ t('exerciseTip3') }}</li>
            </ul>
            <p class="reference">
              Sources: SAGE Journals (2021) <a href="https://doi.org/10.1177/09612033211061060" target="_blank" data-doi="10.1177/09612033211061060">[DOI]</a>; Frontiers in Immunology (2022) <a href="https://doi.org/10.3389/fimmu.2022.918749" target="_blank" data-doi="10.3389/fimmu.2022.918749">[DOI]</a>
            </p>
          </div>

          <div class="tip-card">
            <div class="tip-icon">
              <font-awesome-icon icon="notes-medical" />
            </div>
            <h3>{{ t('trackSymptomsTitle') }}</h3>
            <ul>
              <li>{{ t('trackSymptomsTip1') }}</li>
              <li>{{ t('trackSymptomsTip2') }}</li>
              <li>{{ t('trackSymptomsTip3') }}</li>
            </ul>
            <p class="reference">
              Sources: Lupus Foundation of America; Lupus Science & Medicine (2022) <a href="https://doi.org/10.1136/lupus-2022-000441" target="_blank" data-doi="10.1136/lupus-2022-000441">[DOI]</a>
            </p>
          </div>
        </div>

        <div class="lifestyle-cta">
          <h3>{{ t('personalPlanTitle') }}</h3>
          <p>{{ t('personalPlanDesc') }}</p>
          <router-link to="/tracker" class="btn btn-primary">{{ t('goToTracker') }}</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Import CSS file
import '../assets/styles/views/LifestylePage.css';
import { useTranslation } from '../composables/useTranslation';

const { t } = useTranslation();
</script>

<style scoped>
/* Styles moved to LifestylePage.css */
</style>
