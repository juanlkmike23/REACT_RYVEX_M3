import GameCard from './GameCard';
import './GameCatalog.css';
function GameCatalog({ games, query, onQueryChange, favorites, onToggleFavorite }) { return <section id="catalogo" className="section catalog"><h2 className="section-title">Catálogo destacado</h2><div className="catalog-tools"><p>Encuentra tu próxima aventura.</p><input value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Buscar juego..." aria-label="Buscar juego" /></div>{games.length ? <div className="games-grid">{games.map((game) => <GameCard key={game.id} game={game} isFavorite={favorites.includes(game.id)} onToggleFavorite={onToggleFavorite} />)}</div> : <p className="empty-state">No encontramos juegos con esa búsqueda.</p>}</section>; }
export default GameCatalog;
