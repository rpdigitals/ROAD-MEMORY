import Car from "../services/car-request.js";

export default {
  data() {
    return {
      name: "",
      brand: "",
      price: 1,
      picture1: "",
      picture2: "",
      picture3: "",
      partnerId: 0,
      carCreatedSuccessfully: 2,
    };
  },
  methods: {
    addCar() {
      Car.addCar({
        name: this.name,
        brand: this.brand,
        price: this.price,
        picture1: this.picture1,
        picture2: this.picture2,
        picture3: this.picture3,
        partner_id: sessionStorage.getItem("partnerId"),
      })
        .then(() => {
          this.carCreatedSuccessfully = 1;
          this.carCreatedSuccessfull();
        })
        .catch((error) => {
          console.log(error);
          this.carCreatedSuccessfully = 0;
        });
    },
    carCreatedSuccessfull() {
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Voiture ajouté avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/services");
    },

    initializeCarCreation() {
      this.carCreatedSuccessfully = 2;
    },
  },
};
