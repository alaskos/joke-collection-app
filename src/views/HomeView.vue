<script setup>
import { ref } from "vue";
import { fetchJoke } from "@/services/jokeService";
import JokeCard from "@/components/JokeCard.vue";

const joke = ref(null);
const loading = ref(false);
const error = ref(null);

async function getJoke(type = "random") {
  loading.value = true;
  error.value = null;
  const newJoke = await fetchJoke(type);
  if (newJoke) {
    joke.value = newJoke;
  } else {
    error.value = "Failed to fetch joke.";
  }
  loading.value = false;
}
</script>

<template>
  <div class="p-6">
    <button
        @click="getJoke('random')"
        class="bg-blue-500 text-white px-4 py-2 rounded shadow"
    >
      Get Random Joke
    </button>
    <button
        @click="getJoke('programming')"
        class="ml-2 bg-green-500 text-white px-4 py-2 rounded shadow"
    >
      Get Programming Joke
    </button>

    <div v-if="loading" class="mt-4">Loading...</div>
    <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
    <JokeCard v-if="joke" :joke="joke" class="mt-4" />
  </div>
</template>