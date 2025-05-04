<script setup>
import { ref, watch } from "vue";

let title = "Welcome to training: watchers";
let power = ref(1);
let message = ref("");
let avenger = ref({
  title: "Scarlet Witch",
  firstname: "Wanda",
  lastname: "Maximoff",
  movies: [
    { title: "Captain America: The Winter Soldier", year: 2014 },
    { title: "Avengers: Age of Ultron", year: 2015 },
    { title: "Captain America: Civil War", year: 2016 },
    { title: "Avengers: Infinity War", year: 2018 },
    { title: "Avengers: Endgame", year: 2019 },
    { title: "Doctor Strange in the Multiverse of Madness", year: 2022 },
  ],
});
watch(
  () => {
    return avenger.value;
  },
  (newVal) => {
    if (newVal) {
      console.log("movie has changed");
    }
  },{
    immediate:true,
    deep:true
  }
);

watch(
  () => {
    return power.value;
  },
  (newVal, oldVal) => {
    if (newVal > 5 && newVal < 10) {
      message.value = "Power has reached 5";
    } else if (newVal <= 5 && newVal < 10) {
      message.value = "Power has not reached 5";
    } else {
      message.value = "Power has reached 10";
    }
  },
  {
    immediate: true,
    deep: true,
  }
);
</script>

<template>
  <div class="container-fluid">
    <!-- <h1>{{ title }}</h1>
        <h2>Power is {{ power }}</h2>
        <input type="range" step="1" min="0" max="20" v-model="power">
        <h3>{{ message }}</h3> -->
    <h6>{{ avenger }}</h6>
    <input
      type="range"
      min="2000"
      max="2025"
      v-model.number="avenger.movies[0].year"
    />
  </div>
</template>

<style scoped></style>
