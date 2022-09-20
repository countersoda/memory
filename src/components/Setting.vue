<template>
  <div
    class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
  >
    <div>
      <div class="flex flex-col items-center gap-2 pb-5">
        <p class="w-[10rem] text-center">Visibility duration:</p>
        <div class="flex flex-row gap-1">
          <div v-for="speed in options">
            <button
              v-if="speed === setting.visibilityDuration"
              class="speed selected"
            >
              {{ getMode(speed)?.valueOf() }}
            </button>
            <button
              v-else
              v-on:click="setting.visibilityDuration = speed"
              class="speed"
            >
              {{ getMode(speed)?.valueOf() }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <button class="w-[10rem] primary-btn" v-on:click="clearHighscore(); toast.info("Highscore deleted!")">
      Delete Highscore
    </button>
    <button class="w-[10rem] primary-btn" v-on:click="show(GameState.MENU)">
      Back
    </button>
  </div>
</template>

<script lang="ts" setup>
import { getMode } from "@/utils";
import { useToast } from "vue-toastification";
import { GameState } from "@/types";
import { useGameStore } from "@/state/game";

const game = useGameStore();
const toast = useToast();
const { clearHighscore, show } = game;
const { setting } = game;
const options = [700, 500, 350, 50];
</script>

<style>
button.speed {
  @apply w-[7rem] border p-2 rounded-md hover:translate-y-[-5px];
}
button.selected {
  @apply bg-white text-black;
}
</style>
