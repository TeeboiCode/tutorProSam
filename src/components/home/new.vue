<template>
  <section class="events-section">
    <div class="container position-relative">
      <div class="section-header text-center">
        <h5 class="section-subtitle">Stay Connected</h5>
        <h2 class="section-title">Upcoming Events</h2>
        <p class="section-description">
          Join our workshops, webinars, and special sessions to enhance your
          learning journey
        </p>
      </div>

      <div class="carousel-container">
        <button
          class="carousel-control prev"
          @click="prevSlide"
          aria-label="Previous slide"
        >
          <i class="bi bi-chevron-left"></i>
        </button>

        <div class="events-carousel" ref="carousel">
          <div
            class="events-track"
            :style="{
              transform: `translateX(${-currentSlide * slideWidth}px)`,
            }"
          >
            <!-- Event Card 1 -->
            <div class="event-card">
              <div class="event-date">
                <div class="date-month">MAY</div>
                <div class="date-day">15</div>
              </div>
              <div class="event-details">
                <div class="event-tag">Workshop</div>
                <h3 class="event-title">Mastering SAT Mathematics</h3>
                <p class="event-description">
                  Join Dr. Sarah Williams for an intensive workshop covering key
                  strategies for solving complex SAT math problems.
                </p>
                <div class="event-meta">
                  <div class="meta-item">
                    <i class="bi bi-clock"></i>
                    <span>2:00 PM - 4:00 PM</span>
                  </div>
                  <div class="meta-item">
                    <i class="bi bi-geo-alt"></i>
                    <span>Online (Zoom)</span>
                  </div>
                  <div class="meta-item">
                    <i class="bi bi-person"></i>
                    <span>Dr. Sarah Williams</span>
                  </div>
                </div>
                <div class="event-actions">
                  <button class="btn btn-primary">Register Now</button>
                  <span class="event-availability">25 seats available</span>
                </div>
              </div>
            </div>

            <!-- Event Card 2 -->
            <div class="event-card">
              <div class="event-date">
                <div class="date-month">MAY</div>
                <div class="date-day">22</div>
              </div>
              <div class="event-details">
                <div class="event-tag">Webinar</div>
                <h3 class="event-title">
                  Essay Writing for College Applications
                </h3>
                <p class="event-description">
                  Learn essential techniques for crafting compelling college
                  application essays with Prof. Michael Johnson.
                </p>
                <div class="event-meta">
                  <div class="meta-item">
                    <i class="bi bi-clock"></i>
                    <span>5:00 PM - 6:30 PM</span>
                  </div>
                  <div class="meta-item">
                    <i class="bi bi-geo-alt"></i>
                    <span>Online (Zoom)</span>
                  </div>
                  <div class="meta-item">
                    <i class="bi bi-person"></i>
                    <span>Prof. Michael Johnson</span>
                  </div>
                </div>
                <div class="event-actions">
                  <button class="btn btn-primary">Register Now</button>
                  <span class="event-availability">18 seats available</span>
                </div>
              </div>
            </div>

            <!-- Event Card 3 -->
            <div class="event-card">
              <div class="event-date">
                <div class="date-month">JUN</div>
                <div class="date-day">05</div>
              </div>
              <div class="event-details">
                <div class="event-tag">In-Person</div>
                <h3 class="event-title">Science Fair Project Workshop</h3>
                <p class="event-description">
                  Get hands-on guidance for planning, executing, and presenting
                  your science fair project with Dr. Emily Rodriguez.
                </p>
                <div class="event-meta">
                  <div class="meta-item">
                    <i class="bi bi-clock"></i>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div class="meta-item">
                    <i class="bi bi-geo-alt"></i>
                    <span>Main Campus, Room 204</span>
                  </div>
                  <div class="meta-item">
                    <i class="bi bi-person"></i>
                    <span>Dr. Emily Rodriguez</span>
                  </div>
                </div>
                <div class="event-actions">
                  <button class="btn btn-primary">Register Now</button>
                  <span class="event-availability">12 seats available</span>
                </div>
              </div>
            </div>

            <!-- Event Card 4 (Added to have more slides) -->
            <div class="event-card">
              <div class="event-date">
                <div class="date-month">JUN</div>
                <div class="date-day">12</div>
              </div>
              <div class="event-details">
                <div class="event-tag">Workshop</div>
                <h3 class="event-title">Advanced Coding Bootcamp</h3>
                <p class="event-description">
                  Develop professional programming skills with our intensive
                  bootcamp led by industry experts.
                </p>
                <div class="event-meta">
                  <div class="meta-item">
                    <i class="bi bi-clock"></i>
                    <span>9:00 AM - 3:00 PM</span>
                  </div>
                  <div class="meta-item">
                    <i class="bi bi-geo-alt"></i>
                    <span>Tech Center, Room 101</span>
                  </div>
                  <div class="meta-item">
                    <i class="bi bi-person"></i>
                    <span>Prof. James Wilson</span>
                  </div>
                </div>
                <div class="event-actions">
                  <button class="btn btn-primary">Register Now</button>
                  <span class="event-availability">8 seats available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="carousel-control next"
          @click="nextSlide"
          aria-label="Next slide"
        >
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>

      <div class="carousel-indicators d-none d-md-flex">
        <button
          v-for="(_, index) in 4"
          :key="index"
          class="indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>

      <!-- <div class="text-center mt-5">
        <a href="#" class="btn btn-outline-purple">View All Events</a>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: "UpcomingEvents",
  data() {
    return {
      currentSlide: 0,
      slideWidth: 0,
      totalSlides: 4,
      touchStartX: 0,
      touchEndX: 0,
    };
  },
  mounted() {
    this.updateSlideWidth();
    window.addEventListener("resize", this.updateSlideWidth);

    // Add touch event listeners for mobile swiping
    const carousel = this.$refs.carousel;
    carousel.addEventListener("touchstart", this.handleTouchStart, {
      passive: true,
    });
    carousel.addEventListener("touchend", this.handleTouchEnd, {
      passive: true,
    });

    // Auto slide every 5 seconds
    this.startAutoSlide();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateSlideWidth);

    const carousel = this.$refs.carousel;
    carousel.removeEventListener("touchstart", this.handleTouchStart);
    carousel.removeEventListener("touchend", this.handleTouchEnd);

    clearInterval(this.autoSlideInterval);
  },
  methods: {
    updateSlideWidth() {
      if (this.$refs.carousel) {
        this.slideWidth = this.$refs.carousel.offsetWidth;
      }
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.resetAutoSlide();
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.resetAutoSlide();
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.resetAutoSlide();
    },
    handleTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
    },
    handleTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    },
    handleSwipe() {
      const threshold = 50; // Minimum distance required for swipe
      const touchDiff = this.touchStartX - this.touchEndX;

      if (touchDiff > threshold) {
        // Swiped left, go to next slide
        this.nextSlide();
      } else if (touchDiff < -threshold) {
        // Swiped right, go to previous slide
        this.prevSlide();
      }
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    resetAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide();
    },
  },
};
</script>

