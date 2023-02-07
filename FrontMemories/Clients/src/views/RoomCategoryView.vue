<script src="../script/room-category.js"></script>

<template>
  <div class="mt-4">
    <div class="row">
      <div class="col-md-12">
        <div id="mdb-lightbox-ui"></div>

        <div class="mdb-lightbox m-5">
          <div class="row">
            <figure class="col-md-4" v-for="room in rooms" :key="room.id">
              <a class="black-text" data-size="1600x1067">
                <img
                  alt="picture"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
                  class="img-fluid"
                />
                <div class="card text-center text-secondary">
                  <div class="card-body">
                    <h5 class="card-title">
                      No de Chambre : {{ room.room_number }} <br />
                      Prix : {{ room.price }} xof
                    </h5>

                    <a @click="bookRoom(room.id)" class="btn_1">Reserver</a>
                  </div>
                  <div class="card-footer text-muted"></div>
                </div>
              </a>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
