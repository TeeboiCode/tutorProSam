<template>
  <div class="tutor-profile-page">
    <div class="container">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="mt-4 mb-3">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/tutors">Tutors</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ tutor.name }}
          </li>
        </ol>
      </nav>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-purple" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-else-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>

      <div v-else class="tutor-profile">
        <!-- Profile Header Section -->
        <div class="profile-header">
          <div class="profile-image-container">
            <div
              class="profile-image"
              :style="{ backgroundImage: `url(${tutor.profileImage})` }"
            ></div>
            <div class="tutor-rating">
              <i class="bi bi-star-fill"></i>
              <span>{{ tutor.rating }}</span>
              <span class="rating-count"
                >({{ tutor.reviewCount }} reviews)</span
              >
            </div>
          </div>
          <div class="profile-header-details">
            <h1 class="profile-name">{{ tutor.name }}</h1>
            <p class="profile-subjects">{{ tutor.subjects.join(", ") }}</p>

            <div class="profile-statistics">
              <div class="stat-item">
                <i class="bi bi-mortarboard-fill"></i>
                <span>{{ tutor.education }}</span>
              </div>
              <div class="stat-item">
                <i class="bi bi-clock"></i>
                <span>{{ tutor.experience }}</span>
              </div>
              <div class="stat-item">
                <i class="bi bi-people-fill"></i>
                <span>{{ tutor.studentsTaught }}+ Students Taught</span>
              </div>
              <div class="stat-item">
                <i class="bi bi-translate"></i>
                <span>{{ tutor.languages.join(", ") }}</span>
              </div>
            </div>

            <div class="profile-actions">
              <span class="profile-price">${{ tutor.hourlyRate }}/hr</span>
              <button class="btn btn-primary">Book a Session</button>
              <button class="btn btn-outline-purple ms-2">
                <i class="bi bi-chat-left-text"></i> Message
              </button>
            </div>
          </div>
        </div>

        <!-- Profile Content Tabs -->
        <div class="profile-content">
          <ul class="nav nav-tabs" id="tutorProfileTabs" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="about-tab"
                data-bs-toggle="tab"
                data-bs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="true"
              >
                About
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="experience-tab"
                data-bs-toggle="tab"
                data-bs-target="#experience"
                type="button"
                role="tab"
                aria-controls="experience"
                aria-selected="false"
              >
                Experience & Education
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="subjects-tab"
                data-bs-toggle="tab"
                data-bs-target="#subjects"
                type="button"
                role="tab"
                aria-controls="subjects"
                aria-selected="false"
              >
                Subjects
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="reviews-tab"
                data-bs-toggle="tab"
                data-bs-target="#reviews"
                type="button"
                role="tab"
                aria-controls="reviews"
                aria-selected="false"
              >
                Reviews ({{ tutor.reviewCount }})
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="availability-tab"
                data-bs-toggle="tab"
                data-bs-target="#availability"
                type="button"
                role="tab"
                aria-controls="availability"
                aria-selected="false"
              >
                Availability
              </button>
            </li>
          </ul>

          <div class="tab-content" id="tutorProfileTabContent">
            <!-- About Tab -->
            <div
              class="tab-pane fade show active"
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <h3>About {{ tutor.name }}</h3>
              <p>{{ tutor.bio }}</p>

              <h4>Teaching Style</h4>
              <p>{{ tutor.teachingStyle }}</p>

              <h4>Areas of Expertise</h4>
              <ul class="expertise-list">
                <li v-for="(expertise, index) in tutor.expertise" :key="index">
                  {{ expertise }}
                </li>
              </ul>
            </div>

            <!-- Experience Tab -->
            <div
              class="tab-pane fade"
              id="experience"
              role="tabpanel"
              aria-labelledby="experience-tab"
            >
              <h3>Education</h3>
              <div class="timeline">
                <div
                  v-for="(education, index) in tutor.educationHistory"
                  :key="'edu-' + index"
                  class="timeline-item"
                >
                  <div class="timeline-marker">
                    <i class="bi bi-mortarboard-fill"></i>
                  </div>
                  <div class="timeline-content">
                    <h4>{{ education.degree }}</h4>
                    <p class="timeline-institution">
                      {{ education.institution }}
                    </p>
                    <p class="timeline-date">{{ education.year }}</p>
                    <p v-if="education.description">
                      {{ education.description }}
                    </p>
                  </div>
                </div>
              </div>

              <h3 class="mt-5">Work Experience</h3>
              <div class="timeline">
                <div
                  v-for="(work, index) in tutor.workExperience"
                  :key="'work-' + index"
                  class="timeline-item"
                >
                  <div class="timeline-marker">
                    <i class="bi bi-briefcase-fill"></i>
                  </div>
                  <div class="timeline-content">
                    <h4>{{ work.position }}</h4>
                    <p class="timeline-institution">{{ work.company }}</p>
                    <p class="timeline-date">{{ work.period }}</p>
                    <p>{{ work.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Subjects Tab -->
            <div
              class="tab-pane fade"
              id="subjects"
              role="tabpanel"
              aria-labelledby="subjects-tab"
            >
              <h3>Subjects Taught</h3>
              <div class="subjects-grid">
                <div
                  v-for="(subject, index) in tutor.subjectDetails"
                  :key="index"
                  class="subject-card"
                >
                  <div class="subject-icon">
                    <i :class="'bi bi-' + subject.icon"></i>
                  </div>
                  <div class="subject-details">
                    <h4>{{ subject.name }}</h4>
                    <p>
                      Proficiency:
                      <span class="badge bg-purple">{{ subject.level }}</span>
                    </p>
                    <p>{{ subject.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Reviews Tab -->
            <div
              class="tab-pane fade"
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <div class="reviews-header">
                <h3>Student Reviews</h3>
                <div class="overall-rating">
                  <div class="rating-number">{{ tutor.rating }}/5</div>
                  <div class="rating-stars">
                    <i
                      class="bi bi-star-fill"
                      v-for="i in Math.floor(tutor.rating)"
                      :key="'star-' + i"
                    ></i>
                    <i
                      class="bi bi-star-half"
                      v-if="tutor.rating % 1 >= 0.5"
                    ></i>
                    <i
                      class="bi bi-star"
                      v-for="i in Math.floor(5 - tutor.rating)"
                      :key="'empty-' + i"
                    ></i>
                  </div>
                  <div class="rating-count">
                    {{ tutor.reviewCount }} reviews
                  </div>
                </div>
              </div>

              <div class="reviews-list">
                <div
                  v-for="(review, index) in tutor.reviews"
                  :key="index"
                  class="review-card"
                >
                  <div class="review-header">
                    <div
                      class="reviewer-avatar"
                      :style="{
                        backgroundImage: `url(${review.studentAvatar})`,
                      }"
                    ></div>
                    <div class="reviewer-details">
                      <h5>{{ review.studentName }}</h5>
                      <div class="review-rating">
                        <i
                          class="bi bi-star-fill"
                          v-for="i in review.rating"
                          :key="'rev-star-' + i"
                        ></i>
                        <i
                          class="bi bi-star"
                          v-for="i in 5 - review.rating"
                          :key="'rev-empty-' + i"
                        ></i>
                      </div>
                      <p class="review-date">{{ review.date }}</p>
                    </div>
                  </div>
                  <div class="review-content">
                    <p>{{ review.comment }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Availability Tab -->
            <div
              class="tab-pane fade"
              id="availability"
              role="tabpanel"
              aria-labelledby="availability-tab"
            >
              <h3>Weekly Availability</h3>
              <div class="availability-grid">
                <div
                  v-for="(day, index) in tutor.availability"
                  :key="index"
                  class="availability-day"
                >
                  <h4>{{ day.day }}</h4>
                  <div v-if="day.available" class="available-slots">
                    <div
                      v-for="(slot, i) in day.slots"
                      :key="i"
                      class="time-slot"
                    >
                      {{ slot }}
                    </div>
                  </div>
                  <div v-else class="unavailable">Not Available</div>
                </div>
              </div>

              <div class="booking-cta mt-4 text-center">
                <p>See a time that works for you? Book a session now!</p>
                <button class="btn btn-primary">Book a Session</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Similar Tutors Section -->
        <div class="similar-tutors-section">
          <h3>Similar Tutors</h3>
          <div class="similar-tutors-grid">
            <div
              v-for="(similarTutor, index) in similarTutors"
              :key="index"
              class="similar-tutor-card"
            >
              <div
                class="similar-tutor-avatar"
                :style="{
                  backgroundImage: `url(${similarTutor.profileImage})`,
                }"
              ></div>
              <div class="similar-tutor-info">
                <h4>{{ similarTutor.name }}</h4>
                <p>{{ similarTutor.subjects.join(", ") }}</p>
                <div class="similar-tutor-rating">
                  <i class="bi bi-star-fill"></i>
                  <span>{{ similarTutor.rating }}</span>
                </div>
              </div>
              <router-link
                :to="`/tutors/${similarTutor.id}`"
                class="btn btn-sm btn-outline-purple"
                >View Profile</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorProfile",
  data() {
    return {
      loading: false,
      error: null,
      tutor: {
        id: 1,
        name: "Dr. Sarah Williams",
        profileImage:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976",
        subjects: ["Mathematics", "Physics", "Calculus"],
        rating: 4.9,
        reviewCount: 127,
        education: "PhD in Mathematics",
        experience: "5+ Years Experience",
        studentsTaught: 145,
        languages: ["English", "Spanish"],
        hourlyRate: 45,
        bio: "I am a passionate mathematics and physics educator with over 5 years of experience teaching students at all levels. I received my PhD in Mathematics from MIT and have since dedicated my career to helping students understand complex mathematical and physical concepts in intuitive ways. My teaching philosophy revolves around building strong foundations and cultivating critical thinking skills.",
        teachingStyle:
          "I believe in an interactive approach to teaching, using real-world examples to illustrate abstract concepts. I tailor my teaching methods to each student's learning style and pace, ensuring they not only understand the material but also develop problem-solving skills that extend beyond the classroom.",
        expertise: [
          "Advanced Calculus and Analysis",
          "Linear Algebra",
          "Differential Equations",
          "Quantum Mechanics",
          "Statistical Mechanics",
          "AP Physics and Mathematics",
        ],
        educationHistory: [
          {
            degree: "PhD in Mathematics",
            institution: "Massachusetts Institute of Technology",
            year: "2015 - 2019",
            description:
              "Thesis on Topological Quantum Field Theory and Applications",
          },
          {
            degree: "MSc in Theoretical Physics",
            institution: "Stanford University",
            year: "2013 - 2015",
          },
          {
            degree: "BSc in Mathematics and Physics",
            institution: "University of California, Berkeley",
            year: "2009 - 2013",
            description: "Graduated summa cum laude",
          },
        ],
        workExperience: [
          {
            position: "Senior Mathematics Tutor",
            company: "Academic Excellence Center",
            period: "2020 - Present",
            description:
              "Provide one-on-one tutoring for university students in advanced mathematics courses. Develop customized learning plans and materials.",
          },
          {
            position: "Physics Instructor",
            company: "National Science Foundation Summer Program",
            period: "2018 - 2020",
            description:
              "Taught physics to gifted high school students in an intensive summer program. Designed and led laboratory experiments.",
          },
          {
            position: "Teaching Assistant",
            company: "Massachusetts Institute of Technology",
            period: "2015 - 2019",
            description:
              "Assisted professors in undergraduate mathematics courses. Led discussion sections and graded assignments.",
          },
        ],
        subjectDetails: [
          {
            name: "Advanced Calculus",
            icon: "graph-up",
            level: "Expert",
            description:
              "Covers differential and integral calculus, multivariable calculus, and applications.",
          },
          {
            name: "Linear Algebra",
            icon: "columns-gap",
            level: "Expert",
            description:
              "Vector spaces, linear transformations, matrices, and their applications.",
          },
          {
            name: "Quantum Physics",
            icon: "atom",
            level: "Advanced",
            description:
              "Principles of quantum mechanics and their mathematical foundations.",
          },
          {
            name: "Differential Equations",
            icon: "calculator",
            level: "Expert",
            description:
              "Ordinary and partial differential equations and their applications in science and engineering.",
          },
        ],
        reviews: [
          {
            studentName: "Alex Johnson",
            studentAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            date: "March 15, 2023",
            comment:
              "Dr. Williams is an exceptional tutor. She helped me understand complex calculus concepts that I had been struggling with for months. Her explanations are clear and she's very patient.",
          },
          {
            studentName: "Jessica Chen",
            studentAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            date: "February 22, 2023",
            comment:
              "I was failing my physics class before I started working with Dr. Williams. Her approach to teaching made the material much more accessible and I ended up getting an A in the course. Highly recommend!",
          },
          {
            studentName: "Michael Lee",
            studentAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
            rating: 4,
            date: "January 10, 2023",
            comment:
              "Dr. Williams is very knowledgeable and provides great examples to illustrate difficult concepts. She's also very responsive to questions outside of our scheduled sessions.",
          },
        ],
        availability: [
          {
            day: "Monday",
            available: true,
            slots: ["9:00 AM - 12:00 PM", "4:00 PM - 8:00 PM"],
          },
          {
            day: "Tuesday",
            available: true,
            slots: ["10:00 AM - 2:00 PM", "5:00 PM - 7:00 PM"],
          },
          {
            day: "Wednesday",
            available: true,
            slots: ["9:00 AM - 1:00 PM", "3:00 PM - 8:00 PM"],
          },
          {
            day: "Thursday",
            available: true,
            slots: ["10:00 AM - 2:00 PM", "5:00 PM - 7:00 PM"],
          },
          {
            day: "Friday",
            available: true,
            slots: ["9:00 AM - 12:00 PM", "4:00 PM - 6:00 PM"],
          },
          {
            day: "Saturday",
            available: true,
            slots: ["10:00 AM - 4:00 PM"],
          },
          {
            day: "Sunday",
            available: false,
            slots: [],
          },
        ],
      },
      similarTutors: [
        {
          id: 2,
          name: "Dr. James Chen",
          profileImage:
            "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974",
          subjects: ["Computer Science", "Programming"],
          rating: 5.0,
        },
        {
          id: 3,
          name: "Prof. Michael Johnson",
          profileImage:
            "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034",
          subjects: ["English Literature", "Writing"],
          rating: 4.8,
        },
        {
          id: 4,
          name: "Dr. Emily Rodriguez",
          profileImage:
            "https://images.unsplash.com/photo-1581992652564-44c42f5ad3ad?q=80&w=2070",
          subjects: ["Chemistry", "Biology"],
          rating: 4.7,
        },
      ],
    };
  },
  mounted() {
    // In a real application, you would fetch the tutor data based on the ID in the route
    // this.fetchTutorData(this.$route.params.id);
    document.title = `${this.tutor.name} - Tutor Profile | TutorHub`;
  },
  methods: {
    fetchTutorData(tutorId) {
      this.loading = true;
      this.error = null;

      // Example of how you would fetch data in a real application
      /*
      axios.get(`/api/tutors/${tutorId}`)
        .then(response => {
          this.tutor = response.data;
          document.title = `${this.tutor.name} - Tutor Profile | TutorHub`;
        })
        .catch(error => {
          this.error = "Failed to load tutor data. Please try again later.";
          console.error("Error fetching tutor data:", error);
        })
        .finally(() => {
          this.loading = false;
        });
      */

      // Simulating API call with timeout
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
.tutor-profile-page {
  padding: var(--spacing-lg) 0 var(--spacing-xl);
}

.breadcrumb-item a {
  color: var(--royal-purple);
  text-decoration: none;
}

.breadcrumb-item.active {
  color: var(--text-secondary);
}

.text-purple {
  color: var(--royal-purple);
}

.bg-purple {
  background-color: var(--royal-purple);
  color: white;
}

/* Profile Header */
.profile-header {
  display: flex;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-lg);
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
}

.profile-image-container {
  position: relative;
  flex-shrink: 0;
}

.profile-image {
  width: 240px;
  height: 240px;
  border-radius: var(--border-radius-lg);
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-sm);
}

.tutor-rating {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: var(--gradient-primary);
  color: white;
  padding: 8px 12px;
  border-radius: var(--border-radius-sm);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

.tutor-rating i {
  color: #ffd700;
}

.rating-count {
  font-size: 0.85rem;
  opacity: 0.9;
}

.profile-header-details {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.profile-name {
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.profile-subjects {
  color: var(--royal-purple);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: var(--spacing-md);
}

.profile-statistics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sm) var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-secondary);
}

.stat-item i {
  color: var(--royal-purple);
  font-size: 1.2rem;
}

.profile-actions {
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.profile-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-right: var(--spacing-md);
}

/* Profile Content Tabs */
.profile-content {
  margin-bottom: var(--spacing-xl);
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.nav-tabs {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 var(--spacing-md);
}

.nav-tabs .nav-link {
  color: var(--text-secondary);
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  font-weight: 500;
  position: relative;
}

.nav-tabs .nav-link.active {
  color: var(--royal-purple);
  background-color: transparent;
}

.nav-tabs .nav-link.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--royal-purple);
  border-radius: 3px 3px 0 0;
}

.tab-content {
  padding: var(--spacing-lg);
}

.tab-pane h3 {
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  font-weight: 700;
}

.tab-pane h4 {
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
  font-weight: 600;
}

.expertise-list {
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-sm);
}

.expertise-list li {
  padding: 8px 12px;
  background-color: var(--light-purple);
  border-radius: var(--border-radius-sm);
  color: var(--royal-purple);
  display: flex;
  align-items: center;
  gap: 8px;
}

.expertise-list li::before {
  content: "\F26A";
  font-family: "Bootstrap Icons";
  color: var(--royal-purple);
}

/* Timeline for Education and Experience */
.timeline {
  position: relative;
  padding-left: 50px;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  left: 20px;
  height: 100%;
  width: 2px;
  background-color: var(--light-purple);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-md);
}

