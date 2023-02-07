import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from './styles';
import { useNews } from '../../hooks/news';


export function NewsDetail() {
    const { newsDetail, newsDetailData } = useNews();
    const { state } = useLocation();

    useEffect(() => {
        newsDetail(state.news_id);
    }, [newsDetail, state]);

    return (
        <Container>
            <div className='main textAlignCenter'>
                <div className='ui card centered'>
                    <div className='content'>
                        <div className='title'>{newsDetailData.title}</div>
                        <div className='subtitle'>{newsDetailData.subtitle}</div>
                        <div className='content'>{newsDetailData.content}</div>
                    </div>

                    <div className='center-div'>
                        <Link to='/'>
                            <button className='ui button blue center'>Voltar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )

}

