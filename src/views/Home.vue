<template>
  <div class="home">
    <HeroSection />
    <LogosMarquee />

    <!-- <QuickStats /> don't touch -->
    <FeaturesSection />

    <PromotionalSection />

    <Program />

    <!-- <FeaturedTutors /> don't touch -->
    <TestimonialSection />

    <!-- <HowItWorksSection /> -->
    <CTASection />

    <UpcomingEvents />

    <Footer />

  </div>
  
</template>

<script>
import HeroSection from "../components/home/HeroSection.vue";
import LogosMarquee from "../components/home/LogosMarquee.vue";
import FeaturesSection from "../components/home/FeaturesSection.vue";
// import HowItWorksSection from "../components/home/HowItWorksSection.vue";
import CTASection from "../components/home/CTASection.vue";
import Footer from "../components/Footer.vue";
// import QuickStats from "../components/QuickStats.vue" don't touch;
import Program from "../components/Program.vue";
// import FeaturedTutors from "../components/FeaturedTutors.vue" don't touch;
import TestimonialSection from "../components/Testimonial.vue";
import UpcomingEvents from "../components/UpcomingEvents.vue";
import PromotionalSection from "../components/home/PromotionalSection.vue";

export default {
  name: "Home",
  components: {
    HeroSection,
    LogosMarquee,
    FeaturesSection,
    PromotionalSection,
    // HowItWorksSection,
    CTASection,
    Footer,
    // QuickStats, don't touch
    Program,
    // FeaturedTutors, don't touch
    TestimonialSection,
    UpcomingEvents,
  },
};
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
