<template>
  <div class="flex flex-col items-center justify-center pb-[10rem]">
    <h1 class="text-bold text-3xl underline-offset-1 py-[5rem]">Memory</h1>
    <Board v-if="state == GameState.PLAY" />
    <div
      v-else-if="state == GameState.MENU"
      class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
    >
      <button class="primary-btn w-[10rem]" v-on:click="start">
        Play Game
      </button>
      <button class="primary-btn w-[10rem]" v-on:click="showHighscore">
        Highscore
      </button>
    </div>
    <div
      v-else-if="state == GameState.SCORE"
      class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
    >
      <div v-if="highscore.length !== 0">
        <div class="border rounded-md px-5">
          <table>
            <tr>
              <th>Player</th>
              <th>Pairs</th>
              <th>Time</th>
            </tr>
            <tbody v-for="score in highscore">
              <tr>
                <td>{{ score.user }}</td>
                <td>{{ score.amount }}</td>
                <td>{{ score.time }}s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p v-else>No Highscore available!</p>
      <button class="primary-btn" v-on:click="exit">Back</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Board from "@/components/Board.vue";
import { GameState } from "@/types";
import { storeToRefs } from "pinia";
import { useGameStore } from "@/state/game";

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
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
}

html, body {
  background-color: #1a1a1a;
}

td,
th {
  @apply text-left px-2
}
</style>
