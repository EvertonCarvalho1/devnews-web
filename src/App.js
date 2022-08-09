import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {uuid} from 'uuidv4';
import api from './api/news';
import './components/App.css';
import Header from './components/Header';
import AddNews from './components/AddNews';
import NewsList from './pages/NewsList/NewsList';
import NewsDetail from './components/NewsDetail';
import EditNews from './components/EditNews';

function App() {

  const [newsPost, setNewsPost] = useState([]);

  const retrieveNews = async () => {
    const response = await api.get('/news');

    return response.data;
  };
   
  const addNewsHandler = async (news) => {
    const request = {
      id: uuid(),
      ...news
    };
    const response = await api.post('/news', request);
    console.log(response);
    setNewsPost([...newsPost, response.data]);
  };

  const updateNewsHandler = async (news) => {
    const response = await api.patch(`/news/${news.id}`, news);

    const {id} = response.data;
      setNewsPost(newsPost.map(news => {

        return news.id === id ? {...response.data} : news;
        
      })
    );

  };

  const removeNewsHandler = async (id) => {
    await api.delete(`/news/${id}`)
    const currentNewsPost = newsPost.filter((news) => {
      return news.id !== id;
    });

    setNewsPost(currentNewsPost);
  };

  useEffect(() => {
    const getAllNews = async () => {
      const allNews = await retrieveNews();
      if(allNews) setNewsPost(allNews)
    };

    getAllNews();

  }, []);

  return (
  
    <div className='ui container body'>
      <Router>
        <Header/>
        <Switch>
          <Route 
            path='/' 
            exact 
            render={(props) => (
              <NewsList 
              {...props} 
              newsPost={newsPost} 
              removeNewsHandler={removeNewsHandler}
              />
            )}
          />


          <Route 
            path='/add' 
            render={(props) => (<AddNews {...props} addNewsHandler={addNewsHandler}/>)}
          />

          <Route 
            path='/edit' 
            render={(props) => (<EditNews {...props} updateNewsHandler={updateNewsHandler}/>)}
          />


          <Route path='/news/:id' component={NewsDetail}/>
      
        </Switch>
      
      </Router>
    </div>

  );
}

export default App;


