<template>
  <section id="resources" class="resources-section">
    <div class="container">
      <h2>Resources</h2>
      <p class="section-intro">
        Find helpful resources for living well with lupus, including organizations, support groups, and educational materials.
      </p>
      
      <div class="resources-grid">
        <div class="resource-category">
          <h3>Organizations</h3>
          <div class="resources-list">
            <div class="resource-item">
              <h4>Lupus Foundation of America</h4>
              <p>National nonprofit organization dedicated to improving the quality of life for people with lupus through research, education, support, and advocacy.</p>
              <a href="https://www.lupus.org/" target="_blank" class="resource-link">Visit Website</a>
            </div>
            
            <div class="resource-item">
              <h4>Lupus Research Alliance</h4>
              <p>The world's largest private funder of lupus research, focused on finding better treatments and ultimately preventing and curing systemic lupus.</p>
              <a href="https://www.lupusresearch.org/" target="_blank" class="resource-link">Visit Website</a>
            </div>
            
            <div class="resource-item">
              <h4>Lupus Canada</h4>
              <p>Organization working to improve the lives of Canadians living with lupus through research, advocacy, public awareness, and education.</p>
              <a href="https://www.lupuscanada.org/" target="_blank" class="resource-link">Visit Website</a>
            </div>
          </div>
        </div>
        
        <div class="resource-category">
          <h3>Support Services</h3>
          <div class="resources-list">
            <div class="resource-item">
              <h4>Local Support Groups</h4>
              <p>Connect with others living with lupus in your area. Share experiences and strategies for managing the condition.</p>
              <a href="#" class="resource-link">Find Support Groups</a>
            </div>
            
            <div class="resource-item">
              <h4>LupusConnect Online Community</h4>
              <p>Join our digital community of people affected by lupus to share experiences, ask questions, and find support.</p>
              <a href="#" class="resource-link">Join Community</a>
            </div>
            
            <div class="resource-item">
              <h4>Health Educator Program</h4>
              <p>Speak directly with trained health educators who can provide information and resources about living with lupus.</p>
              <a href="#" class="resource-link">Contact an Educator</a>
            </div>
          </div>
        </div>
        
        <div class="resource-category">
          <h3>Educational Materials</h3>
          <div class="resources-list">
            <div class="resource-item">
              <h4>Lupus and Pregnancy Guide</h4>
              <p>Comprehensive information about planning for pregnancy, managing lupus during pregnancy, and postpartum care.</p>
              <a href="#" class="resource-link">Download PDF</a>
            </div>
            
            <div class="resource-item">
              <h4>Nutrition Guide for Lupus</h4>
              <p>Dietary guidelines and meal planning suggestions to help manage lupus symptoms and promote overall health.</p>
              <a href="#" class="resource-link">Download PDF</a>
            </div>
            
            <div class="resource-item">
              <h4>Coping with Lupus Fatigue</h4>
              <p>Practical strategies and tips for managing one of the most common and challenging symptoms of lupus.</p>
              <a href="#" class="resource-link">Download PDF</a>
            </div>
          </div>
        </div>
        
        <div class="resource-category">
          <h3>Financial Resources</h3>
          <div class="resources-list">
            <div class="resource-item">
              <h4>Medication Assistance Programs</h4>
              <p>Information about programs that can help cover the cost of lupus medications for those who qualify.</p>
              <a href="#" class="resource-link">Learn More</a>
            </div>
            
            <div class="resource-item">
              <h4>Disability Benefits Guide</h4>
              <p>Resources for understanding and applying for disability benefits for those with severe lupus.</p>
              <a href="#" class="resource-link">Learn More</a>
            </div>
            
            <div class="resource-item">
              <h4>Insurance Navigation Support</h4>
              <p>Guidance on navigating health insurance to ensure you receive the coverage you need for lupus care.</p>
              <a href="#" class="resource-link">Get Assistance</a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="multilingual-resources">
        <h3>Multilingual Resources</h3>
        <p>Access lupus information in multiple languages:</p>
        <div class="language-buttons">
          <button class="language-btn active">English</button>
          <button class="language-btn">Español</button>
          <button class="language-btn">中文</button>
          <button class="language-btn">Français</button>
          <button class="language-btn">Português</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Resources component
</script>

<style scoped>
.resources-section {
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

.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.resource-category h3 {
  color: #8a2be2;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #f0e6ff;
  padding-bottom: 0.5rem;
}

.resources-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.resource-item {
  background: #f8f5ff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.resource-item:hover {
  transform: translateY(-5px);
}

.resource-item h4 {
  color: #8a2be2;
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.resource-item p {
  margin-bottom: 1rem;
}

.resource-link {
  display: inline-block;
  color: #8a2be2;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
}

.resource-link:hover {
  text-decoration: underline;
}

.multilingual-resources {
  background: #f8f5ff;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.multilingual-resources h3 {
  color: #8a2be2;
  margin-bottom: 1rem;
}

.language-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.language-btn {
  background: white;
  border: 2px solid #ddd;
  color: #555;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.language-btn:hover {
  border-color: #8a2be2;
  color: #8a2be2;
}

.language-btn.active {
  background: #8a2be2;
  color: white;
  border-color: #8a2be2;
}

@media (max-width: 768px) {
  .resources-grid {
    grid-template-columns: 1fr;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  .resources-section {
    padding: 3rem 1rem;
  }
}
</style> 