import { ref, watch } from "vue";

const savedJokes = ref(JSON.parse(localStorage.getItem("jokes") || "[]"));

export function useJokeStore() {
    const addJoke = (joke) => {
        savedJokes.value.push(joke);
        localStorage.setItem("jokes", JSON.stringify(savedJokes.value));
    };

    const removeJoke = (id) => {
        savedJokes.value = savedJokes.value.filter((j) => j.id !== id);
        localStorage.setItem("jokes", JSON.stringify(savedJokes.value));
    };

    return { savedJokes, addJoke, removeJoke };
}