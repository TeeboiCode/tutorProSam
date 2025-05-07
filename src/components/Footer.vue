<template>
  <footer class="footer">
    <div class="footer-top py-5">
      <div class="container">
        <div class="row g-4">
          <!-- About Section -->
          <div class="col-lg-4 col-md-6">
            <div class="footer-widget">
              <h3 class="footer-title">About TutorPro</h3>
              <p class="footer-description">
                At SAMCY Educational Consult, we offer tailored, high-quality
                tutorials to help students excel academically, build confidence,
                and prepare for exams like JAMB, WAEC, and NECO.
              </p>
              <div class="social-links mt-3">
                <a href="#" class="social-link">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="bi bi-twitter"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="bi bi-instagram"></i>
                </a>
                <a href="#" class="social-link">
                  <i class="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-lg-2 col-md-6">
            <div class="footer-widget">
              <h3 class="footer-title">Quick Links</h3>
              <ul class="footer-links">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/programs">Programs</router-link></li>
                <li><router-link to="/about">About Us</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
                <li><router-link to="/faq">FAQ</router-link></li>
              </ul>
            </div>
          </div>

          <!-- Programs -->
          <div class="col-lg-2 col-md-6">
            <div class="footer-widget">
              <h3 class="footer-title">Programs</h3>
              <ul class="footer-links">
                <li>
                  <router-link to="/programs/math">WAEC</router-link>
                </li>
                <li>
                  <router-link to="/programs/science">JAMB</router-link>
                </li>
                <li>
                  <router-link to="/programs/english">NECO</router-link>
                </li>
                <li>
                  <router-link to="/programs/history">GCE</router-link>
                </li>
                <li>
                  <router-link to="/programs/computer">
                    EXTRA LESSON</router-link
                  >
                </li>
                <li>
                  <router-link to="/programs/computer">POST-UTME</router-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-4 col-md-6">
            <div class="footer-widget">
              <h3 class="footer-title">Contact Us</h3>
              <ul class="contact-info">
                <li>
                  <i class="bi bi-geo-alt"></i>
                  <span
                    >2, Awoyelu Street, Jogbo off Ibadan Garage Ijebu-Ode, Ogun
                    State, Nigeria</span
                  >
                </li>
                <li>
                  <i class="bi bi-telephone"></i>
                  <span>+234 708 893 2240, +234 816 230 0241</span>
                </li>
                <li>
                  <i class="bi bi-envelope"></i>
                  <span>info@samcy.com</span>
                </li>
                <li>
                  <i class="bi bi-clock"></i>
                  <span>Mon - Fri: 10:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter -->
    <div class="newsletter-section py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h3 class="newsletter-title">Subscribe to Our Newsletter</h3>
            <p class="newsletter-description">
              Stay updated with the latest news, offers, and educational
              resources.
            </p>
          </div>
          <div class="col-lg-6">
            <form class="newsletter-form">
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email address"
                  required
                />
                <button class="btn btn-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="copyright py-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">
              &copy; {{ currentYear }} Samcy. All rights reserved.
            </p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <ul class="footer-bottom-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  background-color: var(--background-dark);
  color: var(--text-light);
  text-align: start;
}

.footer-top {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: var(--gradient-primary);
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: var(--transition-normal);
}

.social-link:hover {
  background: var(--gradient-primary);
  color: white;
  transform: translateY(-3px);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: var(--transition-normal);
  display: inline-block;
}

.footer-links a:hover {
  color: white;
  transform: translateX(5px);
}

.contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-info li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.contact-info i {
  margin-right: 1rem;
  color: var(--royal-purple);
  font-size: 1.25rem;
}

.newsletter-section {
  background: rgba(255, 255, 255, 0.05);
}

.newsletter-title {
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.newsletter-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0;
}

.newsletter-form .form-control {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
}

.newsletter-form .form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-form .btn {
  border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
  padding: 0.75rem 1.5rem;
}

.copyright {
  background: rgba(0, 0, 0, 0.2);
}

.footer-bottom-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.875rem;
  transition: var(--transition-normal);
}

.footer-bottom-links a:hover {
  color: white;
}

@media (max-width: 768px) {
  .footer-widget {
    margin-bottom: 2rem;
  }

  .newsletter-form {
    margin-top: 1.5rem;
  }

  .footer-bottom-links {
    justify-content: center;
    margin-top: 1rem;
  }
}
</style>
