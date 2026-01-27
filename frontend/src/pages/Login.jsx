import { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

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
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Entrar</button>
            </form>
            <p>Não tem conta? <a href="/register">Cadastre-se</a></p>
        </div>
    );
};