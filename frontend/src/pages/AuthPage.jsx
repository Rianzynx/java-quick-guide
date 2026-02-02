import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import Antigravity from '../components/Antigravity';

export const AuthPage = ({ onLoginSuccess }) => {
    const location = useLocation();
    const navigate = useNavigate();

    // Define o estado inicial baseado na URL atual
    const [view, setView] = useState(location.pathname === '/register' ? 'register' : 'login');

    // Sincroniza o slide sempre que a URL mudar
    useEffect(() => {
        // Sincroniza o slide com a URL
        setView(location.pathname === '/register' ? 'register' : 'login');
    }, [location.pathname]);


    // Função para trocar de tela mudando a URL
    const handleSwitch = (path) => {
        navigate(path);
    };

    return (
        <div className="login-container">
            {/* Partículas de fundo fixas */}
            <div className="background-particles">
                <Antigravity count={300} color="#ff6f00" autoAnimate />
            </div>

            {/* Janela que mascara o conteúdo */}
            <div className="slider-janela">
                <div 
                    className="slider-trilho"
                    style={{ transform: view === 'login' ? 'translateX(0vw)' : 'translateX(-100vw)' }}
                >
                    <div className="slider-painel">
                        <Login 
                            onSwitch={() => navigate('/register')} 
                            onLoginSuccess={onLoginSuccess} 
                        />
                    </div>
                    <div className="slider-painel">
                       <Register 
                            onSwitch={() => navigate('/login')} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};