<template>
  <div
    class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
  >
    <div>
      <div class="flex flex-col items-center gap-2 pb-5">
        <p class="w-[10rem] text-center">Visibility duration:</p>
        <div class="flex flex-row gap-1">
          <button
            :class="isSelected_0"
            v-on:click="setting.visibilityDuration = 700"
          >
            Slow
          </button>
          <button
            :class="isSelected_1"
            v-on:click="setting.visibilityDuration = 500"
          >
            Medium
          </button>
          <button
            :class="isSelected_2"
            v-on:click="setting.visibilityDuration = 350"
          >
            Fast
          </button>
          <button
            :class="isSelected_3"
            v-on:click="setting.visibilityDuration = 50"
          >
            Hardcore
          </button>
        </div>
      </div>
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
import { computed } from "vue";

const game = useGameStore();
const { clearHighscore, show } = game;
const { setting } = game;
const isSelected_0 = computed(() => ({
  speed: true,
  selected: setting.visibilityDuration === 700,
}));
const isSelected_1 = computed(() => ({
  speed: true,
  selected: setting.visibilityDuration === 500,
}));
const isSelected_2 = computed(() => ({
  speed: true,
  selected: setting.visibilityDuration === 350,
}));
const isSelected_3 = computed(() => ({
  speed: true,
  selected: setting.visibilityDuration === 50,
}));
</script>

<style>
button.speed {
  @apply w-[7rem] border p-2 rounded-md hover:translate-y-[-5px];
}
button.selected {
  @apply bg-white text-black;
}
</style>
