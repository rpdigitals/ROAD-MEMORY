<template>
  <card class="card" title="Modifiez votre profil">
    <div>
      <!-- <form @submit.prevent="updateProfile()">
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Nom de la societé"
              placeholder="KofCorporation"
              v-model="name"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Nom du Directeur"
              placeholder="Omar Farouk KOUGBADA"
              v-model="ceoName"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Nom du Directeur Adjoint"
              placeholder="Cendras KOUGBADA"
              v-model="assistantName"
            >
            </fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="tel"
              label="Telephone avec indicatif"
              placeholder="+22890989876"
              v-model="firstTelephone"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="tel"
              label="Second Telephone "
              placeholder="+22890989876"
              v-model="secondTelephone"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="file"
              label="Fichier de verification"
              placeholder="Cendras KOUGBADA"
              v-model="verificationFile"
            >
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-info" round>
            Mettre à jour
          </button>
        </div>
        <div class="clearfix"></div>
      </form> -->
      <form @submit.prevent="updateProfile()">
        <div class="row">
          <div class="col-md-4">
            <fg-input type="text" label="Nom de la societé" v-model="name">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text" label="Nom du Directeur" v-model="ceoName">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Nom du Directeur Adjoint"
              v-model="assistantName"
            >
            </fg-input>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="tel"
              label="Telephone avec indicatif"
              v-model="firstTelephone"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="tel"
              label="Second Telephone "
              v-model="secondTelephone"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="tel"
              label="Téléphone fixe "
              placeholder="+22890989876"
              v-model="fixedNumber"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="string"
              label="Adresse"
              placeholder="Agoe-Lome"
              v-model="address"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="file"
              label="Fichier de verification"
              placeholder="Cendras KOUGBADA"
              v-model="verificationFile"
            >
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-info" round>
            Mettre à jour
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import Profil from "../../services/profil-request.js";

export default {
  data() {
    return {
      name: "",
      ceoName: "",
      address: "",
      fixedNumber: "",
      assistantName: "",
      firstTelephone: "",
      secondTelephone: "",
      verificationFile: "",
    };
  },
  methods: {
    updateProfile() {
      Profil.updatePartner(
        {
          society_name: this.name,
          ceo_name: this.ceoName,
          address: this.address,
          fixed_number: this.fixedNumber,
          assistant_name: this.assistantName,
          first_telephone: this.firstTelephone,
          second_telephone: this.secondTelephone,
          verification_file: this.verificationFile,
        },
        sessionStorage.getItem("partnerId")
      ).then(() => {
        //# alert success
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Profil modifié avec succès",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
    getPartner(id) {
      Profil.getPartner(id).then((response) => {
        let partner = response.data.data;
        this.name = partner.society_name;
        this.ceoName = partner.ceo_name;
        this.assistantName = partner.assistant_name;
        this.firstTelephone = partner.first_telephone;
        this.secondTelephone = partner.second_telephone;
        this.verificationFile = partner.verification_file;
      });
    },
  },
  mounted() {
    this.getPartner(sessionStorage.getItem("partnerId"));
  },
};
</script>
<style></style>
