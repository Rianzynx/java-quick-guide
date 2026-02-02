import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        try {
            return (savedUser && savedUser !== "undefined") ? JSON.parse(savedUser) : null;
        } catch (e) {
            console.error("Erro ao ler usuário do localStorage", e);
            return null;
        }
    });

    const login = (data) => {
    if (!data || !data.token) {
        console.error("Dados de login inválidos recebidos");
        return;
    }

    setToken(data.token);
    
    const usuarioParaGuardar = { 
        name: data.name || 'Usuário', 
        email: data.email || '' 
    };
    
    setUser(usuarioParaGuardar);
    
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(usuarioParaGuardar));
};
    
    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ token, user, login, logout, authenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
};