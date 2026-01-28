import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import javaLogo from '../assets/java.svg';
import api from '../services/api'; 

import '../style/Login.css';
import '../style/Auth.css';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        // Validações básicas no Front-end
        if (password.length < 3) {
            alert("A senha deve ter no mínimo 3 caracteres!");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            // instância 'api' do Axios. 
            const response = await api.post('users/register', {
                email: email,
                password: password
            });

            // No Axios, se a requisição for 2xx, ela entra aqui
            if (response.status === 200 || response.status === 201) {
                alert("Cadastro realizado com sucesso! Agora faça login.");
                navigate('/login');
            }
        } catch (error) {
            console.error("Erro na requisição de cadastro:", error);

            // Tratamento de erros detalhado
            if (error.response) {
                // O servidor respondeu com um erro (4xx ou 5xx)
                const status = error.response.status;
                if (status === 403 || status === 401) {
                    alert("Erro de permissão ou CORS. Verifique o SecurityConfig do Java.");
                } else if (status === 409 || status === 400) {
                    alert("Este e-mail já está em uso ou os dados são inválidos.");
                } else {
                    alert(`Erro do servidor: ${status}. Tente novamente mais tarde.`);
                }
            } else if (error.request) {
                // A requisição foi feita mas não houve resposta (erro de rede)
                alert("Não foi possível conectar ao servidor. Verifique se o backend está online no Render.");
            } else {
                alert("Ocorreu um erro inesperado.");
            }
        }
    };

    return (
        <div className="login-container">
            <div className="auth-container">
                <img src={javaLogo} alt="Ícone Java" width={50} height={80} className="login-icon" />
                <h2>Criar Conta</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Seu melhor email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Senha (mínimo 3 caracteres)"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
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
                <p>Já tem uma conta? <Link id="register-link" to="/login">Faça Login</Link></p>
            </div>
        </div>
    );
};