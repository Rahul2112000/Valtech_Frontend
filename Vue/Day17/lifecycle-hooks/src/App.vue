
<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
import ChildComp from "./components/ChilComp.vue";
let power = ref(1);
let show = ref(true);
onMounted(() => {
  console.log(
    "%c App Comp's onMounted was fired",
    "background: darkblue; color: cyan"
  );
});
onUpdated(() => {
  console.log(
    "%c App Comp's onUpdated was fired",
    "background: darkblue; color: cyan"
  );
});
onUnmounted(() => {
  console.log(
    "%c App Comp's onUnmounted was fired",
    "background: darkblue; color: cyan"
  );
});
onBeforeMount(() => {
  console.log(
    "%c App Comp's onBeforeMount was fired",
    "background: darkblue; color: cyan"
  );
});
onBeforeUpdate(() => {
  console.log(
    "%c App Comp's onBeforeUpdate was fired",
    "background: darkblue; color: cyan"
  );
});
onBeforeUnmount(() => {
  console.log(
    "%c App Comp's onBeforeUnmount was fired",
    "background: darkblue; color: cyan"
  );
});
</script>
 
<template>
  <div class="container">
    <h2>App Power {{ power }}</h2>
    <button @click="power = power + 1">Increase Power</button>
    <button @click="power = power - 1">Decrease Power</button>
    <button @click="show = !show">
      <h3>Show / Hide</h3>
      <h4>{{ show }}</h4>
    </button>
    <ChildComp v-if="show" :pow="power" title="First Comp">
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        <li>List Item 5</li>
      </ul>
    </ChildComp>
    <child-comp v-if="!show" :pow="power" title="Second Comp">
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        similique enim error quia nemo, eveniet explicabo odio? Voluptas iusto
        dolorem repudiandae similique ipsam at perferendis. Tempora natus modi
        quo nesciunt accusamus alias nemo eius vel repellendus quidem porro eum
        sapiente veniam, blanditiis suscipit voluptas soluta harum vitae! Unde
        ex possimus qui sunt magni quibusdam nesciunt numquam velit cupiditate?
        Necessitatibus nobis obcaecati rerum dolores qui repellat, autem quia
        repudiandae ea sequi porro nihil? Nostrum, minus a tempore porro, non
        qui iusto optio voluptate magnam sint, id autem repudiandae laborum.
        Corporis debitis repudiandae tempora esse quia pariatur vel minima ipsa
        iste harum.
      </article>
    </child-comp>
  </div>
</template>
 
<style scoped></style>
 
