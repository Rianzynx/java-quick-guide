import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="auth-container">
            <h2>Criar Conta</h2>
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="Seu melhor email" onChange={e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Mínimo 3 caracteres" onChange={e => setPassword(e.target.value)} required />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};