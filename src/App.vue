<template>
  <Board v-if="playing" />
  <button class="primary-btn" v-else v-on:click="start">Play Game</button>
</template>

<script lang="ts" setup>
import Board from "./components/Board.vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "./state/game";

const game = useGameStore();
const { start } = game;
const { playing } = storeToRefs(game);
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
