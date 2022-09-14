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
      <button class="border p-2 rounded-md" v-on:click="create">Play</button>
      <button class="border p-2 rounded-md" v-on:click="reset">Reset</button>
    </div>
    <div :class="boardSize(maxSize)">
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
const { amount, cards, revealedCards, foundCards } = storeToRefs(board);
let max = 0;
for (let i = 1; i <= amount.value; i++) {
  if (amount.value % i == 0 && max < i) {
    max = i;
  }
}
const maxSize = ref(max);
const boardSize = ref(
  (n: number) =>
    `w-[50%] grid grid-cols-[repeat(${n},minmax(0,2.5rem))] pt-10 place-items-center place-content-center gap-2`
);
</script>
