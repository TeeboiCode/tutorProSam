<template>
  <section class="cta-section py-5">
    <div class="container">
      <div class="cta-card">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
          <div class="shape shape-4"></div>
          <div class="shape shape-5"></div>
          <div class="shape shape-6"></div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-12 text-center text-lg-start">
            <h2 class="cta-title text-center">
              Join <span class="highlight">500+</span> successful students today
              <!-- <span class="highlight">Learning Journey?</span> -->
            </h2>
            <div class="text-center my-4 mt-lg-0">
              <router-link
                to="/register"
                class="btn btn-light btn-lg pulse-btn"
              >
                Enroll Now
                <i class="bi bi-arrow-right ms-2 btn-icon"></i>
              </router-link>
            </div>
            <p class="cta-description text-center">
              Take the first step toward academic excellence with expert tutors
              and flexible lessons.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CTASection",
  mounted() {
    // Add mouse move effect for interactive background
    const ctaSection = document.querySelector(".cta-section");
    ctaSection.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeUnmount() {
    const ctaSection = document.querySelector(".cta-section");
    ctaSection.removeEventListener("mousemove", this.handleMouseMove);
  },
  methods: {
    handleMouseMove(event) {
      const shapes = document.querySelectorAll(".shape");
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      shapes.forEach((shape, index) => {
        // Different movement speeds for each shape
        const speed = (20 * (index + 1)) / shapes.length;
        const xMove = x * speed;
        const yMove = y * speed;
        shape.style.transform = `translate(${xMove}px, ${yMove}px)`;
      });
    },
  },
};
</script>

<style scoped>
.cta-section {
  background: var(--gradient-primary);
  position: relative;
  overflow: hidden;
  perspective: 1000px;
}

.cta-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="none"/><circle cx="50" cy="50" r="1" fill="%23ffffff" opacity="0.2"/></svg>');
  opacity: 0.3;
  z-index: 0;
}

.cta-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-lg);
  position: relative;
  z-index: 1;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeIn 1s ease-out;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transform: translateY(-5px) rotateX(2deg) rotateY(2deg);
}

.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.shape {
  position: absolute;
  opacity: 0.6;
  filter: blur(2px);
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  background: rgba(255, 255, 255, 0.6);
  transition: transform 0.2s ease-out;
}

.shape-1 {
  width: 70px;
  height: 70px;
  top: 10%;
  left: 10%;
  border-radius: 50%;
  animation: float1 15s infinite;
}

.shape-2 {
  width: 40px;
  height: 40px;
  top: 20%;
  right: 15%;
  transform: rotate(45deg);
  animation: float2 25s infinite;
}

.shape-3 {
  width: 50px;
  height: 50px;
  bottom: 15%;
  right: 10%;
  border-radius: 50%;
  animation: float3 20s infinite;
}

.shape-4 {
  width: 30px;
  height: 30px;
  bottom: 30%;
  left: 15%;
  transform: rotate(45deg);
  animation: float4 18s infinite;
}

.shape-5 {
  width: 20px;
  height: 20px;
  top: 40%;
  left: 30%;
  border-radius: 50%;
  animation: float5 22s infinite;
}

.shape-6 {
  width: 25px;
  height: 25px;
  bottom: 40%;
  right: 30%;
  transform: rotate(45deg);
  animation: float6 24s infinite;
}

@keyframes float1 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, 10px);
  }
  50% {
    transform: translate(10px, 20px);
  }
  75% {
    transform: translate(-10px, 10px);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translate(0, 0) rotate(45deg);
  }
  25% {
    transform: translate(-15px, 15px) rotate(65deg);
  }
  50% {
    transform: translate(-25px, 5px) rotate(25deg);
  }
  75% {
    transform: translate(-10px, -15px) rotate(45deg);
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(-20px, -15px);
  }
  50% {
    transform: translate(-10px, -25px);
  }
  75% {
    transform: translate(15px, -10px);
  }
}

@keyframes float4 {
  0%,
  100% {
    transform: translate(0, 0) rotate(45deg);
  }
  25% {
    transform: translate(15px, -15px) rotate(65deg);
  }
  50% {
    transform: translate(25px, -5px) rotate(25deg);
  }
  75% {
    transform: translate(10px, 15px) rotate(45deg);
  }
}

@keyframes float5 {
  0%,
  100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, 15px);
  }
  50% {
    transform: translate(15px, 5px);
  }
  75% {
    transform: translate(5px, -15px);
  }
}

@keyframes float6 {
  0%,
  100% {
    transform: translate(0, 0) rotate(45deg);
  }
  25% {
    transform: translate(-10px, -10px) rotate(35deg);
  }
  50% {
    transform: translate(-15px, -5px) rotate(55deg);
  }
  75% {
    transform: translate(-5px, -15px) rotate(25deg);
  }
}

.cta-title {
  color: white;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: titleWave 5s ease-in-out infinite;
}

.highlight {
  position: relative;
  display: inline-block;
  background: linear-gradient(to right, #ffffff, #f0e6ff, #ffffff);
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradient 3s linear infinite;
}

.cta-description {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0;
  font-size: 1.1rem;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.btn-light {
  background: white;
  color: var(--royal-purple);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  transition: var(--transition-normal);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.btn-light::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: 0.6s;
}

.btn-light:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: var(--shadow-lg);
  background: white;
  color: var(--royal-purple);
}

.btn-light:hover::before {
  left: 100%;
}

.btn-light:hover .btn-icon {
  animation: bounceRight 1s infinite;
}

.pulse-btn {
  animation: pulse 2s infinite;
  background: #fbcd0e;
}

.btn-icon {
  transition: transform 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

@keyframes bounceRight {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
}

@keyframes gradient {
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
}

@keyframes titleWave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

@media (max-width: 768px) {
  .cta-card {
    padding: var(--spacing-lg);
  }

  .cta-title {
    font-size: 1.75rem;
  }

  .shape {
    opacity: 0.4;
  }
}
</style>
