<template>
  <div class="top-nav py-2">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <!-- Left Section -->
        <div class="d-flex gap-4">
          <div class="d-flex align-items-center">
            <i class="bi bi-telephone text-purple me-2"></i>
            <span class="text-muted">+234 708 893 2240, +234 816 230 0241</span>
          </div>
          <div class="d-flex align-items-center text-capitalize">
            <i class="bi bi-geo-alt text-purple me-2"></i>
            <span class="text-muted"
              ><span class="d-none d-lg-inline"
                >2, Awoyelu street, jogbo off</span
              >
              ibadan garage ijebu-ode, ogun state, nigeria</span
            >
          </div>
        </div>
        <!-- Right Section -->
        <div class="d-flex gap-3">
          <a href="#" class="text-muted hover-purple">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="#" class="text-muted hover-purple">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="text-muted hover-purple">
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="#" class="text-muted hover-purple">
            <i class="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style scoped>
.top-nav {
  background: #fff;
  font-size: 0.875rem;
  border-bottom: 1px solid rgb(237, 240, 247);
}

.hover-purple {
  transition: var(--transition-normal);
}

.hover-purple:hover {
  color: var(--royal-purple) !important;
}

@media (max-width: 768px) {
  .top-nav {
    display: none;
  }
}
</style>
