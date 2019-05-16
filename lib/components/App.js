import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataApi from '../state-api/lib';
import ArticleList from './ArticleList';

const App = () => {
  const [articles, setArticles] = useState({});
  const [authors, setAuthors] = useState({});

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
    getAuthor: async authorId => await authors[authorId],
  };

  if (articles) {
    return <ArticleList articles={articles} actions={articleActions} />;
  }
};

export default App;
