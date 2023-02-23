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
      carEditedSuccessfully: 2,
    };
  },
  methods: {
    editCar() {
      Car.editCar(
        {
          name: this.name,
          brand: this.brand,
          price: this.price,
          picture1: this.picture1,
          picture2: this.picture2,
          picture3: this.picture3,
          partner_id: sessionStorage.getItem("partnerId"),
        },
        sessionStorage.getItem("carToEdit")
      )
        .then(() => {
          this.carEditedSuccessfully = 1;
          this.carEditedSuccessfull();
        })
        .catch((error) => {
          console.log(error);
          this.carEditedSuccessfully = 0;
        });
    },
    carEditedSuccessfull() {
      this.$swal.fire({
        position: "top-end",
        icon: "success",
        title: "Voiture ajouté avec succès",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$router.push("/services");
    },
    carDetails() {
      Car.carDetails(sessionStorage.getItem("carToEdit")).then((response) => {
        var car = response.data["data"][0];
        this.name = car.name;
        this.brand = car.brand;
        this.price = car.price;
        //   this.picture1 = car.picture1;
        // this.picture2 = car.picture2;
        // this.picture3 = car.picture3;
      });
    },

    initializeCarCreation() {
      this.carEditedSuccessfully = 2;
    },
  },
  mounted() {
    this.carDetails();
  },
};