<style scoped>
.events-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--background-light);
  overflow: hidden;
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

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  margin: var(--spacing-lg) 0 calc(var(--spacing-lg) + 30px) 0;
}

.events-carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.events-track {
  display: flex;
  transition: transform 0.5s ease;
}

.event-card {
  min-width: 100%;
  display: flex;
  background-color: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
  height: 100%;
}

.event-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.event-date {
  min-width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  color: white;
  padding: var(--spacing-md);
  position: relative;
}

.event-date::after {
  content: "";
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid var(--deep-purple);
}

.date-month {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
}

.date-day {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.event-details {
  flex: 1;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
}

.event-tag {
  display: inline-block;
  background-color: var(--light-purple);
  color: var(--royal-purple);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 50px;
  margin-bottom: 8px;
}

.event-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.event-description {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
  font-size: 0.95rem;
  line-height: 1.5;
}

.event-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.meta-item i {
  color: var(--royal-purple);
  font-size: 1rem;
}

.event-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.event-availability {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-style: italic;
}

.carousel-control {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--royal-purple);
  color: white;
  border: none;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
  z-index: 10;
  transition: var(--transition-normal);
  box-shadow: var(--shadow-md);
}

.carousel-control:hover {
  background-color: var(--deep-purple);
  transform: scale(1.1);
}

.carousel-control i {
  font-size: 1.2rem;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: var(--spacing-md);
  position: absolute;
  bottom: 60px;
  left: 0;
  right: 0;
  z-index: 20;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--light-purple);
  border: none;
  cursor: pointer;
  transition: var(--transition-normal);
  padding: 0;
  opacity: 0.6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.indicator.active {
  background-color: var(--royal-purple);
  transform: scale(1.2);
  opacity: 1;
}

.mt-5 {
  margin-top: 3rem;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .event-card {
    flex-direction: column;
  }

  .event-date {
    min-width: 100%;
    flex-direction: row;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
  }

  .event-date::after {
    display: none;
  }

  .section-title {
    font-size: 2rem;
  }

  .carousel-control {
    width: 36px;
    height: 36px;
    margin: 0 5px;
  }
}

@media (max-width: 576px) {
  .event-meta {
    flex-direction: column;
    gap: 8px;
  }

  .event-actions {
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: flex-start;
  }

  .event-availability {
    margin-top: 5px;
  }

  .carousel-control {
    width: 32px;
    height: 32px;
  }

  .carousel-control i {
    font-size: 1rem;
  }
}
</style>
