/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/App/App.jsx",
    "./src/components/PlayersInBowl/PlayersInBowl.jsx",
    "./src/components/PlayerForm/PlayerForm.jsx",
    "./src/components/SinglePlayer/SinglePlayer.jsx",
    "./src/main.jsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "cool-doge": "url(./src/assets/Doge-meme-2.webp)",
      },
    },
  },
  plugins: [],
};
