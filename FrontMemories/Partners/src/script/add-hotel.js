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
        .then(() => {
          this.hotelCreatedSuccessfully = 1;
        })
        .catch(() => {
          this.hotelCreatedSuccessfully = 0;
        });
    },
    initializeHotelCreation() {
      this.hotelCreatedSuccessfully = 2;
    },
  },
  mounted() {},
};
