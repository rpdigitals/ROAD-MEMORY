<script src="../script/resto-details.js"></script>

<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Restaurant</a></li>
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
        <div class="col-lg-8" id="single_tour_desc">
          <div id="single_tour_feat">
            <ul>
              <li>
                <i class="icon_set_3_restaurant-1"></i>{{ category.name }}
              </li>
              <li v-if="caracteristics.animals">
                <i class="icon_set_1_icon-22"></i>Animaux de compagnie
              </li>
              <li v-if="caracteristics.parking">
                <i class="icon_set_1_icon-27"></i>Parking
              </li>
              <li v-if="!caracteristics.smoking_area">
                <i class="icon_set_1_icon-47"></i>Cigarettes interdits
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
              data-text-original="Voir sur GMap"
              >Voir sur map</a
            >
          </p>
          <!-- Map button for tablets/mobiles -->

          <div class="row">
            <div class="col-lg-3">
              <h3>Description</h3>
            </div>
            <div class="col-lg-9">
              <h4>{{ resto.name }}</h4>
              <p>
                {{ resto.description }}
              </p>
              <h4>Caractéristiques et facilités</h4>

              <div class="row">
                <div class="col-md-6">
                  <ul class="list_ok">
                    <li v-if="caracteristics.parking">Parking</li>
                    <li v-if="caracteristics.plasma_tv">Cigarette autorisée</li>
                    <li v-if="caracteristics.animals">
                      Animaux de compagnies autorisés
                    </li>
                    <li v-if="caracteristics.wifi">Wifi gratuit disponible</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul style="list-style-type: none">
                    <li v-if="!caracteristics.parking">Pas de Parking</li>
                    <li v-if="!caracteristics.wifi">Pas de Wifi</li>
                    <li v-if="!caracteristics.smoking_area">
                      Cigarettes non autorisés
                    </li>
                    <li v-if="!caracteristics.animals">
                      Animaux de compagnie non autorisés
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
              <h3>Heures d'ouvertures</h3>
            </div>
            <div class="col-lg-9">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th colspan="2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lundi</td>
                      <td>
                        {{ openDaysHours.monSt }} -
                        {{ openDaysHours.monEn }}
                      </td>
                    </tr>

                    <tr>
                      <td>Mardi</td>
                      <td>
                        {{ openDaysHours.tueSt }} -
                        {{ openDaysHours.tueEn }}
                      </td>
                    </tr>
                    <tr>
                      <td>Mercredi</td>
                      <td>
                        {{ openDaysHours.wedSt }} -
                        {{ openDaysHours.wedEn }}
                      </td>
                    </tr>
                    <tr>
                      <td>Jeudi</td>
                      <td>
                        {{ openDaysHours.monSt }} -
                        {{ openDaysHours.monEn }}
                      </td>
                    </tr>
                    <tr>
                      <td>Vendredi</td>
                      <td>
                        {{ openDaysHours.monSt }} -
                        {{ openDaysHours.monEn }}
                      </td>
                    </tr>
                    <tr>
                      <td>Samedi</td>
                      <td>
                        {{ openDaysHours.monSt }} -
                        {{ openDaysHours.monEn }}
                      </td>
                    </tr>
                    <tr>
                      <td>Dimanche</td>
                      <td>
                        {{ openDaysHours.monSt }} -
                        {{ openDaysHours.monEn }}
                      </td>
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
              <div id="score_detail">
                <span>{{ resto.note }}</span> {{ reviews.length }}
                <i v-if="reviews.length > 1">votes</i>
                <i v-else>vote</i>
                <small></small>
              </div>

              <hr />
              <div
                class="review_strip_single"
                v-for="review in reviews"
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

        <aside class="col-lg-4 mt-4">
          <p class="d-none d-xl-block d-lg-block">
            <a
              class="btn_map"
              data-bs-toggle="collapse"
              href="#collapseMap"
              aria-expanded="false"
              aria-controls="collapseMap"
              data-text-swap="Hide map"
              data-text-original="View on map"
              >View on map</a
            >
          </p>
          <div class="box_style_1 expose">
            <h3 class="inner">Reserver</h3>
            <div class="row">
              <div class="form-group col-md-6">
                <label><i class="icon-calendar-7"></i> date</label>
                <input
                  class="date-pick form-control"
                  type="date"
                  v-model="date"
                  placeholder="Choisir la date"
                />
              </div>
              <div class="form-group col-md-6">
                <label>Heure</label>
                <div class="">
                  <input type="time" v-model="time" class="form-control" />
                </div>
              </div>
              <div class="form-group col-md-12">
                <label>Nombre de tables</label>
                <div class="">
                  <input
                    type="number"
                    v-model="number_of_tables"
                    min="1"
                    class="form-control"
                  />
                </div>
              </div>
            </div>

            <br />

            <div v-if="hasBooked == false">
              <a
                class="btn_full"
                @click="bookResto"
                v-if="date !== '' && time !== ''"
                >Reserver</a
              >
              <a class="btn_full_outline" href="#"
                ><i class=""></i> {{ table_price }} xof</a
              >
            </div>
            <div class="alert alert-success" v-else>
              Votre demande de reservation a bien été envoyé <br />
              Une confirmation vous sera envoyé pour poursuivre le payement.
              <br />
              Merci <br />
              <router-link to="/hotel-list" class="btn btn-success"
                >Ok</router-link
              >
            </div>
            <table class="table table_summary">
              <tbody>
                <tr class="total">
                  <td>Prix Total</td>
                  <td>{{ table_price * number_of_tables }} xof</td>
                </tr>
              </tbody>

              <tbody></tbody>
            </table>
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
