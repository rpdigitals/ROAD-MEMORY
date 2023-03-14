<script src="../script/subscriptions.js"></script>
<template>
  <div>
    <div>
      <div class="row">
        <div
          class="col-md-4 col-sm-6"
          v-for="substype in substypes"
          :key="substype.id"
        >
          <div v-if="substype.id !== subsInfo.subs_type.id">
            <div class="pricing-table-3 pricing">
              <div class="pricing-table-header">
                <h4>
                  <strong>{{ substype.name }}</strong>
                </h4>
              </div>
              <div class="price"><strong>xof</strong> {{ substype.price }}</div>
              <div class="pricing-body">
                <ul class="pricing-table-ul">
                  <li><i class="fa fa-vcard-o"></i> {{ substype.name }}</li>
                  <li><i class="fa fa-money"></i>{{ substype.price }}</li>
                  <li>
                    <i class="fa fa-clock-o"></i> {{ substype.validity }} Jours
                  </li>
                  <!-- <li>
                  <i class="fa fa-info-circle"></i> {{ substype.description }}
                </li> -->
                </ul>
                <a @click="changeSubscription(substype.id)" class="subscribe"
                  >SOUSCRIRE</a
                >
              </div>
            </div>
          </div>
          <div v-else>
            <div class="pricing-table-3 active-subs">
              <div class="pricing-table-header">
                <h4>
                  <strong style="color: #ff9f00">{{ substype.name }}</strong>
                </h4>
              </div>
              <div class="price"><strong>xof</strong> {{ substype.price }}</div>
              <div class="pricing-body">
                <ul class="pricing-table-ul">
                  <li><i class="fa fa-vcard-o"></i> {{ substype.name }}</li>
                  <li><i class="fa fa-money"></i>{{ substype.price }}</li>
                  <li>
                    <i class="fa fa-clock-o"></i> {{ substype.validity }} Jours
                    |
                    <span
                      class="text-info"
                      style="font-size: 14px; font-weight: 500"
                      >{{ subsInfo.subscription.end_date }}</span
                    >
                  </li>
                  <!-- <li>
                  <i class="fa fa-info-circle"></i> {{ substype.description }}
                </li> -->
                </ul>

                <a
                  v-if="subsInfo.is_valid == 1"
                  href="#"
                  class="status text-dark text-bold"
                  style="font-size: 17px; font-weight: 500"
                  >PLAN ACTIF</a
                >
                <a
                  v-else
                  href="#"
                  class="status text-dark text-bold"
                  style="font-size: 17px; font-weight: 500"
                  >EXPIRÉ</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style scoped>
