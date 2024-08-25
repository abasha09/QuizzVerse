<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center bg-black">
    <Navbar />
    <RouterView />
  </div>
</template>
