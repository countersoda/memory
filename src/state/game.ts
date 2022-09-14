import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("game", {
    state: () => {
        return {
            playing: ref<boolean>(false),

        };
    },
    actions: {
        start() {
            this.playing = true;
        },
        exit() {
            this.playing = false;
        }
    },
});
