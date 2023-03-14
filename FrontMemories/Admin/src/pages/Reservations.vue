<template>
  <div>
    <div class="end-float">
      <h5>Sites touristiques</h5>
      <div class="card" v-for="(tour, index) in tourBookings" :key="tour.id">
        <div v-if="tour.length > 0">
          <img
            class="card-img-top"
            src="https:mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
            alt="Card image cap"
            @click="goToOneBooking()"
          />

          <div class="card-body">
            <p class="card-text">{{ tour[0].tour.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="end-float">
      <h5>Hotels</h5>
      <div class="card" v-for="(hotel, index) in hotelBookings" :key="hotel.id">
        <div v-if="hotel.length > 0" class="text-center">
          <img
            class="card-img-top"
            src="https:mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              {{ hotel[0].hotel.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="end-float">
      <h5>Resto</h5>
      <div class="card" v-for="(resto, index) in restoBookings" :key="resto.id">
        <div v-if="resto.length > 0" class="text-center">
          <img
            class="card-img-top"
            src="https:mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">
              {{ resto[0].resto.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../script/reservations-script.js"></script>
<style scoped>
.card {
  float: left;
  width: 30%;
  margin-right: 3%;
}
.end-float {
  clear: both;
}
</style>
