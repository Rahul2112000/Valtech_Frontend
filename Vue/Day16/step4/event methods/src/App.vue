<script setup>
import { ref,useTemplateRef } from 'vue'; 
let power=ref(0);
//let currentVal=useTemplateRef("box");
let box=ref(null);
let myfun = () => {
  return "Welcome";
};
let increaPower=()=>{
 // power.value++;
  power.value+=1; // string hai
};
let setPower=(evt)=>{
  power.value=evt.target.value;
}
let clickHandler=()=>{
  //power.value=Number(currentVal.value.value);
  power.value=Number(box.value.value);
}

</script>

<template>
  <div>
    <h2>{{ myfun() }}</h2>
    <h2>{{ power }}</h2>
   <button @:click="increaPower()">Increase Power</button>
    <input @:input="setPower($event)" type="range"/>

    <hr>
    <hr>
    <!-- <input :ref="'box'" type="text"/>
    <button @:click="clickHandler">set power</button> -->
    <input :ref="'box'" type="text"/>
    <button @:click="clickHandler">set power</button>

  </div>
</template>

<style ></style>
