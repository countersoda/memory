import { useStorage } from '@vueuse/core'
import { GameState, Score } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("game", {
    state: () => {
        const highscore = useStorage<Score[]>("memory-highscore", []);
        return {
            state: ref<GameState>(GameState.MENU),
            highscore: highscore,
        };
    },
    actions: {
        start() {
            this.state = GameState.PLAY;
        },
        showHighscore() {
            this.state = GameState.SCORE;
        },
        exit() {
            this.state = GameState.MENU;
        },
        save(score: Score) {
            this.highscore.push(score)
        },
        clearHighscore() {
            this.highscore = [];
        }
    },
});
