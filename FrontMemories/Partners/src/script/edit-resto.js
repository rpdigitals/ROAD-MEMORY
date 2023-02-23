import Resto from "../services/resto-request.js";

export default {
  data() {
    return {
      //Resto info
      name: "",
      longitude: "",
      latitude: "",
      picture: "",
      price: "",
      description: "",
      address: "",
      openDaysHours: [],
      partnerId: 0,
      restoCategoryId: 0,
      restoCategoryType: "",
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
      //Resto Id after creating the Resto
      restoId: 0,
      //caracteristics
      //caracteristics
      wifi: "",
      parking: "",
      smokeArea: "",
      pet: "",
      //
      carForm: 0,
      restoCategoryFromBd: "",
      restoEditedSuccessfully: 2,
    };
  },
  methods: {
    editResto() {
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

      Resto.updateResto(
        {
          name: this.name,
          price: this.price,
          visit_hour: this.visitHour,
          longitude: this.longitude,
          latitude: this.latitude,
          resto_category_id: this.restoCategoryId,
          picture: this.picture,
          table_price: this.price,
          description: this.description,
          address: this.address,
          open_days_hours: JSON.stringify(openDaysHours),
          partner_id: sessionStorage.getItem("partnerId"),
        },
        this.restoId
      )
        .then((response) => {
          console.log(response.data);
          this.restoeditedSuccessfully = 1;
          this.restoId = response.data.resto_id;
          this.editRestoCaracteristiques();
          this.restoEditedSuccessfull();
        })
        .catch((e) => {
          console.log(e);
          this.restoEditedSuccessfully = 0;
        });
    },
    editRestoCaracteristiques() {
      Resto.updateRestoCaracteristics(
        {
          wifi: this.wifi,
          smoke_area: this.smokeArea,
          pet: this.pet,
          parking: this.parking,
          resto_id: this.restoId,
        },
        this.restoId
      );
    },

    getRestoCategoryFromBd() {
      Resto.getRestoCategories().then((response) => {
        this.restoCategoryFromBd = response.data;
      });
    },
    resetRestoEdition() {
      this.restoEditedSuccessfully = 2;
    },
    restoEditedSuccessfull() {
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Resto modifié avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/services");
    },
    restoDetail() {
      Resto.restoDetail(sessionStorage.getItem("restoToEdit")).then(
        (response) => {
          console.log(response.data["data"][0]);
          let restoDetails = response.data["data"][0];

          //resto info
          this.name = restoDetails.name;
          this.longitude = restoDetails.longitude;
          this.latitude = restoDetails.latitude;
          // this.picture = restoDetails.picture;
          this.price = restoDetails.table_price;
          this.description = restoDetails.description;
          this.address = restoDetails.address;
          this.openDaysHours = JSON.parse(restoDetails.open_days_hours);
          this.partnerId = restoDetails.partner_id;
          this.restoCategoryId = restoDetails.category.id;
          this.restoCategoryType = restoDetails.category.type;
          this.restoId = restoDetails.id;
          // Caracteristics
          this.smokeArea = restoDetails.caracteristics.smoke_area;
          this.parking = restoDetails.caracteristics.parking;
          this.pet = restoDetails.caracteristics.pet;
          this.wifi = restoDetails.caracteristics.wifi;
          this.dinner = restoDetails.caracteristics.dinner;
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
    this.getRestoCategoryFromBd();
    this.restoDetail();
  },
};
