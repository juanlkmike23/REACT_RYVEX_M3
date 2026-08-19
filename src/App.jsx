import { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
<<<<<<< HEAD
import Categories from './components/Categories';
import GameCatalog from './components/GameCatalog';
import Contact from './components/Contact';
import Footer from './components/Footer';
=======
import Categorias from './components/Categorias'
>>>>>>> cd08a643142a6e4b2fe7f8f6432603883916a850
import './App.css';

const games = [
  { id: 1, title: 'Neon Rift', category: 'Acción', platform: 'PC', price: '$24.99', art: '⚡' },
  { id: 2, title: 'Velocity X', category: 'Deportes', platform: 'PS5', price: '$39.99', art: '🏎️' },
  { id: 3, title: 'Echoes of Aether', category: 'Aventura', platform: 'PC', price: '$29.99', art: '🗺️' },
  { id: 4, title: 'Core Command', category: 'Estrategia', platform: 'Xbox', price: '$34.99', art: '♟️' },
  { id: 5, title: 'Shadow Circuit', category: 'Acción', platform: 'PC', price: '$19.99', art: '🤖' },
  { id: 6, title: 'Stellar League', category: 'Deportes', platform: 'Switch', price: '$27.99', art: '🚀' },
];

function App() {
<<<<<<< HEAD
  const [category, setCategory] = useState('Todos');
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const visibleGames = useMemo(() => games.filter((game) => (category === 'Todos' || game.category === category) && game.title.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const toggleFavorite = (id) => setFavorites((current) => current.includes(id) ? current.filter((gameId) => gameId !== id) : [...current, id]);
  return <><Header favoriteCount={favorites.length} /><main><Hero /><Categories activeCategory={category} onSelectCategory={setCategory} /><GameCatalog games={visibleGames} query={query} onQueryChange={setQuery} favorites={favorites} onToggleFavorite={toggleFavorite} /><Contact /></main><Footer /></>;
=======
  return (
    <>
      <Header />
      <Hero />
      <Categorias/>
    </>
  );
>>>>>>> cd08a643142a6e4b2fe7f8f6432603883916a850
}

export default App;
