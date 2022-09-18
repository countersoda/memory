import { defineStore } from "pinia";
import { ref } from "vue";
import { shuffle } from "lodash"
import { Card } from "@/types";
import { sleep } from "@/utils";

export const useBoardStore = defineStore("board", {
  state: () => {
    return {
      amount: ref<number>(4),
      cards: ref<Card[]>([]),
      revealedCards: ref<Card[]>([]),
      foundCards: ref<Card[]>([]),
      startTime: ref<number>(0), // UNIX milliseconds
      currentTime: ref<number>(0), // seconds
      timerId: ref<number | undefined>(undefined),
      finished: ref<boolean>(false)
    };
  },
  actions: {
    create() {
      const values: number[] = [];
      let i = 0;
      while (i < this.amount) {
        const value = Math.floor(Math.random() * 100 + 1);
        if (!values.includes(value)) {
          values.push(...[value, value])
          i++;
        }
      }
      this.cards = shuffle(values).map((value, i) => ({ symbol: value, key: i }));
      this.startTime = Date.now();
      this.timerId = setInterval(() => {
        this.currentTime = Math.floor((Date.now() - this.startTime) / 1000);
      }, 500);
    },
    reset() {
      this.startTime = 0;
      this.currentTime = 0;
      this.cards = [];
      this.foundCards = []
      this.revealedCards = []
      clearInterval(this.timerId);
      this.timerId = undefined;
      this.finished = false;
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
        this.finished = true;
        clearInterval(this.timerId);
      }
    }
  },
});
