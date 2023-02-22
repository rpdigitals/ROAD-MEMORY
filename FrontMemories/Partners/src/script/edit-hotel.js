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
      hoteleditedSuccessfully: 2,
      //hotelId after creating the hotel      hotelId: 0,
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
    edithotel() {
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

      Hotel.updateHotel(
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
          console.log(response.data);
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
      Hotel.updateHotelCaracteristics(
        {
          wifi: this.wifi,
          plasmaTv: this.plasmaTv,
          swimmingPool: this.swimmingPool,
          fitnessCenter: this.fitnessCenter,
          restaurant: this.restaurant,
          parking: this.parking,
          smokeArea: this.smokeArea,
          pet: this.pet,
        },
        this.hotelId
      );
    },

    resetHotelEditing() {
      this.hotelEditedSuccessfully = 2;
    },
    hotelEditedSuccessfull() {
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Hotel moifié avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/services");
    },
    hotelDetail() {
      Hotel.hotelDetail(sessionStorage.getItem("hotelToEdit")).then(
        (response) => {
          console.log(response.data["data"][0]);
          let hotelDetails = response.data["data"][0];

          //hotel info
          this.name = hotelDetails.name;
          //this.price = hotelDetails.price;
          this.longitude = hotelDetails.longitude;
          this.latitude = hotelDetails.latitude;
          //    this.picture = hotelDetails.picture;
          this.description = hotelDetails.description;
          this.address = hotelDetails.address;
          this.openDaysHours = JSON.parse(hotelDetails.open_days_hours);
          this.partnerId = hotelDetails.partner_id;
          this.hotelId = hotelDetails.id;
          //caracteristics
          this.wifi = hotelDetails.caracteristic.wifi;
          this.plasmaTv = hotelDetails.caracteristic.plasma_tv;
          this.swimmingPool = hotelDetails.caracteristic.swimming_pool;
          this.fitnessCenter = hotelDetails.caracteristic.fitness_center;
          this.restaurant = hotelDetails.caracteristic.restaurant;
          this.parking = hotelDetails.caracteristic.parking;
          this.smokeArea = hotelDetails.caracteristic.smoke_area;
          this.pet = hotelDetails.caracteristic.pet;

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
