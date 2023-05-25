import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [estado, entrar] = useState("Entrada");
  const [palpite, changePalpite] = useState(150);
  const [min, changeMin] = useState(0);
  const [max, changeMax] = useState(300);
  const [numTentativas, tentativas] = useState(0);

  const rodando = () => {
    entrar("Rodando");
    changeMax(300);
    changeMin(0);
    tentativas(0);
    changePalpite(150);
  };
  if (estado === "Entrada") {
    return <button onClick={rodando}> Iniciar Jogo </button>;
  }

  const menor = () => {
    const newPalpiteMin = parseInt((palpite - min) / 2) + min;
    changePalpite(newPalpiteMin);
    changeMax(palpite);
    tentativas(numTentativas + 1);
  };
  const maior = () => {
    const newPalpiteMax = parseInt((max - palpite) / 2) + palpite;
    changePalpite(newPalpiteMax);
    changeMin(palpite);
    tentativas(numTentativas + 1);
  };
  const voltarInicio = () => {
    entrar("Entrada");
  };
  const Acertou = () => {
    entrar("Fim");
  };
  if (estado === "Fim") {
    return (
      <ul>
        <li> Número de tentavias {numTentativas} </li>
        <li> Seu número era: {palpite} </li>
        <li>
          {" "}
          <button onClick={voltarInicio}> Início </button>{" "}
        </li>
      </ul>
    );
  }

  return (
    <div className="App">
      <h1>Acerte meu número</h1>
      <h3>Seu número é: {palpite} </h3>
      <button onClick={menor}>Menor</button>
      <button onClick={Acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}
