<template>
  <div class="lifestyle-page">
    <div class="page-header">
      <div class="container">
        <h1>Lifestyle Management</h1>
        <p>Tips for managing lupus through lifestyle changes</p>
      </div>
    </div>
    
    <section id="lifestyle" class="lifestyle-section">
      <div class="container">
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
  </div>
</template>

<script setup>
// Import CSS file
import '../assets/styles/views/LifestylePage.css';
</script>

<style scoped>
/* Styles moved to LifestylePage.css */
</style> 