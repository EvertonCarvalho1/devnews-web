import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, RouteComponentProps } from 'react-router-dom';
import api from './api/news';
import Header from './components/Header';
import AddNews from './pages/AddNews';
import NewsList from './pages/NewsList';
import NewsDetail from './pages/NewsDetail';
import EditNews from './pages/EditNews';

import { NewsPost } from './pages/NewsList';

export default function App() {

  const [newsPost, setNewsPost] = useState<NewsPost[]>([]);

  const retrieveNews = async () => {
    const response = await api.get('/news');

    return response.data;
  };

  const addNewsHandler = async (news: any) => {
    const request = {
      id: 'uuid()',
      ...news
    };
    const response = await api.post('/news', request);
    setNewsPost([...newsPost, response.data]);
  };

  const updateNewsHandler = async (news: any) => {
    const response = await api.patch(`/news/${news.id}`, news);

    const { id } = response.data;
    setNewsPost(newsPost.map(news => {

      return news.id === id ? { ...response.data } : news;

    })
    );

  };

  const removeNewsHandler = async (id: any) => {
    await api.delete(`/news/${id}`)
    const currentNewsPost = newsPost.filter((news) => {
      return news.id !== id;
    });

    setNewsPost(currentNewsPost);
  };

  useEffect(() => {
    const getAllNews = async () => {
      const allNews = await retrieveNews();
      if (allNews) setNewsPost(allNews)
    };

    getAllNews();

  }, []);

  return (

    <div>
      <Router>
        <Header />
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
            render={(props) => (<AddNews {...props} addNewsHandler={addNewsHandler} />)}
          />

          <Route
            path='/edit'
            render={(props: any) => (<EditNews {...props} updateNewsHandler={updateNewsHandler} />)}
          />

          <Route path='/news/:id' component={NewsDetail} />

        </Switch>

      </Router>
    </div>

  );
}




