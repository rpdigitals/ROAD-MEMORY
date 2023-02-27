<script>
import { RouterLink, RouterView } from "vue-router";
import Auth from "../services/auth.js";
export default {
  data() {
    return {
      mobileNav: true,
      windowWidth: null,
      mobile: true,
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
</script>
<template>
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
      <i v-show="mobile"></i>
    </div>
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="dropdown-nav mobile-ul">
        <li class="mobile-li">
          <RouterLink to="/" class="link">Accueil</RouterLink>
        </li>

        <li class="mobile-li">
          <RouterLink to="/tour-list" class="link"
            >Sites Touristiques</RouterLink
          >
        </li>
        <li class="mobile-li">
          <RouterLink to="/hotel-list" class="link">Hotels</RouterLink>
        </li>
        <li class="mobile-li">
          <RouterLink to="/car-list" class="link">Voitures</RouterLink>
        </li>

        <li class="mobile-li">
          <RouterLink to="/resto-list" class="link">Restaurants</RouterLink>
        </li>

        <li class="mobile-li megamenu submenu">
          <a href="javascript:void(0);" class="show-submenu-mega"
            >Pages<i class="icon-down-open-mini"></i
          ></a>
        </li>

        <div class="dropdown dropdown-cart">
          <a href="#0" data-bs-toggle="dropdown" class="cart_bt"
            ><i class="icon_bag_alt"></i><strong>3</strong></a
          >

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
            <a href="payment.html" class="button_drop outline">Check out</a>
          </li>
        </div>
      </ul>
    </transition>
  </div>
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
  transition: O, 8s ease all;
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
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

.link {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* Change the link color on hover */
.link:hover {
  background-color: #555;
  color: white;
}
</style>
