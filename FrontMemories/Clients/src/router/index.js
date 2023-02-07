import { createRouter, createWebHistory } from "vue-router";

//import tourRouter from "./tour-router.js";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";

import TourView from "../views/TourView.vue";
import TourDetailView from "../views/TourDetailView.vue";
import TourBookingView from "../views/TourBookingView.vue";
import TourPaymentView from "../views/TourPaymentView.vue";
import TourBookingConfirmationView from "../views/TourBookingConfirmationView.vue";

import HotelView from "../views/HotelView.vue";
import HotelDetailView from "../views/HotelDetailView.vue";
import HotelBookingView from "../views/HotelBookingView.vue";
import HotelPaymentView from "../views/HotelPaymentView.vue";
//import RoomsCategoryView from "../views/RoomCategoryView.vue";
import RoomCategoryView from "../views/RoomCategoryView.vue";

import RoomBookingView from "../views/RoomBookingView.vue";
import HotelBookingConfirmationView from "../views/HotelBookingConfirmationView.vue";

import RestoView from "../views/RestoView.vue";
import RestoDetailView from "../views/RestoDetailView.vue";
import RestoBookingView from "../views/RestoBookingView.vue";
import RestoPaymentView from "../views/RestoPaymentView.vue";
import RestoBookingConfirmationView from "../views/RestoBookingConfirmationView.vue";

import CarView from "../views/CarView.vue";
import CarDetailView from "../views/CarDetailView.vue";

import DashboardView from "../views/DashboardView.vue";
import WishListView from "../views/WishListView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import PasswordView from "../views/PasswordView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",

      component: AboutView,
    },
    {
      path: "/dashboard",
      name: "dashboard",

      component: DashboardView,
    },
    {
      path: "/wishlist",
      name: "wishlist",

      component: WishListView,
    },
    {
      path: "/register",
      name: "register",

      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",

      component: LoginView,
    },
    {
      path: "/password-forgotten",
      name: "password",

      component: PasswordView,
    },

    //? Tour Routes
    //? Tour Routes
    //? Tour Routes
    {
      path: "/tour-list",
      name: "tour-list",

      component: TourView,
    },
    {
      path: "/tour-details/:id",
      name: "tour-details",

      component: TourDetailView,
    },
    {
      path: "/book-tour",
      name: "book-tour",

      component: TourBookingView,
    },
    {
      path: "/tour-payment",
      name: "tour-payment",

      component: TourPaymentView,
    },
    {
      path: "/tour-booking-confirmation",
      name: "tour-booking-confirmation",

      component: TourBookingConfirmationView,
    },

    //? Hotel Routes
    //? Hotel Routes
    //? Hotel Routes

    {
      path: "/hotel-list",
      name: "hotel-list",

      component: HotelView,
    },
    {
      path: "/hotel-details/:id",
      name: "hotel-details",

      component: HotelDetailView,
    },
    {
      path: "/book-room/:id",
      name: "book-room",

      component: RoomBookingView,
    },
    {
      path: "/hotel-payment",
      name: "hotel-payment",

      component: HotelPaymentView,
    },
    {
      path: "/hotel-booking-confirmation",
      name: "hotel-booking-confirmation",

      component: HotelBookingConfirmationView,
    },
    {
      path: "/room-category/:id",
      name: "room-category",

      component: RoomCategoryView,
    },

    //? Resto Routes
    //? Resto Routes
    //? Resto Routes
    {
      path: "/resto-list",
      name: "resto-list",

      component: RestoView,
    },
    {
      path: "/resto-detail/:restoId",
      name: "resto-details",

      component: RestoDetailView,
    },
    {
      path: "/book-resto",
      name: "book-resto",

      component: RestoBookingView,
    },
    {
      path: "/resto-payment",
      name: "resto-payment",

      component: RestoPaymentView,
    },
    {
      path: "/resto-booking-confirmation",
      name: "resto-booking-confirmation",

      component: RestoBookingConfirmationView,
    },

    //? Car Routes
    //? Car Routes
    //? Car Routes
    {
      path: "/car-list",
      name: "car-list",

      component: CarView,
    },
    {
      path: "/car-details/:id",
      name: "car-details",

      component: CarDetailView,
    },
  ],
});

export default router;
