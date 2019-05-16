import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataApi from '../state-api/lib';
import ArticleList from './ArticleList';

const App = (props) => {
  const [articles, setArticles] = useState(props.initialData.articles);
  const [authors, setAuthors] = useState(props.initialData.authors);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await axios.get('/data');
      const api = new DataApi(rawData.data);

      setArticles(api.getArticles());
      setAuthors(api.getAuthors());
    };
    fetchData();
  }, []);

  const articleActions = {
    getAuthor: authorId => authors[authorId],
  };

  if (articles) {
    return <ArticleList articles={articles} actions={articleActions} />;
  }
};

export default App;
