<script src="../script/tour-details.js"></script>

<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Sites touristiques</a></li>
          <li><a href="#">details</a></li>
          <li>Page active</li>
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
        <div class="col-lg-8" id="single_tour_desc">
          <div id="single_tour_feat">
            <ul>
              <li><i class="icon_set_1_icon-4"></i> {{ category.type }}</li>
              <li>
                <i class="icon_set_1_icon-83"></i>{{ tour.visit_hour }} Heures
              </li>
             
              <li v-if="tour.animals">
                <i class="icon_set_1_icon-22"></i>Autorisé
              </li>
              <li v-else><i class="icon_set_1_icon-22"></i>Non autorisé</li>
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
              >Voir sur Gmaps</a
            >
          </p>

          <hr />
          <div class="mt-4">
            <div class="row">
              <div class="col-md-12">
                <div id="mdb-lightbox-ui"></div>

                <div class="mdb-lightbox no-margin">
                  <div class="row">
                    <figure class="col-md-4">
                      <a
                        class="black-text"
                        href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(121).webp"
                        data-size="1600x1067"
                      >
                        <img
                          alt="picture"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
                          class="img-fluid"
                        />
                        <h3 class="text-center my-3">Photo title</h3>
                      </a>
                    </figure>

                    <figure class="col-md-4">
                      <a
                        class="black-text"
                        href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(96).webp"
                        data-size="1600x1067"
                      >
                        <img
                          alt="picture"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(96).webp"
                          class="img-fluid"
                        />
                        <h3 class="text-center my-3">Photo title</h3>
                      </a>
                    </figure>

                    <figure class="col-md-4">
                      <a
                        class="black-text"
                        href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(104).webp"
                        data-size="1600x1067"
                      >
                        <img
                          alt="picture"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(104).webp"
                          class="img-fluid"
                        />
                        <h3 class="text-center my-3">Photo title</h3>
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3">
              <h3>Description</h3>
              <router-link to="/images" class="btn_1 add_bottom_30"
                >Voir les images</router-link
              >
            </div>
            <div class="col-lg-9">
              <h4>{{ tour.name }}</h4>
              <p>{{ tour.description }}</p>

              <div class="row">
                <div class="col-md-6">
                  <ul class="list_ok">
                    <li v-if="caracteristic.animals">
                      Animaux de compagnie autorisé
                    </li>
                    <li v-if="caracteristic.children">
                      Viste enfants accompagné gratuite
                    </li>
                    <li v-if="caracteristic.dinner">
                      Dinner offert à l'arrivée
                    </li>
                    <li v-if="caracteristic.tour_guide">Guide touristique</li>
                  </ul>
                  <ul style="list-style-type: none">
                    <li v-if="!caracteristic.animals">
                      Animaux de compagnie non autorisé
                    </li>
                    <li v-if="!caracteristic.children">
                      Viste gratuite pour les enfants accompagnés
                    </li>
                    <li v-if="!caracteristic.dinner">
                      Pas de dinner offert à l'arrivée
                    </li>
                    <li v-if="!caracteristic.tour_guide">
                      Pas de guide touristique
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End row  -->
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-lg-3">
              <h3>Horaires</h3>
            </div>
            <div class="col-lg-9">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th colspan="2">1st March to 31st October</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lundi</td>
                      <td>10.00 - 17.30</td>
                    </tr>
                    <tr>
                      <td>Mardi</td>
                      <td>09.00 - 17.30</td>
                    </tr>
                    <tr>
                      <td>Mercredi</td>
                      <td>09.00 - 17.30</td>
                    </tr>
                    <tr>
                      <td>Jeudi</td>
                      <td>
                        <span class="label label-danger">Closed</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Vendredi</td>
                      <td>09.00 - 17.30</td>
                    </tr>
                    <tr>
                      <td>Samedi</td>
                      <td>09.00 - 17.30</td>
                    </tr>
                    <tr>
                      <td>Dimanche</td>
                      <td>10.00 - 17.30</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
              <div id="general_rating">{{ tour.numberOfReviews }} Avis</div>

              <hr />
              <div
                class="review_strip_single"
                v-for="review in tour.review"
                :key="review.id"
              >
                <img
                  src="/img/avatar1.jpg"
                  alt="Image"
                  class="rounded-circle"
                />
                <!-- <small> - {{ formatDate(review.created_at) }} -</small> -->
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

        <aside class="col-lg-4">
          <p class="d-none d-xl-block d-lg-block">
            <a
              class="btn_map"
              data-bs-toggle="collapse"
              href="#collapseMap"
              aria-expanded="false"
              aria-controls="collapseMap"
              data-text-swap="Hide map"
              data-text-original="View on map"
              >Voir sur GMaps</a
            >
          </p>
          <div class="box_style_1 expose">
            <h3 class="inner">- Reserver -</h3>
            <div class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <label><i class="icon-calendar-7"></i> Date</label>
                  <input
                    class="date-pick form-control"
                    type="date"
                    v-model="date"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label><i class="icon-clock"></i> Heure</label>
                  <input
                    class="time-pick form-control"
                    type="time"
                    v-model="time"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label>Nombres d'adultes</label>
                  <div class="">
                    <input
                      type="number"
                      class="form-control"
                      min="1"
                      v-model="numberOfPerson"
                    />
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label>Enfants</label>
                  <div class="">
                    <input
                      type="number"
                      class="form-control"
                      min="0"
                      v-model="numberOfChildren"
                    />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <table class="table table_summary">
              <tbody>
                <tr>
                  <td>Nombres d'adultes</td>
                  <td class="text-end">{{ numberOfPerson }}</td>
                </tr>
                <tr>
                  <td>Nombres d'enfants</td>
                  <td class="text-end">{{ numberOfChildren }}</td>
                </tr>

                <tr>
                  <td>Prix</td>
                  <td class="text-end">
                    {{ tour.price }}
                  </td>
                </tr>
                <tr class="total">
                  <td>Prix Total</td>
                  <td class="text-end" v-if="caracteristic.children">
                    {{ numberOfPerson * tour.price }}
                  </td>
                  <td class="text-end" v-else>
                    {{ (numberOfPerson + numberOfChildren) * tour.price }}
                  </td>
                </tr>
              </tbody>
            </table>
            <router-link
              to="/book-tour"
              class="btn_full"
              v-if="numberOfPerson > 0 && time !== '' && date !== ''"
              @click="bookingInfo"
              >Reserver</router-link
            >
            <div v-if="isLogged">
              <a
                v-if="hasWished"
                class="btn_full_outline"
                href="javascript:void(0)"
                ><i class="icon-heart"></i>
              </a>
              <a
                v-else
                class="btn_full_outline"
                href="javascript:void(0)"
                @click="createTourWishList(tour.id)"
                ><i class="icon-heart"></i> Ajouter aux favoris</a
              >
            </div>
          </div>
          <!--/box_style_1 -->
        </aside>
      </div>
      <!--End row -->
    </div>
    <!--End container -->

    <div id="overlay"></div>
    <!-- Mask on input focus -->
  </main>
</template>
