import { Link } from 'react-router-dom';
import NewsCard from '../../components/NewsCard';
import { Container } from './styles';

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

export function NewsList({ removeNewsHandler, newsPost }: NewsListProps) {

    const deleteNewsHandler = (id: any) => {
        removeNewsHandler(id);
    };

    const renderNewsList = newsPost.map((newsItem) => {

        return (
            <NewsCard
                newsItem={newsItem}
                deleteNewsHandler={deleteNewsHandler}
                key={newsItem.id}
            />
        )
    });

    return (
        <Container>
            <div className='main container2'>

                <h2>Listagem de Notícias
                    <Link to='/add'>
                        <button className='ui button blue right'>Adicionar Notícia</button>
                    </Link>

                </h2>
                <div style={{ textAlign: 'center' }} className='ui celled list'>
                    {renderNewsList}
                </div>
            </div>
        </Container>
    );

}

