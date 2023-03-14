import Tour from "../services/tour-request.js";

export default {
  data() {
    return {
      //tour info
      name: "",
      price: 0,
      visitHour: "",
      longitude: "",
      latitude: "",
      picture: "",
      description: "",
      address: "",
      languages: [],
      openDaysHours: [],
      partnerId: 0,
      tourCategoryId: 0,
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
      //tour Id after creating the tour
      tourId: 0,
      //caracteristics
      carForm: 0,
      children: "",
      smokeArea: "",
      animals: "",
      tourGuide: "",
      dinner: "",
      tourCategoryFromBd: "",
      tourCreatedSuccessfully: 2,
    };
  },
  methods: {
    addTour() {
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

      Tour.addTour({
        name: this.name,
        price: this.price,
        visit_hour: this.visitHour,
        longitude: this.longitude,
        latitude: this.latitude,
        tour_category_id: this.tourCategoryId,
        picture: this.picture,
        description: this.description,
        address: this.address,
        languages: this.languages.toString(),
        open_days_hours: JSON.stringify(openDaysHours),
        partner_id: sessionStorage.getItem("partnerId"),
      })
        .then((response) => {
          this.tourCreatedSuccessfully = 1;
          this.tourId = response.data.tour_id;
          this.addTourCaracteristiques();
          this.tourCreatedSuccessfull();
        })
        .catch((e) => {
          console.log(e);
          this.tourCreatedSuccessfully = 0;
        });
    },
    addTourCaracteristiques() {
      Tour.addTourCaracteristics({
        children: this.children,
        smoke_area: this.smokeArea,
        animals: this.animals,
        tour_guide: this.tourGuide,
        dinner: this.dinner,
        tour_id: this.tourId,
      });
    },

    getTourCategoryFromBd() {
      Tour.getTourCategories().then((response) => {
        //console.log(response.data);
        this.tourCategoryFromBd = response.data;
      });
    },
    resetTourCreation() {
      this.tourCreatedSuccessfully = 2;
    },
    tourCreatedSuccessfull() {
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Site ajouté avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/services");
    },
  },
  mounted() {
    this.getTourCategoryFromBd();
  },
};
