Joke Collection App 🎭
A fun web app to fetch, save, and enjoy random jokes, built with Vue 3, TypeScript, Tailwind CSS, and Vite.

🛠 Tech Stack
Vue 3 (Composition API) – Frontend framework
Vite – Fast development server and bundler
TypeScript – Typed JavaScript for better maintainability
Tailwind CSS – Styling framework
Official Joke API – API for fetching jokes

📦 Installation
Clone the Repository
git clone https://github.com/your-username/joke-collection-app.git
cd joke-collection-app

Install Dependencies
npm install

Start Development Server
npm run dev
The app should now be running at http://localhost:3000 🚀.

Build for Production
npm run build

🎭 Features
✅ Fetch and display random jokes
✅ Toggle between random jokes and programming jokes
✅ Reveal animation for punchlines
✅ Save favorite jokes to a personal collection
✅ Remove jokes from favorites
✅ Error handling for API requests
✅ Loading indicators during API calls

joke-collection-app/
│── src/
│   ├── assets/            # Global styles (Tailwind)
│   ├── components/        # Reusable UI components
│   │   ├── JokeCard.vue   # Displays a joke
│   ├── services/          # API calls
│   │   ├── jokeService.ts # Fetches jokes from API
│   ├── store/             # State management (localStorage)
│   │   ├── jokeStore.ts   # Manages saved jokes
│   ├── views/             # Page components
│   │   ├── HomeView.vue   # Main page for fetching jokes
│   │   ├── FavoritesView.vue # Saved jokes
│   ├── router/            # Vue Router setup
│   │   ├── index.ts       # Route definitions
│   ├── App.vue            # Root component
│   ├── main.ts            # App entry point
│── public/                # Static assets
│── package.json           # Dependencies & scripts
│── vite.config.ts         # Vite configuration
│── tsconfig.json          # TypeScript configuration
│── README.md              # Documentation

API Integration
This app fetches jokes from the Official Joke API:

Random Joke → https://official-joke-api.appspot.com/jokes/random
Programming Joke → https://official-joke-api.appspot.com/jokes/programming/random

Example API Response:
{
  "id": 35,
  "type": "programming",
  "setup": "Why did the programmer quit his job?",
  "punchline": "Because he didn't get arrays."
}
