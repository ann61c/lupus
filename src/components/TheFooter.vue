<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-section">
          <h3>LupusConnect</h3>
          <p>Empowering women living with lupus through accessible, culturally sensitive, and medically accurate health information.</p>
        </div>
        
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Lupus</router-link></li>
            <li><router-link to="/symptoms">Symptoms</router-link></li>
            <li><router-link to="/treatments">Treatments</router-link></li>
            <li><router-link to="/lifestyle">Lifestyle</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Resources</h3>
          <ul class="footer-links">
            <li><router-link to="/community">Community Voices</router-link></li>
            <li><router-link to="/tracker">Symptom Tracker</router-link></li>
            <li><router-link to="/faq">FAQ</router-link></li>
            <li><router-link to="/resources">Resources</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Languages</h3>
          <div class="language-options">
            <button class="language-btn active">English</button>
            <button class="language-btn">Español</button>
            <button class="language-btn">中文</button>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} LupusConnect. All rights reserved.</p>
        <p class="disclaimer">This website is for informational purposes only and does not provide medical advice. Consult with healthcare professionals for personal medical concerns.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>

<style scoped>
.site-footer {
  background-color: #8a2be2;
  color: white;
  padding: 3rem 1rem 1.5rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-links {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: white;
  text-decoration: underline;
}

.language-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.language-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.language-btn.active {
  background: white;
  color: #8a2be2;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.disclaimer {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .site-footer {
    padding: 2rem 1rem 1rem;
  }
}
</style> 