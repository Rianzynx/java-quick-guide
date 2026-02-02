import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import javaLogo from '../assets/java.svg';
import api from '../services/api';

import '../style/Login.css';

export const Register = ({ onSwitch }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fieldErrors, setFieldErrors] = useState({})

    const handleRegister = async (e) => {
        e.preventDefault();
        setFieldErrors({});

        // Validações básicas no Front-end
        if (password.length < 4) {
            setFieldErrors({ password: "A senha deve ter no mínimo 4 caracteres!" });
            return;
        }

        if (password !== confirmPassword) {
            setFieldErrors({ password: "As senhas não coincidem!" });
            return;
        }

        try {
            // instância 'api' do Axios. 
            const response = await api.post('users/register', {
                name: name,
                email: email,
                password: password
            });

            // No Axios, se a requisição for 2xx, ela entra aqui
            if (response.status === 200 || response.status === 201) {
                alert("Cadastro realizado com sucesso! Agora faça login.");
                onSwitch(); // Muda para a tela de login
            }
        } catch (error) {
            console.error("Erro na requisição de cadastro:", error);

            if (error.response && error.response.status === 400) {
                const backendErrors = error.response.data.errors;
                if (backendErrors) {
                    setFieldErrors(backendErrors);
                } else {
                    alert("Erro de validação nos dados.");
                }
            } else if (error.response && error.response.status === 409) {
                // Trata erro de e-mail duplicado vindo do banco
                setFieldErrors({ email: "Este e-mail já está em uso." });
            } else {
                alert("Ocorreu um erro inesperado ao conectar ao servidor.");
            }
        }
    };

    return (
        <div className="auth-container">
            <img src={javaLogo} alt="Ícone Java" width={50} height={80} className="login-icon" />
            <h2>Criar Conta</h2>
            <form onSubmit={handleRegister}>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    {fieldErrors.name && <span className="error-message">{fieldErrors.name}</span>}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    {fieldErrors.email && <span className="error-message">{fieldErrors.email}</span>}
                    <input
                        type="password"
                        placeholder="Senha (mínimo 4 caracteres)"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    {fieldErrors.password && <span className="error-message">{fieldErrors.password}</span>}
                    <input
                        type="password"
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        style={{
                            borderColor: confirmPassword && password !== confirmPassword ? '#c64200' : ''
                        }}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button id="login-button" type="submit">Cadastrar</button>
                </div>
            </form>
            <p className="link-auth">
                Já tem conta?
                <span onClick={onSwitch}>
                    Faça Login
                </span>
            </p>
        </div>
    );
};