<template>
  <div class="flex flex-col items-center justify-center pb-[10rem]">
    <h1 class="text-bold text-3xl underline-offset-1 py-[5rem]">Memory</h1>
    <Board v-if="state === GameState.PLAY" />
    <Menu v-if="state === GameState.MENU" />
    <Highscore v-if="state === GameState.SCORE" />
  </div>
</template>

<script lang="ts" setup>
import Menu from "@/components/Menu.vue";
import Board from "@/components/Board.vue";
import Highscore from "./components/Highscore.vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "@/state/game";
import { GameState } from "@/types";

const game = useGameStore();
const { state } = storeToRefs(game);
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
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
}

html,
body {
  background-color: #1a1a1a;
}

td,
th {
  @apply text-left px-2;
}
</style>
