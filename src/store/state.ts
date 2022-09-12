import { defineStore } from "pinia";
import { ref } from "vue";

export const useBoardStore = defineStore("board", {
  state: () => {
    return { amount: ref<number>(0), symbols: ref<number[]>([]) };
  },
  actions: {
    increment() {
      this.amount++;
    },
    create() {
      const values: number[] = [];
      for (let i = 0; i < this.amount; i++) {
        values.push(Math.floor(Math.random() * 100));
      }
      this.symbols = values;
    },
    reset() {
      this.amount = 0;
      this.symbols = [];
    },
  },
});
