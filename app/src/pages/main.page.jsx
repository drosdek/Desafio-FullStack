import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <main>
      <h1>Desafio Desenvolvedores</h1>
      <h2>Indice</h2>
      <ul>
        <li>
          <Link to="/desenvolvedores">Lista de Desenvolvedores</Link>
        </li>
        <li>
          <Link to="/niveis">Lista de Niveis</Link>
        </li>
      </ul>
    </main>
  );
}

export default MainPage;
