import React, { useState } from "react";

import ArticleList from "./ArticleList";

const App = ({ store }) => {
  const [state, setState] = useState(store.getState());
  return <ArticleList articles={state.articles} store={store} />;
};

export default App;
