import React from "react";
import ReactDOM from "react-dom/client";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import "./index.css";

import { AppProvider } from "./context/AppProvider";
import { AppRouter } from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>
);
