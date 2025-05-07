<template>
  <div class="profile-photo-upload">
    <div class="photo-preview" :style="photoPreviewStyle">
      <div class="camera-icon" v-if="!modelValue">
        <i class="bi bi-camera"></i>
      </div>
    </div>
    <input
      type="file"
      id="profilePhoto"
      class="d-none"
      accept="image/*"
      @change="handlePhotoUpload"
    />
    <button
      type="button"
      class="btn btn-sm btn-outline-purple mt-2"
      @click="triggerPhotoUpload"
    >
      Upload Photo
    </button>
  </div>
</template>

<script>
export default {
  name: "ProfilePhotoUpload",
  props: {
    modelValue: {
      type: String,
      default: null,
    },
  },
  computed: {
    photoPreviewStyle() {
      return this.modelValue
        ? { backgroundImage: `url(${this.modelValue})` }
        : {};
    },
  },
  methods: {
    triggerPhotoUpload() {
      document.getElementById("profilePhoto").click();
    },
    handlePhotoUpload(e) {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.match("image.*")) {
        alert("Please select an image file");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        this.$emit("update:modelValue", e.target.result);
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
/* Profile photo upload styles */
.profile-photo-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo-preview {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px dashed var(--royal-purple);
  background-color: var(--light-lavender);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
  cursor: pointer;
}

.camera-icon {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.camera-icon i {
  font-size: 2rem;
  color: var(--royal-purple);
}
</style>
