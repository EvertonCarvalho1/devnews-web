import { Link } from 'react-router-dom';
import NewsCard from '../../components/NewsCard/NewsCard';
import '../../components/App.css';

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

export default function NewsList({ removeNewsHandler, newsPost }: NewsListProps) {

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
    );

}

