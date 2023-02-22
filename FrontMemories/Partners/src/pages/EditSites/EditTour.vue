<style></style>

<template>
  <card class="card" title="Mise à jour du site">
    <div>
      <form @submit.prevent="editTour" enctype="mutipart/form-data">
        <div v-if="carForm == 0">
          <form @submit="carForm = 1">
            <div class="row">
              <div class="col-md-4">
                <fg-input
                  type="text"
                  label="Nom du site"
                  placeholder="ex : Faille Aledjo"
                  v-model="name"
                >
                </fg-input>
              </div>
              <div class="col-md-4">
                <fg-input
                  type="number"
                  label="Prix de visite ( xof )"
                  placeholder="10000"
                  v-model="price"
                >
                </fg-input>
              </div>
              <div class="col-md-4">
                <fg-input
                  type="number"
                  label="Durée de visite ( h )"
                  placeholder="3h"
                  v-model="visitHour"
                  min="1"
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
              <div class="col-md-4">
                <label for="">Categorie</label>
                <select class="form-control" v-model="tourCategoryId">
                  <option
                    :value="tourCategory.id"
                    v-for="tourCategory in tourCategoryFromBd"
                    :key="tourCategory.id"
                  >
                    {{ tourCategory.type }}
                  </option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <fg-input
                  ref="fileInput"
                  type="file"
                  label="Image"
                  onchange="previewPicture(this)"
                  placeholder="image"
                  accept="image/*"
                  v-model="picture"
                >
                </fg-input>
                <img
                  src="#"
                  alt=""
                  id="image"
                  style="max-width: 500px; margin-top: 20px"
                />
              </div>

              <div class="col-md-4">
                <fg-input type="text" label="Adresse" v-model="address">
                </fg-input>
              </div>
              <div class="col-md-4">
                <label for="">Langues</label>
                <select
                  class="form-control"
                  multiple
                  v-model="languages"
                  max="3"
                >
                  <option value="Français">Français</option>
                  <option value="English">English</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Deutsh">Deutsh</option>
                  <option value="Haoussa">Haoussa</option>
                  <option value="Ewe">Ewe</option>
                  <option value="Kabye">Kabye</option>
                  <option value="Kotokoli">Kotokoli</option>
                  <option value="Autres">Autres</option>
                </select>
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
          </form>
        </div>
        <div class="clearfix"></div>
        <div v-if="carForm == 1">
          <strong style="font-size: 18px">
            Caracteristiques et facilités du site
          </strong>
          <div class="row">
            <div class="col-md-4">
              <label for="">Guide touristique</label>
              <select class="form-control" v-model="tourGuide">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="">Animaux de compagnie autorisés</label>
              <select class="form-control" v-model="animals">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
            <div class="col-md-4">
              <label for="">Dinner offert</label>
              <select class="form-control" v-model="dinner">
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
              <label for="">Visite enfants gratuite</label>
              <select class="form-control" v-model="children">
                <option value="1">Oui</option>
                <option value="0">Non</option>
              </select>
            </div>
          </div>
          <div
            class="alert alert-success text-center"
            style="font-size: 20px"
            v-if="tourEditedSuccessfully == 1"
          >
            <!-- <strong> Site crée avec succès </strong>
            <strong>
              <router-link to="/services" class="btn btn-success"
                >OK</router-link
              >
            </strong> -->
          </div>
          <div
            class="alert alert-danger text-center"
            style="font-size: 20px"
            v-if="tourEditedSuccessfully == 0"
          >
            <strong>
              Une erreur s'est produite. Vérifiez votre connexion et réessayez
            </strong>
            <strong>
              <button @click="resetTourEditing" class="btn">OK</button>
            </strong>
          </div>
          <div class="text-center">
            <button
              type="submit"
              @click="carForm == 0"
              class="btn-info"
              v-if="tourEditedSuccessfully == 2"
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
<script src="../../script/edit-tour.js"></script>
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