.timeline-marker {
  position: absolute;
  left: -50px;
  width: 40px;
  height: 40px;
  background-color: var(--light-purple);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline-marker i {
  color: var(--royal-purple);
  font-size: 1.2rem;
}

.timeline-content {
  padding: var(--spacing-md);
  background-color: var(--background-light);
  border-radius: var(--border-radius-md);
}

.timeline-content h4 {
  margin-top: 0;
  font-weight: 600;
  color: var(--text-primary);
}

.timeline-institution {
  color: var(--royal-purple);
  font-weight: 500;
  margin-bottom: 5px;
}

.timeline-date {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
}

/* Subjects Tab */
.subjects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-md);
}

.subject-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--background-light);
  border-radius: var(--border-radius-md);
}

.subject-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--light-purple);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.subject-icon i {
  color: var(--royal-purple);
  font-size: 1.5rem;
}

.subject-details h4 {
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: 600;
}

.subject-details p {
  margin-bottom: 5px;
}

.badge {
  font-weight: 500;
}

/* Reviews Tab */
.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.overall-rating {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.rating-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.rating-stars {
  color: #ffd700;
  font-size: 1.2rem;
}

.reviews-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.review-card {
  padding: var(--spacing-md);
  background-color: var(--background-light);
  border-radius: var(--border-radius-md);
}

.review-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
}

