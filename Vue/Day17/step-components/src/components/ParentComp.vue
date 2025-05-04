<script setup>
import { ref } from "vue";
import ChildComp from "./ChildComp.vue";
let message = ref("");
 
let callFun = function (evt) {
  console.log("child event happened", evt);
};
</script>
 
<template>
  <div id="box">
    <h2>Hello from Parent Component</h2>
    <label>
      Message :
      <input @change="message = $event.target.value.toUpperCase()" />
    </label>
    <child-comp
      @child-event="callFun($event)"
      :msg="message"
      :title="'Hello Child'"
    />
  </div>
</template>
 
<style scoped>
#box {
  border: 5px solid grey;
  padding: 20px;
}
</style>
 
 