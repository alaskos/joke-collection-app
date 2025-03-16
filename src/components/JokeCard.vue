<script setup>
import { ref, defineProps } from "vue";

const props = defineProps(["joke"]);
const reveal = ref(false);
</script>

<template>
  <div class="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
    <p class="font-semibold text-lg">{{ joke.setup }}</p>
    <button @click="reveal = !reveal" class="mt-2 text-blue-500">
      {{ reveal ? "Hide" : "Reveal" }} Punchline
    </button>
    <p v-if="reveal" class="mt-2 text-gray-700 font-medium">
      {{ joke.punchline }}
    </p>
  </div>
</template>