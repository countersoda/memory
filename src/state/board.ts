import { defineStore } from "pinia";
import { ref } from "vue";
import { shuffle } from "lodash"
import { Card } from "@/types";
import { sleep } from "@/utils";

export const useBoardStore = defineStore("board", {
  state: () => {
    return {
      amount: ref<number>(9),
      cards: ref<Card[]>([]),
      revealedCards: ref<Card[]>([]),
      foundCards: ref<Card[]>([]),
      startTime: ref<number>(0),
      currentTime: ref<number>(0),
      timerId: ref<number | null>(null)
    };
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
      this.startTime = Date.now();
      this.timerId = setInterval(() => {
        this.currentTime = Math.floor((Date.now() - this.startTime) / 1000);
      }, 500);
    },
    reset() {
      this.amount = 9;
      this.startTime = 0;
      this.currentTime = 0;
      this.cards = [];
      this.foundCards = []
      this.revealedCards = []
      clearInterval(this.timerId!)
      this.timerId = null;
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
      if ((this.foundCards.length / 2) === this.amount) {
        await sleep(500);
        alert(`Finished! It took ${this.currentTime}s`)
        this.reset()
      }
    }
  },
});
