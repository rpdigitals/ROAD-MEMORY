<script src="../script/tour-booking.js"></script>

<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Sites touristiques</a></li>
          <li><a href="#">Reservation</a></li>
        </ul>
      </div>
    </div>
    <!-- End position -->

    <div class="container margin_60">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-lg-8">
          <table class="table table-striped cart-list add_bottom_30">
            <thead>
              <tr>
                <th>Site</th>
                <th>Adultes</th>
                <th>Enfants</th>
                <th>Prix</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="thumb_cart">
                    <img src="img/thumb_cart_1.jpg" alt="Image" />
                  </div>
                  <span class="item_cart">{{ tour }}</span>
                </td>
                <td>{{ numberOfPerson }}</td>
                <td>{{ numberOfChildren }}</td>
                <td>{{ price }}</td>
                <td>
                  <strong>{{ amount }}</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            v-if="isBooked"
            class="alert alert-success text-center"
            style="font-size: 17px"
          >
            Votre demande a été envoyé . <br />
            Une confirmation de reservation vous sera envoyé afin de poursuivre
            le payement . <br />
            <router-link to="/tour-list" class="btn btn-success">
              OK</router-link
            >
          </div>

          <!-- End aside -->
        </div>

        <!-- End col -->
      </div>
      <!--End row -->
      <div class="row">
        <div class="col-md-4"></div>
        <aside class="col-lg-4">
          <div class="box_style_1">
            <h3 class="inner">- Reservation -</h3>
            <table class="table table_summary">
              <tbody>
                <tr>
                  <td>Adultes</td>
                  <td class="text-end">{{ numberOfPerson }}</td>
                </tr>
                <tr>
                  <td>Enfants</td>
                  <td class="text-end">{{ numberOfChildren }}</td>
                </tr>

                <tr class="total">
                  <td>Prix total</td>
                  <td class="text-end">{{ amount }}</td>
                </tr>
              </tbody>
            </table>
            <a class="btn_full" v-if="isBooked"
              >Demande de Reservation effectué <i class="icon-check"></i
            ></a>
            <a class="btn_full" v-else @click="createTourBooking">Reserver</a>

            <router-link to="/tour-list" class="btn_full_outline"
              ><i class="icon-right"></i>Retour
            </router-link>
          </div>
        </aside>
      </div>
    </div>
    <!--End container -->
  </main>
</template>
