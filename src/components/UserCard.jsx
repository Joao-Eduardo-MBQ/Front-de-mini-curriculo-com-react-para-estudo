// Importa o React para criar o componente funcional
import React from 'react';

// Importa o componente Link do react-router-dom para navegação interna
import { Link } from 'react-router-dom';

// Importa o arquivo CSS específico para estilizar o UserCard
import './UserCard.css';

// Componente funcional UserCard que recebe props: name, description, avatar e links
const UserCard = ({ name, description, avatar, links }) => {

  return (
    // Container principal do card do usuário
    <div className="user-card">
      {/* Imagem do avatar do usuário */}
      <img src={avatar} className="avatar" />

      {/* Nome do usuário */}
      <h2>{name}</h2>

      {/* Descrição do usuário */}
      <p>{description}</p>
      
      {/* Container para os links de navegação */}
      <div className="links">
        {/* Verifica se existem links, e para cada link cria um botão/link navegável */}
        {links && links.map((link, index) => (
          <Link 
            key={index}               // Chave única para cada elemento da lista
            to={link.url}             // Define o caminho para navegação interna
            className="link-button"   // Aplica a classe para estilização do botão
          >
            {link.label}              {/* Texto exibido no botão */}
          </Link>
        ))}
      </div>
    </div>
  );
};

// Exporta o componente para ser usado em outras partes da aplicação
export default UserCard;
