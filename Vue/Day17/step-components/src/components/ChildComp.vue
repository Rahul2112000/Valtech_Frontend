
<script setup>
import { ref } from "vue";
 
let props = defineProps(["title", "msg"]);
let emits = defineEmits(["childEvent"]);
 
let box = ref(null);
 
let clickHandler = () => {
  let info = box.value.value;
  emits("childEvent", { info });
};
</script>
 
<template>
  <div id="box">
    <h4>Hello from Child Component | {{ title }}</h4>
    <h5>Message from parent {{ msg }}</h5>
    <input ref="box" type="text" />
    <button @click="clickHandler()">Trigger Child Event</button>
  </div>
</template>
 
<style scoped>
#box {
  border: 5px solid rgb(199, 0, 0);
  padding: 20px;
}
</style>