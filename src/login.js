import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
import logoMinisterio from "./images/logoMinisterio.png";
import logoEquipeMedica from "./images/logoEquipeMedica.png";

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "davi@gmail.com" && password === "123") {
      navigate("/menu-busca");
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  };
  const handleCadastrar = () => {
    navigate("/cadastro");
  };

  return (
    <div className="Container">
      <div className="Content">
        <div className="Login">
          <img
            src={logoMinisterio}
            className="logo-ministerio"
            alt="Logo do Ministério da Saúde"
          />
          <div className="login-container">
            <h3>Saúde com informação</h3>
            <img
              src={logoEquipeMedica}
              className="logo-equipe-medica"
              alt="Equipe Médica"
            />
            <h2 className="login-title">Seu Login</h2>
            <form>
              <label>
                <input
                  className="input"
                  type="text"
                  placeholder="Usuário"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </label>
              <br />
              <label>
                <input
                  placeholder="Senha"
                  className="input"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />
              <button
                type="button"
                className="button-entrar"
                onClick={handleLogin}
              >
                Entrar
              </button>
              <br />
              <button
                type="button"
                className="button-cadastrar"
                onClick={handleCadastrar}
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
