import moment from 'moment'
import { Link } from 'react-router-dom';
import { News } from '../../hooks/news';

import { Container } from './styles';

interface NewsCardProps {
    newsItem: News;
    deleteNewsHandler(id: string): void
}

export default function NewsCard({ newsItem, deleteNewsHandler }: NewsCardProps) {


    const { id, title, subtitle, content, created_at, updated_at } = newsItem;
    const dataBr = moment(created_at).format('DD/MM/YYYY');

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
                    onClick={() => deleteNewsHandler(id)}
                >

                </i>

                {/* <Link to={{ pathname: `/edit/${id}`, state: { news: newsItem } }}>
                    <i className='edit alternate outline icon'
                        style={{ color: 'blue', marginTop: '7px' }}
                    ></i>
                </Link> */}
            </div>
        </Container>
    )


}
