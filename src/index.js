import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './assets/GlobalStyle';
import ContextProvider from './store/Provider';
import AuthProvider from './store/AuthContext';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <GlobalStyle>
      <Provider store={store}>
         <ContextProvider>
            <AuthProvider>
               <App />
            </AuthProvider>
         </ContextProvider>
      </Provider>
   </GlobalStyle>
);
