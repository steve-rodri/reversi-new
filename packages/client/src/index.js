import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./components/App";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById("root"));
