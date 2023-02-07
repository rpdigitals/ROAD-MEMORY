<script src="../script/car.js"></script>

<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Voiture</a></li>
          <li>Page active</li>
        </ul>
      </div>
    </div>
    <!-- Position -->

    <div class="container margin_60">
      <div class="row">
        <Help />
        <!--End aside -->

        <div class="col-lg-9">
          <div id="tools">
            <div class="row justify-content-between">
              <div class="col-md-3 col-sm-4">
                <div class="styled-select-filters">
                  <select
                    name="sort_price"
                    id="sort_price"
                    @change="sortCarByPrice"
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
                  placeholder="Rechercher par nom de voitures ..."
                  v-model="keyword"
                  @keyup="searchByKeyword"
                />
              </div>
            </div>
          </div>
          <!--/tools -->
          <center v-if="responseLength < 1">
            <div>Aucun resultat trouvé</div>
          </center>

          <div
            class="strip_all_tour_list wow fadeIn"
            data-wow-delay="0.1s"
            v-for="(car, index) in cars"
            :key="index"
          >
            <div class="row">
              <div class="col-lg-4 col-md-4 position-relative">
                <div class="ribbon_3 popular">
                  <span v-if="car.subsTypeOfOwner.name == 'basic'"></span>
                  <span v-if="car.subsTypeOfOwner.name == 'medium'"
                    >Populaire</span
                  >
                  <span v-if="car.subsTypeOfOwner.name == 'vip'"
                    >Plus aimé</span
                  >
                </div>

                <div class="img_list">
                  <a @click="goToCarDetails(car.id)"
                    ><img src="img/transfer_1.jpg" alt="Image" />
                    <div class="short_info"></div>
                  </a>
                </div>
              </div>

              <div class="col-lg-6 col-md-6">
                <div class="tour_list_desc">
                  <div class="rating"></div>
                  <h3>
                    <strong>{{ car.brand }}</strong> {{ car.name }}
                  </h3>

                  <span
                    >Societé : <b>{{ cars[index].partner.society_name }}</b>
                  </span>
                  <br /><br />
                  <span
                    >Téléphone :
                    <b>{{ cars[index].partner.first_telephone }}</b>
                  </span>
                </div>
              </div>
              <div class="col-lg-2 col-md-2">
                <div class="price_list">
                  <div>
                    {{ car.price }}<br />
                    <sup>xof</sup>
                    <p>
                      <a @click="goToCarDetails(car.id)" class="btn_1"
                        >Details</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--End strip -->
        </div>
        <!-- End col lg-9 -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </main>
</template>
