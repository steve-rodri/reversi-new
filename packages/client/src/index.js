import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import store from "./redux/store";
import App from "./components/App";

const Root = () => (
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);

render(<Root />, document.getElementById("root"));
