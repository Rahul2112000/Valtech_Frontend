<script setup>
import { ref } from "vue";
/* non reactive */
let apptitle = "Conditional Rendering in VUE";
/* reactive */
let title = ref("Avengers");
let power = ref(5);
let score = ref("1");
</script>
<!-- 
 
v-if
v-else-if
v-else
v-show
 
-->
<template>
  <div>
    <input type="range" v-model="power" min="1" max="10" />{{ power }}
    <br />
    <input type="number" v-model="power" min="1" max="10" />{{ power }}
    <br />
    <!-- Checking for number -->
    <h2 v-if="power === 1">Power if Number 1</h2>
    <h2 v-if="power === 2">Power if Number 2</h2>
    <h2 v-if="power === 3">Power if Number 3</h2>
    <h2 v-if="power === 4">Power if Number 4</h2>
    <h2 v-if="power === 5">Power if Number 5</h2>

    <br>
 
    <!-- Checking for string -->
    <h2 v-if="power === '1'">Power if String 1</h2>
    <h2 v-if="power === '2'">Power if String 2</h2>
    <h2 v-if="power === '3'">Power if String 3</h2>
    <h2 v-if="power === '4'">Power if String 4</h2>
    <h2 v-if="power === '5'">Power if String 5</h2>
    <!-- Checking with show -->
    <h2 v-show="power === '1'">Power show String 1</h2>
    <h2 v-show="power === '2'">Power show String 2</h2>
    <h2 v-show="power === '3'">Power show String 3</h2>
    <h2 v-show="power === '4'">Power show String 4</h2>
    <h2 v-show="power === '5'">Power show String 5</h2>
    <h2 v-show="power === 1">Power show Number 1</h2>
    <h2 v-show="power === 2">Power show Number 2</h2>
    <h2 v-show="power === 3">Power show Number 3</h2>
    <h2 v-show="power === 4">Power show Number 4</h2>
    <h2 v-show="power === 5">Power show Number 5</h2>


    <!-- if,else-if,else -->

    <ul>
      <li v-if="power < 1"> You lost</li>
      <li v-else-if="power ==1 ">Good start</li>
      <li v-else-if="power ==2 ">Badiya bro</li>
      <li v-else-if="power ==3 ">Keep start</li>
      <li v-else-if="power ==4 ">Nice start</li>
      <li v-else-if="power ==5 ">Excellent bhai</li>
      <li v-else-if="power ==6 ">ek No.</li>
      <li v-else-if="power ==7 ">Mazil paas hai</li>
      <li v-else-if="power ==8 ">chlata chl</li>
      <li v-else-if="power ==9 ">Succesfull</li>
      <li v-else-if="power ==10 ">Party de bhai</li>
      <li v-else> You Won</li>
    </ul>
  </div>
</template>
 
<style scoped></style>