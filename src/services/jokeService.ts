export async function fetchJoke(type: string = "random") {
    try {
        const url = `https://official-joke-api.appspot.com/jokes/${type}/random`;
        const response = await fetch(url);
        const data = await response.json();
        return data[0]; // API returns an array with a single joke
    } catch (error) {
        console.error("Error fetching joke:", error);
        return null;
    }
}