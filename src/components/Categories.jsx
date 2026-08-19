import './Categories.css';
const categories = [['Todos', '✦'], ['Acción', '⚡'], ['Aventura', '🗺️'], ['Deportes', '🏆'], ['Estrategia', '♟️']];
function Categories({ activeCategory, onSelectCategory }) { return <section id="categorias" className="section categories"><h2 className="section-title">Elige tu partida</h2><p className="section-copy">Explora títulos seleccionados para cada tipo de jugador.</p><div className="category-grid">{categories.map(([name, icon]) => <button key={name} onClick={() => onSelectCategory(name)} className={`category-card ${activeCategory === name ? 'active' : ''}`}><span>{icon}</span>{name}</button>)}</div></section>; }
export default Categories;
