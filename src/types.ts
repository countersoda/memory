export interface Card {
    symbol: number;
    key: number;
}

export interface Score {
    user: string;
    time: string;
    amount: number;
    attempts: number;
}

export enum GameState {
    PLAY = "play",
    MENU = "menu",
    SCORE = "highscore"
}