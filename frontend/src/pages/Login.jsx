import { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import javaLogo from '../assets/java.svg';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const tokenGerado = await response.text();
                login(tokenGerado);
                navigate('/'); // Volta para a tela principal
            } else {
                alert("Falha no login. Verifique suas credenciais.");
            }
        } catch (error) {
            console.error("Erro ao conectar ao servidor", error);
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