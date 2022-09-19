<template>
  <div
    v-if="!finished"
    class="flex flex-col items-center justify-center pb-[10rem]"
  >
    <p class="slideInFromTop text-bold text-lg pb-10" v-if="currentTime !== ''">
      {{ currentTime }}s
    </p>
    <p class="text-bold text-lg pb-10" v-else>Start the game!</p>
    <div class="flex flex-row gap-2 pb-5">
      <input
        class="text-black text-center w-14 rounded-sm outline-none"
        type="number"
        v-model="amount"
      />
      <h1>Pair{{ amount != 1 ? "s" : "" }}</h1>
    </div>
    <div class="flex flex-col w-[10rem] gap-2">
      <button
        class="primary-btn"
        v-on:click="
          reset();
          create();
        "
      >
        Start
      </button>
      <button class="primary-btn" v-on:click="reset">Clear</button>
      <button
        class="primary-btn"
        v-on:click="
          reset();
          exit();
        "
      >
        Exit
      </button>
    </div>
    <div
      class="w-[100%] grid grid-cols-[repeat(4,minmax(0,2.5rem))] pt-10 place-items-center place-content-center gap-2"
    >
      <button
        class="border p-2 w-10 h-10 rounded-md items-center zoomOut text-center"
        v-for="card in cards"
        :key="card.key"
        v-on:click="reveal(card.key)"
      >
        {{
          revealedCards.includes(card) || foundCards.includes(card)
            ? card.symbol
            : " "
        }}
      </button>
    </div>
  </div>
  <div
    v-else
    class="h-full flex flex-col items-center justify-center pb-[10rem]"
  >
    <div
      class="border rounded-sm p-10 flex flex-col items-center slideInFromTop"
    >
      <input
        v-model="user"
        class="text-black rounded-sm w-[10rem] mb-5 p-2"
        placeholder="Enter name:"
      />
      <p>You needed {{ currentTime }}s to find {{ amount }} Pairs</p>
      <button
        class="primary-btn mt-5 w-[5rem]"
        v-on:click="
          save({ user, amount, time: currentTime, attempts });
          reset();
        "
      >
        Save
      </button>
      <button class="primary-btn mt-5 w-[5rem]" v-on:click="reset">
        Cancel
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useGameStore } from "../state/game";
import { useBoardStore } from "../state/board";

const game = useGameStore();
const board = useBoardStore();
const { exit, save } = game;
const { create, reset, reveal } = board;
const {
  amount,
  cards,
  revealedCards,
  foundCards,
  currentTime,
  finished,
  attempts,
} = storeToRefs(board);

const user = ref("");
</script>
