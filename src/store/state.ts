import { defineStore } from "pinia";
import { ref } from "vue";
import { shuffle } from "lodash"
import { Card } from "@/types";

export const useBoardStore = defineStore("board", {
  state: () => {
    return { amount: ref<number>(0), cards: ref<Card[]>([]), revealedCards: ref<Card[]>([]) };
  },
  actions: {
    increment() {
      this.amount++;
    },
    create() {
      const values: Card[] = [];
      for (let i = 0; i < this.amount; i++) {
        const value = Math.floor(Math.random() * 100 + 1);
        const card: Card = { symbol: value, key: -1 }
        values.push(...[card, card])
      }
      this.cards = shuffle(values).map((card, i) => ({ ...card, key: i }));
    },
    reset() {
      this.amount = 0;
      this.cards = [];
    },
    reveal(key: number) {
      for (const symbol of this.cards) {
        if (symbol.key === key) {
          this.revealedCards.push(symbol)
          break;
        }
      }
    }
  },
});
