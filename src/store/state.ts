import { defineStore } from "pinia";
import { ref } from "vue";
import { shuffle } from "lodash"
import { Card } from "@/types";
import { sleep } from "@/utils";

export const useBoardStore = defineStore("board", {
  state: () => {
    return { amount: ref<number>(9), cards: ref<Card[]>([]), revealedCards: ref<Card[]>([]), foundCards: ref<Card[]>([]), timestamp: ref<number>(0) };
  },
  actions: {
    create() {
      const values: Card[] = [];
      for (let i = 0; i < this.amount; i++) {
        const value = Math.floor(Math.random() * 100 + 1);
        const card = { symbol: value, key: -1 }
        values.push(...[card, card])
      }
      this.cards = shuffle(values).map((card, i) => ({ ...card, key: i }));
      this.timestamp = Date.now();
    },
    reset() {
      this.amount = 9;
      this.timestamp = 0;
      this.cards = [];
      this.foundCards = []
      this.revealedCards = []
    },
    async reveal(key: number) {
      if (this.revealedCards.length === 2) return;
      for (const symbol of this.cards) {
        if (symbol.key === key && !this.revealedCards.includes(symbol)) {
          this.revealedCards.push(symbol)
          break;
        }
      }
      if (this.revealedCards.length === 2) {
        if (this.revealedCards[0].symbol === this.revealedCards[1].symbol) {
          this.foundCards.push(...this.revealedCards);
          this.revealedCards = [];
        } else {
          await sleep(500);
          this.revealedCards = [];
        }
      }
    }
  },
});
