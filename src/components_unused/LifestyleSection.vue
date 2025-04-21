<template>
  <section id="lifestyle" class="lifestyle-section">
    <div class="container">
      <h2>Lifestyle Tips for Managing Lupus</h2>
      <p class="section-intro">
        While medications are an important part of lupus treatment, lifestyle changes can help you manage symptoms and improve your quality of life.
      </p>
      
      <div class="tips-container">
        <div class="tip-card">
          <div class="tip-icon">
            <font-awesome-icon icon="sun" />
          </div>
          <h3>Sun Protection</h3>
          <ul>
            <li>Wear broad-spectrum sunscreen (SPF 30+) daily</li>
            <li>Cover up with protective clothing, wide-brimmed hats, and sunglasses</li>
            <li>Avoid direct sun exposure during peak hours (10 AM to 4 PM)</li>
          </ul>
        </div>
        
        <div class="tip-card">
          <div class="tip-icon">
            <font-awesome-icon icon="carrot" />
          </div>
          <h3>Healthy Diet</h3>
          <ul>
            <li>Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins</li>
            <li>Consider incorporating anti-inflammatory foods like fatty fish, olive oil, and turmeric</li>
            <li>Stay hydrated by drinking plenty of water throughout the day</li>
          </ul>
        </div>
        
        <div class="tip-card">
          <div class="tip-icon">
            <font-awesome-icon icon="spa" />
          </div>
          <h3>Stress Management</h3>
          <ul>
            <li>Practice relaxation techniques such as deep breathing, meditation, or yoga</li>
            <li>Consider counseling or support groups to help cope with the emotional aspects of lupus</li>
            <li>Set realistic goals and prioritize activities to avoid becoming overwhelmed</li>
          </ul>
        </div>
        
        <div class="tip-card">
          <div class="tip-icon">
            <font-awesome-icon icon="bed" />
          </div>
          <h3>Rest and Sleep</h3>
          <ul>
            <li>Aim for 7-9 hours of quality sleep each night</li>
            <li>Establish a regular sleep schedule and relaxing bedtime routine</li>
            <li>Take short rest breaks throughout the day when needed</li>
          </ul>
        </div>
        
        <div class="tip-card">
          <div class="tip-icon">
            <font-awesome-icon icon="walking" />
          </div>
          <h3>Regular Exercise</h3>
          <ul>
            <li>Engage in low-impact activities like walking, swimming, or cycling</li>
            <li>Start slowly and gradually increase duration and intensity</li>
            <li>Listen to your body and rest when needed</li>
          </ul>
        </div>
        
        <div class="tip-card">
          <div class="tip-icon">
            <font-awesome-icon icon="notes-medical" />
          </div>
          <h3>Track Symptoms</h3>
          <ul>
            <li>Keep a journal of your symptoms, triggers, and medications</li>
            <li>Note patterns that may help identify what worsens or improves your symptoms</li>
            <li>Share this information with your healthcare providers</li>
          </ul>
        </div>
      </div>
      
      <div class="lifestyle-cta">
        <h3>Create Your Personalized Plan</h3>
        <p>Use our symptom tracker to develop a customized approach to managing your lupus.</p>
        <router-link to="/tracker" class="btn btn-primary">Go to Symptom Tracker</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// Lifestyle tips component
</script>

<style scoped>
.lifestyle-section {
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

.tips-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.tip-card {
  background: #f8f5ff;
  border-radius: 10px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.tip-card:hover {
  transform: translateY(-5px);
}

.tip-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #8a2be2;
  text-align: center;
}

.tip-card h3 {
  color: #8a2be2;
  margin-bottom: 0.5rem;
}

.tip-card ul {
  padding-left: 1.2rem;
}

.tip-card li {
  margin-bottom: 0.5rem;
}

.lifestyle-cta {
  background: #8a2be2;
  color: white;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
}

.lifestyle-cta h3 {
  margin-bottom: 0.5rem;
  color: white;
}

.lifestyle-cta p {
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
  
  .lifestyle-section {
    padding: 3rem 1rem;
  }
}
</style> 