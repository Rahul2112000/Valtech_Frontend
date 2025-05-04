<script setup>
import LocalComp from "./components/LocalComp.vue";
import ParentComp from "./components/ParentComp.vue";
import NewComp from "./components/NewComp.vue";
</script>
 
<template>
  <div class="container">
    <local-comp />
    <global-comp />
    <ParentComp />
    <hr />
    <h2 v-col:papayawhip:orangered:10>Welcome</h2>
    <h2 v-col:cyan:darkblue:20>To your life</h2>
    <hr />
    <new-comp :list="['Ironman', 'Hulk']" :version="101" />
    <new-comp :title="'second title'" :list="['Batman', 'Wonder women']" />
    <new-comp :title="'third title'" :version="301" />
  </div>
</template>
 
<style scoped></style>