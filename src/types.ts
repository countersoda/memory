export interface Card {
    symbol: number;
    key: number;
}

export interface Score {
    user: string;
    amount: number;
    time: number;
}

export enum GameState {
    PLAY = "play",
    MENU = "menu",
    SCORE = "highscore"
}