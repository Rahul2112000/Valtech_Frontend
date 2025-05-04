<script setup>
import { computed, ref } from "vue";
 
//-----------------------------------------
let avengers = ref(["Ironman"]);
let addAvenger = (evt) => {
  avengers.value.push(evt.target.value);
  evt.target.value = "";
};
let score = computed(() => {
  return avengers.value.length;
});
//-----------------------------------------
 
//-----------------------------------------
let hero = ref({
  firstname: "Brcue",
  lastname: "Wayne",
  power: 5,
});
let fullname = computed(() => {
  return hero.value.firstname + " " + hero.value.lastname;
});
//-----------------------------------------
let cart = ref({
  costprice: 100,
  profitPercent: 20,
  tax: 5,
});
 

let sellingprice = ref(0);

let calculateSellingPrice = () => {
  let { costprice, profitPercent, tax } = cart.value;
  let profit = (costprice * profitPercent) / 100;
  let taxprice = (costprice * tax) / 100;
  sellingprice.value = costprice + profit + taxprice;
};
//-----------------------------------------
</script>
 
<template>
  <div class="container">
    <label>
      Add Avenger :
      <input type="text" @keydown.enter="addAvenger($event)" />
    </label>
    <hr />
    <h2>{{ score }}</h2>
    <ul>
      <li v-for="(avenger, idx) in avengers" :key="idx">{{ avenger }}</li>
    </ul>
    <hr />
    <label>
      First Name :
      <input @keydown.enter="hero.firstname = $event.target.value" />
    </label>
    <br />
    <label>
      Last Name :
      <input @keydown.enter="hero.lastname = $event.target.value" />
    </label>
    <h3>Fullname : {{ fullname }}</h3>
    <hr />
    <h3>Selling Price : {{ sellingprice }}</h3>
<button @click="calculateSellingPrice">Calculate Selling Price</button>

    <label>
      Cost Price :
      <input min="0" max="1000" type="range" v-model.number="cart.costprice" />
      {{ cart.costprice }}
    </label>
    <br />
    <label>
      Profit Percent :
      <input
        min="0"
        max="100"
        type="range"
        v-model.number="cart.profitPercent"
      />
      {{ cart.profitPercent }}
    </label>
    <br />
    <label>
      Tax :
      <input min="0" max="20" type="range" v-model.number="cart.tax" />
      {{ cart.tax }}
    </label>
    <br />
  </div>
</template>
 
<style scoped></style>
 
