<script src="../script/tour-list.js"></script>
<template>
  <div class="container margin_60">
    <div class="row">
      <aside class="col-lg-3">
        <p>
          <a
            class="btn_map"
            data-bs-toggle="collapse"
            href="#collapseMap"
            aria-expanded="false"
            aria-controls="collapseMap"
            data-text-swap="Hide map"
            data-text-original="View on map"
            >Voir sur map</a
          >
        </p>

        <div class="box_style_cat">
          <ul id="cat_nav" v-for="(category, index) in categories" :key="index">
            <!-- <li>
              <a href="#" id="active"
                ><i class="icon_set_1_icon-51"></i>All tours
                <span>(141)</span></a
              >
            </li> -->

            <li>
              <a @click="tourOfCategory(category.id)"
                >{{ category.type }} <span></span
              ></a>
            </li>
          </ul>
          <ul id="cat_nav">
            <li>
              <a id="active" @click="getDatas">Tout <span></span></a>
            </li>
          </ul>
        </div>
      </aside>
      <!--End aside -->

      <!--End aside -->
      <div class="col-lg-9">
        <!--/tools -->

        <div id="tools">
          <div class="row justify-content-between">
            <div class="col-md-3 col-sm-4">
              <div class="styled-select-filters">
                <select
                  name="sort_price"
                  id="sort_price"
                  @change="sortTourByPrice"
                  v-model="sortOrder"
                >
                  <option value="" selected>Trier par prix</option>
                  <option value="lowest">Moins chèrs</option>
                  <option value="highest">Prix élevés</option>
                </select>
              </div>
            </div>

            <div class="col-md-9 col-sm-4 d-sm-block">
              <input
                type="search"
                class="form-control"
                placeholder="Rechercher par mots clés ..."
                v-model="keyword"
                @keyup="searchByKeyword"
              />
            </div>
          </div>
        </div>
        <center v-if="responseLength < 1">
          <div>Aucun resultat trouvé</div>
        </center>

        <div
          class="strip_all_tour_list wow fadeIn"
          data-wow-delay="0.1s"
          v-for="(tour, index) in tours"
          :key="index"
        >
          <div class="row">
            <div class="col-lg-4 col-md-4 position-relative">
              <div class="ribbon_3 popular">
                <span v-if="tour.subsTypeOfOwner.name == 'basic'"></span>
                <span v-if="tour.subsTypeOfOwner.name == 'medium'"
                  >Populaire</span
                >
                <span v-if="tour.subsTypeOfOwner.name == 'vip'">Plus aimé</span>
              </div>

              <div class="img_list">
                <a @click="tourDetails(tour.id)"
                  ><img src="img/tour_box_1.jpg" alt="Image"
                /></a>

                <div class="short_info">
                  {{ tour.category.type }}
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="tour_list_desc">
                <div class="rating">
                  <span
                    v-for="(n, index) in Math.round(tour.score)"
                    :key="index"
                  >
                    <i class="icon-smile voted"></i>
                  </span>
                  <span
                    v-for="(k, index) in 5 - Math.round(tour.score)"
                    :key="index"
                  >
                    <i class="icon-smile"></i>
                  </span>

                  <small v-if="tour.numberOfReviews > 1"
                    >{{ tour.score }} ({{ tour.numberOfReviews }} votes)</small
                  >
                  <small v-else
                    >{{ tour.score }} ({{ tour.numberOfReviews }} vote)</small
                  >
                </div>
                <h3>
                  <strong>{{ tour.name }}</strong>
                </h3>
                <p>{{ tour.description }}</p>
                <ul class="add_info">
                  <li>
                    <div class="tooltip_styled tooltip-effect-4">
                      <span class="tooltip-item"
                        ><i class="icon_set_1_icon-83"></i
                      ></span>
                      <div class="tooltip-content">
                        <h4>Horaires</h4>

                        <div class="">
                          <div class="days">
                            <span class="eachDay">Lundi </span>
                            <span class="eachDay">Mardi </span>
                            <span class="eachDay">Mercredi </span>
                            <span class="eachDay">Jeudi </span>
                            <span class="eachDay">Vendredi </span>
                            <span class="eachDay">Samedi </span>
                            <span class="eachDay">Dimanche </span>
                          </div>

                          <div class="hours">
                            {{ JSON.parse(tour.open_days_hours).monSt }} -
                            {{ JSON.parse(tour.open_days_hours).monEn }}<br />
                            {{ JSON.parse(tour.open_days_hours).tueSt }} -
                            {{ JSON.parse(tour.open_days_hours).tueEn }} <br />
                            {{ JSON.parse(tour.open_days_hours).wedSt }} -
                            {{ JSON.parse(tour.open_days_hours).wedEn }} <br />
                            {{ JSON.parse(tour.open_days_hours).turSt }} -
                            {{ JSON.parse(tour.open_days_hours).turEn }} <br />
                            {{ JSON.parse(tour.open_days_hours).friSt }} -
                            {{ JSON.parse(tour.open_days_hours).friEn }} <br />
                            {{ JSON.parse(tour.open_days_hours).satSt }} -
                            {{ JSON.parse(tour.open_days_hours).satEn }} <br />
                            {{ JSON.parse(tour.open_days_hours).sunSt }} -
                            {{ JSON.parse(tour.open_days_hours).sunEn }} <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="tooltip_styled tooltip-effect-4">
                      <span class="tooltip-item"
                        ><i class="icon_set_1_icon-41"></i
                      ></span>
                      <div class="tooltip-content">
                        <h4>Adresse</h4>
                        {{ tour.address }}
                        <br />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="tooltip_styled tooltip-effect-4">
                      <span class="tooltip-item"
                        ><i class="icon_set_1_icon-97"></i
                      ></span>
                      <div class="tooltip-content">
                        <h4>Langues</h4>
                        {{ tour.languages.replaceAll(",", "-") }}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-2">
              <div class="price_list">
                <div>
                  {{ tour.price }}<br />
                  <sup>xof</sup>
                  <p>
                    <a @click="tourDetails(tour.id)" class="btn_1">Details</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item active"><span class="page-link">1</span></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
        <!-- end pagination-->
      </div>
      <!-- End col lg-9 -->
    </div>
    <!-- End row -->
  </div>
  <!--End strip -->

  <!-- <div class="strip_all_tour_list wow fadeIn" data-wow-delay="0.3s">
    <div class="row">
      <div class="col-lg-4 col-md-4 position-relative">
        <div class="ribbon_3"><span>Top rated</span></div>
        <div class="wishlist">
          <a class="tooltip_flip tooltip-effect-1" href="javascript:void(0);"
            >+<span class="tooltip-content-flip"
              ><span class="tooltip-back">Add to wishlist</span></span
            ></a
          >
        </div>
        <div class="img_list">
          <a href="single_tour.html"
            ><img src="img/tour_box_3.jpg" alt="Image" />
            <div class="short_info">
              <i class="icon_set_1_icon-44"></i>Historic Buildings
            </div>
          </a>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="tour_list_desc">
          <div class="rating">
            <i class="icon-smile voted"></i><i class="icon-smile voted"></i
            ><i class="icon-smile voted"></i><i class="icon-smile voted"></i
            ><i class="icon-smile"></i><small>(75)</small>
          </div>
          <h3><strong>Versailles</strong> tour</h3>
          <p>
            Lorem ipsum dolor sit amet, quem convenire interesset ut vix, ad
            dicat sanctus detracto vis. Eos modus dolorum ex, qui adipisci
            maiestatis inciderint no, eos in elit dicat.....
          </p>
          <ul class="add_info">
            <li>
              <div class="tooltip_styled tooltip-effect-4">
                <span class="tooltip-item"
                  ><i class="icon_set_1_icon-83"></i
                ></span>
                <div class="tooltip-content">
                  <h4>Schedule</h4>
                  <strong>Monday to Friday</strong> 09.00 AM - 5.30 PM
                  <br />
                  <strong>Saturday</strong> 09.00 AM - 5.30 PM
                  <br />
                  <strong>Sunday</strong>
                  <span class="label label-danger">Closed</span>
                </div>
              </div>
            </li>
            <li>
              <div class="tooltip_styled tooltip-effect-4">
                <span class="tooltip-item"
                  ><i class="icon_set_1_icon-41"></i
                ></span>
                <div class="tooltip-content">
                  <h4>Address</h4>
                  Musée du Louvre, 75058 Paris - France
                  <br />
                </div>
              </div>
            </li>
            <li>
              <div class="tooltip_styled tooltip-effect-4">
                <span class="tooltip-item"
                  ><i class="icon_set_1_icon-97"></i
                ></span>
                <div class="tooltip-content">
                  <h4>Languages</h4>
                  English - French - Chinese - Russian - Italian
                </div>
              </div>
            </li>
            <li>
              <div class="tooltip_styled tooltip-effect-4">
                <span class="tooltip-item"
                  ><i class="icon_set_1_icon-27"></i
                ></span>
                <div class="tooltip-content">
                  <h4>Parking</h4>
                  1-3 Rue Elisée Reclus <br />
                  76 Rue du Général Leclerc <br />
                  8 Rue Caillaux 94923
                  <br />
                </div>
              </div>
            </li>
            <li>
              <div class="tooltip_styled tooltip-effect-4">
                <span class="tooltip-item"
                  ><i class="icon_set_1_icon-25"></i
                ></span>
                <div class="tooltip-content">
                  <h4>Transport</h4>
                  <strong>Metro: </strong>Musée du Louvre station (line 1)
                  <br />
                  <strong>Bus:</strong> 21, 24, 27, 39, 48, 68, 69, 72, 81, 95
                  <br />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-2 col-md-2">
        <div class="price_list">
          <div>
            <sup>$</sup>39*<span class="normal_price_list">$99</span
            ><small>*Per person</small>
            <p>
              <router-link to="/tour-details/+tour.id" class="btn_1"
                >Details</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!--End strip -->
</template>
<style scoped>
.days {
  float: left;
  margin-right: 2px;
}
@media (min-width: 480px) {
  .days {
    float: left;
    margin-left: 12px;
    margin-right: 12px;
  }
}
.hours {
  float: left;
  font-size: 12px;
}
span.eachDay {
  font-size: 12px;
  font-weight: bold;
  display: block;
}
</style>