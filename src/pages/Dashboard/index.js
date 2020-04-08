import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from './styles';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/user');
      setUsers(response.data);
    }
    loadDevs();
  }, []);

  async function handleDelete(id) {
    await api.delete(`/user/${id}`);

    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <Container>
      <header>
        <h1>Bem Vindo!</h1>
        <Link to="/user/new">Cadastrar</Link>
        <a
          href="https://spring-rest-users.herokuapp.com/log"
          target="_blank"
          rel="noopener noreferrer"
        >
          logs
        </a>
      </header>
      <h1>Pessoas Cadastradas</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/update/${user.id}`}>
              <header>
                <img
                  src={`https://spring-rest-users.herokuapp.com/avatar/${user.avatar}`}
                  alt={user.nome}
                />

                <div>
                  <strong>
                    {user.nome} {user.sobrenome}
                  </strong>

                  <span>
                    {user.idade} anos, {user.cidade} - {user.uf}
                  </span>
                </div>
              </header>
            </Link>
            <button type="button" onClick={() => handleDelete(user.id)}>
              <FiTrash2 size={18} color="#E02041" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
