import React, { createContext, useCallback, useState, useContext, ReactNode } from 'react';
import api from '../services/apiClient';

export interface News {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    created_at: string;
    updated_at: string;
}

export interface NewsPost {
    title: string;
    subtitle: string;
    content: string;
}

interface NewsProviderProps {
    children: ReactNode;
}

interface NewsContextData {
    newsData: Array<News>;
    listNews(): Promise<void>

};

const NewsContext = createContext<NewsContextData>({} as NewsContextData);

function NewsProvider({ children }: NewsProviderProps) {

    const [newsData, setNewsData] = useState<News[]>([]);

    const listNews = useCallback(async () => {
        const response = await api.get('/news');

        if (response.status === 200) {
            setNewsData(response.data);
        } else {
            setNewsData([]);
        }
    }, [setNewsData]);

    const addNews = useCallback(async (newsPost: NewsPost) => {
        try {
            await api.post('/news/create', newsPost);

        } catch (err) {
            alert(`Ocorreu um erro ${err}`)
        }
    }, []);




    return (
        <NewsContext.Provider value={{ newsData, listNews }}>
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
