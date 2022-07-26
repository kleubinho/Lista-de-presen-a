import { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import "./styles.css";

export function Home() {
  const [
    studentName /*Conteúdo do estado */,
    setStudentName /*Atualiza o estado */,
  ] = useState();
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: "", avatar: "", login: "" });

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
      /* Estado anterior */ (prevState) => [
        ...prevState,
        newStudent,
      ] /* Substituindo o valor do antigo estado com o Novo estudante que estamos adicionando */
    );
    // Caso não coloquemos o spread Operator
    // ['Kleber']
    // [['Kleber'], Henrique]
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/kleubinho");
      const data = await response.json();
      setUser({
        name: data.name,
        avatar: data.avatar_url,
        login: data.login,
      });
    }

    fetchData()
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
          <strong>{user.name}</strong>
          {/* <strong>{user.login}</strong> */}

          <img src={user.avatar} alt="foto de perfil" />
        </div>
      </header>

      <input
        onChange={(e) => setStudentName(e.target.value)}
        type="text"
        placeholder="Digite o nome..."
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}

// Os Hooks são funções que permitem ligar e conectar os recurso de estado e ciclo de vida
