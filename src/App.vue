<template>
  <Board v-if="state == GameState.PLAY" />
  <div
    v-else-if="state == GameState.MENU"
    class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
  >
    <button class="primary-btn w-[10rem]" v-on:click="start">Play Game</button>
    <button class="primary-btn w-[10rem]" v-on:click="showHighscore">
      Highscore
    </button>
  </div>
  <div v-else-if="state == GameState.SCORE">
    
  </div>
</template>

<script lang="ts" setup>
import Board from "./components/Board.vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "./state/game";
import { GameState } from "@/types";

const game = useGameStore();
const { start, showHighscore, exit } = game;
const { state, highscore } = storeToRefs(game);
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
}

html body {
  background-color: #1a1a1a;
}
</style>
