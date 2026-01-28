import { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import javaLogo from '../assets/java.svg';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import api from '../services/api';

//Estilos
import '../style/Login.css';
import '../style/Auth.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        // Usando o Axios 
        const response = await api.post('auth/login', { 
            email, 
            password 
        });

        // No Axios os dados chegam direto em response.data
        // Java retorna uma String pura (token), usamos response.data
        if (response.status === 200) {
            const tokenGerado = response.data; 
            login(tokenGerado);
            navigate('/');
        }
    } catch (error) {
        // O Axios cai no catch automaticamente para erros 4xx e 5xx
        if (error.response && error.response.status === 403) {
            alert("Senha inválida ou usuário não encontrado.");
        } else {
            console.error("Erro ao conectar ao servidor", error);
            alert("Erro de conexão com o servidor.");
        }
    }
    };

    return (
        <div className="login-container">
            <div className="auth-container">
                <img src={javaLogo} alt="Ícone Java" width={50} height={80} className="login-icon" />
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                        <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} required />
                        <button id="login-button" type="submit">Entrar</button>
                    </div>
                </form>
                <p>Não tem conta? <Link id="register-link" to="/register">Cadastre-se</Link></p>

                <div className="icons-footer">
                    <a href="https://github.com/Rianzynx" className="icon-wrapper" id="icon-github">
                        <FaGithubSquare />
                    </a>
                    <a href="https://www.linkedin.com/in/rian-alves/" className="icon-wrapper" id="icon-linkedin">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
};