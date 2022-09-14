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
      <button class="border p-2 rounded-md" v-on:click="create">Start</button>
      <button class="border p-2 rounded-md" v-on:click="reset">Clear</button>
    </div>
    <p>{{ startTime !== 0 ? timestamp : "" }}</p>
    <div :class="boardSize()">
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
import { ref } from "vue-demi";
import { useBoardStore } from "../store/state";
const board = useBoardStore();
const { create, reset, reveal } = board;
const {
  amount,
  cards,
  revealedCards,
  foundCards,
  timestamp: startTime,
} = storeToRefs(board);
const boardSize = ref(() => {
  let n = 0;
  for (let i = 1; i <= amount.value; i++) {
    if (amount.value % i == 0 && n < i) {
      n = i;
    }
  }
  return `w-[100%] grid grid-cols-[repeat(${6},minmax(0,2.5rem))] pt-10 place-items-center place-content-center gap-2`;
});
const timestamp = ref(0);
if (startTime) {
  setInterval(() => {
    timestamp.value = Math.floor(
      ((Date.now() - startTime.value) / 24 / 60 / 60) * 100
    );
  }, 700);
}
</script>
