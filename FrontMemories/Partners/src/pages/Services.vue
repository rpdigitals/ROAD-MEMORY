<template>
  <div>
    <div class="row">
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

      <!-- <div class="col-12">
      <card class="card-plain">
        <div class="table-full-width table-responsive">
          <paper-table
            type="hover"
            :title="table2.title"
            :sub-title="table2.subTitle"
            :data="table2.data"
            :columns="table2.columns"
          >
          </paper-table>
        </div>
       </card>
    </div> -->
    </div>
    <div class="row">
      <div class="col-12">
        <card :title="table2.title" :subTitle="table2.subTitle">
          <div
            slot="raw-content"
            class="table-responsive"
            v-if="tableDataTour.length > 0"
          >
            <paper-table :data="table2.data" :columns="table2.columns">
            </paper-table>
          </div>
          <div v-else>aucun restaurant</div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <card :title="table3.title" :subTitle="table3.subTitle">
          <div
            slot="raw-content"
            class="table-responsive"
            v-if="tableDataTour.length > 0"
          >
            <paper-table :data="table3.data" :columns="table3.columns">
            </paper-table>
          </div>
          <div v-else>aucun hotel</div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <card :title="table4.title" :subTitle="table4.subTitle">
          <div
            slot="raw-content"
            class="table-responsive"
            v-if="tableDataTour.length > 0"
          >
            <paper-table :data="table4.data" :columns="table4.columns">
            </paper-table>
          </div>
          <div>aucune voiture</div>
        </card>
      </div>
    </div>
  </div>
</template>
<script src="../script/services-script.js"></script>

<style></style>
