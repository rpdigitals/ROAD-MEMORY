<script>
import TourCategory from "../components/TourCategory.vue";
import TourList from "../components/TourList.vue";
import Header from "../components/Header.vue";
import { RouterLink, RouterView } from "vue-router";
export default {
  //name: "tour-list",
  components: { TourList, TourCategory },
};
</script>
<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">sites Touristiques</a></li>
        </ul>
      </div>
    </div>
    <!-- Position -->

    <div class="collapse" id="collapseMap">
      <div id="map" class="map"></div>
    </div>
    <!-- End Map -->

    <TourList />
    <!-- End container -->
  </main>
</template>
