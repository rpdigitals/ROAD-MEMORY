<style></style>

<template>
  <card class="card" title="Ajouter une voiture">
    <div>
      <form @submit.prevent="addCar">
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Nom de la voiture"
              placeholder="ex : Elantra"
              required
              v-model="name"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Marque de la voiture"
              placeholder="ex : Hyundai"
              required
              v-model="brand"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="number"
              label="Prix ( xof / Jour )"
              min="1"
              placeholder="ex : Hyundai"
              required
              v-model="price"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="file"
              label="Image 1"
              accept="image/*"
              required
              v-model="picture1"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="file"
              label="Image 2"
              accept="image/*"
              required
              v-model="picture2"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="file"
              label="Image 3"
              accept="image/*"
              required
              v-model="picture3"
            >
            </fg-input>
          </div>
        </div>
        <div class="row"></div>
        <div
          class="alert alert-success text-center"
          style="font-size: 20px"
          v-if="carCreatedSuccessfully == 1"
        >
          <strong> Voiture crée avec succès </strong>
          <strong>
            <router-link to="/services" class="btn btn-success">OK</router-link>
          </strong>
        </div>
        <div
          class="alert alert-danger text-center"
          style="font-size: 20px"
          v-if="carCreatedSuccessfully == 0"
        >
          <strong>
            Une erreur s'est produite. Vérifiez votre connexion et réessayez
          </strong>
          <strong>
            <button @click="initializeCarCreation" class="btn">OK</button>
          </strong>
        </div>

        <div class="text-center">
          <button type="submit" class="btn-info">AJOUTER</button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script src="../../script/add-car.js"></script>
<style scoped>
.day {
  display: block;
  padding-bottom: 7px;
  width: 70px;
}
.time {
  display: flex;
}
.inputtime {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 8px;
  border: solid 2px rgb(30, 120, 150);
  border-radius: 5px;
}
.textDay {
  color: rgb(30, 120, 150);
}
.ms {
  margin-left: 50px;
}

.btn-info {
  margin-left: 15px;
  margin-right: 15px;
  font-family: Raleway-SemiBold;
  font-size: 17px;
  color: rgba(91, 192, 222, 0.75);
  letter-spacing: 1px;
  line-height: 22px;
  border: 2px solid rgba(91, 192, 222, 0.75);
  border-radius: 30px;
  background: transparent;
  transition: all 0.3s ease 0s;
}
.btn-info:hover {
  color: #fff;
  background: rgba(91, 192, 222, 0.75);
  border: 2px solid rgba(91, 192, 222, 0.75);
}
</style>
