import Hotel from "../services/hotel-request.js";

export default {
  data() {
    return {
      name: "",
      longitude: "",
      latitude: "",
      picture: "",
      description: "",
      address: "",
      openDaysHours: [],
      partnerId: 0,
      monSt: "",
      tueSt: "",
      wedSt: "",
      turSt: "",
      friSt: "",
      satSt: "",
      sunSt: "",
      monEn: "",
      tueEn: "",
      wedEn: "",
      turEn: "",
      friEn: "",
      satEn: "",
      sunEn: "",
      hotelCreatedSuccessfully: 2,
      //hotelId after creating the hotel
      hotelId: 0,
      //caracteristics
      carForm: 0,
      wifi: "",
      plasmaTv: "",
      swimmingPool: "",
      fitnessCenter: "",
      restaurant: "",
      parking: "",
      smokeArea: "",
      pet: "",
      hotelCreatedSuccessfully: 2,
    };
  },
  methods: {
    addHotel() {
      var openDaysHours = {
        monSt: this.monSt,
        tueSt: this.tueSt,
        wedSt: this.wedSt,
        turSt: this.turSt,
        friSt: this.friSt,
        satSt: this.satSt,
        sunSt: this.sunSt,
        monEn: this.monEn,
        tueEn: this.tueEn,
        wedEn: this.wedEn,
        turEn: this.turEn,
        friEn: this.friEn,
        satEn: this.satEn,
        sunEn: this.sunEn,
      };
      Hotel.addHotel({
        name: this.name,
        price: this.price,
        longitude: this.longitude,
        latitude: this.latitude,
        picture: this.picture,
        description: this.description,
        address: this.address,
        open_days_hours: JSON.stringify(openDaysHours),
        partner_id: sessionStorage.getItem("partnerId"),
      })
        .then((response) => {
          console.log(response.data);
          this.hotelCreatedSuccessfully = 1;
          this.hotelId = response.data.hotel_id;
          this.addHotelCaracteristic();
          this.hotelCreatedSuccessfull();
        })
        .catch((error) => {
          console.log(error);
          this.hotelCreatedSuccessfully = 0;
        });
    },
    initializeHotelCreation() {
      this.hotelCreatedSuccessfully = 2;
    },
    addHotelCaracteristic() {
      Hotel.addHotelCaracteristics({
        wifi: this.wifi,
        plasma_tv: this.plasmaTv,
        swimming_pool: this.swimmingPool,
        fitness_center: this.fitnessCenter,
        restaurant: this.restaurant,
        parking: this.parking,
        smoke_area: this.smokeArea,
        pet: this.pet,
        hotel_id: this.hotelId,
      }).then((response) => {
        console.log(response.data);
      });
    },

    resetHotelCreation() {
      this.hotelCreatedSuccessfully = 2;
    },
    hotelCreatedSuccessfull() {
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Hotel ajouté avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/services");
    },
  },
  mounted() {},
};
