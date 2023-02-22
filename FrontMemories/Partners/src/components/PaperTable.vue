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
                  @click="deleteTour(item.idBD)"
                >
                  <!-- <drop-down class="nav-item" icon="ti-bell">
                    <a class="dropdown-item" href="#" style="z-index: 100"
                      >Notification 1</a
                    >
                  </drop-down> -->
                </button>
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
    deleteTour(identifier) {
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
    },
    editService(service, site) {
      sessionStorage.setItem("tourToEdit", service);
      sessionStorage.setItem("hotelToEdit", service);
      sessionStorage.setItem("carToEdit", service);
      sessionStorage.setItem("restoToEdit", service);
      this.$router.push(`/edit-service/${service}/${site}`);
    },
  },
};
</script>
<style></style>
