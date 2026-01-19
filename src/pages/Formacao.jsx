import React from 'react';
import { Link } from 'react-router-dom';
import './pagestyle.css';

function Formacao() {
  return (
    <div className="page-card">
      <h2>Formação Acadêmica</h2>
      <ul>
        <p>Bacharel em Ciência da Computação - <b>UFMG</b> (2018 - 2022)</p>
        <p>Técnico em Informática - <b>Escola Estadual</b> (2015 - 2017)</p>
      </ul>

      <Link to="/">
        <button>Voltar ao Início</button>
      </Link>
    </div>
  );
}

export default Formacao;
