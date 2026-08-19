import './Header.css';

function Header({ favoriteCount }) {
  return (
    <header className="gamer-header">
      <div className="logo-area">
        <a href="#inicio" className="logo-text">RYVEX<span className="dot">.</span></a>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#inicio" className="nav-item">Inicio</a></li>
          <li><a href="#categorias" className="nav-item">Categorías</a></li>
          <li><a href="#contacto" className="nav-item">Contacto</a></li>
          <li><a href="#catalogo" className="nav-item">Favoritos <span className="favorite-count">{favoriteCount}</span></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// AVANCES JUAN MANUEL BENAVIDES PARRA
