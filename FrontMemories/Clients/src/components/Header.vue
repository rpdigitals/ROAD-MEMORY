<script>
import { RouterLink, RouterView } from "vue-router";
import Auth from "../services/auth.js";
export default {
  data() {
    return {
      isLogged: sessionStorage.getItem("isLogged"),
    };
  },
  methods: {
    logout() {
      this.isLogged = false;
      sessionStorage.setItem("isLogged", false);
      this.$session.destroy();
      this.$router.push("/");
    },
  },
  mounted() {},
  //how to destroy all session in vue js
};
// generer un nombre aleatoire entre 1000 et 9999 en language art
</script>

<template>
  <header>
    <div id="top_line">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <i class="icon-phone"></i><strong>+228 70 44 16 36</strong>
          </div>
          <div class="col-6">
            <ul id="top_links">
              <li v-if="!isLogged">
                <RouterLink to="/login">Se connecter</RouterLink>
              </li>
              <li v-else>
                <a href="#" @click="logout">Se déconnecter</a>
              </li>

              <li>
                <RouterLink to="/dashboard">Tableau de bord</RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <!-- End row -->
      </div>
      <!-- End container-->
    </div>
    <!-- End top line-->

    <div class="container">
      <div class="row">
        <div class="col-3">
          <div id="logo_home">
            <h1>
              <router-link to="/"></router-link>
            </h1>
          </div>
        </div>
        <nav class="col-9">
          <a
            class="cmn-toggle-switch cmn-toggle-switch__htx open_close"
            href="javascript:void(0);"
            ><span>Menu mobile</span></a
          >
          <div class="main-menu">
            <div id="header_menu">
              <img
                src="img/logo_sticky.png"
                width="160"
                height="34"
                alt="City tours"
              />
            </div>
            <a href="#" class="open_close" id="close_in"
              ><i class="icon_set_1_icon-77"></i
            ></a>
            <ul>
              <li>
                <RouterLink to="/">Accueil</RouterLink>
              </li>

              <li>
                <RouterLink to="/tour-list">Sites Touristiques</RouterLink>
              </li>
              <li class="">
                <RouterLink to="/hotel-list">Hotels</RouterLink>
              </li>
              <li class="">
                <RouterLink to="/car-list">Voitures</RouterLink>
              </li>

              <li class="">
                <RouterLink to="/resto-list">Restaurants</RouterLink>
              </li>

              <li></li>

              <li class="megamenu submenu">
                <a href="javascript:void(0);" class="show-submenu-mega"
                  >Pages<i class="icon-down-open-mini"></i
                ></a>
                <div class="menu-wrapper">
                  <div class="row">
                    <div class="col-lg-4">
                      <h3>Pages</h3>
                      <ul>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="wishlist.html">Wishlist page</a></li>
                        <li><a href="faq.html">Faq</a></li>
                        <li><a href="pricing_tables.html">Subscription</a></li>
                      </ul>
                    </div>
                    <div class="col-lg-4">
                      <h3>Pages</h3>
                      <ul>
                        <li><a href="contact_us_1.html">Contact us 1</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li>
                          <a href="invoice.html" target="_blank">Invoice</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- End row -->
                </div>
                <!-- End menu-wrapper -->
              </li>
            </ul>
          </div>

          <ul id="top_tools">
            <li>
              <div class="dropdown dropdown-cart">
                <a href="#0" data-bs-toggle="dropdown" class="cart_bt"
                  ><i class="icon_bag_alt"></i><strong>3</strong></a
                >
                <ul class="dropdown-menu" id="cart_items">
                  <li>
                    <div class="image">
                      <img src="img/thumb_cart_1.jpg" alt="image" />
                    </div>
                    <strong><a href="#">Louvre museum</a>1x $36.00 </strong>
                    <a href="#" class="action"><i class="icon-trash"></i></a>
                  </li>
                  <li>
                    <div class="image">
                      <img src="img/thumb_cart_2.jpg" alt="image" />
                    </div>
                    <strong><a href="#">Versailles tour</a>2x $36.00 </strong>
                    <a href="#" class="action"><i class="icon-trash"></i></a>
                  </li>
                  <li>
                    <div class="image">
                      <img src="img/thumb_cart_3.jpg" alt="image" />
                    </div>
                    <strong><a href="#">Versailles tour</a>1x $36.00 </strong>
                    <a href="#" class="action"><i class="icon-trash"></i></a>
                  </li>
                  <li>
                    <div>Total: <span>$120.00</span></div>
                    <a href="cart.html" class="button_drop">Go to cart</a>
                    <a href="payment.html" class="button_drop outline"
                      >Check out</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- container -->
  </header>
</template>
