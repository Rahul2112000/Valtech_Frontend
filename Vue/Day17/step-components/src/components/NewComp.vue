<script setup>
import { ref } from "vue";
 
// let props = defineProps(["title", "list", "version"]);
let props = defineProps({
  title: {
    default: "default title",
    type: String,
  },
  list: {
    type: Array,
    default: ["default val1", "default val1"],
  },
  version: {
    type: Number,
    default: 101,
  },
});
</script>
 
<template>
  <div id="box">
    <h4>Hello from New Component | {{ title }} | version : {{ version }}</h4>
    <ul>
      <li v-for="(hero, idx) in list" :key="idx">{{ hero }}</li>
    </ul>
  </div>
</template>
 
<style scoped>
#box {
  border: 5px solid rgb(199, 0, 0);
  padding: 20px;
}
</style>