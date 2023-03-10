import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './assets/GlobalStyle';
import Provider from './store/Provider';
import AuthProvider from './store/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <GlobalStyle>
      <Provider>
         <AuthProvider>
            <App />
         </AuthProvider>
      </Provider>
   </GlobalStyle>
);
