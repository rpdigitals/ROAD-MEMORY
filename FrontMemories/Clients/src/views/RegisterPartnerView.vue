<script src="../script/register-partner.js"></script>

<template>
  <main>
    <section id="hero" class="login">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div id="login">
              <div class="text-center">
                <!-- <img
                  src="img/logo_sticky.png"
                  alt="Image"
                  width="160"
                  height="34"
                /> -->
                Devenir notre partenaire
              </div>
              <hr />
              <form @submit.prevent="register">
                <a href="#0" class="social_bt facebook"
                  >S'inscrire avec Facebook</a
                >
                <a href="#0" class="social_bt google">S'inscrire avec Google</a>
                <div class="divider"><span>Ou</span></div>

                <div class="form-group">
                  <label>Adresse mail</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="ex : johndoe@example.com"
                    v-model="email"
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
                <div class="text-danger text-center" v-if="registerStatus == 0">
                  cet email est déja utilisé
                </div>

                <button type="submit" class="btn_full">S'inscrire</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
