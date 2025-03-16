<script setup>
import { useJokeStore } from "@/store/jokeStore";

const { savedJokes } = useJokeStore();
</script>

<template>
  <div class="p-6">
    <h1 class="text-xl font-bold">Favorite Jokes</h1>
    <div v-if="savedJokes.length === 0" class="mt-4">No jokes saved yet.</div>
    <div v-for="joke in savedJokes" :key="joke.id" class="mt-4">
      <JokeCard :joke="joke" />
    </div>
  </div>
</template>