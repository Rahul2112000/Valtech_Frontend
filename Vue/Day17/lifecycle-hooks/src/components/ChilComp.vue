<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
 
let props = defineProps(["title", "pow"]);
onMounted(() => {
  console.log(
    "%c Child Comp's onMounted was fired",
    "background: orangered; color: papayawhip"
  );
});
onUpdated(() => {
  console.log(
    "%c Child Comp's onUpdated was fired",
    "background: orangered; color: papayawhip"
  );
});
onUnmounted(() => {
  console.log(
    "%c Child Comp's onUnmounted was fired",
    "background: orangered; color: papayawhip"
  );
});
onBeforeMount(() => {
  console.log(
    "%c Child Comp's onBeforeMount was fired",
    "background: orangered; color: papayawhip"
  );
});
onBeforeUpdate(() => {
  console.log(
    "%c Child Comp's onBeforeUpdate was fired",
    "background: orangered; color: papayawhip"
  );
});
onBeforeUnmount(() => {
  console.log(
    "%c Child Comp's onBeforeUnmount was fired",
    "background: orangered; color: papayawhip"
  );
});
</script>
<template>
  <div>
    <h2>Child Component : {{ title }} | Child Power is {{ pow }}</h2>
    <div class="box">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.box {
  border: 2px solid red;
  padding: 10px;
  background-color: rgba(174, 128, 128, 0.67);
}
</style>
 
 