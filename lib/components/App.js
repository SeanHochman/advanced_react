import React, { useState, createContext, Fragment } from "react";

import ArticleList from "./ArticleList";

const StoreContext = createContext();
export const StoreConsumer = StoreContext.Consumer;

const App = ({ store }) => {
  const [state, setState] = useState(store.getState());
  return (
    <StoreContext.Provider value={{ store: store }}>
      <ArticleList articles={state.articles} />
    </StoreContext.Provider>
  );
};

export default App;
