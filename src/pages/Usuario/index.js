import axios from 'axios';
import React, { useEffect, useState } from 'react';
import defaultImg from '../../assets/default.png';
import api from '../../services/api';
import { Container, HomeLink, Label } from './styles';

export default function Usuario({ history }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [idade, setIdade] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');
  const [cep, setCep] = useState('');
  const [preview, setPreview] = useState();
  const [file, setFile] = useState();

  useEffect(() => {
    async function loadCep() {
      if (cep.length === 8) {
        const apiCep = axios.create();
        const { data } = await apiCep.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );

        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setUf(data.uf);
      }
    }
    loadCep();
  }, [cep]);

  function handleAvatarInput(e) {
    const files = e.target.files[0];
    setFile(files);
    const reader = new FileReader();

    reader.readAsDataURL(files);
    reader.onloadend = () => setPreview([reader.result]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    data.append('file', file);
    data.append('nome', nome);
    data.append('sobrenome', sobrenome);
    data.append('idade', idade);
    data.append('cep', cep);
    data.append('logradouro', logradouro);
    data.append('uf', uf);
    data.append('bairro', bairro);
    data.append('cidade', cidade);

    await api.post('/user', data);

    history.push('/');
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <HomeLink to="/">Home</HomeLink>
        <section>
          <Label htmlFor="avatar">
            {preview ? (
              <img src={preview} alt="Temp" />
            ) : (
              <img src={defaultImg} alt="Default img" />
            )}
            <input
              type="file"
              id="avatar"
              accept="image/*"
              onChange={handleAvatarInput}
            />
          </Label>
        </section>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
          <input
            type="number"
            placeholder="Idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <input
            type="text"
            placeholder="Logradouro"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <input
            type="text"
            placeholder="Bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
          <input
            type="text"
            placeholder="UF"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
}
