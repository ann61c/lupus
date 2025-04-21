<template>
  <section id="voices" class="voices-section">
    <div class="container">
      <h2>Community Voices</h2>
      <p class="section-intro">
        Read stories from women living with lupus who share their experiences, challenges, and strategies for living well.
      </p>
      
      <div class="stories-container">
        <div class="story-card">
          <div class="story-image">
            <img src="../assets/profile1.jpg" alt="Maria's profile" />
          </div>
          <div class="story-content">
            <h3>Maria's Journey</h3>
            <p class="story-quote">
              "Being diagnosed with lupus at 28 was scary, but connecting with others who understood what I was going through made all the difference."
            </p>
            <p class="story-preview">
              Maria shares how she navigated early diagnosis, found the right treatment plan, and built a supportive community that helped her thrive despite lupus.
            </p>
            <button class="read-more-btn">Read Maria's Story</button>
          </div>
        </div>
        
        <div class="story-card">
          <div class="story-image">
            <img src="../assets/profile2.jpg" alt="Jasmine's profile" />
          </div>
          <div class="story-content">
            <h3>Jasmine's Approach to Flares</h3>
            <p class="story-quote">
              "I've learned to recognize my body's early warning signs and take proactive steps before a major flare develops."
            </p>
            <p class="story-preview">
              After years of struggling with unpredictable flares, Jasmine developed strategies to identify triggers and manage symptoms early. She shares her personal tracking system and communication tips for healthcare visits.
            </p>
            <button class="read-more-btn">Read Jasmine's Story</button>
          </div>
        </div>
        
        <div class="story-card">
          <div class="story-image">
            <img src="../assets/profile3.jpg" alt="Lin's profile" />
          </div>
          <div class="story-content">
            <h3>Lin's Balancing Act</h3>
            <p class="story-quote">
              "I've had to redefine what success means while living with lupus, but I've found ways to pursue my career while prioritizing my health."
            </p>
            <p class="story-preview">
              As a professional with a demanding job, Lin shares how she navigates workplace accommodations, sets boundaries, and finds balance between ambition and self-care.
            </p>
            <button class="read-more-btn">Read Lin's Story</button>
          </div>
        </div>
      </div>
      
      <div class="voices-cta">
        <h3>Share Your Story</h3>
        <p>Your experience could help others navigating life with lupus. Submit your story to be featured in our Community Voices section.</p>
        <button class="btn btn-primary">Submit Your Story</button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Community Voices component
</script>

<style scoped>
.voices-section {
  padding: 5rem 1rem;
  background-color: #f0e6ff;
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

.stories-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.story-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  transition: transform 0.3s ease;
}

.story-card:hover {
  transform: translateY(-5px);
}

.story-image {
  flex: 0 0 200px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
}

.story-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-content {
  flex: 1;
  padding: 1.5rem;
}

.story-content h3 {
  color: #8a2be2;
  margin-bottom: 0.5rem;
}

.story-quote {
  font-style: italic;
  margin-bottom: 1rem;
  color: #555;
  border-left: 3px solid #8a2be2;
  padding-left: 1rem;
}

.story-preview {
  margin-bottom: 1rem;
}

.read-more-btn {
  background: transparent;
  border: none;
  color: #8a2be2;
  cursor: pointer;
  font-weight: bold;
  padding: 0;
  text-decoration: underline;
}

.voices-cta {
  background: #8a2be2;
  color: white;
  text-align: center;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  margin: 0 auto;
}

.voices-cta h3 {
  margin-bottom: 0.5rem;
  color: white;
}

.voices-cta p {
  margin-bottom: 1.5rem;
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
  
  .voices-section {
    padding: 3rem 1rem;
  }
  
  .story-card {
    flex-direction: column;
  }
  
  .story-image {
    flex: 0 0 200px;
    width: 100%;
  }
}
</style> 