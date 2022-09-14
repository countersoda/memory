<template>
  <div class="items-center flex flex-col">
    <div class="flex flex-row gap-2 pb-5">
      <input
        class="text-black text-center w-14 rounded-sm outline-none"
        type="number"
        v-model="amount"
      />
      <h1>Pair{{ amount != 1 ? "s" : "" }}</h1>
    </div>
    <div class="flex flex-col w-[10rem] gap-2">
      <button class="primary-btn" v-on:click="create">Start</button>
      <button class="primary-btn" v-on:click="reset">Clear</button>
      <button class="primary-btn" v-on:click="exit">Exit</button>
    </div>
    <p>{{ currentTime !== 0 ? `${currentTime}s` : "" }}</p>
    <div
      class="w-[100%] grid grid-cols-[repeat(6,minmax(0,2.5rem))] pt-10 place-items-center place-content-center gap-2"
    >
      <button
        class="border p-2 w-10 h-10 rounded-md items-center"
        v-for="card in cards"
        :key="card.key"
        v-on:click="() => reveal(card.key)"
      >
        {{
          revealedCards.includes(card) || foundCards.includes(card)
            ? card.symbol
            : " "
        }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGameStore } from "../state/game";
import { useBoardStore } from "../state/board";

const game = useGameStore();
const board = useBoardStore();
const { exit } = game;
const { create, reset, reveal } = board;
const {
  amount,
  cards,
  revealedCards,
  foundCards,
  startTime,
  currentTime,
  timerId,
} = storeToRefs(board);
</script>
