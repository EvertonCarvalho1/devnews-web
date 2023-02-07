import moment from 'moment'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { News } from '../../hooks/news';
import { useNews } from '../../hooks/news'

import { Container } from './styles';

interface NewsCardProps {
    newsItem: News;
}

export default function NewsCard({ newsItem }: NewsCardProps) {
    const { deleteNews } = useNews();
    const { id, title, subtitle, content, created_at } = newsItem;
    const dataBr = moment(created_at).format('DD/MM/YYYY');

    async function handleDeleteNews() {
        try {
            await deleteNews(id);
            toast.success('Notícia excluida!');
        } catch (err) {
            toast.error('Ocorreu um erro ao excluir notícia.');
        }
    }

    return (
        <Container>
            <div className='item'>
                <div className='content'>
                    <Link to={`/news/details`} state={{ news_id: id }}>
                        <div className='title'>{title}</div>
                    </Link>
                    <div className='subtitle'>{subtitle}</div>
                    <div className='content'>{content}</div>
                    <div className='content'>Data da publicação: {dataBr}</div>
                </div>

                <i className='trash alternate outline icon'
                    style={{ color: 'red', marginTop: '7px', marginLeft: '10px' }}
                    onClick={handleDeleteNews}
                >

                </i>

                <Link to={`/news/update`} state={{ news_id: id }} >
                    <i className='edit alternate outline icon'
                        style={{ color: 'blue', marginTop: '7px' }}
                    >
                    </i>
                </Link>
            </div>
        </Container >
    )


}
