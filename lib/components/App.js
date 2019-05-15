import React, { useState, useEffect } from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';

import ArticleList from './ArticleList';

const api = new DataApi(data);

const App = () => {
  const [articles, setArticles] = useState(api.getArticles());
  const [authors, setAuthors] = useState(api.getAuthors());

  // get author
  const articleActions = {
    getAuthor: authorId => authors[authorId],
  };

  return <ArticleList articles={articles} actions={articleActions} />;
};

export default App;
