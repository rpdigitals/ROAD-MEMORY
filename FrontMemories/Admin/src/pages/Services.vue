<template>
  <div>
    <nav class="nav nav-pills flex-column flex-sm-row">
      <a
        v-for="(key, index) in heading"
        :key="key"
        class="flex-sm-fill text-sm-center nav-link text-large"
        :id="`key${key}`"
        href="#"
        style="font-size: large; color: rgb(100, 180, 200)"
        @click="show(key)"
        >{{ index }}</a
      >
    </nav>
    <div class="row" v-if="heading.Sites == 0">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div
            slot="raw-content"
            class="table-responsive"
            v-if="tableDataTour.length > 0"
          >
            <paper-table :data="table1.data" :columns="table1.columns">
            </paper-table>
          </div>
          <div v-else>aucun site trouvé</div>
        </card>
      </div>
    </div>
    <div class="row" v-if="heading.Resto == 0">
      <div class="col-12">
        <card :title="table2.title" :subTitle="table2.subTitle">
          <div
            slot="raw-content"
            class="table-responsive"
            v-if="tableDataResto.length > 0"
          >
            <paper-table :data="table2.data" :columns="table2.columns">
            </paper-table>
          </div>
          <div v-else>aucun restaurant</div>
        </card>
      </div>
    </div>
    <div class="row" v-if="heading.Hotels == 0">
      <div class="col-12">
        <card :title="table3.title" :subTitle="table3.subTitle">
          <div
            slot="raw-content"
            class="table-responsive"
            v-if="tableDataHotel.length > 0"
          >
            <paper-table :data="table3.data" :columns="table3.columns">
            </paper-table>
          </div>
          <div v-else>aucun hotel</div>
        </card>
      </div>
    </div>
    <div class="row" v-if="heading.Voitures == 0">
      <div class="col-12">
        <card :title="table4.title" :subTitle="table4.subTitle">
          <div
            slot="raw-content"
            class="table-responsive"
            v-if="tableDataCar.length > 0"
          >
            <paper-table :data="table4.data" :columns="table4.columns">
            </paper-table>
          </div>
          <div v-else>aucune voiture</div>
        </card>
      </div>
    </div>
  </div>
</template>
<script src="../script/services-script.js"></script>

<style scoped>
#key0 {
  background-color: rgb(80, 100, 109);
}
/* 
#key0 {
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #5e7d91;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

#key0:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

#key0:active {
  color: #4c6d7c;
}

#key0:active:after {
  background: transparent;
}

#key0:hover:before {
  opacity: 1;
}

#key0:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  } 
}*/
</style>
