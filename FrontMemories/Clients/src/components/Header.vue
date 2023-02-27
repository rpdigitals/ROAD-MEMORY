<script>
import { RouterLink, RouterView } from "vue-router";
import Auth from "../services/auth.js";
export default {
  data() {
    return {
      mobileNav: false,
      windowWidth: false,
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
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
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

              <li id="top_tools">
                <div class="dropdown dropdown-cart">
                  <a href="#0" data-bs-toggle="dropdown" class="cart_bt"
                    ><i class="icon_bag_alt"></i><strong>3</strong></a
                  >
                </div>
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
          <div class="mobile-nav-class">
            <div class="mobilePart">
              <a
                id="icon-nav-mobile"
                class="cmn-toggle-switch"
                href="javascript:void(0);"
                @click="toggleMobileNav"
                :class="{ 'icon-active': mobileNav }"
                ><span>Menu mobile</span></a
              >
              <!-- <a
                id="icon-nav-mobile"
                class="cmn-toggle-switch"
                href="javascript:void(0);"
                @click="toggleMobileNav"
                :class="{ 'icon-active': mobileNav }"
                ><i class="bi bi-x"></i
              ></a> -->
            </div>
            <transition name="mobile-nav">
              <div style="margin-top: 15px">
                <ul v-show="mobileNav" class="dropdown-nav mobile-ul">
                  <img src="/img/road.png" alt="" />

                  <li class="mobile-li">
                    <RouterLink to="/" class="link">Accueil</RouterLink>
                  </li>

                  <li class="mobile-li">
                    <RouterLink to="/tour-list" class="link"
                      >Sites Touristiques</RouterLink
                    >
                  </li>
                  <li class="mobile-li">
                    <RouterLink to="/hotel-list" class="link"
                      >Hotels</RouterLink
                    >
                  </li>
                  <li class="mobile-li">
                    <RouterLink to="/car-list" class="link"
                      >Voitures</RouterLink
                    >
                  </li>

                  <li class="mobile-li">
                    <RouterLink to="/resto-list" class="link"
                      >Restaurants</RouterLink
                    >
                  </li>
                  <li class="mobile-li">
                    <RouterLink to="/dashboard" class="link"
                      >Tableau de bord</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </transition>
          </div>
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
        </nav>
      </div>
    </div>
    <!-- container -->
  </header>
</template>
<style scoped>
@media (min-width: 993px) {
  .mobile-nav-class {
    display: none;
  }
}
.mobilePart {
  display: flex;
  right: 10px;
  align-items: center;
  bottom: 20;
  position: absolute;
}
#icon-nav-mobile {
  cursor: pointer;
  transition: O, 1s ease all;
}
.icon-active {
  transform: rotate(180deg);
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  max-width: 200px;
  width: 100%;
  height: 100%;
  background-color: rgb(245, 245, 245);
  top: 0;
  left: 0;
}
.mobile-ul {
  list-style-type: none;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

.link {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
  border-bottom: 1px solid #008489;
}

/* Change the link color on hover */
.link:hover {
  background-color: #008489;
  color: white;
  font-weight: bolder;
  transform: scale(1, 1);
}
</style>
