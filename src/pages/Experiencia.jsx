import React from 'react';
import { Link } from 'react-router-dom';
import './pagestyle.css';

function Experiencia() {
  return (
    <div className="page-card">
      <h2>Experiência Profissional</h2>
      <ul>
        <p>Desenvolvedor Front-end na <b>Empresa X</b> (2022 - Presente)</p>
        <p>Estagiário em Desenvolvimento Web na <b>Empresa Y</b> (2021 - 2022)</p>
      </ul>

      <Link to="/">
        <button>Voltar ao Início</button>
      </Link>
    </div>
  );
}

export default Experiencia;

// Os codigos de pages não tem muito oque ser comentando, são componentes simples que retornam uma div com informações e um botão para voltar ao inicio
