<template>
  <div>
    <div>
      <h2>{{ title }}</h2>
      <table class="table" :class="tableClass">
        <thead>
          <slot name="columns">
            <th v-for="column in columns" :key="column">{{ column }}</th>
            <th>Image</th>
            <th>Action</th>
          </slot>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <slot :row="item">
              <td v-for="(column, index) in columns" :key="index">
                {{ itemValue(item, column) }}
              </td>
              <td>
                <img
                  src="https:mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).webp"
                  alt=""
                  width="70px"
                />
              </td>
              <td>
                <i class="ti-eye btn btn-info"></i><i class="ti-trash btn btn-danger"></i>
              </td>
            </slot>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "paper-table",
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String, // striped | hover
      default: "striped",
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
  },
};
</script>
<style></style>
