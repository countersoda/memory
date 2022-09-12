<template>
  <HelloWorld msg="Welcome" />
  <h1 class="text-3xl font-bold underline text-yellow-300">
    Throw out the kikes
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  margin-top: 60px;
}

html body {
  background-color: #1a1a1a;
}
</style>