.reviewer-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
}

.reviewer-details h5 {
  margin: 0;
  font-weight: 600;
}

.review-rating {
  color: #ffd700;
  margin: 5px 0;
}

.review-date {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0;
}

.review-content p {
  margin: 0;
}

/* Availability Tab */
.availability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: var(--spacing-md);
}

.availability-day {
  padding: var(--spacing-md);
  background-color: var(--background-light);
  border-radius: var(--border-radius-md);
}

.availability-day h4 {
  margin-top: 0;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 8px;
  margin-bottom: var(--spacing-sm);
}

.available-slots {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.time-slot {
  padding: 8px;
  background-color: var(--light-purple);
  color: var(--royal-purple);
  border-radius: var(--border-radius-sm);
  text-align: center;
  font-weight: 500;
}

.unavailable {
  padding: var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: var(--border-radius-sm);
  text-align: center;
  color: var(--text-muted);
}

/* Similar Tutors Section */
.similar-tutors-section {
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
}

.similar-tutors-section h3 {
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
  font-weight: 700;
}

.similar-tutors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.similar-tutor-card {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background-color: var(--background-light);
  border-radius: var(--border-radius-md);
  transition: var(--transition-normal);
}

.similar-tutor-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
}

.similar-tutor-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}

.similar-tutor-info {
  flex-grow: 1;
}

