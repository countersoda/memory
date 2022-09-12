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
        const value = Math.floor(Math.random() * 100);
        values.push(value);
        values.push(value);
      }
      this.symbols = values;
    },
    reset() {
      this.amount = 0;
      this.symbols = [];
    },
  },
});
