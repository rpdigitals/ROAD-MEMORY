<template>
  <div>
    <div>
      <h2>{{ title }}</h2>
      <table class="table" :class="tableClass">
        <thead>
          <slot name="columns">
            <th v-for="column in columns" :key="column">{{ column }}</th>
            <th>Image</th>
            <th>Action</th>
          </slot>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <slot :row="item">
              <td v-for="(column, index) in columns" :key="index">
                {{ itemValue(item, column) }}
              </td>
              <td>
                <!-- <span>
                   src="https:mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
              </span> -->
                <img
                  :src="'http://localhost:8000/' + item.image"
                  alt=""
                  width="70px"
                />
              </td>
              <td>
                <button
                  class="ti-eye btn btn-info"
                  @click="editService(item.idBD, item.site)"
                ></button>
                <button
                  class="ti-trash btn btn-danger"
                  @click="deleteService(item.idBD, item.site)"
                >
                  <!-- <drop-down class="nav-item" icon="ti-bell">
                    <a class="dropdown-item" href="#" style="z-index: 100"
                      >Notification 1</a
                    >
                  </drop-down> -->
                </button>
                <span v-if="data.length > 0">
                  <button
                    v-if="data[0].hasOwnProperty('chambres')"
                    class="ti-plus btn btn-warning"
                    @click="goToAddRoom(item.idBD)"
                  ></button
                ></span>
              </td>
            </slot>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Tour from "../services/tour-request.js";
import Hotel from "../services/hotel-request.js";
import Resto from "../services/resto-request.js";
import Car from "../services/car-request.js";
export default {
  name: "paper-table",
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String, // striped | hover
      default: "striped",
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
    deleteService(identifier, site) {
      if (site == "tour") {
        identifier;
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
              Tour.deleteTour(identifier)
                .then((response) => {
                  swalWithBootstrapButtons.fire(
                    "Supprimé!",
                    "Ce site a été suprimé.",
                    "success"
                  );
                  location.reload();
                })
                .catch((error) => {
                  swalWithBootstrapButtons.fire(
                    "Desolé !",
                    "Une erreur s'est produite",
                    "Verifiez votre connexion et réessayez ."
                  );
                });
            } else {
              swalWithBootstrapButtons.fire(
                "Annulé !",
                "Vos données sont toujours disponible"
              );
            }
          });
      }
      if (site == "hotel") {
        identifier;
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
              Car.deleteCar(identifier)
                .then((response) => {
                  swalWithBootstrapButtons.fire(
                    "Supprimé!",
                    "Cet hotel a été suprimé.",
                    "success"
                  );
                  location.reload();
                })
                .catch((error) => {
                  swalWithBootstrapButtons.fire(
                    "Desolé !",
                    "Une erreur s'est produite",
                    "Verifiez votre connexion et réessayez ."
                  );
                });
            } else {
              swalWithBootstrapButtons.fire(
                "Annulé !",
                "Vos données sont toujours disponible"
              );
            }
          });
      }
      if (site == "resto") {
        identifier;
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
              Resto.deleteResto(identifier)
                .then((response) => {
                  swalWithBootstrapButtons.fire(
                    "Supprimé!",
                    "Ce Resto a été suprimé.",
                    "success"
                  );
                  location.reload();
                })
                .catch((error) => {
                  swalWithBootstrapButtons.fire(
                    "Desolé !",
                    "Une erreur s'est produite",
                    "Verifiez votre connexion et réessayez ."
                  );
                });
            } else {
              swalWithBootstrapButtons.fire(
                "Annulé !",
                "Vos données sont toujours disponible"
              );
            }
          });
      }
      if (site == "car") {
        identifier;
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
              Car.deleteCar(identifier)
                .then((response) => {
                  swalWithBootstrapButtons.fire(
                    "Supprimé!",
                    "Cette voiture a été suprimé.",
                    "success"
                  );
                  location.reload();
                })
                .catch((error) => {
                  swalWithBootstrapButtons.fire(
                    "Desolé !",
                    "Une erreur s'est produite",
                    "Verifiez votre connexion et réessayez ."
                  );
                });
            } else {
              swalWithBootstrapButtons.fire(
                "Annulé !",
                "Vos données sont toujours disponible"
              );
            }
          });
      }
    },
    editService(service, site) {
      sessionStorage.setItem("tourToEdit", service);
      sessionStorage.setItem("hotelToEdit", service);
      sessionStorage.setItem("carToEdit", service);
      sessionStorage.setItem("restoToEdit", service);
      this.$router.push(`/edit-service/${service}/${site}`);
    },
    goToAddRoom(id) {
      this.$router.push(`/add-room/${id}`);
    },
  },
};
</script>
<style></style>
