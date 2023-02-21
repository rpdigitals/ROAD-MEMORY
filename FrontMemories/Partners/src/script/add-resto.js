import Resto from "../services/resto-request.js";

export default {
  data() {
    return {
      name: "",
      price: 0,
      visitHour: "",
      longitude: "",
      latitude: "",
      picture: "",
      description: "",
      address: "",
      openDaysHours: [],
      partnerId: 0,
      restoCategoryId: 0,
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
      restoCategoryFromBd: "",
      restoCreatedSuccessfully: 2,
    };
  },
  methods: {
    addResto() {
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
      Resto.addResto({
        name: this.name,
        price: this.price,
        visit_hour: this.visitHour,
        longitude: this.longitude,
        latitude: this.latitude,
        resto_category_id: this.restoCategoryId,
        picture: this.picture,
        description: this.description,
        address: this.address,
        table_price: this.price,
        open_days_hours: JSON.stringify(openDaysHours),
        partner_id: sessionStorage.getItem("partnerId"),
      })
        .then(() => {
          this.restoCreatedSuccessfully = 1;
        })
        .catch(() => {
          this.restoCreatedSuccessfully = 0;
        });
    },
    getRestoCategoryFromBd() {
      Resto.getRestoCategories().then((response) => {
        console.log(response.data);
        this.restoCategoryFromBd = response.data;
      });
    },
    initializeRestoCreation() {
      this.restoCreatedSuccessfully = 2;
    },
  },
  mounted() {
    this.getRestoCategoryFromBd();
  },
};
