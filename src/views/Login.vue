<template>
  <div class="login-container py-5">
    <div class="login-card">
      <!-- Left Panel (Visual Branding Area) - Hidden on mobile -->
      <div class="login-image-panel d-none d-md-block">
        <!-- <div class="pattern-overlay"></div> -->
      </div>

      <!-- Right Panel (Login Form Section) -->
      <div class="login-form-panel">
        <div class="form-container">
          <div class="text-center mb-4">
            <div class="icon-circle mb-3">
              <i class="bi bi-person-circle"></i>
            </div>
            <h2 class="text-purple mb-2">Welcome Back</h2>
            <p class="text-muted">Sign in to continue your learning journey</p>
          </div>

          <form @submit.prevent="handleSubmit" class="fade-in">
            <div class="mb-4">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  required
                  placeholder="Email address"
                />
              </div>
            </div>

            <div class="mb-4">
              <div class="input-group">
                <span class="input-group-text">
                  <i class="bi bi-person-badge"></i>
                </span>
                <select class="form-select" v-model="role" required>
                  <option value="" disabled selected>Select your role</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  <option value="tutor">Tutor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div class="mb-4">
              <div class="d-flex justify-content-end align-items-center mb-2">
                <a href="#" class="text-purple small">Forgot password?</a>
              </div>
              <div class="input-group">
                <span class="input-group-text">
                  <i class="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  required
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="mb-4">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="remember" />
                <label class="form-check-label" for="remember">
                  Remember me
                </label>
              </div>
            </div>

            <div class="d-grid mb-4">
              <button type="submit" class="btn btn-primary" :disabled="loading">
                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                {{ loading ? "Signing in..." : "Sign In" }}
              </button>
            </div>

            <div class="text-center">
              <p class="mb-0">
                Don't have an account?
                <router-link to="/signup" class="text-purple"
                  >Sign Up</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      role: "",
      loading: false,
    };
  },
  methods: {
    async handleSubmit() {
      this.loading = true;
      try {
        // TODO: Implement login logic
        console.log("Login attempt with:", {
          email: this.email,
          password: this.password,
          role: this.role,
        });
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-md);
  background-color: var(--soft-purple);
}

.login-card {
  width: 90%;
  max-width: 1000px;
  min-height: 600px;
  display: flex;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  background-color: var(--background-white);
}

.login-image-panel {
  flex: 2;
  background-image: url("/src/assets/images/qqq-min-o.png");
  background-size: cover;
  background-position: center;
  position: relative;
}

.pattern-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      45deg,
      rgba(123, 14, 117, 0.3) 25%,
      transparent 25%
    ),
    linear-gradient(-45deg, rgba(123, 14, 117, 0.3) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(123, 14, 117, 0.3) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(123, 14, 117, 0.3) 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  z-index: 1;
}

.login-form-panel {
  flex: 3;
  padding: var(--spacing-lg);
  overflow-y: auto;
  background-color: var(--background-white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  width: 100%;
  max-width: 400px;
  padding: var(--spacing-sm);
}

.icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--gradient-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.icon-circle i {
  font-size: 2rem;
  color: var(--royal-purple);
}

.input-group-text {
  background: var(--light-purple);
  border: none;
}

.input-group-text i {
  color: var(--royal-purple);
}

.form-control {
  border: 2px solid var(--light-purple);
  padding: 0.75rem 1rem;
}

.form-control:focus {
  border-color: var(--royal-purple);
  box-shadow: 0 0 0 3px var(--soft-purple);
}

.form-check-input:checked {
  background-color: var(--royal-purple);
  border-color: var(--royal-purple);
}

.fade-in {
  animation: fadeIn 0.4s ease-out forwards;
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

/* Responsive styles */
@media (max-width: 992px) {
  .login-card {
    width: 95%;
  }
}

@media (max-width: 768px) {
  .login-card {
    width: 100%;
    flex-direction: column;
  }

  .login-image-panel {
    min-height: 200px;
  }

  .login-form-panel {
    padding: var(--spacing-md);
  }
}

/* Placeholder styling */
.form-control::placeholder {
  color: var(--text-muted);
  opacity: 0.7;
}

.form-control:focus::placeholder {
  opacity: 0.5;
}
</style>
