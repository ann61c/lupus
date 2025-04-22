<template>
  <div class="treatments-page">
    <div class="page-header">
      <div class="container">
        <h1>Lupus Treatments</h1>
        <p>Learning about ways to treat lupus</p>
      </div>
    </div>
    
    <section id="treatments" class="treatments-section">
      <div class="container">
        <div class="treatments-container">
          <div class="treatment-category">
            <h3>Medicines</h3>
            <div class="treatment-cards">
              <div class="treatment-card">
                <h4>Pain Relievers (NSAIDs)</h4>
                <p><strong>Purpose:</strong> Help with pain, swelling, and fever</p>
                <p><strong>Examples:</strong> Ibuprofen, naproxen</p>
                <div class="treatment-notes">
                  <p>These medicines can help with mild lupus symptoms, especially joint pain and swelling. You can buy some over-the-counter or get stronger ones from your doctor.</p>
                  <p class="treatment-caution">May upset your stomach or harm your kidneys if used for a long time.</p>
                </div>
              </div>
              
              <div class="treatment-card">
                <h4>Antimalarial Drugs</h4>
                <p><strong>Purpose:</strong> Reduce flares and help with skin and joint problems</p>
                <p><strong>Examples:</strong> Hydroxychloroquine, chloroquine</p>
                <div class="treatment-notes">
                  <p>These medicines are very important for treating lupus. They can reduce skin rashes, mouth sores, joint pain, and may help prevent flares and organ damage.</p>
                  <p class="treatment-caution">You need regular eye check-ups because of a small risk of eye damage.</p>
                </div>
              </div>
              
              <div class="treatment-card">
                <h4>Steroids</h4>
                <p><strong>Purpose:</strong> Quickly reduce swelling</p>
                <p><strong>Examples:</strong> Prednisone, methylprednisolone</p>
                <div class="treatment-notes">
                  <p>Steroids are strong medicines that can quickly reduce swelling during bad flares.</p>
                  <p class="treatment-caution">Using them for a long time may cause side effects like weight gain, bone loss, diabetes, and higher risk of infections.</p>
                </div>
              </div>
              
              <div class="treatment-card">
                <h4>Immune System Suppressants</h4>
                <p><strong>Purpose:</strong> Calm down an overactive immune system</p>
                <p><strong>Examples:</strong> Azathioprine, mycophenolate, cyclophosphamide</p>
                <div class="treatment-notes">
                  <p>These medicines may be used when lupus affects major organs or doesn't get better with other treatments.</p>
                  <p class="treatment-caution">Can make it easier to get infections and may have other serious side effects.</p>
                </div>
              </div>
              
              <div class="treatment-card">
                <h4>Biologics</h4>
                <p><strong>Purpose:</strong> Target specific parts of the immune system</p>
                <p><strong>Examples:</strong> Belimumab, rituximab</p>
                <div class="treatment-notes">
                  <p>Biologic medicines work on specific parts of the immune system. Belimumab is the first medicine made just for lupus.</p>
                  <p class="treatment-caution">May increase risk of infections and cause reactions during treatment.</p>
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
                  <p>Lupus often needs care from different types of doctors, which may include:</p>
                  <ul>
                    <li>Rheumatologist (main lupus doctor)</li>
                    <li>Skin doctor (for skin issues)</li>
                    <li>Kidney doctor (for kidney problems)</li>
                    <li>Heart doctor (for heart concerns)</li>
                    <li>Mental health professional</li>
                  </ul>
                </div>
              </div>
              
              <div class="approach-item">
                <div class="approach-icon">
                  <font-awesome-icon icon="chart-line" />
                </div>
                <div class="approach-content">
                  <h4>Treatment Plan</h4>
                  <p>Usually follows these steps:</p>
                  <ul>
                    <li>Prevention: Avoiding triggers and living healthy</li>
                    <li>Maintenance: Ongoing treatments to prevent flares</li>
                    <li>Response: Changing treatments during flares</li>
                    <li>Monitoring: Regular check-ups and tests</li>
                  </ul>
                </div>
              </div>
              
              <div class="approach-item">
                <div class="approach-icon">
                  <font-awesome-icon icon="heartbeat" />
                </div>
                <div class="approach-content">
                  <h4>Complementary Approaches</h4>
                  <p>Some find these helpful (talk with your doctor first):</p>
                  <ul>
                    <li>Acupuncture for pain relief</li>
                    <li>Mindfulness and meditation to reduce stress</li>
                    <li>Gentle yoga for flexibility and relaxation</li>
                    <li>Massage for muscle tension</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="treatments-cta">
          <h3>Talking About Treatment Options</h3>
          <p>
            It's important to talk openly with your doctors about your symptoms, 
            concerns, and treatment goals. Keep track of your symptoms with our symptom tracker to help 
            guide these talks.
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