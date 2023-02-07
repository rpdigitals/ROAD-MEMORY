<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import MainIndex from "./components/MainIndex.vue";
import HeaderSection from "./components/HeaderSection.vue";
import SearchContainer from "./components/SearchContainer.vue";
</script>

<template>
  <Header />
  <!-- <HeaderSection /> -->
  <router-view></router-view>
</template>
