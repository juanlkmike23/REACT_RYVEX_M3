import './Header.css';

function Header() {
  return (
    <header className="gamer-header">
      <div className="logo-area">
        <span className="logo-text">RYVEX<span className="dot">.</span></span>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="#inicio" className="nav-item">Inicio</a></li>
          <li><a href="#categorias" className="nav-item">Categorías</a></li>
          <li><a href="#contacto" className="nav-item">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// AVANCES JUAN MANUEL BENAVIDES PARRA