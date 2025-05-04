<template>
  <div class="container">
    <h2>{{ heading }}</h2>
    <hr />

    <section>
      <h3>{{ title }}</h3>
      <h3 v-text="title"></h3>
      <h3 v-html="title"></h3>
      <h3 v-bind:textContent="title"></h3>
      <h3 v-bind:innerHTML="title"></h3>
      <h3 :textContent="title"></h3>
      <h3 :innerHTML="title"></h3>

      <input v-model="tagname" type="text" />
    </section>

    <hr />
    <h3>Attribut binding</h3>

    <input v-bind:type="tagname" type="text" />

    <input v-model="styleclass" type="text" />

    <hr />
    <h3>Color box</h3>

    <div v-bind:class="styleclass"></div>

    <br>

    <input type="checkbox" v-model="showterms"/>Show/Hide 
    <fieldset v-bind:hidden="showterms">
      <legend>T&C</legend>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit rem omnis deserunt molestias! A beatae eos sint deleniti, cupiditate quas? Dolores nemo natus deleniti numquam exercitationem nostrum enim nulla ab voluptas aperiam ipsam fugiat voluptates magni laboriosam temporibus quam voluptatem totam repellat ea hic, perferendis amet magnam! Rem velit maiores nemo ducimus magni provident mollitia debitis ea soluta laborum quaerat, praesentium quas a pariatur? Amet consequatur voluptate quo voluptas, tenetur iure voluptatem ullam distinctio sint vel corporis. Beatae dignissimos ad iure error. Cupiditate minus quod laboriosam, quas quaerat aspernatur labore, ipsa nobis ipsum impedit pariatur consequatur dicta voluptas? Vero iure optio aperiam sapiente accusamus nostrum, alias animi nesciunt assumenda ut aliquam illum, repellat, aspernatur numquam quibusdam. Labore, architecto? Pariatur, ipsum quidem facere quisquam nostrum nisi vel incidunt odio nam qui laborum consequuntur? Maxime laboriosam ipsa, ipsum sed quidem dolor ipsam minima esse similique quasi expedita quam a, voluptatem dolore sapiente!
      </div>


    </fieldset>
  </div>
</template>
<script setup>
import { ref } from "vue";
let heading = "Welcome to binding in Vue";
let title = ref("welocme to your life");
let tagname = ref("div");
let styleclass = ref("box");
let showterms=ref(false)
</script>
<style>
  .box{
    width: 300px;
    height: 300px;
    border: 2px solid black;
  }
  .boxgreen{
    width: 300px;
    height: 300px;
    background-color: green;
  }
  .boxred{
    width: 300px;
    height: 300px;
    background-color: red;
  }
  .boxyellow{
    width: 300px;
    height: 300px;
    background-color: yellow;
  }
  .boxblack{
    width: 300px;
    height: 300px;
    background-color: black;
  }
  .boxblue{
    width: 300px;
    height: 300px;
    background-color: blue;
  }
</style>
