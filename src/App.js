import React from "react";
import { Provider } from "react-redux";
import { store } from "./init/store";
import "./styles.scss";
import { Layout } from "./views/Layout";
export const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};
