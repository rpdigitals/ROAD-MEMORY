<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-6">
      <edit-tour v-if="this.$route.params.site == 'tour'"> </edit-tour>
      <edit-hotel v-if="this.$route.params.site == 'hotel'"> </edit-hotel>
      <edit-resto v-if="this.$route.params.site == 'resto'"> </edit-resto>
      <edit-car v-if="this.$route.params.site == 'car'"> </edit-car>
    </div>
  </div>
</template>
<script>
import EditTour from "./EditSites/EditTour.vue";
import EditHotel from "./EditSites/EditHotel.vue";
import EditResto from "./EditSites/EditResto.vue";
import EditCar from "./EditSites/EditCar.vue";
//sessionStorage.setItem("tourToEdit", this.$route.params.site);

export default {
  components: {
    EditTour,
    EditResto,
    EditHotel,
    EditCar,
  },
};
</script>
<style></style>
