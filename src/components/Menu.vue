<template>
  <div
    class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
  >
    <button class="primary-btn w-[10rem]" v-on:click="show(GameState.PLAY)">
      Play Game
    </button>
    <button class="primary-btn w-[10rem]" v-on:click="show(GameState.SCORE)">
      Highscore
    </button>
    <button class="primary-btn w-[10rem]" v-on:click="show(GameState.SETTING)">
      Setting
    </button>
  </div>
</template>

<script lang="ts" setup>
import { GameState } from "@/types";
import { useGameStore } from "@/state/game";
const game = useGameStore();
const { show } = game;
</script>
