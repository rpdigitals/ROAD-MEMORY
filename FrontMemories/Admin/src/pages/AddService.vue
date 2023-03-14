<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-6">
      <add-tour v-if="this.$route.params.service == 'tour'"> </add-tour>
      <add-hotel v-if="this.$route.params.service == 'hotel'"> </add-hotel>
      <add-resto v-if="this.$route.params.service == 'resto'"> </add-resto>
      <add-car v-if="this.$route.params.service == 'car'"> </add-car>
    </div>
  </div>
</template>
<script>
import AddTour from "./AddSites/AddTour.vue";
import AddHotel from "./AddSites/AddHotel.vue";
import AddResto from "./AddSites/AddResto.vue";
import AddCar from "./AddSites/AddCar.vue";
export default {
  components: {
    AddTour,
    AddResto,
    AddHotel,
    AddCar,
  },
};
</script>
<style></style>
