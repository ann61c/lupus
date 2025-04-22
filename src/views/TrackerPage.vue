<template>
  <div class="tracker-page">
    <div class="page-header">
      <div class="container">
        <h1>{{ t('trackerPageTitle') }}</h1>
        <p>{{ t('trackerPageSubtitle') }}</p>
      </div>
    </div>
    
    <section id="tracker" class="tracker-section">
      <div class="container">
        <div class="tracker-container">
          <div class="tracker-form">
            <h3>{{ t('logSymptom') }}</h3>
            
            <div class="form-group">
              <label for="date">{{ t('dateLabel') }}</label>
              <input type="date" id="date" class="form-control" v-model="today">
            </div>
            
            <div class="form-group">
              <label>{{ t('fatigueLabel') }}</label>
              <div class="rating-scale">
                <div class="rating-option" v-for="n in 5" :key="`fatigue-${n}`">
                  <input type="radio" :id="`fatigue-${n}`" name="fatigue" :value="n" v-model="symptoms.fatigue">
                  <label :for="`fatigue-${n}`">{{ n }}</label>
                </div>
              </div>
              <div class="scale-labels">
                <span>None</span>
                <span>Very Bad</span>
              </div>
            </div>
            
            <div class="form-group">
              <label>{{ t('jointPainLabel') }}</label>
              <div class="rating-scale">
                <div class="rating-option" v-for="n in 5" :key="`pain-${n}`">
                  <input type="radio" :id="`pain-${n}`" name="pain" :value="n" v-model="symptoms.jointPain">
                  <label :for="`pain-${n}`">{{ n }}</label>
                </div>
              </div>
              <div class="scale-labels">
                <span>None</span>
                <span>Very Bad</span>
              </div>
            </div>
            
            <div class="form-group">
              <label>{{ t('skinIssuesLabel') }}</label>
              <div class="rating-scale">
                <div class="rating-option" v-for="n in 5" :key="`skin-${n}`">
                  <input type="radio" :id="`skin-${n}`" name="skin" :value="n" v-model="symptoms.skinIssues">
                  <label :for="`skin-${n}`">{{ n }}</label>
                </div>
              </div>
              <div class="scale-labels">
                <span>None</span>
                <span>Very Bad</span>
              </div>
            </div>
            
            <div class="form-group">
              <label for="other">{{ t('notesLabel') }}</label>
              <textarea id="other" class="form-control" rows="3" v-model="symptoms.notes"></textarea>
            </div>
            
            <div class="form-group">
              <label>{{ t('triggersLabel') }}</label>
              <div class="checkbox-group">
                <div class="checkbox-option">
                  <input type="checkbox" id="trigger-stress" v-model="symptoms.triggers.stress">
                  <label for="trigger-stress">Stress</label>
                </div>
                <div class="checkbox-option">
                  <input type="checkbox" id="trigger-sun" v-model="symptoms.triggers.sun">
                  <label for="trigger-sun">Being in the sun</label>
                </div>
                <div class="checkbox-option">
                  <input type="checkbox" id="trigger-lack-sleep" v-model="symptoms.triggers.lackOfSleep">
                  <label for="trigger-lack-sleep">Not enough sleep</label>
                </div>
                <div class="checkbox-option">
                  <input type="checkbox" id="trigger-food" v-model="symptoms.triggers.food">
                  <label for="trigger-food">Food reaction</label>
                </div>
                <div class="checkbox-option">
                  <input type="checkbox" id="trigger-medication" v-model="symptoms.triggers.medication">
                  <label for="trigger-medication">Change in medicine</label>
                </div>
              </div>
            </div>
            
            <button type="button" class="btn btn-primary" @click="saveSymptoms">{{ t('submitButton') }}</button>
          </div>
          
          <div class="tracker-history">
            <h3>{{ t('symptomHistory') }}</h3>
            <p class="tracker-note">Your entries are saved on your device only for privacy.</p>
            
            <div class="history-empty" v-if="history.length === 0">
              <p>{{ t('noSymptomsYet') }}</p>
            </div>
            
            <div class="history-entries" v-else>
              <div class="entry-card" v-for="(entry, index) in history" :key="index">
                <div class="entry-date">{{ formatDate(entry.date) }}</div>
                <div class="entry-symptoms">
                  <div class="symptom-rating">
                    <span class="symptom-label">{{ t('fatigueLabel') }}:</span>
                    <span class="rating-dots">
                      <span class="dot" v-for="n in 5" :key="`f-${n}`" :class="{ active: n <= entry.symptoms.fatigue }"></span>
                    </span>
                  </div>
                  <div class="symptom-rating">
                    <span class="symptom-label">{{ t('jointPainLabel') }}:</span>
                    <span class="rating-dots">
                      <span class="dot" v-for="n in 5" :key="`j-${n}`" :class="{ active: n <= entry.symptoms.jointPain }"></span>
                    </span>
                  </div>
                  <div class="symptom-rating">
                    <span class="symptom-label">{{ t('skinIssuesLabel') }}:</span>
                    <span class="rating-dots">
                      <span class="dot" v-for="n in 5" :key="`s-${n}`" :class="{ active: n <= entry.symptoms.skinIssues }"></span>
                    </span>
                  </div>
                </div>
                <div class="entry-notes" v-if="entry.symptoms.notes">
                  <strong>{{ t('notesLabel') }}:</strong> {{ entry.symptoms.notes }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import '../assets/styles/views/TrackerPage.css';
import { useTranslation } from '../composables/useTranslation';

const { t } = useTranslation();

// Get today's date in the format YYYY-MM-DD
const today = ref(new Date().toISOString().split('T')[0]);

// Initialize symptoms object
const symptoms = ref({
  fatigue: 0,
  jointPain: 0,
  skinIssues: 0,
  notes: '',
  triggers: {
    stress: false,
    sun: false,
    lackOfSleep: false,
    food: false,
    medication: false
  }
});

// Initialize history array
const history = ref([]);

// Load history from localStorage on component mount
onMounted(() => {
  const savedHistory = localStorage.getItem('symptomHistory');
  if (savedHistory) {
    history.value = JSON.parse(savedHistory);
  }
});

// Save the current symptoms to history
const saveSymptoms = () => {
  const newEntry = {
    date: today.value,
    symptoms: JSON.parse(JSON.stringify(symptoms.value))
  };
  
  history.value.unshift(newEntry);
  
  // Save to localStorage
  localStorage.setItem('symptomHistory', JSON.stringify(history.value));
  
  // Reset form
  symptoms.value = {
    fatigue: 0,
    jointPain: 0,
    skinIssues: 0,
    notes: '',
    triggers: {
      stress: false,
      sun: false,
      lackOfSleep: false,
      food: false,
      medication: false
    }
  };
};

// Format date for display
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<style scoped>
/* Styles moved to TrackerPage.css */
</style> 