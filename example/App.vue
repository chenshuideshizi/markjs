<template>
  <div id="app">
    <h1>Mark</h1>
    <mark-comp />
    <Demo1 />
    <Demo2 />
    <!-- <Demo3 /> -->
    <!-- <Demo4 />
    <Demo5 />
    <Demo6 /> -->
  </div>
</template>

<script>
import MarkComp from "../src";
import Demo1 from "./components/Demo1.vue";
import Demo2 from "./components/Demo2.vue";
// import Demo3 from "./components/Demo3.vue";
// import Demo4 from "./components/Demo4.vue";
// import Demo5 from "./components/Demo5.vue";
// import Demo6 from "./components/Demo6.vue";
export default {
  name: "App",
  components: {
    MarkComp,
    Demo1,
    Demo2,
    // Demo3,
    // Demo4,
    // Demo5,
    // Demo6,
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  background: #ccc;
}
</style>
