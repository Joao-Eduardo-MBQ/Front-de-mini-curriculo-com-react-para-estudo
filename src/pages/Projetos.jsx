import React from 'react';
import { Link } from 'react-router-dom';
import './pagestyle.css';

function Projetos() {
  return (
    <div className="page-card">
      <h2>Projetos</h2>
      <ul>
        <p><b>Sistema de Gestão de Tarefas</b> - Um aplicativo web para organizar e gerenciar tarefas <br></br>diárias, com funcionalidades de criar, editar, concluir e excluir tarefas. Construído com<br></br>React e Firebase para armazenamento em tempo real.</p>
        <br></br>
        <p><b>Site Portfólio Pessoal</b> - Um site responsivo para apresentar habilidades, experiências e<br></br>projetos pessoais, feito com React e CSS moderno, focado em usabilidade e design clean.</p>
      </ul>

      <Link to="/">
        <button>Voltar ao Início</button>
      </Link>
    </div>
  );
}

export default Projetos;
