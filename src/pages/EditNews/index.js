import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../components/App.css';

// interface Props extends RouteComponentProps<
//   { myParamProp?: string }, // this.props.match.params.myParamProp
//   any, // history
//   { myStateProp?: string }, // this.props.location.state.myStateProp
// > {
//   myNormalProp: boolean;
// }

export default function EditNews (props) {

    const {id, title, subtitle, content} = props.location.state.news;
    
    const [newsItem, setNewsItem] = useState(() => {
      
        return {
            id:id,
            title:title,
            subtitle:subtitle,
            content:content,
        }
    })

    const update = (e) => {
        e.preventDefault();
        if(newsItem.title === '' && newsItem.subtitle === '' && newsItem.content === ''){
            alert('Favor preencher os campos!');
            return
        }
        props.updateNewsHandler(newsItem);
        setNewsItem({title: '', subtitle: '', content: ''});
        props.history.push('/');
    }

    return (
        <div  className='ui  container2'>
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
                <button style={{marginLeft:'10px'}} className='ui button red center'>Cancelar</button>
                </Link>
            </form>
        </div>

     );


} 
