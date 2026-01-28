import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import javaLogo from '../assets/java.svg';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,       
                password: password    
            })
        });

        if (response.ok) {
            alert("Cadastro realizado! Agora faça login.");
            navigate('/login');
        } else {
            alert("Erro ao cadastrar. O e-mail pode já estar em uso.");
        }
    };

    return (
        <div className="login-container"> {/* Container do background */}
            <div className="auth-container">
                <img src={javaLogo} alt="Ícone Java" width={50} height={80} className="login-icon" />
                <h2>Criar Conta</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <input 
                            type="email" 
                            placeholder="Seu melhor email" 
                            onChange={e => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Mínimo 3 caracteres" 
                            onChange={e => setPassword(e.target.value)} 
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