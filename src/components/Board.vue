<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="items-center flex flex-col">
    <h1>{{ amount }} Pair{{ amount != 1 ? "s" : "" }}</h1>
    <div class="flex flex-col w-[10rem] gap-2">
      <button class="border p-2 rounded-md" v-on:click="increment">
        Increment
      </button>
      <button class="border p-2 rounded-md" v-on:click="create">Create</button>
      <button class="border p-2 rounded-md" v-on:click="reset">Reset</button>
    </div>
    <div class="w-[60%] flex flex-row flex-wrap pt-10 items-center justify-center gap-2">
      <div v-for="symbol in symbols" :key="symbol">
        <button class="border p-2 w-10 rounded-md">{{ symbol }}</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useBoardStore } from "../store/state";
const board = useBoardStore();
const { increment, create, reset } = board;
const { amount, symbols } = storeToRefs(board);
</script>
