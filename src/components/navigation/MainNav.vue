<template>
  <div class="main-nav py-3">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <!-- Left: Logo -->
        <div class="logo">
          <router-link
            to="/"
            class="text-decoration-none"
            style="
              display: flex;
              justify-content: center;
              gap: 10px;
              align-items: center;
            "
          >
            <img
              src="../../assets/images/SAMCY/brand-logo.png"
              alt="Logo"
              class="img-fluid brand-logo-img"
            />
            <!-- <h1 class="h4 mb-0 text-purple">TutorPro</h1> -->
          </router-link>
        </div>

        <!-- Center: Navigation Links -->
        <div class="nav-links d-none d-lg-flex gap-4">
          <router-link to="/" class="nav-link">Home</router-link>
          <div class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" id="programsDropdown"
              >Programs
              <span
                ><img
                  width="15"
                  height="15"
                  src="https://img.icons8.com/ios-filled/15/expand-arrow--v1.png"
                  alt="expand-arrow--v1" /></span
            ></a>
            <div class="dropdown-menu">
              <div class="dropdown-item-group">
                <a href="#" class="dropdown-item">
                  WAEC
                  <span>
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/ios-filled/15/forward--v1.png"
                      alt="forward--v1"
                    />
                  </span>
                </a>
                <div
                  class="sub-dropdown-menu animate__animated animate__fadeInLeft"
                >
                  <router-link to="#" class="dropdown-item"
                    >WAEC Registration</router-link
                  >
                  <router-link to="#" class="dropdown-item"
                    >WAEC Tutorial</router-link
                  >
                  <router-link to="#" class="dropdown-item"
                    >WAEC Mock</router-link
                  >
                </div>
              </div>
              <div class="dropdown-item-group">
                <a href="#" class="dropdown-item">
                  NECO
                  <span>
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/ios-filled/15/forward--v1.png"
                      alt="forward--v1"
                    />
                  </span>
                </a>
                <div
                  class="sub-dropdown-menu animate__animated animate__fadeInLeft"
                >
                  <router-link to="#" class="dropdown-item"
                    >NECO Registration</router-link
                  >
                  <router-link to="#" class="dropdown-item"
                    >NECO Tutorial</router-link
                  >
                  <router-link to="#" class="dropdown-item"
                    >NECO Mock</router-link
                  >
                </div>
              </div>
              <div class="dropdown-item-group">
                <a href="#" class="dropdown-item">
                  JAMB
                  <span>
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/ios-filled/15/forward--v1.png"
                      alt="forward--v1"
                    />
                  </span>
                </a>
                <div
                  class="sub-dropdown-menu animate__animated animate__fadeInLeft"
                >
                  <router-link to="#" class="dropdown-item"
                    >JAMB Registration</router-link
                  >
                  <router-link to="#" class="dropdown-item"
                    >JAMB Tutorial</router-link
                  >
                  <router-link to="#" class="dropdown-item"
                    >JAMB CBT</router-link
                  >
                </div>
              </div>
              <div class="dropdown-item-group">
                <a href="#" class="dropdown-item">All Courses</a>
                <!-- <div class="sub-dropdown-menu">
                  <a href="#" class="dropdown-item">List-1</a>
                  <a href="#" class="dropdown-item">List-2</a>
                  <a href="#" class="dropdown-item">List-3</a>
                  <a href="#" class="dropdown-item">List-4</a>
                  <a href="#" class="dropdown-item">List-5</a>
                </div> -->
              </div>
            </div>
          </div>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
        </div>

        <!-- Right: Auth Buttons -->
        <div class="auth-buttons d-none d-lg-flex gap-3">
          <router-link to="/register" class="btn btn-primary"
            >Sign Up</router-link
          >
          <router-link to="/login" class="btn btn-outline-purple"
            >Login</router-link
          >
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="btn btn-link d-lg-none p-0 menu-btn"
          @click="toggleMobileMenu"
          type="button"
        >
          <i class="bi bi-list" style="font-size: 2rem"></i>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="mobile-menu d-lg-none">
        <div class="mobile-menu-header">
          <button class="btn close-btn" @click="toggleMobileMenu">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        <div class="d-flex flex-column gap-2">
          <router-link to="/" class="nav-link">Home</router-link>
          <div class="dropdown d-block">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              @click.prevent="toggleProgramsMenu"
              >Programs</a
            >
            <div v-if="isProgramsMenuOpen" class="dropdown-menu show">
              <a href="#" class="dropdown-item">WAEC </a>
              <a href="#" class="dropdown-item">NECO</a>
              <a href="#" class="dropdown-item">JAMB</a>
              <a href="#" class="dropdown-item">All Courses</a>
            </div>
          </div>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
          <div class="d-flex gap-2 mt-2">
            <router-link to="/register" class="btn btn-primary w-50"
              >Sign Up</router-link
            >
            <router-link to="/login" class="btn btn-outline-purple w-50"
              >Login</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      isMobileMenuOpen: false,
      isProgramsMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    toggleProgramsMenu() {
      this.isProgramsMenuOpen = !this.isProgramsMenuOpen;
    },
  },
};
</script>

<style scoped>
.main-nav {
  border-bottom: 1px solid var(--light-purple);
}

.brand-logo-img {
  width: 150px;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition-normal);
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: var(--transition-normal);
  display: none;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--royal-purple);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.mobile-menu {
  background: var(--background-white);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  max-width: 320px;
  z-index: 1050;
  overflow-y: auto;
  transform: translateX(0);
  transition: transform 0.3s ease-in-out;
  animation: slideInRight 0.3s forwards;
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.mobile-menu-header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.close-btn {
  color: var(--deep-purple);
  font-size: 1.5rem;
  padding: 0;
}

.menu-btn {
  color: var(--deep-purple);
  font-size: 2rem;
}

/* Dropdown styling */
.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: white;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: 8px 0;
  z-index: 1000;
  display: none;
}

.dropdown:hover > .dropdown-menu {
  display: block;
}

.dropdown-item-group {
  position: relative;
}

.dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  color: var(--text-primary);
  text-decoration: none;
  transition: var(--transition-normal);
}

.dropdown-item:hover {
  background-color: rgba(var(--purple-rgb), 0.1);
  color: var(--royal-purple);
}

.sub-dropdown-menu {
  position: absolute;
  top: 0;
  left: 100%;
  background: white;
  min-width: 180px;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  padding: 8px 0;
  display: none;
  z-index: 1001;
}

.dropdown-item-group:hover .sub-dropdown-menu {
  display: block;
}

/* Mobile dropdown */
.mobile-menu .dropdown-menu.show {
  position: static;
  display: block;
  box-shadow: none;
  padding-left: 16px;
}

.mobile-menu .dropdown-item {
  padding: 8px 0;
}

@media (min-width: 768px) {
  .brand-logo-img {
    width: 208px;
  }
}
</style>
