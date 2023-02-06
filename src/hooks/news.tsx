import React, { createContext, useCallback, useState, useContext, ReactNode } from 'react';
import api from '../services/apiClient';

interface User {
    id: string;
    avatar_url: string;
    name: string;
    email: string;
}

interface NewsProviderProps {
    children: ReactNode;
}

interface NewsContextData {
    user: User;
};

const NewsContext = createContext<NewsContextData>({} as NewsContextData);

function NewsProvider({ children }: NewsProviderProps) {

    const [data, setData] = useState<any>(() => {
        const token = localStorage.getItem('@GoBarber:token');
        const user = localStorage.getItem('@GoBarber:user');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            return { token, user: JSON.parse(user) }
        }

        return {} as any;
    });

    //children => tudo que este componente receber como filho, vamos repassar depois pra algum lugar dentro do componente
    return (
        <NewsContext.Provider value={{ user: data.user }}>
            {/* passamos o children pra que todos os filhos do AuthProvider sejam repassados como filhos do AuthContext.Provider */}
            {children}
        </NewsContext.Provider>
    )
}

function useNews(): NewsContextData {
    const context = useContext(NewsContext);

    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }

    return context
}

export { NewsProvider, useNews };
