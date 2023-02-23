import Hotel from "../services/hotel-request.js";

export default {
  data() {
    return {
      //hotel info
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
      hotelEditedSuccessfully: 2,
      //hotelId after editing the hotel
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
      hotelEditedSuccessfully: 2,
      //hotel Id after creating the hotel
      hotelId: 0,
    };
  },
  methods: {
    editHotel() {
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

      Hotel.editHotel(
        {
          name: this.name,
          price: this.price,
          longitude: this.longitude,
          latitude: this.latitude,
          picture: this.picture,
          description: this.description,
          address: this.address,
          open_days_hours: JSON.stringify(openDaysHours),
          partner_id: sessionStorage.getItem("partnerId"),
        },
        this.hotelId
      )
        .then((response) => {
          this.hotelEditedSuccessfully = 1;
          this.hotelId = response.data.hotel_id;
          this.editHotelCaracteristic();
          this.hotelEditedSuccessfull();
        })
        .catch((e) => {
          console.log(e);
          this.hotelEditedSuccessfully = 0;
        });
    },
    editHotelCaracteristic() {
      Hotel.editHotelCaracteristics(
        {
          wifi: this.wifi,
          plasma_tv: this.plasmaTv,
          swimming_pool: this.swimmingPool,
          fitness_center: this.fitnessCenter,
          restaurant: this.restaurant,
          parking: this.parking,
          smoke_area: this.smokeArea,
          pet: this.pet,
        },
        this.hotelId
      );
    },

    resetHotelEdition() {
      this.hotelEditedSuccessfully = 2;
    },
    hotelEditedSuccessfull() {
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Hotel modifié avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/services");
    },
    hotelDetail() {
      Hotel.hotelDetail(sessionStorage.getItem("hotelToEdit")).then(
        (response) => {
          let hotelDetails = response.data["data"][0];
          //hotel info
          this.name = hotelDetails.name;
          this.longitude = hotelDetails.longitude;
          this.latitude = hotelDetails.latitude;
          //  this.picture = hotelDetails.picture;
          this.description = hotelDetails.description;
          this.address = hotelDetails.address;
          this.openDaysHours = JSON.parse(hotelDetails.open_days_hours);
          this.partnerId = hotelDetails.partner_id;
          this.hotelId = hotelDetails.id;
          //caracteristics
          this.wifi = hotelDetails.caracteristics.wifi;
          this.plasmaTv = hotelDetails.caracteristics.plasma_tv;
          this.swimmingPool = hotelDetails.caracteristics.swimming_pool;
          this.fitnessCenter = hotelDetails.caracteristics.fitness_center;
          this.restaurant = hotelDetails.caracteristics.restaurant;
          this.parking = hotelDetails.caracteristics.parking;
          this.smokeArea = hotelDetails.caracteristics.smoke_area;
          this.pet = hotelDetails.caracteristics.pet;

          this.monSt = this.openDaysHours.monSt;
          this.tueSt = this.openDaysHours.tueSt;
          this.wedSt = this.openDaysHours.wedSt;
          this.turSt = this.openDaysHours.turSt;
          this.friSt = this.openDaysHours.friSt;
          this.satSt = this.openDaysHours.satSt;
          this.sunSt = this.openDaysHours.sunSt;
          this.monEn = this.openDaysHours.monEn;
          this.tueEn = this.openDaysHours.tueEn;
          this.wedEn = this.openDaysHours.wedEn;
          this.turEn = this.openDaysHours.turEn;
          this.friEn = this.openDaysHours.friEn;
          this.satEn = this.openDaysHours.satEn;
          this.sunEn = this.openDaysHours.sunEn;
        }
      );
    },
  },
  mounted() {
    this.hotelDetail();
  },
};
