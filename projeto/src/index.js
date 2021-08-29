import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Teste from "./App";

export default function Home() {
  return <h1>Meu primeiro React</h1>;
}

export function Texto(props) {
  return <p>{props.texto}</p>;
}

export function Botao(props) {
  const [botao, setBotao] = useState(0);

  useEffect(() => {
    document.title = botao;
  }, [botao]);

  return (
    <div>
      <p>Número de clicks:{botao}</p>
      <button onClick={() => setBotao(botao + 1)}>{props.nome}</button>
    </div>
  );
}

export function Paragrafos(props) {
  return (
    <div>
      <Texto texto="esse é um simples texto na tela." texto2="outra frase" />
      <Texto texto="outro texto na tela." />
      <Texto texto="mais um texto." />
      <Texto texto="Ultima linha do texto." />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Paragrafos texto2="alguma coisa"/>
    <Botao nome="Acumular" />
  </React.StrictMode>,
  document.getElementById("root")
);
