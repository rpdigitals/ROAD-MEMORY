<style></style>

<template>
  <div>
    <card class="card" title="Ajouter une chambre">
      <div>
        <form @submit="addRoom()">
          <div class="row">
            <div class="col-md-6">
              <div class="">
                <fg-input
                  type="text"
                  label="Numéro de chambre"
                  placeholder="ex : N123"
                  required
                  v-model="roomNumber"
                >
                </fg-input>
              </div>
              <div class="">
                <fg-input
                  type="number"
                  label="Prix/nuit ( xof )"
                  placeholder="10000"
                  required
                  v-model="price"
                >
                </fg-input>
              </div>
            </div>
            <div class="col-md-6">
              <div class="">
                <fg-input type="file" label="Image" required v-model="picture">
                </fg-input>
              </div>
              <div class="">
                <fg-input
                  type="number"
                  label="Catégorie de chambre"
                  required
                  v-model="category"
                >
                </fg-input>
              </div>
            </div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn-info">Modifier</button>
          </div>
        </form>
      </div>
    </card>
    <card class="card" title="Ajouter une catégorie de chambre">
      <div>
        <form @submit="addRoomCategory()">
          <div class="row">
            <div class="col-md-12">
              <div class="col-md-6" style="float: left">
                <fg-input
                  type="text"
                  label="Nom de la category"
                  placeholder="ex : chambre double deluxe"
                  required
                  v-model="categoryName"
                >
                </fg-input>
              </div>
              <div
                class="text-center col-md-6 align-items-center"
                style="float: right"
              >
                <button type="submit" class="btn-info">Ajouter</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </card>

    <card class="card" title="">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10 text-center">
          <span style="font-size: large">Catégories de chambres</span>
          <div class="accordion" id="accordionExample">
            <div
              v-for="(category, index) in allCategories"
              :key="index"
              style="border: 1px solid #7dd0e4; border-radius: 5px"
              class="list-group-item d-flex justify-content-between align-items-center row accordion-item"
            >
              <div class="col-6">{{ category.name }}</div>
              <div class="col-2">
                <span
                  class="badge bg-primary rounded-pill"
                  style="font-size: large"
                >
                  {{ category.rooms.length }}</span
                >
              </div>

              <div class="col-4 text-center">
                <span>
                  <button
                    class="btn btn-info"
                    @click="showEditModal(category.id, category.name)"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                  <button
                    class="btn btn-danger"
                    @click="deleteRoomCategory(category.id)"
                  >
                    <i class="fa fa-trash"></i></button
                ></span>
                <button
                  class="btn btn-info"
                  type="button"
                  data-bs-toggle="collapse"
                  :data-bs-target="'#' + category.name + ''"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <i class="ti-eye"></i>
                </button>
              </div>
              <div
                :id="category.name"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <table class="table table-striped table-dark">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">N° de chambre</th>
                        <th scope="col">Prix (xof)</th>
                        <th scope="col">Image</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(room, index) in category.rooms" :key="index">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ room.room_number }}</td>
                        <td>{{ room.price }}</td>
                        <td>{{ room.picture }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </card>
    <Modal v-model="showModal" title="Modifier la catégorie de chambre">
      <form @submit.prevent="updateRoomCategory()">
        <div class="form-group">
          <label for="exampleInputEmail1">Nouveau nom</label>
          <input
            type="text"
            class="form-control"
            v-model="categoryToeditName"
            maxlength="15"
            required
          />
        </div>

        <button type="submit" class="btn btn-info">Modifier</button>
      </form>
    </Modal>
  </div>
</template>
<script src="../script/add-room.js"></script>
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
