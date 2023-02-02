import React, { useState, FormEvent } from 'react';
import { History } from 'history';
import { Link } from 'react-router-dom';
import { Container } from './styles';

interface AddNewsProps {
    addNewsHandler({ }: any): void;
    history: History;
}

export default function AddNews({ addNewsHandler, history }: AddNewsProps) {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [content, setContent] = useState('');

    const add = (e: FormEvent) => {
        e.preventDefault();

        if (title === '' && subtitle === '' && content === '') {
            alert('Favor preencher os campos!');
            return
        }

        addNewsHandler({
            title: title,
            subtitle: subtitle,
            content: content,
        });

        setTitle('');
        setSubtitle('');
        setContent('');
        history.push('/');
    }

    return (
        <Container>
            <div className='ui  container2'>
                <h2>Adicionar Notícia</h2>
                <form className='ui form' onSubmit={add}>
                    <div className='field'>
                        <label>Título</label>
                        <input
                            type='text'
                            name='titulo'
                            placeholder='Digite o título'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className='field'>
                        <label>Subtítulo</label>
                        <input
                            type='text'
                            name='subtitulo'
                            placeholder='Digite o subtítulo'
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}

                        />
                    </div>
                    <div className='field '>
                        <label>Conteúdo</label>
                        <input
                            className='inputContent'
                            type='text'
                            name='conteudo'
                            placeholder='Digite o conteúdo'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <button className='ui button blue'>Adicionar</button>
                    <Link to='/'>
                        <button style={{ marginLeft: '10px' }} className='ui button red center'>Cancelar</button>
                    </Link>
                </form>
            </div>
        </Container>

    );

}
