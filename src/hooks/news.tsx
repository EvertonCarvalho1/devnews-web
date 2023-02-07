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
    listNews(): Promise<void>;
    addNews(newsPost: NewsPost): Promise<void>;
    newsDetail(id: string): Promise<void>;
    newsDetailData: News;
    deleteNews(id: string): Promise<void>;
};

const NewsContext = createContext<NewsContextData>({} as NewsContextData);

function NewsProvider({ children }: NewsProviderProps) {

    const [newsData, setNewsData] = useState<News[]>([]);
    const [newsDetailData, setNewsDetailData] = useState<News>({} as News);

    const listNews = useCallback(async () => {
        const response = await api.get('/news');

        if (response.status === 200) {
            setNewsData(response.data);
        } else {
            setNewsData([]);
        }
    }, [setNewsData]);

    const addNews = useCallback(async (newsPost: NewsPost) => {
        await api.post('/news/create', newsPost);
    }, []);

    const newsDetail = useCallback(async (id: string) => {
        const response = await api.get(`/news/details?news_id=${id}`);

        if (response.status === 200) {
            setNewsDetailData(response.data);
        } else {
            setNewsDetailData({} as News);
        }
    }, []);

    const deleteNews = useCallback(async (id: string) => {
        const response = await api.delete(`/news/delete?news_id=${id}`);

        if (response.status === 200) {
            listNews();
        }
    }, [listNews]);

    return (
        <NewsContext.Provider value={{
            newsData,
            listNews,
            addNews,
            newsDetail,
            newsDetailData,
            deleteNews
        }}>
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
