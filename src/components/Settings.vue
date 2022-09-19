<template>
  <div
    class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
  >
    <div>
      <p class="w-[10rem]">Visibility duration:</p>
      <input
        class="w-[10rem] text-black text-center"
        type="number"
        v-model="visibilityDuration"
      />
    </div>
    <button class="w-[10rem] primary-btn" v-on:click="clearHighscore">
      Clear Highscore
    </button>
    <button class="w-[10rem] primary-btn" v-on:click="show(GameState.MENU)">
      Back
    </button>
  </div>
</template>

<script lang="ts" setup>
import { GameState } from "@/types";
import { useGameStore } from "@/state/game";
const game = useGameStore();
const { clearHighscore, show } = game;
const {
  setting: { visibilityDuration },
} = game;
</script>
