<template>
  <section class="testimonials-section position-relative">
    <!-- <div class="effect">
      <img src="../assets/images/SAMCY/eff-3.png" alt="" />
    </div> -->
    <div class="container">
      <h3 class="section-title">OUR TESTIMONIALS</h3>
      <h2 class="section-headline">What Our Students Say About Us</h2>

      <div class="testimonials-carousel">
        <div class="testimonial-images">
          <div
            v-for="(testimonial, index) in visibleTestimonials"
            :key="index"
            :class="['testimonial-image', { active: index === 1 }]"
            @click="selectTestimonial(testimonial)"
          >
            <img :src="testimonial.image" :alt="testimonial.name" />
          </div>
        </div>

        <div class="testimonial-content">
          <div class="rating">
            <span v-for="star in 5" :key="star" class="star">★</span>
          </div>
          <p class="testimonial-text">{{ currentTestimonial.text }}</p>
          <div class="student-info">
            <h4>{{ currentTestimonial.name }}</h4>
            <p>{{ currentTestimonial.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
  data() {
    return {
      currentIndex: 0,
      testimonials: [
        {
          name: "Adebowale Jasmine A.",
          role: "WAEC/GCE Tutorials",
          image: new URL("../assets/images/SAMCY/tt-1.jpeg", import.meta.url)
            .href,
          text: "Joining Samcy Educational Consult was one of the best decisions I made during my exam preparation. The lessons were engaging, and the personalized feedback helped me identify and work on my weak areas. Their constant encouragement kept me motivated. I saw a huge improvement in both my UTME and WAEC scores!",
        },
        {
          name: "rasheed ridwan a.",
          role: "JAMB Exam Preparation",
          image: new URL("../assets/images/SAMCY/tt-2.jpeg", import.meta.url)
            .href,
          text: "I used to be nervous about science subjects, especially Physics, but Samcy's teaching methods changed that completely. The practical examples and simplified explanations made everything click. I went from barely passing to getting distinctions, and now I’m ready for university with confidence.",
        },
        {
          name: "Michael Chen",
          role: "JAMB/GCE Tutorials",
          image: new URL("../assets/images/promo-image-3.jpg", import.meta.url)
            .href,
          text: "Samcy’s virtual classes were super organized. I loved how I could access class recordings, practice tests, and notes anytime I needed them. It really helped me stay on track. Plus, the support from the tutors felt very personal—it wasn’t just about teaching; they genuinely cared about my success.",
        },
        {
          name: "Emily Davis",
          role: "JAMB Exam Preparation",
          image: new URL("../assets/images/promo-image-4.jpg", import.meta.url)
            .href,
          text: "At first, I wasn't sure an online tutoring platform could work for me, but Samcy proved me wrong. The system is user-friendly, and I could attend lessons from anywhere, even when I traveled. I felt prepared and focused during my exams, and it paid off with great results. I’m so grateful!",
        },
      ],
    };
  },
  computed: {
    visibleTestimonials() {
      const testimonials = [...this.testimonials];
      const result = [];
      for (let i = -1; i <= 1; i++) {
        let index = this.currentIndex + i;
        if (index < 0) index = testimonials.length - 1;
        if (index >= testimonials.length) index = 0;
        result.push(testimonials[index]);
      }
      return result;
    },
    currentTestimonial() {
      return this.testimonials[this.currentIndex];
    },
  },
  methods: {
    selectTestimonial(testimonial) {
      const index = this.testimonials.findIndex(
        (t) => t.name === testimonial.name
      );
      if (index !== -1) {
        this.currentIndex = index;
      }
    },
    nextTestimonial() {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    },
  },
  mounted() {
    // Auto-play functionality
    setInterval(this.nextTestimonial, 5000);
  },
};
</script>

<style scoped>
.testimonials-section {
  padding: 4rem 0;
  background-color: #fff;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.section-title {
  color: #ff6b00;
  font-size: 1rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.section-headline {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 3rem;
}

.testimonials-carousel {
  position: relative;
  margin-top: 2rem;
}

.testimonial-images {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.testimonial-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.5;
}

.testimonial-image.active {
  width: 120px;
  height: 120px;
  opacity: 1;
}

.testimonial-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial-content {
  max-width: 600px;
  margin: 0 auto;
}

.rating {
  color: #ffd700;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
}

.student-info h4 {
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
}

.student-info p {
  color: #666;
  font-size: 0.9rem;
}

/* Animation classes */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.effect {
  position: absolute;
  left: -200%;
  bottom: 8%;
}
</style>
