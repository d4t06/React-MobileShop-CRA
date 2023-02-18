import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./assets/GlobalStyle";
import Provider from "./store/Provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <GlobalStyle>
      <Provider>
         <App />
      </Provider>
   </GlobalStyle>
);
