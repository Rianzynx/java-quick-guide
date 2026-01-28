import axios from 'axios';

const api = axios.create({
    baseURL: (import.meta.env.VITE_API_URL || 'http://localhost:8080').replace(/\/$/, "") + '/api'
});

// Interceptor para capturar erros de resposta
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Pega a URL da requisição que falhou
        const originalRequest = error.config;

        // Se o erro for 401 ou 403 E NÃO for na rota de login
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            if (!originalRequest.url.includes('/auth/login')) {
                console.warn("Sessão expirada. Redirecionando...");
                localStorage.removeItem('token');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export default api;