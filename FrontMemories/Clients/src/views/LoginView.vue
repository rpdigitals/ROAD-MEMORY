<script src="../script/login.js"></script>

<template>
  <main>
    <section id="hero" class="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div id="login">
              <!-- <div class="text-center">
                <img
                  src="img/logo_sticky.png"
                  alt="Image"
                  width="160"
                  height="34"
                />
              </div> -->
              <hr />
              <form @submit.prevent="login">
                <a href="#0" class="social_bt facebook"
                  >Se connecter avec Facebook</a
                >
                <a href="#0" class="social_bt google"
                  >Se connecter avec Google</a
                >
                <div class="divider"><span>Ou</span></div>
                <div class="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="ex : johndoe@gmail.com"
                    v-model="email"
                    maxlength="25"
                    required
                  />
                </div>

                <div class="form-group">
                  <label>Mot de passe</label>
                  <input
                    type="password"
                    class="form-control"
                    minlength="8"
                    placeholder="********"
                    required
                    v-model="password"
                  />
                </div>
                <div class="small text-dark text-center">
                  <router-link to="/password-forgotten" href="#"
                    >Mot de passe oublié ?</router-link
                  >
                </div>
                <!-- <span class="small">
                  <router-link to="/password-forgotten" href="#"
                    >Mot de passe oublié ?</router-link
                  ></span
                > -->
                <button type="submit" class="btn_full">Se connecter</button>
                <div class="text-danger" v-if="loggingFailed == true">
                  Vos identifiants sont incorrects
                </div>
                <router-link to="/register" class="btn_full_outline"
                  >S'inscrire</router-link
                >
              </form>
              <br />
              <div class="text-center">
                <router-link
                  to="/register-partner"
                  href="#"
                  style="
                    color: #008489;
                    text-decoration: underline;
                    font-weight: bolder;
                  "
                  >Devenir notre partenaire</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
