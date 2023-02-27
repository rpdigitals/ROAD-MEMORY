<script src="../script/resto-view.js"></script>

<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">list</a></li>
          <li>Page active</li>
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
            <ul
              id="cat_nav"
              v-for="restoCategory in restoCategories"
              :key="restoCategory.id"
            >
              <li>
                <a
                  href="#"
                  @click="restoOfCategory(restoCategory.id)"
                  id="active"
                  ><i></i> {{ restoCategory.name }}<span></span
                ></a>
              </li>
            </ul>
            <ul id="cat_nav">
              <li>
                <a href="#" @click="getRestoList" id="active"
                  ><i></i> Tout<span></span
                ></a>
              </li>
            </ul>
          </div>
        </aside>
        <!--End aside -->
        <div class="col-lg-9">
          <div id="tools">
            <div class="row justify-content-between">
              <div class="col-md-3 col-sm-4">
                <div class="styled-select-filters">
                  <select
                    name="sort_price"
                    id="sort_price"
                    @change="sortRestoByPrice"
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
                  id="form1"
                  class="form-control"
                  placeholder="Rechercher par mots clés"
                  aria-label="Search"
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
            data-wow-delay="0.3s"
            v-for="(resto, index) in restoList"
            :key="index"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 position-relative">
                <div class="ribbon_3 popular">
                  <span
                    v-if="restoList[index].subsTypeOfOwner.name == 'basic'"
                  ></span>
                  <span v-if="restoList[index].subsTypeOfOwner.name == 'medium'"
                    >Populaire</span
                  >
                  <span v-if="restoList[index].subsTypeOfOwner.name == 'vip'"
                    >Plus aimé</span
                  >
                </div>

                <div class="img_list">
                  <a @click="goToRestoDetails(resto.id)">
                    ><img src="img/restaurant_box_3.jpg" alt="Image" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="tour_list_desc">
                  <h3>
                    <strong>{{ resto.name }}</strong>
                  </h3>
                  <p>
                    {{ resto.description }}
                  </p>
                  <ul class="add_info">
                    <li>
                      <div class="tooltip_styled tooltip-effect-4">
                        <span class="tooltip-item"
                          ><i class="icon_set_1_icon-47"></i
                        ></span>
                        <div class="tooltip-content">
                          <h4
                            v-if="!restoList[index].caracteristics.smoking_area"
                          >
                            Cigarettes non autorisés
                          </h4>
                          <h4 v-else>Cigarettes autorisés</h4>
                          <br />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="tooltip_styled tooltip-effect-4">
                        <span class="tooltip-item"
                          ><i class="icon_set_1_icon-27"></i
                        ></span>
                        <div class="tooltip-content">
                          <h4 v-if="!restoList[index].caracteristics.parking">
                            Pas de parking
                          </h4>
                          <h4 v-else>Parking disponible</h4>
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
                    {{ resto.table_price }}
                    <sup>xof</sup><span class="normal_price_list"></span
                    ><small>*Reservation d'une table</small>
                    <p>
                      <a @click="goToRestoDetails(resto.id)" class="btn_1"
                        >Details</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End strip -->

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
