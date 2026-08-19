import './Categorias.css';

function Categorias() {
  const categorias = [
    { nombre: 'Acción', icono: '⚔️', juegos: 128 },
    { nombre: 'Aventura', icono: '🗺️', juegos: 96 },
    { nombre: 'RPG', icono: '🧙', juegos: 75 },
    { nombre: 'Deportes', icono: '⚽', juegos: 62 },
    { nombre: 'Estrategia', icono: '♟️', juegos: 54 },
    { nombre: 'Terror', icono: '👻', juegos: 41 }
  ];

  return (
    <section className="categorias">
      <div className="categorias-header">
        <h2 className="categorias-titulo">Explora por Categoría</h2>
        <p className="categorias-subtitulo">Encuentra los mejores juegos según tu estilo</p>
      </div>

      <div className="categorias-grid">
        {categorias.map((cat, index) => (
          <div className="categoria-tarjeta" key={index}>
            <span className="categoria-icono">{cat.icono}</span>
            <h3 className="categoria-nombre">{cat.nombre}</h3>
            <p className="categoria-cantidad">{cat.juegos} juegos</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categorias;
