<template>
  <div>
    <div class="end-float">
      <h5>Sites touristiques</h5>
      <div class="card" v-for="(tour, index) in tourBookings" :key="tour.id">
        <img
          class="card-img-top"
          src="https:mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">{{ tourServices[index].name }}</p>
        </div>
      </div>
    </div>
    <div class="end-float">
      <h5>Hotels</h5>
      <div class="card" v-for="(hotel, index) in hotelBookings" :key="hotel.id">
        <img
          class="card-img-top"
          src="https:mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            {{ hotelServices[index].name }}
          </p>
        </div>
      </div>
    </div>
    <div class="end-float">
      <h5>Resto</h5>
      <div class="card" v-for="(resto, index) in restoBookings" :key="resto.id">
        <img
          class="card-img-top"
          src="https:mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            {{ restoServices[index].name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../script/reservations-script.js"></script>
<style>
.card {
  float: left;
  width: 30%;
  margin-right: 3%;
}
.end-float {
  clear: both;
}
</style>
