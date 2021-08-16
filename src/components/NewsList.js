import React from 'react';
import {Link} from 'react-router-dom';
import NewsCard from './NewsCard';
import './App.css';


const NewsList = (props) => {
    console.log(props);

    const deleteNewsHandler = (id) => {
        props.getNewsId(id);
    };

 
    const renderNewsList = props.newsPost.map((news) => {

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
};

export default NewsList;