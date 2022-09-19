import { useStorage } from '@vueuse/core'
import { GameState, Score, Setting } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("game", {
    state: () => {
        const highscore = useStorage<Score[]>("memory-highscore", []);
        const setting = useStorage<Setting>("memory-setting", { visibilityDuration: 350 });
        return {
            state: ref<GameState>(GameState.MENU),
            setting: setting,
            highscore: highscore,
        };
    },
    actions: {
        show(state: GameState) {
            this.state = state;
        },
        save(score: Score) {
            this.highscore.push(score)
        },
        clearHighscore() {
            this.highscore = [];
        }
    },
});
