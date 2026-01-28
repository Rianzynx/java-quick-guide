import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api'
});

// Interceptor para capturar erros de resposta
api.interceptors.response.use(
    (response) => {
        // Se a resposta for sucesso, apenas a retorna
        return response;
    },
    (error) => {
        // Se o erro for 401 (Não autorizado) ou 403 (Proibido/Expirado)
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            
            console.warn("Sessão expirada ou inválida. Redirecionando...");
            
            // 1. Limpa os dados do usuário
            localStorage.removeItem('token');
            
            // 2. Redireciona para o login (forçando o reload para limpar estados)
            window.location.href = '/login';
        }
        
        return Promise.reject(error);
    }
);

export default api;