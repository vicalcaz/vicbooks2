import React from 'react';
import '../css/SobreNosotros.css';
import '../css/TextoBrillante.css'; // Asegúrate de importar el CSS del efecto

const SobreNosotros = () => (
  <div className="sobre-container">
    <div className="sobre-bookicon">📚</div>
    <div className="texto-brillante">
        <h1>Sobre Nosotros</h1>
    </div>
    <h2 className="sobre-subtitle">
      ¡Bienvenido a <span className="sobre-highlight">VicBooks</span>!<br />
      Somos una tienda dedicada a los <span className="sobre-highlight">libros usados y casi nuevos</span>, seleccionados con pasión y dedicación.<br />
      Nuestro objetivo es acercar <span className="sobre-highlight">historias y conocimiento</span> a todos los lectores, ofreciendo una experiencia personalizada y cercana.
    </h2>
    <div className="sobre-thanks">
      Gracias por confiar en nosotros.<br />
      <b>¡Esperamos que encuentres tu próximo tesoro literario!</b>
    </div>
  </div>
);

export default SobreNosotros;