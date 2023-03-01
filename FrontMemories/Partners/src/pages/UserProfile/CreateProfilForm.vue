<template>
  <card class="card" title="Modifiez votre profil">
    <div>
      <form @submit.prevent="createProfile()">
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
          <button type="submit" class="btn btn-info" round>Valider</button>
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
    createProfile() {
      Profil.addPartner({
        society_name: this.name,
        ceo_name: this.ceoName,
        address: this.address,
        fixed_number: this.fixedNumber,
        assistant_name: this.assistantName,
        first_telephone: this.firstTelephone,
        second_telephone: this.secondTelephone,
        verification_file: this.verificationFile,
        user_id: sessionStorage.getItem("userId"),
      }).then((response) => {
        console.log(response.data);
        sessionStorage.setItem("partnerId", response.data.partner_id);
        // # alert success
        this.$swal.fire({
          position: "top-end",
          icon: "success",
          title: "Votre societé a bien été ajouté",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$router.push("/");
      });
    },
    deleteAllCookies() {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
    },
  },
  mounted() {
    // sessionStorage.clear();
    // this.deleteAllCookies();
    if (
      sessionStorage.getItem("userId") == "" ||
      sessionStorage.getItem("userId") == null
    ) {
      sessionStorage.setItem("userId", document.cookie.trim().substring(17));
      this.deleteAllCookies();
    }
    // console.log(document.cookie.trim().substring(17));
    // console.log(sessionStorage.getItem("userId"));
  },
};
</script>
<style></style>
