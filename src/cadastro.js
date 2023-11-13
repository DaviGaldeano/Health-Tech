import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cadastro.css';
import Menu from './menu';
import logoMinisterio from './images/logoMinisterio.png';
import logoEquipeMedica from './images/logoEquipeMedica.png';

function Cadastro() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleCadastro = () => {
    // Simulação simples de validação e cadastro
    if (password !== confirmPassword) {
      alert('As senhas não coincidem. Tente novamente.');
      return;
    }

    navigate('/');
  };

  const handleLogin = () => {
    // Redireciona para a página de login
    navigate('/login');
  };

  return (
    <div className="Cadastro">
      <Menu />
      <img src={logoMinisterio} className='logo-ministerio' alt="Logo do Ministério da Saúde"/>
      <div className='login-container'>
        <h3>Saúde com informação</h3>
        <img src={logoEquipeMedica} className='logo-equipe-medica' alt="Equipe Médica"/>
        <h2 className='login-title'>Novo Cadastro</h2>
        <form>
          <label>
            <input
              className='input'
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              className='input'
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="Senha"
              className='input'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            <input
              placeholder="Confirmar Senha"
              className='input'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" className='button-entrar' onClick={handleCadastro}>
            Cadastrar
          </button>
          <br />
          <button type="button" className='button-cadastrar' onClick={handleLogin}>
            Voltar para login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
