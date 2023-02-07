<script>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
export default {};
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
</script>
<template>
  <div class="mt-4">
    <div class="row">
      <div class="col-md-12">
        <div id="mdb-lightbox-ui"></div>

        <div class="mdb-lightbox no-margin">
          <div class="row">
            <figure class="col-md-4">
              <a
                class="black-text"
                href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(121).webp"
                data-size="1600x1067"
              >
                <img
                  alt="picture"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
                  class="img-fluid"
                />
                <h3 class="text-center my-3">Photo title</h3>
              </a>
            </figure>

            <figure class="col-md-4">
              <a
                class="black-text"
                href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(96).webp"
                data-size="1600x1067"
              >
                <img
                  alt="picture"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(96).webp"
                  class="img-fluid"
                />
                <h3 class="text-center my-3">Photo title</h3>
              </a>
            </figure>

            <figure class="col-md-4">
              <a
                class="black-text"
                href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(104).webp"
                data-size="1600x1067"
              >
                <img
                  alt="picture"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(104).webp"
                  class="img-fluid"
                />
                <h3 class="text-center my-3">Photo title</h3>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
