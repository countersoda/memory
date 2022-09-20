export interface Card {
    symbol: number;
    key: number;
}

export interface Setting {
    visibilityDuration: number;
}

export interface Score {
    user: string;
    time: string;
    amount: number;
    attempts: number;
    mode: GameMode | undefined;
}

export enum GameState {
    PLAY = "play",
    MENU = "menu",
    SCORE = "highscore",
    SETTING = "setting"
}

export enum GameMode {
    SLOW = "Slow",
    EASY = "Easy",
    FAST = "Fast",
    HARD = "Hardcore"
}

