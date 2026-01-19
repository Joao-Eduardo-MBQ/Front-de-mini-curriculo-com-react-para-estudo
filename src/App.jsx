// Importa o React e os componentes necessários do React Router para navegação
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa componentes e páginas do projeto
import UserCard from './components/UserCard';
import Formacao from './pages/Formacao';
import Experiencia from './pages/experiencia';
import Projetos from './pages/Projetos';

// Importa o arquivo CSS específico para o componente App
import './App.css';

// Componente principal da aplicação
function App() {
  const userLinks = [
    { label: "Formação Acadêmica", url: "/formacao" },
    { label: "Experiência Profissional", url: "/experiencia" },
    { label: "Projetos", url: "/projetos" }
  ];

  return (
    // Router engloba toda a aplicação para habilitar o roteamento (navegação entre páginas)
    <Router>
      <div className="App">
        {/* Título principal da página */}
        <h1>Mini Currículo</h1>

        {/* Define as rotas da aplicação */}
        <Routes>
          {/* Rota raiz "/" exibe o componente UserCard com dados do usuário */}
          <Route path="/" element={
            <UserCard 
              name="Reimu Hakurei Fumo" // Nome do usuário
              description="Desenvolvedora front-end com experiência em criação de interfaces web responsivas, focadas em usabilidade e experiência do usuário." // Descrição
              avatar="https://ae01.alicdn.com/kf/S570c5b1807e3407890956b70cd0ccba8M.jpg" // Foto do usuário
              links={userLinks} // Links para navegação, passado como props
            />
          } />
          
          {/* Rotas para as páginas específicas */}
          <Route path="/formacao" element={<Formacao />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </div>
    </Router>
  );
}

// Exporta o componente App para que possa ser usado em outros arquivos (ex: main.jsx)
export default App;
