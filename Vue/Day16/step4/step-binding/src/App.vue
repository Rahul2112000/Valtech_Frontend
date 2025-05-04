<!-- <script setup>
import HomeComp from "./components/HomeComp.vue";
</script>
<template>
  <div>

    <home-comp></home-comp>
    <div class="box">"Kesa h bhai"</div>
  </div>
 
</template>
<style >
.box{
  width: 200px;
  height: 200px;
  background-color: papayawhip;
  border: 10px solid green;
}
</style> -->


<template>
  <div>
    <h1 id="lesson_title">Data Binding in VUE</h1>
    <hr />
    <!-- step 1  start v-text -->
    <!-- the v-text will do a text binding (not so popular directive) -->
    <h1 v-text="title"></h1>
    <!-- step 1 end -->
 
    <!-- step 2 start {{ }} -->
    <!-- if you want only the part of the template to be chagned then use {{ }}-->
    <h1>App Name is {{ title }}</h1>
    <!-- step 2 end -->
 
    <!-- step 3 start v-html -->
    <!-- if you want to render html from a trusted source then use v-html directive this do not work with {{ }} syntax -->
    <article v-html="linkCode"></article>
    <h1>{{ title }}</h1>
    <h1 v-html="title"></h1>
    <h1 v-text="title"></h1>
    <h1 v-bind:textContent="title"></h1>
    <h1 v-bind:innerText="title"></h1>
    <h1 v-bind:innerHTML="title"></h1>
    <input v-model="title" />
    <!-- <h1 v-bind:outerHTML="title"></h1> -->
    <!-- this will replace the tag itself -->
    <!-- step 3 end -->
 
    <!-- step 4 start v-bind attribute -->
    <!-- v-bind: can be added to any attribute of an element -->
    <section v-bind:id="divid">Hello MyCompany</section>
    <!-- v-bind: can also use boolean values to add or remove attributes -->
    <button v-bind:disabled="!showterms">Show Terms and Conditions</button>
    <fieldset v-bind:hidden="showterms">
      <legend>Terms & Conditions</legend>
      <p>Terms and conditions come here Lorem</p>
    </fieldset>
    <!-- step 4 end -->
 
    <!-- step 5 start class binding -->
    <!-- v-bind: to class attributes can take conditions too -->
    <!-- nested ternary operators work too -->
    <div v-bind:class="gender == 'male' ? 'bluebox' : 'pinkbox'">
      Welcome Guest
    </div>
    <!-- class attributes can also take array or an object -->
    <section v-bind:class="['brdr', bgcol]">
      Lorem ipsum dolor sit amet consectetur.
    </section>
    <section v-bind:class="{ brdr: showterms, bluebox: divid == 'box' }">
      Lorem ipsum dolor sit. iss pe....
    </section>
    <!-- step 5 end -->
 
    <!-- step 6 start style binding -->
    <section
      v-bind:style="{
        backgroundColor: bgcol,
        color: txtcol,
        padding: title.length * 5 + 'px',
      }"
    >
      Lorem ipsum dolor sit.
    </section>
    <!-- step 6 end -->
 
    <!-- step 7 other bindings : -->
    <h2 v-bind:data-sku="dataSKU">My Product</h2>
    <a v-bind:href="link">My Website</a>
    <!-- step 7 end : -->
 
    <!-- step 7 start binding shortcut :  the v-html is binding innerHTML and not an attribute binding so this shortcut wont work -->
    <section :id="divid">Hello MyCompany</section>
    <button :disabled="!showterms">Show Terms and Conditions</button>
    <!-- step 7 end -->
  </div>
</template>
<script setup>
import { ref } from "vue";
 
// let title = "Avengers";
let title = ref("Avengers"); // makes 2 way bindable
let linkCode = "<h1> Welcome to <u>your</u> <em> life </em> </h1>";
let divid = "box";
let showterms = true; // toggle between true and false
let gender = "female";
let bgcol = "darkslateblue";
let txtcol = "aliceblue";
let link = "https://dotjs.in";
let dataSKU = "1001";
</script>
 
<!-- <style > -->
<style scoped>
#lesson_title {
  font-family: sans-serif;
  text-align: center;
  color: rgb(69, 69, 69);
  text-decoration: underline;
}
.brdr {
  border: 10px dotted yellowgreen;
}
.bluebox {
  background-color: aqua;
  color: darkblue;
  font-family: sans-serif;
  text-align: center;
}
.darkslateblue {
  background-color: darkslateblue;
  color: aliceblue;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
</style>
 
