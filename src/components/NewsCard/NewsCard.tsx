import moment from 'moment'
import { Link } from 'react-router-dom';
import { NewsPost } from '../../pages/NewsList/NewsList';
import '../App.css';

interface NewsCardProps {
    newsItem: NewsPost;
    deleteNewsHandler(id: string): void
}


export default function NewsCard({ newsItem, deleteNewsHandler }: NewsCardProps) {


    const { id, title, subtitle, content, creationDate } = newsItem;
    const dataBr = moment(creationDate).format('DD/MM/YYYY');

    return (
        <div className='item'>
            <div className='content'>
                <Link to={{ pathname: `/news/${id}`, state: { news: newsItem } }}>
                    <div className='title'>{title}</div>
                </Link>
                <div className='subtitle'>{subtitle}</div>
                <div className='content'>{content}</div>
                <div className='content'>Data da publicação: {dataBr}</div>

            </div>

            <i className='trash alternate outline icon'
                style={{ color: 'red', marginTop: '7px', marginLeft: '10px' }}
                onClick={() => deleteNewsHandler(id)}
            ></i>

            <Link to={{ pathname: `/edit/${id}`, state: { news: newsItem } }}>
                <i className='edit alternate outline icon'
                    style={{ color: 'blue', marginTop: '7px' }}
                ></i>
            </Link>
        </div>
    )


}
