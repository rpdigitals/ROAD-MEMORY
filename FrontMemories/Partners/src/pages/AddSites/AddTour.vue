<template>
  <card class="card" title="Ajouter un site touristique">
    <div>
      <form @submit.prevent="addTour">
        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Nom du site"
              placeholder="ex : Faille Aledjo"
              required
              v-model="name"
            >
            </fg-input>
          </div> 
          <div>
          <div class="col-md-4">
            <fg-input
              type="number"
              label="Prix de visite ( xof )"
              placeholder="10000"
              required
              v-model="price"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="number"
              label="Durée de visite ( h )"
              placeholder="3h"
              required
              v-model="visitHour"
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
              required
              v-model="longitude"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Latitude"
              placeholder="3°"
              required
              v-model="latitude"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <label for="">Categorie</label>
            <select class="form-control" required v-model="tourCategoryId">
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
              type="file"
              label="Image"
              placeholder="image"
              accept="image/*"
              required
              v-model="picture"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Adresse"
              placeholder="Kara ville"
              required
              v-model="address"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <label for="">Langues</label>
            <select class="form-control" multiple required v-model="languages">
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
                required
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
                  required
                  v-model="monSt"
                  class="inputtime"
                  type="time"
                  name=""
                  id=""
                />
                A
                <input
                  required
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
                  required
                  v-model="tueSt"
                  class="inputtime"
                  type="time"
                  name=""
                  id=""
                />
                A
                <input
                  required
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
                  required
                  v-model="wedSt"
                  class="inputtime"
                  type="time"
                  name=""
                  id=""
                />
                A
                <input
                  required
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
                  required
                  v-model="turSt"
                  class="inputtime"
                  type="time"
                  name=""
                  id=""
                />
                A
                <input
                  required
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
                  required
                  v-model="friSt"
                  class="inputtime"
                  type="time"
                  name=""
                  id=""
                />
                A
                <input
                  required
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
                  required
                  v-model="satSt"
                  class="inputtime"
                  type="time"
                  name=""
                  id=""
                />
                A
                <input
                  required
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
                  required
                  v-model="sunSt"
                  class="inputtime"
                  type="time"
                  name=""
                  id=""
                />
                A
                <input
                  required
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
          <button type="submit" class="btn-info">AJOUTER</button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
  <script src="../../script/add-tour.js">
</script>
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
  
