<script src="../script/dashboard.js"></script>

<template>
  <main>
    <div id="position">
      <div class="container">
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Category</a></li>
          <li>Page active</li>
        </ul>
      </div>
    </div>

    <div class="margin_60 container">
      <div id="tabs" class="tabs">
        <nav>
          <ul>
            <div class="tab row">
              <span
                class="tablinks col-4"
                v-for="(key, index) in heading"
                :key="key"
                @click="show(key)"
              >
                <div v-if="index == 'Reservations'">
                  <i
                    v-if="heading.Reservations == 0"
                    class="bi bi-grid iconHeading"
                  ></i>
                  <i v-else class="bi bi-grid"></i>
                </div>
                <div v-if="index == 'Favoris'">
                  <i
                    v-if="heading.Favoris == 0"
                    class="bi bi-heart iconHeading"
                  ></i>
                  <i v-else class="bi bi-heart"></i>
                </div>
                <div v-if="index == 'Parametres'">
                  <i
                    v-if="heading.Parametres == 0"
                    class="bi bi-gear iconHeading"
                  ></i>
                  <i v-else class="bi bi-gear"></i>
                </div>
              </span>
            </div>
            <!--    <select
              name=""
              id=""
              class="btn btn-warning d-md-none form-control"
              v-model="headingMobile"
              @change="show(key)"
            >
              <option
                v-for="(key, index) in heading"
                :key="key"
                value="{{key}}"
              >
                {{ index }}
              </option>
            </select> -->

            <li
              v-for="(key, index) in heading"
              :key="key"
              class="d-none d-md-inline"
            >
              <a
                @click="show(key)"
                v-if="index == headTitle"
                href="#"
                class="span activeHeading"
                ><span> {{ index }} </span></a
              >

              <a @click="show(key)" v-else href="#" class="icon-booking"
                ><span> {{ index }}</span></a
              >
            </li>
          </ul>
        </nav>
        <div class="">
          <br />
          <br />
          <section id="section-1" v-if="heading.Reservations == 0" class="">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <br />

                <select class="form-control" v-model="itemToDisplay">
                  <option value="1">Sites Touristiques</option>
                  <option value="2">Hotels</option>
                  <option value="3">Restaurants</option>
                </select>
              </div>
            </div>

            <div class="table-responsive">
              <table class="table" v-if="itemToDisplay == 1">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Site</th>
                    <th scope="col">Date de reservation</th>
                    <th scope="col">Personnes</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Prix Total</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(tourBooking, index) in tourBookings"
                    :key="tourBooking.id"
                  >
                    <th scope="row" v-html="index + 1"></th>
                    <td v-html="tourBooking.tour.name"></td>
                    <td v-html="tourBooking.date"></td>
                    <td v-html="tourBooking.number_of_person"></td>
                    <td v-html="tourBooking.tour.price"></td>
                    <td v-html="tourBooking.total_price"></td>
                    <td v-if="tourBooking.is_accepted == null">En attente</td>
                    <td v-else v-html="tourBooking.is_accepted"></td>
                    <td>
                      <a class="btn btn-info">
                        <i class="icon icon-edit"></i> </a
                      ><a class="btn btn-danger"
                        ><i class="icon icon-trash"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="table" v-if="itemToDisplay == 2">
                <thead>
                  <tr></tr>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Hotel</th>
                    <th scope="col">Date de reservation</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(hotelBooking, index) in hotelBookings"
                    :key="hotelBooking.id"
                  >
                    <th scope="row" v-html="index + 1"></th>
                    <td v-html="hotelBooking.hotel.name"></td>
                    <td v-html="hotelBooking.date"></td>
                    <td v-html="hotelBooking.total_price"></td>
                    <td v-if="hotelBooking.is_accepted == null">En attente</td>
                    <td v-else v-html="hotelBooking.is_accepted"></td>
                    <td>
                      <a class="btn btn-info">
                        <i class="icon icon-edit"></i> </a
                      ><a class="btn btn-danger"
                        ><i class="icon icon-trash"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <table class="table" v-if="itemToDisplay == 3">
                <thead>
                  <tr></tr>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Resto</th>
                    <th scope="col">Date de reservation</th>
                    <th scope="col">Tables</th>
                    <th scope="col">Prix</th>
                    <th scope="col">Prix total</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(restoBooking, index) in restoBookings"
                    :key="restoBooking.id"
                  >
                    <th scope="row" v-html="index + 1"></th>
                    <td v-html="restoBooking.resto.name"></td>
                    <td v-html="restoBooking.date"></td>
                    <td v-html="restoBooking.number_of_tables"></td>
                    <td v-html="restoBooking.resto.table_price"></td>
                    <td v-html="restoBooking.total_price"></td>
                    <td v-if="restoBooking.is_accepted == null">En attente</td>
                    <td v-else v-html="restoBooking.is_accepted"></td>
                    <td>
                      <a class="btn btn-info">
                        <i class="icon icon-edit"></i> </a
                      ><a class="btn btn-danger"
                        ><i class="icon icon-trash"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- End strip booking -->
          </section>
          <!-- End section 1 -->

          <section id="section-2" v-if="heading.Favoris == 0" class="">
            <div class="row">
              <div
                class="col-lg-4 col-md-6"
                v-for="wishList in tourWishlist"
                :key="wishList.id"
              >
                <div class="tour_container">
                  <div class="img_container">
                    <a @click="goToTourDetails(wishList.tour.id)">
                      <img
                        src="img/tour_box_1.jpg"
                        width="800"
                        height="533"
                        class="img-fluid"
                        alt="Image"
                      />

                      <div class="short_info">
                        <span class="price"
                          ><sup>xof</sup>{{ wishList.tour.price }}</span
                        >
                      </div>
                    </a>
                  </div>
                  <div class="tour_title">
                    <h3>
                      <strong> {{ wishList.tour.name }}</strong>
                    </h3>
                    <!-- end rating -->
                    <div class="wishlist_close_admin"></div>
                  </div>
                </div>
                <!-- End box tour -->
              </div>
            </div>
            <!-- End row -->
          </section>
          <!-- End section 2 -->

          <section id="section-3" v-if="heading.Parametres == 0" class="">
            <!-- <div class="row">
              <div class="col-md-6">
                <form @submit.prevent="updatePassword">
                  <div class="add_bottom_30">
                    <h4>Changer votre mot de passe</h4>
                    <div class="form-group">
                      <label>Mot de passe actuel</label>
                      <input
                        class="form-control"
                        name="old_password"
                        id="old_password"
                        type="password"
                        v-model="currentPassword"
                      />
                    </div>
                    <div class="form-group">
                      <label>Nouveau mot de passe</label>
                      <input
                        class="form-control"
                        name="new_password"
                        id="new_password"
                        type="password"
                        v-model="newPassword"
                      />
                    </div>
                    <div class="form-group">
                      <label>Confirmer le nouveau mot de passe</label>
                      <input
                        class="form-control"
                        name="confirm_new_password"
                        id="confirm_new_password"
                        type="password"
                        v-model="newPasswordConfirmation"
                      />
                    </div>
                    <button type="submit" class="btn_1 green">
                      Mettre à jour
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-md-6">
                <form @submit.prevent="updateEmail">
                  <div class="add_bottom_30">
                    <h4>Changer votre email</h4>
                    <div class="form-group">
                      <label>Votre mail actuel</label>
                      <input
                        class="form-control"
                        name="old_email"
                        id="old_email"
                        type="email"
                        v-model="currentEmail"
                      />
                    </div>
                    <div class="form-group">
                      <label>Nouveau mail</label>
                      <input
                        class="form-control"
                        name="new_email"
                        id="new_email"
                        type="email"
                        v-model="newEmail"
                      />
                    </div>
                    <div class="form-group">
                      <label>Confirm new email</label>
                      <input
                        class="form-control"
                        name="confirm_new_password"
                        id="confirm_new_email"
                        type="email"
                        v-model="newEmailConfirmation"
                      />
                    </div>
                    <button type="submit" class="btn_1 green">
                      Mettre à jour
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-md-6">
                <form @submit.prevent="updateProfil">
                  <div class="add_bottom_30">
                    <h4>Profil</h4>
                    <div class="form-group">
                      <label>Nouveau nom d'utilisateur</label>
                      <input
                        class="form-control"
                        name="old_email"
                        id="old_email"
                        type="text"
                        v-model="username"
                      />
                    </div>
                    <div class="form-group">
                      <label>Télephone</label>
                      <input class="form-control" v-model="telephone" />
                    </div>

                    <button type="submit" class="btn_1 green">
                      Mettre à jour
                    </button>
                  </div>
                </form>
              </div>
            </div> -->

            Parametres
            <hr />
            <br />
            <!-- End row -->
          </section>
          <!-- End section 3 -->

          <section id="section-4" v-if="heading.Profil == 0" class="">
            <div class="row">
              <div class="col-md-6">
                <h4>Your profile</h4>
                <ul id="profile_summary">
                  <li>Username <span>info@clara.com</span></li>
                  <li>First name <span>Clara</span></li>
                  <li>Last name <span>Tomson</span></li>
                  <li>Phone number <span>+00 032 42366</span></li>
                  <li>Date of birth <span>13/04/1975</span></li>
                  <li>Street address <span>24 Rue de Rivoli</span></li>
                  <li>Town/City <span>Paris</span></li>
                  <li>Zip code <span>002843</span></li>
                  <li>Country <span>France</span></li>
                </ul>
              </div>
              <div class="col-md-6">
                <p>
                  <img
                    src="img/tourist_guide_pic.jpg"
                    alt="Image"
                    class="img-fluid styled profile_pic"
                  />
                </p>
              </div>
            </div>
            <!-- End row -->

            <div class="divider"></div>

            <div class="row">
              <div class="col-md-12">
                <h4>Edit profile</h4>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>First name</label>
                  <input
                    class="form-control"
                    name="first_name"
                    id="first_name"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Last name</label>
                  <input
                    class="form-control"
                    name="last_name"
                    id="last_name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <!-- End row -->

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Phone number</label>
                  <input
                    class="form-control"
                    name="email_2"
                    id="email_2"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Date of birth <small>(dd/mm/yyyy)</small> </label>
                  <input
                    class="form-control"
                    name="email"
                    id="email"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <!-- End row -->

            <hr />
            <div class="row">
              <div class="col-md-12">
                <h4>Edit address</h4>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Street address</label>
                  <input
                    class="form-control"
                    name="first_name"
                    id="first_name"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>City/Town</label>
                  <input
                    class="form-control"
                    name="last_name"
                    id="last_name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <!-- End row -->

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label>Zip code</label>
                  <input
                    class="form-control"
                    name="email"
                    id="email"
                    type="text"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label>Country</label>
                  <select id="country" class="form-select" name="country">
                    <option value="">Select...</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- End row -->

            <hr />
            <h4>Upload profile photo</h4>
            <div class="form-inline upload_1">
              <div class="form-group">
                <input
                  type="file"
                  name="files[]"
                  id="js-upload-files"
                  multiple
                />
              </div>
              <button type="submit" class="btn_1 green" id="js-upload-submit">
                Upload file
              </button>
            </div>
            <!-- Drop Zone -->
            <h5>Or drag and drop files below</h5>
            <div class="upload-drop-zone" id="drop-zone">
              Just drag and drop files here
            </div>
            <!-- Progress Bar -->
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 60%"
              >
                <span class="sr-only">60% Complete</span>
              </div>
            </div>
            <!-- Upload Finished -->
            <div class="js-upload-finished">
              <h5>Processed files</h5>
              <div class="list-group">
                <a href="#" class="list-group-item list-group-item-success"
                  ><span class="badge alert-success pull-right">Success</span
                  >image-01.jpg</a
                >
              </div>
            </div>
            <!-- End Hidden on mobiles -->

            <hr />
            <button type="submit" class="btn_1 green">Update Profile</button>
          </section>
          <!-- End section 4 -->
        </div>
        <!-- End content -->
      </div>
      <!-- End tabs -->
    </div>
    <!-- end container -->
  </main>
</template>
<style scoped>
.activeHeading {
  background-color: #008489;
  transition: transform 0.2s;
  color: white;
  font-weight: bolder;
}

/* Style the tab */
.tab {
  overflow: hidden;
}

.bi {
  font-size: 25px;
  /* padding-right: 5px;
  padding-left: 5px; */
}
.tabs span {
  padding: 25px;
  border-bottom: 2px solid #008489;
}
.iconHeading {
  color: #008489;
  font-weight: bolder;
  font-size: 30px;
}
@media (min-width: 839px) {
  .tablinks {
    display: none;
  }
}
</style>
