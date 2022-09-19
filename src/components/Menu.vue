<template>
  <div
    class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
  >
    <button class="primary-btn w-[10rem]" v-on:click="start">
      Play Game
    </button>
    <button
      class="primary-btn w-[10rem]"
      v-on:click="showHighscore"
    >
      Highscore
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useGameStore } from "@/state/game";
const game = useGameStore();
const { start, showHighscore } = game;
</script>
