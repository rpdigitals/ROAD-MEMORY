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
      tourCategoryType: "",
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
      tourEditedSuccessfully: 2,
    };
  },
  methods: {
    editTour() {
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

      Tour.updateTour(
        {
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
        },
        this.tourId
      )
        .then((response) => {
          console.log(response.data);
          this.toureditedSuccessfully = 1;
          this.tourId = response.data.tour_id;
          this.editTourCaracteristiques();
          this.tourEditedSuccessfull();
        })
        .catch((e) => {
          console.log(e);
          this.tourEditedSuccessfully = 0;
        });
    },
    editTourCaracteristiques() {
      Tour.updateTourCaracteristics(
        {
          children: this.children,
          smoke_area: this.smokeArea,
          animals: this.animals,
          tour_guide: this.tourGuide,
          dinner: this.dinner,
          tour_id: this.tourId,
        },
        this.tourId
      );
    },

    getTourCategoryFromBd() {
      Tour.getTourCategories().then((response) => {
        this.tourCategoryFromBd = response.data;
      });
    },
    resetTourEditing() {
      this.tourEditedSuccessfully = 2;
    },
    tourEditedSuccessfull() {
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Site moifié avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/services");
    },
    tourDetail() {
      Tour.tourDetail(sessionStorage.getItem("tourToEdit")).then((response) => {
        console.log(response.data["data"][0]);
        let tourDetails = response.data["data"][0];

        //tour info
        this.name = tourDetails.name;
        this.price = tourDetails.price;
        this.visitHour = tourDetails.visit_hour;
        this.longitude = tourDetails.longitude;
        this.latitude = tourDetails.latitude;
        //    this.picture = tourDetails.picture;
        this.description = tourDetails.description;
        this.address = tourDetails.address;
        this.languages = tourDetails.languages.split(",");
        this.openDaysHours = JSON.parse(tourDetails.open_days_hours);
        this.partnerId = tourDetails.partner_id;
        this.tourCategoryId = tourDetails.tour_category_id;
        this.tourCategoryType = tourDetails.category.type;
        this.tourId = tourDetails.id;
        //caracteristics
        this.children = tourDetails.caracteristic.children;
        this.smokeArea = tourDetails.caracteristic.smoke_area;
        this.animals = tourDetails.caracteristic.animals;
        this.tourGuide = tourDetails.caracteristic.tour_guide;
        this.dinner = tourDetails.caracteristic.dinner;
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
      });
    },
  },
  mounted() {
    this.getTourCategoryFromBd();
    this.tourDetail();
  },
};
