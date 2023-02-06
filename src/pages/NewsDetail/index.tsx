import React from 'react';
import { Link } from 'react-router-dom';
import { NewsPost } from '../NewsList';
import { Container } from './styles';


export function NewsDetail(props: any) {

    const { title, subtitle, content } = props.location.state.news

    return (
        <Container>
            <div className='main textAlignCenter'>
                <div className='ui card centered'>
                    <div className='content'>
                        <div className='title'>{title}</div>
                        <div className='subtitle'>{subtitle}</div>
                        <div className='content'>{content}</div>
                    </div>
                </div>
                <div className='center-div'>
                    <Link to='/'>
                        <button className='ui button blue center'>Voltar</button>
                    </Link>
                </div>
            </div>
        </Container>
    )

}

