import { useState } from "react";
import { Card } from "../../components/Card";
import "./styles.css";

export function Home() {
  const [studentName/*Conteúdo do estado */, setStudentName/*Atualiza o estado */] = useState()

  return (
    <div className="container">
      <h1>Nome: {studentName}</h1>

      <input
        onChange={(e) => setStudentName(e.target.value)}
        type="text"
        placeholder="Digite o nome..."
      />

      <button type="button">Adicionar</button>

      <Card name="Junior" time="10:20:16" />
      <Card name="Felipe" time="20:30:46" />
    </div>
  );
}
