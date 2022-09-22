<template>
  <div
    class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
  >
    <div v-if="highscore.length !== 0">
      <div class="slideInFromTop border rounded-md px-5">
        <table>
          <tr>
            <th>Player</th>
            <th>Pairs</th>
            <th>Attempts</th>
            <th>Time</th>
            <th>Mode</th>
          </tr>
          <tbody>
            <tr v-for="score in highscore.sort(sortBy)">
              <td>{{ score.user }}</td>
              <td>{{ score.amount }}</td>
              <td>{{ score.attempts }}</td>
              <td>{{ score.time }}s</td>
              <td>{{ score.mode?.valueOf() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p v-else>No Highscore available!</p>
    <div class="flex flex-row gap-2">
      <button class="primary-btn" @click="show(GameState.MENU)">
        Back
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useGameStore } from "@/state/game";
import { GameState, Score } from "@/types";

const game = useGameStore();
const { show } = game;
const { highscore } = storeToRefs(game);

const sortBy = (a: Score, b: Score) => {
  if (a.amount > b.amount) {
    return -1;
  } else if (a.amount < b.amount) {
    return 1;
  } else {
    return (
      parseFloat(a.time.replace("s", "")) - parseFloat(b.time.replace("s", ""))
    );
  }
};
</script>
