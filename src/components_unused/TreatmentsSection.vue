<template>
  <section id="treatments" class="treatments-section">
    <div class="container">
      <h2>Lupus Treatments</h2>
      <p class="section-intro">
        While there is no cure for lupus, various treatments can help control symptoms and reduce flares. Treatment plans are personalized based on your specific symptoms, severity, and other health factors.
      </p>
      
      <div class="treatments-container">
        <div class="treatment-category">
          <h3>Medications</h3>
          <div class="treatment-cards">
            <div class="treatment-card">
              <h4>Nonsteroidal Anti-inflammatory Drugs (NSAIDs)</h4>
              <p><strong>Purpose:</strong> Manage pain, swelling, and fever</p>
              <p><strong>Examples:</strong> Ibuprofen, naproxen</p>
              <div class="treatment-notes">
                <p>NSAIDs can help with mild lupus symptoms, particularly joint pain and inflammation. These medications are available over-the-counter and by prescription.</p>
                <p class="treatment-caution">May cause stomach irritation and kidney problems with long-term use.</p>
              </div>
            </div>
            
            <div class="treatment-card">
              <h4>Antimalarial Drugs</h4>
              <p><strong>Purpose:</strong> Reduce flares and skin/joint problems</p>
              <p><strong>Examples:</strong> Hydroxychloroquine, chloroquine</p>
              <div class="treatment-notes">
                <p>Antimalarial medications are one of the mainstays of lupus treatment. They can reduce skin rashes, mouth sores, joint pain, and may help prevent flares and organ damage.</p>
                <p class="treatment-caution">Regular eye exams are recommended due to rare risk of retinal damage.</p>
              </div>
            </div>
            
            <div class="treatment-card">
              <h4>Corticosteroids</h4>
              <p><strong>Purpose:</strong> Quickly reduce inflammation</p>
              <p><strong>Examples:</strong> Prednisone, methylprednisolone</p>
              <div class="treatment-notes">
                <p>Corticosteroids are powerful anti-inflammatory medications that can rapidly reduce inflammation during severe flares.</p>
                <p class="treatment-caution">Long-term use may cause significant side effects including weight gain, osteoporosis, diabetes, and increased infection risk.</p>
              </div>
            </div>
            
            <div class="treatment-card">
              <h4>Immunosuppressants</h4>
              <p><strong>Purpose:</strong> Suppress an overactive immune system</p>
              <p><strong>Examples:</strong> Azathioprine, mycophenolate, cyclophosphamide</p>
              <div class="treatment-notes">
                <p>These medications may be used when lupus affects major organs or doesn't respond to other treatments.</p>
                <p class="treatment-caution">Can increase susceptibility to infections and may have other serious side effects.</p>
              </div>
            </div>
            
            <div class="treatment-card">
              <h4>Biologics</h4>
              <p><strong>Purpose:</strong> Target specific immune system pathways</p>
              <p><strong>Examples:</strong> Belimumab, rituximab</p>
              <div class="treatment-notes">
                <p>Biologic medications are targeted therapies that affect specific parts of the immune system. Belimumab is the first medication specifically approved for lupus.</p>
                <p class="treatment-caution">May increase infection risk and cause infusion reactions.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="treatment-category">
          <h3>Treatment Approaches</h3>
          <div class="approach-container">
            <div class="approach-item">
              <div class="approach-icon">
                <font-awesome-icon icon="user-md" />
              </div>
              <div class="approach-content">
                <h4>Medical Team Approach</h4>
                <p>Lupus often requires care from multiple specialists, which may include:</p>
                <ul>
                  <li>Rheumatologist (primary lupus doctor)</li>
                  <li>Dermatologist (skin issues)</li>
                  <li>Nephrologist (kidney involvement)</li>
                  <li>Cardiologist (heart concerns)</li>
                  <li>Mental health professional</li>
                </ul>
              </div>
            </div>
            
            <div class="approach-item">
              <div class="approach-icon">
                <font-awesome-icon icon="chart-line" />
              </div>
              <div class="approach-content">
                <h4>Treatment Strategy</h4>
                <p>Typically follows these principles:</p>
                <ul>
                  <li>Prevention: Avoiding triggers and adopting healthy lifestyle</li>
                  <li>Maintenance: Ongoing treatments to prevent flares</li>
                  <li>Responsive: Adjusting treatments during flares</li>
                  <li>Monitoring: Regular check-ups and lab tests</li>
                </ul>
              </div>
            </div>
            
            <div class="approach-item">
              <div class="approach-icon">
                <font-awesome-icon icon="heartbeat" />
              </div>
              <div class="approach-content">
                <h4>Complementary Approaches</h4>
                <p>Some find benefit from these additions (discuss with your doctor):</p>
                <ul>
                  <li>Acupuncture for pain relief</li>
                  <li>Mindfulness and meditation for stress reduction</li>
                  <li>Gentle yoga for flexibility and relaxation</li>
                  <li>Massage therapy for muscle tension</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="treatments-cta">
        <h3>Discussing Treatment Options</h3>
        <p>
          It's important to have open communication with your healthcare providers about your symptoms, 
          concerns, and treatment goals. Keep track of your symptoms with our symptom tracker to help 
          guide these conversations.
        </p>
        <router-link to="/tracker" class="btn btn-primary">Use Symptom Tracker</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// Treatments component
</script>

<style scoped>
.treatments-section {
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

.treatments-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;
}

.treatment-category h3 {
  color: #8a2be2;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
  text-align: center;
}

.treatment-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.treatment-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.treatment-card:hover {
  transform: translateY(-5px);
}

.treatment-card h4 {
  color: #8a2be2;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.treatment-card p {
  margin-bottom: 0.75rem;
}

.treatment-notes {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.treatment-caution {
  color: #e74c3c;
  font-style: italic;
  font-size: 0.9rem;
}

.approach-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.approach-item {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 1rem;
  transition: transform 0.3s ease;
}

.approach-item:hover {
  transform: translateY(-5px);
}

.approach-icon {
  font-size: 2rem;
  color: #8a2be2;
  flex-shrink: 0;
}

.approach-content h4 {
  color: #8a2be2;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.approach-content ul {
  padding-left: 1.2rem;
  margin: 0.5rem 0 0;
}

.approach-content li {
  margin-bottom: 0.5rem;
}

.treatments-cta {
  background: #8a2be2;
  color: white;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 auto;
}

.treatments-cta h3 {
  margin-bottom: 1rem;
  color: white;
}

.treatments-cta p {
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: white;
  color: #8a2be2;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
  }
  
  .treatments-section {
    padding: 3rem 1rem;
  }
  
  .approach-item {
    flex-direction: column;
  }
}
</style> 