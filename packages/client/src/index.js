import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./components/App";
import store from "./redux/store";
import theme from "./theme";

const Root = () => (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);

render(<Root />, document.getElementById("root"));
