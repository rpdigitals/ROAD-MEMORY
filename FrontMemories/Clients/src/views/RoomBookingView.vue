<script src="../script/room-booking.js"></script>

<template>
  <div class="row">
    <div class="col-lg-2"></div>
    <aside class="col-lg-4 mt-4">
      <p class="d-none d-xl-block d-lg-block"></p>
      <div class="box_style_1 expose">
        <h3 class="inner">Reserver</h3>
        <div class="row">
          <div class="form-group col-md-6">
            <label><i class="icon-calendar-7"></i> date</label>
            <input
              class="date-pick form-control"
              type="date"
              v-model="date"
              placeholder="Choisir la date"
            />
          </div>
          <div class="form-group col-md-6">
            <label>Nombre de nuits</label>
            <div class="">
              <input
                type="number"
                min="1"
                v-model="numberOfNigth"
                class="form-control"
              />
            </div>
          </div>
        </div>

        <br />

        <div v-if="hasBooked == false">
          <a class="btn_full" @click="bookHotel" v-if="date !== ''">Reserver</a>
          <a class="btn_full_outline" href="#"
            ><i class=""></i> {{ room.price }} xof</a
          >
        </div>
        <div class="alert alert-success" v-else>
          Votre demande de reservation a bien été envoyé <br />
          Une confirmation vous sera envoyé pour poursuivre le payement. <br />
          Merci <br />
          <router-link to="/hotel-list" class="btn btn-success">Ok</router-link>
        </div>
        <table class="table table_summary">
          <tbody>
            <tr class="total">
              <td>Prix Total</td>
              <td>{{ numberOfNigth * room.price }} xof</td>
            </tr>
          </tbody>

          <tbody></tbody>
        </table>
      </div>

      <!--/box_style_1 -->
    </aside>
    <aside class="col-lg-4 mt-4">
      <p class="d-none d-xl-block d-lg-block"></p>
      <img
        alt="picture"
        src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
        class="img-fluid"
      />
      <div class="card text-center text-secondary">
        <div class="card-body">
          <h5 class="card-title">Chambre : {{ room.room_number }} <br /></h5>
        </div>
        <div class="card-footer text-muted"></div>
      </div>
      <!--/box_style_1 -->
    </aside>
  </div>
</template>
