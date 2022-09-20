import { GameMode } from "./types";

export async function sleep(ms: number) {
    return new Promise(r => setTimeout(r, ms))
}

export function getMode(duration: number) {
    switch (duration) {
        case 700: return GameMode.SLOW;
        case 500: return GameMode.EASY;
        case 350: return GameMode.FAST;
        case 50: return GameMode.HARD;

    }
}