<template>
  <div>
    <h1>Power is {{ power }}</h1>
    <button v-on:click ="increasePower()">Increased Power</button>
    <button v-on:click ="decreasePower()">Decreased Power</button>
  </div>

</template>
<script>
export default {
  data() {
    return {
      power: 0,
    };
  },
  methods: {
    increasePower: function () {
      this.power++;
    },
    decreasePower: function ()  {
      this.power--;
    },
  },
};
</script>
<style>
</style>