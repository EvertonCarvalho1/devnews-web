import {Link} from 'react-router-dom';
import NewsCard from '../../components/NewsCard';
import '../../components//App.css';

interface NewsListProps {
getNewsId(): void

}



export default function NewsList({getNewsId, newsPost} : any) {
    const deleteNewsHandler = (id: any) => {
        getNewsId(id);
    };

    const renderNewsList = newsPost.map((news: any) => {

        return(
                <NewsCard 
                news={news} 
                clickHandler={deleteNewsHandler} 
                key={news.id}
    
                />  
            )   
        });

        
    return (
        <div  className='main container2'>

            <h2>Listagem de Notícias
                <Link to='/add'>
                    <button className='ui button blue right'>Adicionar Notícia</button>
                </Link>
                
            </h2>
            <div style={{textAlign: 'center'}} className='ui celled list'>
                {renderNewsList }
            </div>
        </div>
    );
    

}

