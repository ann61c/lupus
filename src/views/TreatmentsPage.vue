<template>
  <div class="treatments-page">
    <div class="page-header">
      <div class="container">
        <h1>Lupus Treatments</h1>
        <p>Understanding the available treatment options for lupus</p>
      </div>
    </div>
    
    <section id="treatments" class="treatments-section">
      <div class="container">
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
  </div>
</template>

<script setup>
// Import CSS file
import '../assets/styles/views/TreatmentsPage.css';
</script>

<style scoped>
/* Styles moved to TreatmentsPage.css */
</style> 