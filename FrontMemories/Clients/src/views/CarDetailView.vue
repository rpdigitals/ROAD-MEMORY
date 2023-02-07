<script src="../script/car-details.js"></script>

<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Voitures</a></li>
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
      <h4>{{ car.brand + " " + car.name }}</h4>
      <div class="row">
        <div class="col-lg-8" id="single_tour_desc">
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

          <hr />
        </div>
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
              >Voir sur GMap</a
            >
          </p>

          <div class="box_style_4">
            <i class="icon_set_1_icon-90"></i>
            <h4><span>Appeler</span></h4>
            <a href="tel://{{partner.first_telephone}}" class="phone">{{
              partner.first_telephone
            }}</a>
          </div>
        </aside>
      </div>
      <!--End row -->
    </div>
    <!--End container -->

    <div id="overlay"></div>
    <!-- Mask on input focus -->
  </main>
</template>