@charset "utf-8";
/* CSS Document */
@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,500,400,300,800);
@import url(http://fonts.googleapis.com/css?family=Ubuntu:300,400,700);
@import url(http://fonts.googleapis.com/css?family=Roboto:100,300,400);

@import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css);

body {
  background-color: #f0f3f6;
  overflow-x: hidden;
}
h1,
h2,
h3,
h4,
h5,
h6,
div,
input,
p,
a,
button {
  font-family: "Open Sans";
  margin: 0px;
  cursor: pointer;
}

h3 {
  font-size: 22px;
}
.container-fluid,
.container {
  margin: auto;
  padding: 0px 15px;
  max-width: 1200px;
}
label {
  font-weight: 500;
}
.form-group {
  margin-bottom: 5px;
}

input,
textarea,
select,
button {
  margin: 5px 0px;
  font-size: 13px !important;
  border-radius: 0px;
}
input[type="text"],
input[type="password"],
textarea,
input[type="email"],
select,
textarea {
  width: 100%;
  border: 1px solid #dadada;
  padding: 5px 10px;
  height: 45px;
}
input[type="submit"],
input[type="button"],
input[type="reset"],
button {
  border: none;
  font-size: 11px;
  border-radius: 3px;
  height: 45px;
  color: #fff;
}

.btn:hover,
.btn:focus {
  cursor: pointer;
  color: #fff;
}
input[type="radio"] {
  margin: 0px;
  padding: 0px;
  height: auto;
}
.form-control {
  box-shadow: none !important;
  border-radius: 0px;
}
.form-control:focus {
  border: 1px solid #ccc;
}
.btn:focus {
  box-shadow: none !important;
}

textarea {
  width: 100%;
}
input[type="reset"] {
  margin-left: 10px;
}
textarea {
  min-height: 100px;
}
a {
  color: inherit;
}
a:hover,
a:focus {
  text-decoration: none !important;
  color: inherit !important;
}
ul {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.fixed {
  position: fixed;
}

.pricing-table-container {
  padding: 50px 0px;
}
.description {
  padding: 15px 0px;
}
.description a,
.description button {
  padding: 10px;
  font-size: 13px;
  display: block;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}
.description a.active {
  background-color: #fff;
  padding-left: 25px;
}

/* DEMO 01 */
.pricing-table-3 {
  background-color: #fff;
  margin: 15px auto;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  border-radius: 0px 10px 0px 10px;
  overflow: hidden;
  position: relative;
  min-height: 250px;
  transition: all ease-in-out 0.25s;
}
.pricing-table-3.active-subs {
  transform: scale(1.1, 1.1);
}

.pricing-table-3.basic .price {
  background-color: #28b6f6;
  color: #fff;
}
.pricing-table-3.active-subs .price {
  background-color: #ff9f00;
  color: #fff;
}
.pricing-table-3.pricing .price {
  background-color: #008489;
  color: #fff;
}

.pricing-table-3 .pricing-table-header {
  background-color: #212121;
  color: #fff;
  padding: 20px 0px 0px 20px;
  position: absolute;
  z-index: 5;
}
.pricing-table-3 .pricing-table-header p {
  font-size: 12px;
  opacity: 0.7;
}
.pricing-table-3 .pricing-table-header::before {
  content: "";
  position: absolute;
  left: -50px;
  right: -180px;
  height: 125px;
  top: -50px;
  background-color: #212121;
  z-index: -1;
  transform: rotate(-20deg);
}

.pricing-table-3 .price {
  position: absolute;
  top: 0px;
  text-align: right;
  padding: 110px 20px 0px 0px;
  right: 0px;
  left: 0px;
  font-size: 20px;
  z-index: 4;
}
.pricing-table-3 .price::before {
  content: "";
  position: absolute;
  left: 0px;
  right: 0px;
  height: 100px;
  bottom: -25px;
  background-color: inherit;
  transform: skewY(10deg);
  z-index: -1;
  box-shadow: 0px 5px 0px 5px rgba(0, 0, 0, 0.05);
}

.pricing-table-3 .pricing-body {
  padding: 20px;
  padding-top: 200px;
}
.pricing-table-3 .pricing-table-ul li {
  color: rgba(0, 0, 0, 0.7);
  font-size: 13px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.pricing-table-3 .pricing-table-ul .fa {
  margin-right: 10px;
}
/* .pricing-table-3.basic .pricing-table-ul .fa {
  color: #28b6f6;
}
.pricing-table-3.active-subs.pricing-table-ul .fa {
  color: #ff9f00;
} */
.pricing-table-3.pricing .pricing-table-ul .fa {
  color: #008489;
}
.pricing-table-3.active-subs .pricing-table-ul .fa {
  color: #ff9f00;
}
.pricing-table-3 .subscribe {
  margin: 10px 20px;
  display: block;
  text-align: center;
  background-color: #212121;
  padding: 10px 0px;
  color: white;
  font-weight: 500;
  font-size: 17px;
}
.pricing-table-3 .status {
  margin: 10px 20px;
  display: block;
  text-align: center;
  background-color: #ff9f00;
  padding: 10px 0px;
  color: #ff9f00;
}
</style>
