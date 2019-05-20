import React from "react";
import { StoreConsumer } from "../components/App";

const storeProvider = extraProps => Component => {
  const Wrapper = props => (
    <StoreConsumer>
      {({ store }) => (
        <Component {...props} {...extraProps(store, props)} store={store} />
      )}
    </StoreConsumer>
  );
  Wrapper.displayName = `${Component.name}Wrapper`;
  return Wrapper;
};

export default storeProvider;
