<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="items-center flex flex-col">
    <h1>{{ amount }} Pair{{ amount != 1 ? "s" : "" }}</h1>
    <div class="flex flex-col w-[10rem] gap-2">
      <button class="border p-2 rounded-md" v-on:click="increment">
        Increment
      </button>
      <button class="border p-2 rounded-md" v-on:click="create">Play</button>
      <button class="border p-2 rounded-md" v-on:click="reset">Reset</button>
    </div>
    <div
      class="w-[60%] flex flex-row flex-wrap pt-10 items-center justify-center gap-2"
    >
      <div v-for="card in cards" :key="card.key">
        <button
          class="border p-2 w-10 h-10 rounded-md"
          v-on:click="reveal(card.key)"
        >
          {{ revealedCards.includes(card) ? card.symbol : " " }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useBoardStore } from "../store/state";
const board = useBoardStore();
const { increment, create, reset, reveal } = board;
const { amount, cards, revealedCards } = storeToRefs(board);
</script>
