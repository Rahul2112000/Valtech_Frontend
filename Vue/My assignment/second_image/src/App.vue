<script setup>
import { ref, onMounted } from 'vue';

let ladyAvengers = [
  {
    title: "Wasp",
    firstname: "Janet",
    lastname: "Van Dyne",
    movies: [
      { title: "Ant-Man" },
      { title: "Ant‑Man and the Wasp" },
      { title: "Avengers: Endgame" },
    ],
  },
  {
    title: "Scarlet Witch",
    firstname: "Wanda",
    lastname: "Maximoff",
    movies: [
      { title: "Captain America: The Winter Soldier" },
      { title: "Avengers: Age of Ultron" },
      { title: "Captain America: Civil War" },
      { title: "Avengers: Infinity War" },
      { title: "Avengers: Endgame" },
      { title: "Doctor Strange in the Multiverse of Madness" },
    ],
  },
  {
    title: "Black Widow",
    firstname: "Natasha",
    lastname: "Romanoff",
    movies: [
      { title: "Iron Man 2" },
      { title: "Avengers" },
      { title: "Captain America: The Winter Soldier" },
      { title: "Avengers: Age of Ultron" },
      { title: "Captain America: Civil War" },
      { title: "Avengers: Infinity War" },
      { title: "Avengers: Endgame" },
    ],
  },
  {
    title: "Captain Marvel",
    firstname: "Carol",
    lastname: "Danvers",
    movies: [
      { title: "Captain Marvel" },
      { title: "Avengers: Endgame" },
    ],
  },
  {
    title: "Gamora",
    firstname: "Gamora Zen",
    lastname: "Whoberi Ben Titan",
    movies: [
      { title: "Guardians of the Galaxy" },
      { title: "Guardians of the Galaxy Vol. 2" },
      { title: "Avengers: Infinity War" },
      { title: "Avengers: Endgame" },
    ],
  },
  {
    title: "Shuri",
    firstname: "Shuri",
    lastname: "Princess",
    movies: [
      { title: "Black Panther" },
      { title: "Avengers: Infinity War" },
      { title: "Avengers: Endgame" },
      { title: "Black Panther: Wakanda Forever" },
    ],
  },
];

const currentIndex = ref(0);
let interval;

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % ladyAvengers.length;
};

const prev = () => {
  currentIndex.value =
    (currentIndex.value - 1 + ladyAvengers.length) % ladyAvengers.length;
};

onMounted(() => {
  interval = setInterval(next, 4000); 
});
</script>

<template>
  <div class="container mt-5">
    <div class="row align-items-center">
      <div class="col-md-5">
        <img
          :src="`/src/assets/${ladyAvengers[currentIndex].title}.jpeg`"
          class="img-fluid rounded"
          :alt="ladyAvengers[currentIndex].title"
        />
      </div>
      <div class="col-md-7">
        <h2>{{ ladyAvengers[currentIndex].title }}</h2>
        <h4>{{ ladyAvengers[currentIndex].firstname }} {{ ladyAvengers[currentIndex].lastname }}</h4>
        <hr />
        <ul>
          <li v-for="movie in ladyAvengers[currentIndex].movies" :key="movie.title">
            {{ movie.title }}
          </li>
        </ul>
      </div>
    </div>

   
    <div class="text-center mt-3">
      <span
        v-for="(hero, idx) in ladyAvengers"
        :key="hero.title"
        class="dot"
        :class="{ active: idx === currentIndex }"
      ></span>
    </div>

   
    <div class="text-center mt-3">
      <button class="btn btn-primary me-2" @click="prev">Previous</button>
      <button class="btn btn-primary" @click="next">Next</button>
    </div>
  </div>
</template>

<style scoped>
.dot {
  height: 15px;
  width: 15px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #333;
}
</style>