.similar-tutor-info h4 {
  font-size: 1rem;
  margin: 0 0 3px;
  font-weight: 600;
}

.similar-tutor-info p {
  font-size: 0.85rem;
  color: var(--royal-purple);
  margin: 0 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

.similar-tutor-rating {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 0.85rem;
}

.similar-tutor-rating i {
  color: #ffd700;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile-image {
    width: 200px;
    height: 200px;
    margin-bottom: var(--spacing-md);
  }

  .profile-statistics {
    grid-template-columns: 1fr;
    margin-bottom: var(--spacing-md);
  }

  .profile-actions {
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: center;
  }

  .profile-price {
    margin-right: 0;
    margin-bottom: var(--spacing-sm);
  }

  .subjects-grid,
  .similar-tutors-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .tab-content {
    padding: var(--spacing-md);
  }

  .nav-tabs {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0;
  }

  .nav-tabs .nav-link {
    white-space: nowrap;
    padding: var(--spacing-sm);
  }

  .expertise-list {
    grid-template-columns: 1fr;
  }

  .timeline {
    padding-left: 30px;
  }

  .timeline-marker {
    left: -30px;
    width: 30px;
    height: 30px;
  }

  .similar-tutor-info h4 {
    font-size: 0.9rem;
  }

  .similar-tutor-info p {
    max-width: 120px;
  }
}

@media (max-width: 576px) {
  .profile-image {
    width: 180px;
    height: 180px;
  }

  .profile-name {
    font-size: 1.75rem;
  }

  .profile-subjects {
    font-size: 1rem;
  }

  .reviews-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }

  .availability-grid {
    grid-template-columns: 1fr;
  }
}
</style>
