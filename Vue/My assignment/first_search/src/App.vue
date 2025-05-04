<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");
const filterType = ref("all");

const ladyAvengers = [
  {
    title: "Wasp",
    firstname: "Janet",
    lastname: "Van Dyne",
    movies: [
      { title: "Ant-Man", year: 2015 },
      { title: "Ant‑Man and the Wasp", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 },
    ],
  },
  {
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
  },
  {
    title: "Black Widow",
    firstname: "Natasha",
    lastname: "Romanoff",
    movies: [
      { title: "Iron Man 2", year: 2010 },
      { title: "Avengers", year: 2012 },
      { title: "Captain America: The Winter Soldier", year: 2014 },
      { title: "Avengers: Age of Ultron", year: 2015 },
      { title: "Captain America: Civil War", year: 2016 },
      { title: "Avengers: Infinity War", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 },
    ],
  },
  {
    title: "Captain Marvel",
    firstname: "Carol",
    lastname: "Danvers",
    movies: [
      { title: "Captain Marvel", year: 2019 },
      { title: "Avengers: Endgame", year: 2019 },
    ],
  },
  {
    title: "Gamora",
    firstname: "Gamora Zen",
    lastname: "Whoberi Ben Titan",
    movies: [
      { title: "Guardians of the Galaxy", year: 2014 },
      { title: "Guardians of the Galaxy Vol. 2", year: 2017 },
      { title: "Avengers: Infinity War", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 },
    ],
  },
  {
    title: "Shuri",
    firstname: "Shuri",
    lastname: "Princess",
    movies: [
      { title: "Black Panther", year: 2018 },
      { title: "Avengers: Infinity War", year: 2018 },
      { title: "Avengers: Endgame", year: 2019 },
      { title: "Black Panther: Wakanda Forever", year: 2022 },
    ],
  },
];

const filteredAvengers = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) return ladyAvengers;

  return ladyAvengers.filter((avenger) => {
    const titleMatch = avenger.title.toLowerCase().includes(query);
    const firstMatch = avenger.firstname.toLowerCase().includes(query);
    const movieMatch = avenger.movies.some((movie) =>
      movie.title.toLowerCase().includes(query)
    );

    if (filterType.value === "title") return titleMatch;
    if (filterType.value === "firstname") return firstMatch;
    if (filterType.value === "movie") return movieMatch;

    return titleMatch || firstMatch || movieMatch;
  });
});
</script>

<template>
  <div class="container">
    <h2>Search Avengers</h2>

    <input
      type="text"
      v-model="searchQuery"
      placeholder="Type to search"
    />
    <button>Search</button>

    <div style="margin-top: 10px">
      <label>Filter by:</label>
      <select v-model="filterType">
        <option value="all">All</option>
        <option value="title">Title</option>
        <option value="firstname">First Name</option>
        <option value="movie">Movie Title</option>
      </select>
    </div>

    <div
      v-for="(hero, idx) in filteredAvengers"
      :key="idx"
      style="margin-top: 20px; border: 1px solid black; padding: 10px"
    >
      <strong>{{ hero.title }}</strong><br />
      {{ hero.firstname }} {{ hero.lastname }}
      <h4>Movies</h4>
      <ul>
        <li v-for="(movie, idx) in hero.movies" :key="idx">
          {{ movie.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  font-family: sans-serif;
}
input,
select,
button {
  padding: 8px;
  margin: 5px;
  font-size: 16px;
}
</style>
