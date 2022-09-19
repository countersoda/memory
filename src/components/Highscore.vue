<template>
  <div
    class="h-full flex flex-col items-center gap-2 justify-center pb-[10rem]"
  >
    <div v-if="highscore.length !== 0">
      <div class="border rounded-md px-5">
        <table>
          <tr>
            <th>Player</th>
            <th>Pairs</th>
            <th>Attempts</th>
            <th>Time</th>
          </tr>
          <tbody v-for="score in highscore.sort(sortBy)">
            <tr>
              <td>{{ score.user }}</td>
              <td>{{ score.amount }}</td>
              <td>{{ score.attempts }}</td>
              <td>{{ score.time }}s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p v-else>No Highscore available!</p>
    <div class="flex flex-row gap-2">
      <button class="primary-btn" v-on:click="exit">Back</button>
      <button
        v-if="highscore.length !== 0"
        class="primary-btn"
        v-on:click="clearHighscore"
      >
        Clear
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { Score } from "@/types";
import { useGameStore } from "@/state/game";
const game = useGameStore();

const { clearHighscore, exit } = game;
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
