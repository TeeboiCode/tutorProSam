<template>
  <div class="tutors-page">
    <div class="container">
      <h1 class="page-title mt-4 mb-4">Our Expert Tutors</h1>
      <p class="page-description mb-4">
        Browse our selection of highly qualified tutors specializing in various
        subjects. Find the perfect match for your learning needs and academic
        goals.
      </p>

      <!-- This would be expanded with filters, search, etc. in a real application -->
      <div class="tutors-list">
        <router-link
          v-for="tutor in tutors"
          :key="tutor.id"
          :to="`/tutors/${tutor.id}`"
          class="tutor-card"
        >
          <div
            class="tutor-avatar"
            :style="{ backgroundImage: `url(${tutor.profileImage})` }"
          ></div>
          <div class="tutor-info">
            <h3 class="tutor-name">{{ tutor.name }}</h3>
            <p class="tutor-subjects">{{ tutor.subjects.join(", ") }}</p>
            <div class="tutor-stats">
              <div class="stat-item">
                <i class="bi bi-mortarboard-fill"></i>
                <span>{{ tutor.education }}</span>
              </div>
              <div class="stat-item">
                <i class="bi bi-star-fill"></i>
                <span
                  >{{ tutor.rating }} ({{ tutor.reviewCount }} reviews)</span
                >
              </div>
            </div>
            <p class="tutor-price">${{ tutor.hourlyRate }}/hour</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tutors",
  data() {
    return {
      tutors: [
        {
          id: 1,
          name: "Dr. Sarah Williams",
          profileImage:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
          subjects: ["Mathematics", "Physics", "Calculus"],
          education: "PhD in Mathematics",
          rating: 4.9,
          reviewCount: 127,
          hourlyRate: 45,
        },
        {
          id: 2,
          name: "Dr. James Chen",
          profileImage:
            "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974",
          subjects: ["Computer Science", "Programming"],
          education: "PhD in Computer Science",
          rating: 5.0,
          reviewCount: 98,
          hourlyRate: 50,
        },
        {
          id: 3,
          name: "Prof. Michael Johnson",
          profileImage:
            "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034",
          subjects: ["English Literature", "Writing"],
          education: "MA in English Literature",
          rating: 4.8,
          reviewCount: 115,
          hourlyRate: 40,
        },
        {
          id: 4,
          name: "Dr. Emily Rodriguez",
          profileImage:
            "https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?q=80&w=2070",
          subjects: ["Chemistry", "Biology"],
          education: "PhD in Biochemistry",
          rating: 4.7,
          reviewCount: 89,
          hourlyRate: 45,
        },
        {
          id: 5,
          name: "Prof. David Thompson",
          profileImage:
            "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080",
          subjects: ["History", "Social Studies"],
          education: "PhD in History",
          rating: 4.6,
          reviewCount: 72,
          hourlyRate: 40,
        },
        {
          id: 6,
          name: "Lisa Anderson",
          profileImage:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2187",
          subjects: ["Spanish", "French", "ESL"],
          education: "MA in Linguistics",
          rating: 4.8,
          reviewCount: 103,
          hourlyRate: 35,
        },
      ],
    };
  },
};
</script>

<style scoped>
.tutors-page {
  padding: var(--spacing-lg) 0 var(--spacing-xl);
}

.page-title {
  color: var(--text-primary);
  font-weight: 700;
}

.page-description {
  color: var(--text-secondary);
  max-width: 800px;
}

.tutors-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
}

.tutor-card {
  display: flex;
  background-color: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  text-decoration: none;
  color: inherit;
}

.tutor-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.tutor-avatar {
  width: 120px;
  height: 160px;
  background-size: cover;
  background-position: center;
}

.tutor-info {
  flex: 1;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
}

.tutor-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--text-primary);
}

.tutor-subjects {
  color: var(--royal-purple);
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
}

.tutor-stats {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: var(--spacing-sm);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.stat-item i {
  color: var(--royal-purple);
}

.stat-item i.bi-star-fill {
  color: #ffd700;
}

.tutor-price {
  margin-top: auto;
  font-weight: 700;
  color: var(--text-primary);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .tutors-list {
    grid-template-columns: 1fr;
  }

  .tutor-card {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .tutor-avatar {
    width: 100px;
    height: 140px;
  }

  .tutor-name {
    font-size: 1.1rem;
  }

  .tutor-subjects {
    font-size: 0.85rem;
  }

  .stat-item {
    font-size: 0.8rem;
  }
}
</style>
