import { useState } from "react";
import { Card } from "../../components/Card";
import "./styles.css";

export function Home() {
  const [
    studentName /*Conteúdo do estado */,
    setStudentName /*Atualiza o estado */,
  ] = useState();
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents(
      /* Estado anterior */ prevState => [...prevState, newStudent] /* Substituindo o valor do antigo estado com o Novo estudante que estamos adicionando */
    );
    // Caso não coloquemos o spread Operator
    // ['Kleber']
    // [['Kleber'], Henrique]
  }

  return (
    <div className="container">
      <h1>Lista de presença</h1>

      <input
        onChange={(e) => setStudentName(e.target.value)}
        type="text"
        placeholder="Digite o nome..."
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card 
            key={student.time}
            name={student.name} 
            time={student.time} 
        />
      ))}
    </div>
  );
}
