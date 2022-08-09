import React from 'react';
import {Link} from 'react-router-dom';
import '../../components/App.css';

class AddNews extends React.Component {
    state =  {
          
              title: '',
              subtitle: '',
              content: '',
        
            }

        add = (e) => {
            e.preventDefault();
            if(this.state.title === '' && this.state.subtitle === '' && this.state.content === ''){
                alert('Favor preencher os campos!');
                return
            }
            this.props.addNewsHandler(this.state);
            this.setState({title: '', subtitle: '', content: ''});
            this.props.history.push('/');
        
        }

     render(){
         return (
            <div  className='ui  container2'>
                <h2>Adicionar Notícia</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Título</label>
                        <input 
                        type='text' 
                        name='titulo' 
                        placeholder='Digite o título' 
                        value={this.state.title}
                        onChange={(e) => this.setState({title: e.target.value})}
                        />
                    </div>

                    <div className='field'>
                        <label>Subtítulo</label>
                        <input 
                        type='text' 
                        name='subtitulo' 
                        placeholder='Digite o subtítulo'
                        value={this.state.subtitle}
                        onChange={(e) => this.setState({subtitle: e.target.value})}
                        
                        />
                    </div>
                    <div className='field '>
                        <label>Conteúdo</label>
                        <input 
                        className='inputContent'
                        type='text' 
                        name='conteudo' 
                        placeholder='Digite o conteúdo'
                        value={this.state.content}
                        onChange={(e) => this.setState({content: e.target.value})}
                        />
                    </div>

                    <button className='ui button blue'>Adicionar</button>
                    <Link to='/'>
                    <button style={{marginLeft:'10px'}} className='ui button red center'>Cancelar</button>
                    </Link>
                </form>
            </div>

         );
     };
};
export default AddNews; 