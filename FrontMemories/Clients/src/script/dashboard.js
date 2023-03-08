import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import Dashboard from "../services/dashboard-request.js";
import TourWishListT from "../services/tour/tour-wishlist-request.js";

export default {
  data() {
    return {
      //nav data
      heading: {
        Reservations: 0,
        Favoris: 2,
        Parametres: 3,
        // Info: 4,
      },
      //Booking Data
      headTitle: "Reservations",
      headingMobile: 1,

      wishlist: "",
      bookings: "",
      Info: "",
      settings: "",
      tourBookings: "",
      hotelBookings: "",
      restoBookings: "",
      itemToDisplay: 1,
      //WishList data
      tourWishlist: [],
      //Settings data
      email: "",
      name: "",
      telephone: "",
      error: 0,
    };
  },
  methods: {
    show(head) {
      var one = 1;
      var two = 2;
      var tree = 3;
      // var four = 4;

      switch (head) {
        case this.heading.Reservations:
          one = 0;
          this.headTitle = "Reservations";
          break;
        case this.heading.Favoris:
          two = 0;
          this.headTitle = "Favoris";
          break;
        case this.heading.Parametres:
          tree = 0;
          this.headTitle = "Parametres";
          break;
        // case this.heading.Info:
        //   four = 0;
        //   this.headTitle = "Info";
        //   break;
      }
      this.heading = {
        Reservations: one,
        Favoris: two,
        Parametres: tree,
        //  Info: four,
      };
    },
    getWishList() {
      this.tourWishlist = [1, 2, 3, 4];
      Dashboard.getWishList(sessionStorage.getItem("customerId")).then(
        (reponse) => {
          this.tourWishlist = reponse.data.tour_wish_list;
          // console.log(this.tourWishlist);
          //console.log(reponse.data.tour_wish_list);
        }
      );
    },
    deleteWishList(id) {
      TourWishlistT.deleteWishList(id).then((response) =>
        $this.$router.push("/dashboard")
      );
    },
    getBookingList() {
      Dashboard.getBookingList(sessionStorage.getItem("customerId")).then(
        (reponse) => {
          this.tourBookings = reponse.data.tour_bookings;
          this.hotelBookings = reponse.data.hotel_bookings;
          this.restoBookings = reponse.data.resto_bookings;
        }
      );
    },
    profilInfo() {
      Dashboard.profil(sessionStorage.getItem("customerId")).then(
        (response) => {
          this.email = response.data.user.email;
          this.name = response.data.customer.name;
          this.telephone = response.data.customer.telephone;
        }
      );
    },
    goToTourDetails(tourId) {
      this.$router.push(`/tour-details/${tourId}`);
    },
    updateCustomer() {
      Dashboard.updateCustomer(sessionStorage.getItem("customerId"), {
        email: this.email,
        telephone: this.telephone,
        name: this.name,
      })
        .then((response) => {
          if (response.data.success == true) {
            //# alert success
            this.error = 0;
            this.$swal.fire({
              position: "top-end",
              icon: "success",
              title: "Profil modifié avec succès",
              showConfirmButton: false,
              timer: 1500,
            });
            location.reload();
          } else {
            console.log(this.error);
            this.error = 1;
          }
        })
        .catch((error) => {
          this.error = 1;
        });
    },
    deleteTourBooking(id) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Êtes vous sûres ?",
          text: "Voulez vous annuler la reservation ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "OUI, Annuler!",
          cancelButtonText: "Non, garder!",
          reverseButtons: true,
        })
        .then((result) => {
          location.reload();
          if (result.isConfirmed) {
            Dashboard.deleteTourBooking(id).then((response) => {
              swalWithBootstrapButtons.fire(
                "Annulée!",
                "Ce reservation a été annulée.",
                "succès"
              );
            });
          } else {
            swalWithBootstrapButtons.fire(
              "Action annulée!",
              "Votre reservation est active :)"
            );
          }
        });
    },
    deleteHotelBooking(id) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Êtes vous sûres ?",
          text: "Voulez-vous annuler la reservation ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "OUI, Annuler!",
          cancelButtonText: "Non, garder!",
          reverseButtons: true,
        })
        .then((result) => {
          location.reload();
          if (result.isConfirmed) {
            Dashboard.deleteHotelBooking(id).then((response) => {
              swalWithBootstrapButtons.fire(
                "Annulée!",
                "Cette reservation a été annulée.",
                "succès"
              );
            });
          } else {
            swalWithBootstrapButtons.fire(
              "Action annulée!",
              "Votre reservation est active :)"
            );
          }
        });
    },
    deleteRestoBooking(id) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Êtes vous sûres ?",
          text: "Voulez-vous annuler la reservation ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "OUI, Annuler!",
          cancelButtonText: "Non, garder!",
          reverseButtons: true,
        })
        .then((result) => {
          location.reload();
          if (result.isConfirmed) {
            Dashboard.deleteRestoBooking(id).then((response) => {
              swalWithBootstrapButtons.fire(
                "Annulée!",
                "Cette reservation a été annulée.",
                "succès"
              );
            });
          } else {
            swalWithBootstrapButtons.fire(
              "Action annulée!",
              "Votre reservation est active :)"
            );
          }
        });
    },
  },
  mounted() {
    this.getWishList();
    this.getBookingList();
    this.profilInfo();
  },
};
