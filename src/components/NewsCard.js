import React from 'react';
import moment from 'moment'
import {Link} from 'react-router-dom';
import './App.css';



const NewsCard = (props) => {

    const {id, title, subtitle, content} = props.news;
    const {creationDate} = props.news
    const dataBr = moment({creationDate}).format('DD/MM/YYYY');

    return(
        <div className='item'>
        <div className='content'>
            <Link to={{pathname:`/news/${id}`, state:{news: props.news}}}>
            <div className='title'>{title}</div>
            </Link>
            <div className='subtitle'>{subtitle}</div>
            <div className='content'>{content}</div>
            <div className='content'>Data da publicação: {dataBr}</div>
       
        </div>

        <i className='trash alternate outline icon' 
            style={{color:'red', marginTop: '7px', marginLeft:'10px'}}
            onClick={() => props.clickHandler(id)}
        ></i>

        <Link to={{pathname:`/edit/${id}`, state:{news: props.news}}}>
            <i className='edit alternate outline icon' 
                style={{color:'blue', marginTop: '7px'}}
            ></i>
        </Link>
    </div>
    )
};

export default NewsCard;
