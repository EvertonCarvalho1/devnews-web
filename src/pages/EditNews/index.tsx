import React, { FormEvent, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { NewsPost } from '../NewsList';

import { Container } from './styles';

interface EditNewsProps extends RouteComponentProps<
    { myParamProp?: string }, // props.match.params.myParamProp
    any, // history
    { news: NewsPost } // props.location.state.news

> {
    updateNewsHandler(newsItem: Omit<NewsPost, "creationDate">): void;
}

export default function EditNews(props: EditNewsProps) {

    const { id, title, subtitle, content } = props.location.state.news;

    const [newsItem, setNewsItem] = useState<Omit<NewsPost, "creationDate">>(() => {

        return {
            id: id,
            title: title,
            subtitle: subtitle,
            content: content,
        }
    })

    const update = (e: FormEvent) => {
        e.preventDefault();
        if (newsItem.title === '' && newsItem.subtitle === '' && newsItem.content === '') {
            alert('Favor preencher os campos!');
            return
        }
        props.updateNewsHandler(newsItem);
        setNewsItem({ id: '', title: '', subtitle: '', content: '' });
        props.history.push('/');
    }

    return (
        <Container>
            <div className='ui  container2'>
                <h2>Atualizar Notícia</h2>
                <form className='ui form' onSubmit={update}>
                    <div className='field'>
                        <label>Título</label>
                        <input
                            type='text'
                            name='titulo'
                            placeholder='Digite o título'
                            value={newsItem.title}
                            onChange={(e) => setNewsItem(previousState => ({
                                ...previousState, title: e.target.value
                            }))}
                        />
                    </div>

                    <div className='field'>
                        <label>Subtítulo</label>
                        <input
                            type='text'
                            name='subtitulo'
                            placeholder='Digite o subtítulo'
                            value={newsItem.subtitle}
                            onChange={(e) => setNewsItem(previousState => ({
                                ...previousState, subtitle: e.target.value
                            }))}
                        />
                    </div>
                    <div className='field '>
                        <label>Conteúdo</label>
                        <input
                            className='inputContent'
                            type='text'
                            name='conteudo'
                            placeholder='Digite o conteúdo'
                            value={newsItem.content}
                            onChange={(e) => setNewsItem(previousState => ({
                                ...previousState, content: e.target.value
                            }))}
                        />
                    </div>

                    <button className='ui button blue'>Atualizar</button>
                    <Link to='/'>
                        <button style={{ marginLeft: '10px' }} className='ui button red center'>Cancelar</button>
                    </Link>
                </form>
            </div>
        </Container>

    );


} 
