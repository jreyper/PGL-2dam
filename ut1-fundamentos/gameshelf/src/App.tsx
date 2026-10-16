import { useState } from "react";
import "./App.css";
import GameCard from "./components/GameCard";

type Game = {
  id: number;
  title: string;
  genre: string;
  price: number;
  available: boolean;
};

const games: Game[] = [
  { id: 1, title: "Hollow Knight", genre: "Aventura", price: 14.99, available: true },
  { id: 2, title: "Celeste", genre: "Plataformas", price: 19.99, available: true },
  { id: 3, title: "Stardew Valley", genre: "Simulación", price: 13.99, available: false },
  { id: 4, title: "Minecraft", genre: "Supervivencia", price: 29.99, available: true },
  { id: 5, title: "Terraria", genre: "Aventura", price: 9.99, available: true },
  { id: 6, title: "Hades", genre: "Acción", price: 24.99, available: true },
  { id: 7, title: "Elden Ring", genre: "RPG", price: 49.99, available: false },
  { id: 8, title: "God of War", genre: "Acción", price: 39.99, available: true },
  { id: 9, title: "The Witcher 3", genre: "RPG", price: 14.99, available: true },
  { id: 10, title: "Rocket League", genre: "Deportes", price: 0, available: true },
  { id: 11, title: "Cuphead", genre: "Plataformas", price: 19.99, available: false },
  { id: 12, title: "Portal 2", genre: "Puzles", price: 9.99, available: true },
];

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [onlyUnder15, setOnlyUnder15] = useState(false);

  let visibleGames = games;

  if (onlyAvailable) {
    visibleGames = visibleGames.filter((game) => game.available);
  }

  if (onlyUnder15) {
    visibleGames = visibleGames.filter((game) => game.price < 15);
  }

  return (
    <main className="app">
      <header className="header">
        <h1>GameShelf</h1>
        <p>Mi catálogo de videojuegos</p>
      </header>

      <section className="filters">
        <button onClick={() => setOnlyAvailable(!onlyAvailable)} className={onlyAvailable ? "active" : ""}>
          {onlyAvailable ? "Mostrar todos" : "Mostrar disponibles"}
        </button>

        <button onClick={() => setOnlyUnder15(!onlyUnder15)} className={onlyUnder15 ? "active" : ""}>
          {onlyUnder15 ? "Mostrar cualquier precio" : "Menos de 15 €"}
        </button>
      </section>

      <p className="counter"> Videojuegos encontrados: {visibleGames.length}</p>

      <section className="catalog">
        {visibleGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
            available={game.available}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
