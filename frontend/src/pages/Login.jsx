import { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import javaLogo from '../assets/java.svg';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import api from '../services/api';

//Estilos
import '../style/Login.css';

export const Login = ({ onSwitch, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setErrorMsg('');
        setLoading(true);

        try {
            // Usando o Axios 
            const response = await api.post('auth/login', {
                email,
                password
            });

            // No Axios os dados chegam direto em response.data
            // Java retorna uma String pura (token), usamos response.data
            if (response.status === 200) {
                login(response.data); 

                if (onLoginSuccess) {
                    await onLoginSuccess();
                }
                navigate('/');
            }
        } catch (error) {
            if (error.response) {
                const status = error.response.status;
                if (status === 401 || status === 403) {
                    setErrorMsg("E-mail ou senha incorretos.");
                } else {
                    setErrorMsg("Erro no servidor. Tente novamente mais tarde.");
                }
            } else {
                setErrorMsg("Não foi possível conectar ao servidor.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <img src={javaLogo} alt="Ícone Java" width={50} height={80} className="login-icon" />
            <h2 className="text-white text-center">Login</h2>

            {errorMsg && <span className="error-message-global">{errorMsg}</span>}
            <form onSubmit={handleSubmit} className="mx-auto">
                <div className='input-group'>
                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} required />
                    <button 
                        id="login-button" 
                        type="submit" 
                        disabled={loading} 
                        style={{ opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </div>
            </form>
            <p className="link-auth">
                Não tem conta?
                <span onClick={onSwitch}>
                    Cadastre-se
                </span>
            </p>

            <div className="icons-footer">
                <a href="https://github.com/Rianzynx" className="icon-wrapper" id="icon-github">
                    <FaGithubSquare />
                </a>
                <a href="https://www.linkedin.com/in/rian-alves/" className="icon-wrapper" id="icon-linkedin">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};