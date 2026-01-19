import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// Esse arquivo é o ponto de entrada da aplicação React. Ele importa o componente principal App e o renderiza dentro do elemento HTML com o id "root".
// Esta importandoo a biblioteca React e ReactDOM para manipular a árvore de componentes e renderizá-los no DOM, o DOM é oque renderiza a interface visual da aplicação no navegador.
// O app e o app.css são importados para serem usados na aplicação, o App.css contém os estilos globais da aplicação e o App é o componente raiz que contém toda a estrutura da aplicação React.

// A função ReactDOM.createRoot cria uma raiz de renderização para a aplicação React, e o método render é chamado para renderizar o componente App dentro dessa raiz.
// Essa root é puxada no index.htm que está na pasta public at4ravés do id "root": <div id="root"></div>