<template>
  <section class="featured-tutors-section">
    <div class="container">
      <div class="section-header text-center">
        <h5 class="section-subtitle">Expert Educators</h5>
        <h2 class="section-title">Meet Our Featured Tutors</h2>
        <p class="section-description">
          Learn from the best in their field with years of teaching experience
        </p>
      </div>

      <div class="tutors-container">
        <!-- Tutor Card 1 -->
        <div class="tutor-card">
          <div class="tutor-image">
            <div class="tutor-avatar tutor-bg-1"></div>
            <div class="tutor-rating">
              <i class="bi bi-star-fill"></i>
              <span>4.9</span>
            </div>
          </div>
          <div class="tutor-info">
            <h3 class="tutor-name">Dr. Sarah Williams</h3>
            <p class="tutor-subjects">Mathematics & Physics</p>
            <div class="tutor-details">
              <div class="tutor-detail">
                <i class="bi bi-mortarboard-fill"></i>
                <span>PhD in Mathematics</span>
              </div>
              <div class="tutor-detail">
                <i class="bi bi-clock"></i>
                <span>5+ Years Experience</span>
              </div>
            </div>
            <div class="tutor-footer">
              <span class="tutor-price">$45/hr</span>
              <router-link to="/tutors/1" class="btn btn-sm btn-outline-purple"
                >View Profile</router-link
              >
            </div>
          </div>
        </div>

        <!-- Tutor Card 2 -->
        <div class="tutor-card">
          <div class="tutor-image">
            <div class="tutor-avatar tutor-bg-2"></div>
            <div class="tutor-rating">
              <i class="bi bi-star-fill"></i>
              <span>4.8</span>
            </div>
          </div>
          <div class="tutor-info">
            <h3 class="tutor-name">Prof. Michael Johnson</h3>
            <p class="tutor-subjects">English Literature & Writing</p>
            <div class="tutor-details">
              <div class="tutor-detail">
                <i class="bi bi-mortarboard-fill"></i>
                <span>MA in English Literature</span>
              </div>
              <div class="tutor-detail">
                <i class="bi bi-clock"></i>
                <span>8+ Years Experience</span>
              </div>
            </div>
            <div class="tutor-footer">
              <span class="tutor-price">$40/hr</span>
              <router-link to="/tutors/2" class="btn btn-sm btn-outline-purple"
                >View Profile</router-link
              >
            </div>
          </div>
        </div>

        <!-- Tutor Card 3 -->
        <div class="tutor-card">
          <div class="tutor-image">
            <div class="tutor-avatar tutor-bg-3"></div>
            <div class="tutor-rating">
              <i class="bi bi-star-fill"></i>
              <span>5.0</span>
            </div>
          </div>
          <div class="tutor-info">
            <h3 class="tutor-name">Dr. James Chen</h3>
            <p class="tutor-subjects">Computer Science & Programming</p>
            <div class="tutor-details">
              <div class="tutor-detail">
                <i class="bi bi-mortarboard-fill"></i>
                <span>PhD in Computer Science</span>
              </div>
              <div class="tutor-detail">
                <i class="bi bi-clock"></i>
                <span>6+ Years Experience</span>
              </div>
            </div>
            <div class="tutor-footer">
              <span class="tutor-price">$50/hr</span>
              <router-link to="/tutors/3" class="btn btn-sm btn-outline-purple"
                >View Profile</router-link
              >
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-5">
        <a href="#" class="btn btn-primary">Browse All Tutors</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeaturedTutors",
};
</script>

<style scoped>
.featured-tutors-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--background-white);
}

.section-header {
  margin-bottom: var(--spacing-xl);
}

.section-subtitle {
  color: var(--royal-purple);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-xs);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
}

.section-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.tutors-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.tutor-card {
  background-color: var(--background-white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.tutor-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.tutor-image {
  position: relative;
  height: 200px;
}

.tutor-avatar {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.tutor-bg-1 {
  background-image: url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976");
}

.tutor-bg-2 {
  background-image: url("https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034");
}

.tutor-bg-3 {
  background-image: url("https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974");
}

.tutor-bg-4 {
  background-image: url("https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?q=80&w=2070");
}

.tutor-rating {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: var(--gradient-primary);
  color: white;
  padding: 5px 10px;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

.tutor-rating i {
  color: #ffd700;
}

.tutor-info {
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.tutor-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--text-primary);
}

.tutor-subjects {
  color: var(--royal-purple);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
}

.tutor-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: var(--spacing-md);
}

.tutor-detail {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.tutor-detail i {
  color: var(--royal-purple);
}

.tutor-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.tutor-price {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.btn-sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
}

.mt-5 {
  margin-top: 3rem;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .tutors-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .tutors-container {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
}

@media (max-width: 576px) {
  .tutors-container {
    grid-template-columns: 1fr;
  }

  .tutor-card {
    max-width: 350px;
    margin: 0 auto;
  }
}
</style>
