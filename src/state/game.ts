import { GameState, Score } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("game", {
    state: () => {
        return {
            state: ref<GameState>(GameState.MENU),
            highscore: ref<Score[]>([]),
        };
    },
    actions: {
        start() {
            this.state = GameState.PLAY;
        },
        showHighscore () {
            this.state = GameState.SCORE;
        },
        exit() {
            this.state = GameState.MENU;
        },
        save(score: Score) {
            this.highscore.push(score)
        }
    },
});
