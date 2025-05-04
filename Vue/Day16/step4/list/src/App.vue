<script setup>
let title = "Welcome to VUE Training-list and loop";
let avengers = [
  "Black Widow",
  "Scarlet Witch",
  "Shuri",
  "Wasp",
  "Captain Marvel",
  "Gamora",
];

let names = [
  { title: "Wasp", firstname: "Janet", lastname: "Van Dyne" },
  { title: "Scarlet Witch", firstname: "Wanda", lastname: "Maximoff" },
  { title: "Black Widow", firstname: "Natasha", lastname: "Romanoff" },
  { title: "Captain Marvel", firstname: "Carol", lastname: "Danvers" },
];

let ladyAvengers = [
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
</script>

<template>
  <div class="container">
    <h2>{{ title }}</h2>
    <hr />
    <div>{{ avengers[0] }}</div>
    <div>{{ avengers[1] }}</div>
    <div>{{ avengers[2] }}</div>
    <div>{{ avengers[3] }}</div>
    <div>{{ avengers[4] }}</div>
    <div>{{ avengers[5] }}</div>
    <hr />
    <hr />
    <!-- for loop -->
    <section>
      <article v-for="hero in avengers" :key="hero">
        {{ hero }}
      </article>
      <hr />
      <hr />

      <article v-for="(hero, index) in avengers" :key="index">
        {{ index + 1 }}:{{ hero }}
      </article>
    </section>
    <hr />
    <hr />
    <ul>
      <li v-for="(name, idx) in names" :key="idx">
        {{ name.title + " : " + name.firstname + " : " + name.lastname }}
      </li>
    </ul>
    <hr />
    <hr />
    <ul>
      <li v-for="(name, idx) in names" :key="idx">
        {{ name.title + " : " + name.firstname + " : " + name.lastname }}
      </li>
    </ul>
    <hr />
    <hr />
    <ul>
      <li v-for="({ firstname, lastname, title }, idx) in names" :key="idx">
        {{ title + " : " + firstname + " : " + lastname }}
      </li>
    </ul>

    <hr />
    <hr />
    <hr />
    <hr />
    <table class="table table-responsive table-hover">
      <thead class="table-dark">
        <tr>
          <th>Sl #</th>
          <th>Title</th>
          <th>Full Name</th>
          <th>Movies</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ title, firstname, lastname, movies } in ladyAvengers"
          :key="idx"
        >
          <td>{{ idx + 1 }}</td>
          <td>{{ title }}</td>
          <td>{{ firstname + " " + lastname }}</td>
         
          <td>
            <ol v-for="(movie, i) in movies" :key="i">
              {{
               (i+1)+" : "+ movies[i].title + " released "+ " ||| "+movies[i].year+ " Year  "
              }} 
            </ol>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
