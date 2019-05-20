import React, { useState, createContext, useEffect } from "react";
import pickBy from "lodash.pickby";

import ArticleList from "./ArticleList";
import SearchBar from "./SearchBar";

const StoreContext = createContext();
export const StoreConsumer = StoreContext.Consumer;

const App = ({ store }) => {
  const [state, setState] = useState(store.getState());
  let subscriptionId;
  const onStoreChange = () => setState(store.getState());

  // componentDidMount
  useEffect(() => {
    subscriptionId = store.subscribe(() => onStoreChange());
  }, []);

  // componentWillUnmount
  useEffect(() => () => store.unsubscribe(subscriptionId), []);

  let { articles, searchTerm } = state;
  if (searchTerm) {
    console.log("SEARCH TERM", searchTerm);
    articles = pickBy(
      articles,
      value => value.title.match(searchTerm) || value.body.match(searchTerm)
    );
  }
  return (
    <StoreContext.Provider value={{ store: store }}>
      <SearchBar handleSearchTerm={store.handleSearchTerm} />
      <ArticleList articles={articles} />
    </StoreContext.Provider>
  );
};

export default App;
