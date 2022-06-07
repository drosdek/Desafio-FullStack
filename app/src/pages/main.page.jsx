import React from "react";
import { Link } from "react-router-dom";
import MenuContainer from "../container/menu.container";

function MainPage() {
  return (
    <MenuContainer>
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
    </MenuContainer>
  );
}

export default MainPage;
