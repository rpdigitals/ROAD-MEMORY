<script src="../script/register.js"></script>

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
              <div>
                <button @click="signIn()">Sign in with Google</button>
              </div>
              <form @submit.prevent="register">
                <a href="#0" class="social_bt facebook"
                  >S'inscrire avec Facebook</a
                >

                <a href="#0" class="social_bt google">S'inscrire avec Google</a>
                <div class="divider"><span>Ou</span></div>
                <div class="form-group">
                  <label>Nom complet</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="ex : John Doe"
                    v-model="name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label>Telephone (avec indicatif)</label>
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="+22897977007"
                    v-model="telephone"
                    required
                  />
                </div>
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
                <div class="text-danger text-center" v-if="registerStatus == 3">
                  Veuillez entrer un numéro de téléphone correct
                </div>

                <button type="submit" class="btn_full">S'inscrire</button>
                <router-link to="/login" class="btn_full_outline"
                  >Se connecter</router-link
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
