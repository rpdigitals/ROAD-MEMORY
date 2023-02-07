<script src="../script/hotel.js"></script>

<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">hotels</a></li>
        </ul>
      </div>
    </div>
    <!-- Position -->

    <div class="collapse" id="collapseMap">
      <div id="map" class="map"></div>
    </div>
    <!-- End Map -->

    <div class="container margin_60">
      <div class="row">
        <Help />
        <!--End aside -->

        <div class="col-lg-9">
          <div id="tools">
            <div class="row justify-content-between">
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="Rechercher par mots clés"
                  aria-label="Search"
                  @keyup="searchByKeyword"
                  v-model="keyword"
                />
              </div>
            </div>
          </div>
          <center v-if="responseLength < 1">
            <div>Aucun resultat trouvé</div>
          </center>
          <!--End tools -->

          <div
            class="strip_all_tour_list wow fadeIn"
            data-wow-delay="0.1s"
            v-for="(hotel, index) in hotels"
            :key="index"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 position-relative">
                <div class="ribbon_3 popular">
                  <span v-if="hotel.subsTypeOfOwner.name == 'basic'"></span>
                  <span v-if="hotel.subsTypeOfOwner.name == 'medium'"
                    >Populaire</span
                  >
                  <span v-if="hotel.subsTypeOfOwner.name == 'vip'"
                    >Plus aimé</span
                  >
                </div>

                <div class="img_list">
                  <a @click="hotelDetails(hotel.id)">
                    <img src="img/hotel_2.jpg" alt="Image" />
                    <div class="short_info"></div>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="tour_list_desc">
                  <div class="score">
                    note<span>{{ hotel.note }}</span>
                  </div>
                  <div class="rating">
                    <span
                      v-for="(n, index) in Math.round(hotel.note)"
                      :key="index"
                    >
                      <i class="icon-star voted"></i>
                    </span>
                    <span
                      v-for="(k, index) in 5 - Math.round(hotel.note)"
                      :key="index"
                    >
                      <i class="icon-star empty"></i>
                    </span>

                    <small v-if="hotel.numberOfReviews > 1"
                      >{{ hotel.note }} ({{
                        hotel.numberOfReviews
                      }}
                      votes)</small
                    >
                    <small v-else
                      >{{ hotel.note }} ({{
                        hotel.numberOfReviews
                      }}
                      vote)</small
                    >
                  </div>
                  <h3>
                    <strong>{{ hotel.name }}</strong>
                  </h3>
                  <p>
                    {{ hotel.description }}
                  </p>
                  <ul class="add_info">
                    <li v-if="hotel.caracteristics.wifi">
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Wifi gratuit"
                        ><i class="icon_set_1_icon-86"></i
                      ></a>
                    </li>
                    <li v-if="hotel.caracteristics.plasma_tv">
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Ecran plasma"
                        ><i class="icon_set_2_icon-116"></i
                      ></a>
                    </li>
                    <li v-if="hotel.caracteristics.swimming_pool">
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Piscine"
                        ><i class="icon_set_2_icon-110"></i
                      ></a>
                    </li>
                    <li v-if="hotel.caracteristics.fitness_center">
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Salle de Gym"
                        ><i class="icon_set_2_icon-117"></i
                      ></a>
                    </li>
                    <li v-if="hotel.caracteristics.restaurant">
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Restaurant"
                        ><i class="icon_set_1_icon-58"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-2">
                <div class="price_list">
                  <div>
                    <!-- <sup>$</sup>39*<span class="normal_price_list">$99</span
                    ><small>*From/Per night</small>-->
                    <p>
                      <a @click="hotelDetails(hotel.id)" class="btn_1"
                        >Details</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End strip -->

          <!-- <div class="strip_all_tour_list wow fadeIn" data-wow-delay="0.1s">
            <div class="row">
              <div class="col-lg-4 col-md-4 position-relative">
                <div class="ribbon_3"><span>Top rated</span></div>
                <div class="wishlist">
                  <a
                    class="tooltip_flip tooltip-effect-1"
                    href="javascript:void(0);"
                    >+<span class="tooltip-content-flip"
                      ><span class="tooltip-back">Add to wishlist</span></span
                    ></a
                  >
                </div>
                <div class="img_list">
                  <a href="single_hotel.html"
                    ><img src="img/hotel_3.jpg" alt="Image" />
                    <div class="short_info"></div>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="tour_list_desc">
                  <div class="score">Superb<span>9.0</span></div>
                  <div class="rating">
                    <i class="icon-star voted"></i
                    ><i class="icon-star voted"></i
                    ><i class="icon-star voted"></i
                    ><i class="icon-star voted"></i
                    ><i class="icon-star voted"></i>
                  </div>
                  <h3><strong>Lumiere</strong> Hotel</h3>
                  <p>
                    Lorem ipsum dolor sit amet, quem convenire interesset ut
                    vix, ad dicat sanctus detracto vis. Eos modus dolorum...
                  </p>
                  <ul class="add_info">
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Free Wifi"
                        ><i class="icon_set_1_icon-86"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Plasma TV with cable channels"
                        ><i class="icon_set_2_icon-116"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Swimming pool"
                        ><i class="icon_set_2_icon-110"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Fitness Center"
                        ><i class="icon_set_2_icon-117"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        class="tooltip-1"
                        data-bs-placement="top"
                        title="Restaurant"
                        ><i class="icon_set_1_icon-58"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-2">
                <div class="price_list">
                  <div>
                    <sup>$</sup>129*<span class="normal_price_list">$99</span
                    ><small>*From/Per night</small>
                    <p><a href="single_hotel.html" class="btn_1">Details</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

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
    <!-- End container -->
  </main>
</template>
