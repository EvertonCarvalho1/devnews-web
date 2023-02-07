import { Link } from 'react-router-dom';
import NewsCard from '../../components/NewsCard';
import { Container } from './styles';
import { useNews } from '../../hooks/news'
import { useEffect } from 'react';

export interface NewsPost {
    content: string;
    creationDate: string;
    id: string;
    subtitle: string;
    title: string;
}

interface NewsListProps {
    removeNewsHandler(id: string): void;
    newsPost: Array<NewsPost>;
}

export function NewsList() {

    const { listNews, newsData } = useNews();

    useEffect(() => {
        listNews();
    }, [listNews])

    // const deleteNewsHandler = (id: any) => {
    //     removeNewsHandler(id);
    // };

    const renderNewsList = newsData.map((newsItem) => {

        return (
            <NewsCard
                newsItem={newsItem}
                key={newsItem.id}
            />
        )
    });

    return (
        <Container>
            <div className='main'>

                <div className='container2'>
                    <h1>Feed de Notícias</h1>

                    <Link to='/news/create'>
                        <button className='ui button blue right'>Adicionar Notícia</button>
                    </Link>
                </div>


                <div style={{ textAlign: 'center' }} className='ui celled list'>
                    {renderNewsList}
                </div>

            </div>
        </Container>
    );

}

