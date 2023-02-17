import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";
import { Fragment, useReducer, createContext } from "react";

import reducer from './hooks/reducer/reducer.js'
import {initState} from './hooks/reducer/reducer.js'

import * as productServices from './services/productServices'



export const ProductContext = createContext()

function App() {
   const [state, dispatch] = useReducer(reducer, initState);


   const asycnDispatch = async (params) => {
      //  dispatch({type: 'loading'});
      const data = await productServices.getProducts(params);
       dispatch({type:"finished", payload: data})

   }
   return (
      <Router>
         <Routes>
            {publicRoutes.map((route, index) => {
               const Page = route.component;
               let Layout = DefaultLayout;
               if (route.layout) Layout = route.layout;
               else if (route.layout === null) Layout = Fragment;

               return (
                  <Route
                     key={index}
                     path={route.path}
                     element={
                        <ProductContext.Provider value={{state, dispatch: asycnDispatch}}>
                           <Layout>
                              <Page/>
                           </Layout>
                        </ProductContext.Provider>
                     }
                  />
               );
            })}
         </Routes>
      </Router>
   );
}

export default App;
