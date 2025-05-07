<template>
  <section class="program-section">
    <div class="container">
      <!-- Header Div - with program title and explore button -->
      <div class="program-header py-3">
        <div class="program-header-left">
          <h5 class="section-subtitle">Our Programs</h5>
          <h2 class="section-title">Explore our educational programs</h2>
          <p class="section-description mb-5">
            Comprehensive learning pathways designed to help students excel
          </p>
        </div>
        <!-- <div class="program-header-right">
          <button class="btn btn-outline-purple">Explore All</button>
        </div> -->
      </div>

      <!-- Cards Container Div -->

      <div
        class="program-cards row justify-content-center align-items-center gap-4"
      >
        <!-- Program Card 1 -->

        <div
          class="program-card col-11 col-md-5 col-lg-3"
          v-for="card in cardsContent"
          :key="card.id"
        >
          <div class="program-image">
            <div class="placeholder-image" :class="card.imageClass"></div>
          </div>
          <div class="program-content">
            <div
              class="program-tags-rating my-2 d-flex justify-content-between align-items-center gap-2"
            >
              <span class="tag t-r">
                <i class="fa-solid fa-circle"></i>
                {{ card.tag }}
              </span>
              <div class="tutor-rating t-r">
                <i class="bi bi-star-fill"></i>
                <span>{{ card.rating }}</span>
              </div>
            </div>
            <h3 class="program-title">{{ card.title }}</h3>

            <div
              class="program-stats d-flex justify-content-between align-items-center mb-2"
            >
              <div class="stat-item">
                <i class="bi bi-book"></i>
                <span>{{ card.subjects }}</span>
              </div>
              <div class="stat-item">
                <i class="bi bi-calendar-week"></i>
                <span>{{ card.duration }}</span>
              </div>
            </div>

            <div class="program-footer-container">
              <div
                class="program-footer d-flex justify-content-between align-items-center pt-3 border-top"
              >
                <div class="program-brand">
                  <img
                    src="../assets/images/Logo-full.png"
                    alt="Logo"
                    class="program-logo"
                  />
                  <span>by TutorPro</span>
                </div>
                <div class="program-btn-container">
                  <button class="btn btn-primary enroll-btn">Enrol Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Program",
  data() {
    return {
      cardsContent: [
        {
          id: 1,
          title: "WAEC Tutorial",
          subjects: "9 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: "waec-bg",
          tag: "WAEC",
          rating: "4.5",
        },
        {
          id: 2,
          title: "JAMB Tutorial",
          subjects: "4 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: "jamb-bg",
          tag: "JAMB",
          rating: "4.5",
        },
        {
          id: 3,
          title: "NECO Tutorial",
          subjects: "9 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: "neco-bg",
          tag: "NECO",
          rating: "4.5",
        },
        {
          id: 4,
          title: "Extra Lesson",
          subjects: "3 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: "ex-bg",
          tag: "Lesson",
          rating: "4.5",
        },
        {
          id: 5,
          title: "GCE Tutorial",
          subjects: "9 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: "gce-bg",
          tag: "GCE",
          rating: "4.5",
        },

        {
          id: 6,
          title: "POST-UTME Tutorial",
          subjects: "3 Subjects",
          duration: "6 Weeks",
          brand: "TutorPro",
          logo: "../assets/images/Logo-full.png",
          imageClass: "pg-bg",
          tag: "POST-UTME",
          rating: "4.5",
        },
      ],
    };
  },
};
</script>

<style scoped>
.program-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--background-light);
}

/* .program-section .container {
  max-width: 1000px;
  width: 100%;
} */

.section-subtitle {
  color: var(--accent-orange);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-xs);
}

.section-title {
  font-size: 1.7rem;
  /* margin-bottom: var(--spacing-sm); */
  color: var(--text-primary);
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.4;
  font-weight: 400;
}

.section-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 0;
}

/* .program-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: var(--spacing-lg);
} */

.program-card {
  background-color: var(--background-white);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  /* display: flex; */
  transition: var(--transition-normal);
  padding: var(--spacing-sm);
}

.program-card:hover {
  /* transform: translateY(-5px); */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.program-content {
  flex: 1;
  padding: var(--spacing-xs);
  display: flex;
  flex-direction: column;
  position: relative;
}

.program-title {
  font-size: 1.275rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
  text-align: start;
}

.program-stats {
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
}

.stat-item i {
  color: var(--royal-purple);
  font-size: 1.2rem;
}

.program-brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.program-logo {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.program-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: var(--transition-normal);
}

.jamb-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("../assets/images/SAMCY/Ex-img-c.webp") center/cover no-repeat;
}

.waec-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("../assets/images/SAMCY/w-img.webp") center/cover no-repeat;
}

.neco-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("../assets/images/SAMCY/n-img-c.webp") center/cover no-repeat;
}

.gce-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("../assets/images/SAMCY/Gce-img-c.webp") center/cover no-repeat;
}

.pg-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("../assets/images/SAMCY/pu-img-c.webp") center/cover no-repeat;
}

.ex-bg {
  background: linear-gradient(rgba(107, 70, 193, 0.2), rgba(85, 60, 154, 0.3)),
    url("../assets/images/SAMCY/Ex-img-c.webp") center/cover no-repeat;
}

.program-card:hover .placeholder-image {
  transform: scale(1.05);
}

.enroll-btn {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

.t-r {
  padding: 1px 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.tag {
  color: var(--royal-purple);
  background: var(--soft-purple);
}

.tag .fa-circle {
  font: 0.5rem;
}

.tutor-rating {
  background: var(--gradient-primary);
  border: none;
  color: var(--soft-purple);
}

.tutor-rating .bi-star-fill {
  color: #fbcd0e;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .program-header {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .program-header-right {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  /* .program-cards {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  } */
}

@media (max-width: 768px) {
  .program-card {
    flex-direction: column-reverse;
    height: auto;
  }

  .program-image {
    width: 100%;
    height: 200px;
  }

  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
}
</style>
