<script src="../script/password.js"></script>

<template>
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
            </div>
            <hr />
            <form>
              <div class="form-group">
                <label>Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label>Confirm password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password2"
                  placeholder="Confirm password"
                />
              </div>
              <div id="pass-info" class="clearfix"></div>
              <button class="btn_full">Create an account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
