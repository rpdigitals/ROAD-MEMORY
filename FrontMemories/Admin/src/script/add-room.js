import Room from "../services/room-request.js";
export default {
  data() {
    return {
      roomNumber: "",
      price: "",
      category: "",
      picture: "",
      categoryName: "",
      allCategories: [],
      showModal: false,
      categoryToeditId: "",
      categoryToeditName: "",
    };
  },
  methods: {
    addRoomCategory() {
      Room.addRoomCategory({
        name: this.categoryName,
        hotel_id: this.$route.params.id,
      }).then((response) => {
        this.getRoomCategories();
      });
    },
    addRoom() {
      Room.addRoom({
        room_number: this.roomNumber,
        price: this.price,
        picture: this.picture,
        room_category_id: this.category,
      }).then((response) => {
        this.getRoomCategories();
      });
    },
    getRoomCategories() {
      Room.getRoomCategories(this.$route.params.id).then((response) => {
        this.allCategories = response.data["data"];
      });
    },
    deleteRoomCategory(id) {
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "Êtes vous sûres ?",
          text: "Cet action sera irreversible!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "OUI, Supprimer!",
          cancelButtonText: "Non, Annuler!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            Room.deleteRoomCategory(id).then((response) => {
              this.getRoomCategories();
            });
            swalWithBootstrapButtons.fire(
              "Supprimé!",
              "Cette catégorie a été suprimé.",
              "success"
            );
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Annulé !",
              "Vos donées sont toujours disponibles"
            );
          }
        });
    },

    updateRoomCategory() {
      Room.updateRoomCategory(this.categoryToeditId, {
        name: this.categoryToeditName,
      }).then((response) => {
        this.showModal = false;
        this.getRoomCategories();
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Catégorie modifié avec succès",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },

    showEditModal(id, name) {
      this.categoryToeditId = id;
      this.categoryToeditName = name;
      this.showModal = true;
    },
  },
  mounted() {
    this.getRoomCategories();
  },
};
