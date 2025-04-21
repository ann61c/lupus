<template>
  <section id="tracker" class="tracker-section">
    <div class="container">
      <h2>Symptom Tracker</h2>
      <p class="section-intro">
        Tracking your symptoms can help you identify patterns, triggers, and the effectiveness of treatments. Use this tool to monitor your lupus symptoms over time.
      </p>
      
      <div class="tracker-container">
        <div class="tracker-form">
          <h3>Log Your Symptoms</h3>
          
          <div class="form-group">
            <label for="date">Date</label>
            <input type="date" id="date" class="form-control" v-model="today">
          </div>
          
          <div class="form-group">
            <label>Rate your fatigue level</label>
            <div class="rating-scale">
              <div class="rating-option" v-for="n in 5" :key="`fatigue-${n}`">
                <input type="radio" :id="`fatigue-${n}`" name="fatigue" :value="n" v-model="symptoms.fatigue">
                <label :for="`fatigue-${n}`">{{ n }}</label>
              </div>
            </div>
            <div class="scale-labels">
              <span>None</span>
              <span>Severe</span>
            </div>
          </div>
          
          <div class="form-group">
            <label>Rate your joint pain</label>
            <div class="rating-scale">
              <div class="rating-option" v-for="n in 5" :key="`pain-${n}`">
                <input type="radio" :id="`pain-${n}`" name="pain" :value="n" v-model="symptoms.jointPain">
                <label :for="`pain-${n}`">{{ n }}</label>
              </div>
            </div>
            <div class="scale-labels">
              <span>None</span>
              <span>Severe</span>
            </div>
          </div>
          
          <div class="form-group">
            <label>Rate your skin issues (rash, sensitivity)</label>
            <div class="rating-scale">
              <div class="rating-option" v-for="n in 5" :key="`skin-${n}`">
                <input type="radio" :id="`skin-${n}`" name="skin" :value="n" v-model="symptoms.skinIssues">
                <label :for="`skin-${n}`">{{ n }}</label>
              </div>
            </div>
            <div class="scale-labels">
              <span>None</span>
              <span>Severe</span>
            </div>
          </div>
          
          <div class="form-group">
            <label for="other">Other symptoms or notes</label>
            <textarea id="other" class="form-control" rows="3" v-model="symptoms.notes"></textarea>
          </div>
          
          <div class="form-group">
            <label>Recent triggers (check all that apply)</label>
            <div class="checkbox-group">
              <div class="checkbox-option">
                <input type="checkbox" id="trigger-stress" v-model="symptoms.triggers.stress">
                <label for="trigger-stress">Stress</label>
              </div>
              <div class="checkbox-option">
                <input type="checkbox" id="trigger-sun" v-model="symptoms.triggers.sun">
                <label for="trigger-sun">Sun exposure</label>
              </div>
              <div class="checkbox-option">
                <input type="checkbox" id="trigger-lack-sleep" v-model="symptoms.triggers.lackOfSleep">
                <label for="trigger-lack-sleep">Lack of sleep</label>
              </div>
              <div class="checkbox-option">
                <input type="checkbox" id="trigger-food" v-model="symptoms.triggers.food">
                <label for="trigger-food">Food sensitivity</label>
              </div>
              <div class="checkbox-option">
                <input type="checkbox" id="trigger-medication" v-model="symptoms.triggers.medication">
                <label for="trigger-medication">Medication change</label>
              </div>
            </div>
          </div>
          
          <button type="button" class="btn btn-primary" @click="saveSymptoms">Save Entry</button>
        </div>
        
        <div class="tracker-history">
          <h3>Your Symptom History</h3>
          <p class="tracker-note">Your entries are saved locally on your device for privacy.</p>
          
          <div class="history-empty" v-if="history.length === 0">
            <p>You haven't logged any symptoms yet. Start tracking to see your history here.</p>
          </div>
          
          <div class="history-entries" v-else>
            <div class="entry-card" v-for="(entry, index) in history" :key="index">
              <div class="entry-date">{{ formatDate(entry.date) }}</div>
              <div class="entry-symptoms">
                <div class="symptom-rating">
                  <span class="symptom-label">Fatigue:</span>
                  <span class="rating-dots">
                    <span class="dot" v-for="n in 5" :key="`f-${n}`" :class="{ active: n <= entry.symptoms.fatigue }"></span>
                  </span>
                </div>
                <div class="symptom-rating">
                  <span class="symptom-label">Joint Pain:</span>
                  <span class="rating-dots">
                    <span class="dot" v-for="n in 5" :key="`j-${n}`" :class="{ active: n <= entry.symptoms.jointPain }"></span>
                  </span>
                </div>
                <div class="symptom-rating">
                  <span class="symptom-label">Skin Issues:</span>
                  <span class="rating-dots">
                    <span class="dot" v-for="n in 5" :key="`s-${n}`" :class="{ active: n <= entry.symptoms.skinIssues }"></span>
                  </span>
                </div>
              </div>
              <div class="entry-notes" v-if="entry.symptoms.notes">
                <strong>Notes:</strong> {{ entry.symptoms.notes }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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
.tracker-section {
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

.tracker-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.tracker-form, .tracker-history {
  background-color: #f8f5ff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.tracker-form h3, .tracker-history h3 {
  color: #8a2be2;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.rating-scale {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.rating-option {
  text-align: center;
}

.rating-option input {
  margin-right: 0;
}

.scale-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #777;
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
}

.checkbox-option {
  display: flex;
  align-items: center;
}

.checkbox-option input {
  margin-right: 0.5rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  width: 100%;
}

.btn-primary {
  background-color: #8a2be2;
  color: white;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.tracker-note {
  color: #777;
  font-style: italic;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.history-empty {
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  color: #777;
}

.history-entries {
  max-height: 500px;
  overflow-y: auto;
}

.entry-card {
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.entry-date {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #8a2be2;
}

.symptom-rating {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.symptom-label {
  width: 100px;
  font-weight: 600;
}

.rating-dots {
  display: flex;
  gap: 5px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #eee;
}

.dot.active {
  background-color: #8a2be2;
}

.entry-notes {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .tracker-container {
    grid-template-columns: 1fr;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .tracker-section {
    padding: 3rem 1rem;
  }
}
</style> 