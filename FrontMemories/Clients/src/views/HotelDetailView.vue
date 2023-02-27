<script src="../script/hotel-details.js"></script>
<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Hotels</a></li>
          <li><a href="#">details</a></li>
        </ul>
      </div>
    </div>
    <!-- End Position -->

    <div class="collapse" id="collapseMap">
      <div id="map" class="map"></div>
    </div>
    <!-- End Map -->

    <div class="container margin_60">
      <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-8" id="single_tour_desc">
          <div id="single_tour_feat">
            <ul>
              <li v-if="caracteristics.plasma_tv">
                <i class="icon_set_2_icon-116"></i>Plasma TV
              </li>
              <li v-if="caracteristics.wifi">
                <i class="icon_set_1_icon-86"></i>Free Wifi
              </li>
              <li v-if="caracteristics.swimming_pool">
                <i class="icon_set_2_icon-110"></i>Piscine
              </li>
              <li v-if="caracteristics.restaurant">
                <i class="icon_set_1_icon-58"></i>Restaurant
              </li>
              <li v-if="caracteristics.fitness_center">
                <i class="icon_set_2_icon-117"></i>Salle de Gym
              </li>
              <li v-if="caracteristics.parking">
                <i class="icon_set_1_icon-27"></i>Parking
              </li>
            </ul>
          </div>
          <p class="d-block d-lg-none">
            <a
              class="btn_map"
              data-bs-toggle="collapse"
              href="#collapseMap"
              aria-expanded="false"
              aria-controls="collapseMap"
              data-text-swap="Hide map"
              data-text-original="View on map"
              >Voir sur Map</a
            >
          </p>
          <hr />

          <div class="row">
            <div class="col-lg-3">
              <h3>Description</h3>
            </div>

            <div class="col-lg-9">
              <p>
                {{ hotel.description }}
              </p>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list_ok">
                    <li v-if="caracteristics.fitness_center">Salle de Gym</li>
                    <li v-if="caracteristics.parking">Parking</li>
                    <li v-if="caracteristics.plasma_tv">Ecran Plasma</li>
                    <li v-if="caracteristics.restaurant">Restaurant</li>
                    <li v-if="caracteristics.swimming_pool">Piscine</li>
                    <li v-if="caracteristics.wifi">Wifi</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul style="list-style-type: none">
                    <li v-if="!caracteristics.fitness_center">
                      Pas de salle de Gym
                    </li>
                    <li v-if="!caracteristics.parking">Pas de Parking</li>
                    <li v-if="!caracteristics.plasma_tv">Pas d'ecran Plasma</li>
                    <li v-if="!caracteristics.restaurant">Pas de Restaurant</li>
                    <li v-if="!caracteristics.swimming_pool">Pas de Piscine</li>
                    <li v-if="!caracteristics.wifi">Pas de Wifi</li>
                  </ul>
                </div>
              </div>
              <!-- End row  -->
            </div>
            <!-- End col-md-9  -->
          </div>
          <!-- End row  -->

          <hr />

          <div class="row">
            <div class="col-lg-3">
              <h3>Catégories de chambres</h3>
            </div>
            <div class="col-lg-9">
              <ul class="list-group">
                <li
                  @click="roomCategory(category.id)"
                  class="list-group-item d-flex justify-content-between align-items-center"
                  v-for="(category, index) in room_categories"
                  :key="index"
                >
                  {{ category.name }}
                  <span class="badge bg-primary rounded-pill">
                    {{ category.rooms.length }}</span
                  >
                </li>
              </ul>
            </div>
            <!-- End col-md-9  -->
          </div>
          <!-- End row  -->

          <hr />

          <div class="row">
            <div class="col-lg-3">
              <h3>Avis</h3>
              <a
                href="#"
                class="btn_1 add_bottom_30"
                data-bs-toggle="modal"
                data-bs-target="#myReview"
                >Laisser un commentaire</a
              >
            </div>
            <div class="col-lg-9">
              <div id="score_detail">
                <span>{{ note }}</span> {{ reviews.length }}
                <i v-if="reviews.length > 1">votes</i>
                <i v-else>vote</i>
                <small></small>
              </div>

              <hr />
              <div
                class="review_strip_single"
                v-for="review in hotel.reviews"
                :key="review.id"
              >
                <img
                  src="/img/avatar1.jpg"
                  alt="Image"
                  class="rounded-circle"
                />
                <small> {{ review.created_at }}</small>
                <h4>{{ review.customer.name }}</h4>
                <p>
                  {{ review.comment }}
                </p>
                <div class="rating">
                  <span
                    v-for="(n, index) in Math.round(review.rating)"
                    :key="index"
                  >
                    <i class="icon-smile voted"></i>
                  </span>
                  <span
                    v-for="(k, index) in 5 - Math.round(review.rating)"
                    :key="index"
                  >
                    <i class="icon-smile"></i>
                  </span>
                </div>
              </div>
              <!-- End review strip -->
            </div>
          </div>
        </div>
        <!--End  single_tour_desc-->
      </div>
      <!--End row -->
    </div>
    <!--End container -->

    <div id="overlay"></div>
    <!-- Mask on input focus -->
  </main>
</template>
