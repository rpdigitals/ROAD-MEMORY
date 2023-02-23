<style></style>

<template>
  <card class="card" title="Mise à jour de l'hotel ">
    <div>
      <form @submit.prevent="editHotel">
        <div v-if="carForm == 0">
          <form @submit.prevent="carForm = 1">
            <div class="row">
              <div class="col-md-4">
                <fg-input
                  type="text"
                  label="Nom de l'hotel"
                  placeholder="ex : Hotel 2 Fevrier"
                  v-model="name"
                >
                </fg-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <fg-input
                  type="text"
                  label="Longitude"
                  placeholder="2°"
                  v-model="longitude"
                >
                </fg-input>
              </div>
              <div class="col-md-4">
                <fg-input
                  type="text"
                  label="Latitude"
                  placeholder="3°"
                  v-model="latitude"
                >
                </fg-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <fg-input
                  type="file"
                  label="Image"
                  placeholder="image"
                  accept="image/*"
                  v-model="picture"
                >
                </fg-input>
              </div>
              <div class="col-md-4">
                <fg-input
                  type="text"
                  label="Adresse"
                  placeholder="Kara ville"
                  v-model="address"
                >
                </fg-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Description de site</label>
                  <textarea
                    rows="10"
                    class="form-control border-input"
                    placeholder="Here can be your description"
                    maxlength="1500"
                    v-model="description"
                  >
                  </textarea>
                </div>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-5">
                <div class="form-group ms-50">
                  <label>Horaires</label> <br />
                  <div class="time">
                    <span class="day text-secondary text-secondary"
                      ><span class="textDay">Lundi </span></span
                    >
                    : De
                    <input
                      v-model="monSt"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                    A
                    <input
                      v-model="monEn"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                  </div>
                  <div class="time">
                    <span class="day text-secondary"
                      ><span class="textDay">Mardi </span></span
                    >
                    : De
                    <input
                      v-model="tueSt"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                    A
                    <input
                      v-model="tueEn"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                  </div>
                  <div class="time">
                    <span class="day text-secondary"
                      ><span class="textDay">Mercredi</span></span
                    >
                    : De
                    <input
                      v-model="wedSt"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                    A
                    <input
                      v-model="wedEn"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                  </div>
                  <div class="time">
                    <span class="day text-secondary"
                      ><span class="textDay">Jeudi </span></span
                    >
                    : De
                    <input
                      v-model="turSt"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                    A
                    <input
                      v-model="turEn"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                  </div>
                  <div class="time">
                    <span class="day text-secondary"
                      ><span class="textDay">Vendredi</span>
                    </span>
                    : De
                    <input
                      v-model="friSt"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                    A
                    <input
                      v-model="friEn"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                  </div>
                  <div class="time">
                    <span class="day text-secondary"
                      ><span class="textDay">Samedi </span></span
                    >
                    : De
                    <input
                      v-model="satSt"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                    A
                    <input
                      v-model="satEn"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                  </div>
                  <div class="time">
                    <span class="day text-secondary"
                      ><span class="textDay">Dimanche</span>
                    </span>
                    : De
                    <input
                      v-model="sunSt"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                    A
                    <input
                      v-model="sunEn"
                      class="inputtime"
                      type="time"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button type="submit" class="btn-info" style="font-size: 45px">
                <i class="ti-arrow-right"></i>
              </button>
            </div>
            <div class="clearfix"></div>
          </form>
        </div>
        <div class="clearfix"></div>
        <div v-if="carForm == 1">
          <strong style="font-size: 18px">
            Caracteristiques et facilités de l'hotel
          </strong>
          <div class="row">
            <div class="col-md-4">
              <label for="">Wifi gratuit</label>
              <select class="form-control" v-model="wifi">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="">Ecran plasma disponible</label>
              <select class="form-control" v-model="plasmaTv">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="">Piscine</label>
              <select class="form-control" v-model="swimmingPool">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <label for="">Cigarettes autorisés</label>
              <select class="form-control" v-model="smokeArea">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="">Animaux de compagnie</label>
              <select class="form-control" v-model="pet">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="">Salle de GYM</label>
              <select class="form-control" v-model="fitnessCenter">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="">Restaurant</label>
              <select class="form-control" v-model="restaurant">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="">Parking</label>
              <select class="form-control" v-model="parking">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
          </div>

          <div
            class="alert alert-danger text-center"
            style="font-size: 20px"
            v-if="hotelEditedSuccessfully == 0"
          >
            <strong>
              Une erreur s'est produite. Vérifiez votre connexion et réessayez
            </strong>
            <strong>
              <button @click="resetHotelEdition" class="btn">OK</button>
            </strong>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn-info"
              v-if="hotelEditedSuccessfully == 2"
            >
              MODIFIER
            </button>
          </div>
          <div class="clearfix"></div>
        </div>
      </form>
    </div>
  </card>
</template>
<script src="../../script/edit-hotel.js"></script>
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
