import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { publicRoutes } from "./routes";
import { Fragment, useReducer } from "react";

import reducer from './hooks/reducer/reducer.js'
import {initState} from './hooks/reducer/reducer.js'

function App() {
   const [state, dispath] = useReducer(reducer, initState);

   // const {data} = state

   // console.log("products= ",products)
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
                        <Layout dispath={dispath}>
                           <Page state={state} dispath={dispath}/>
                        </Layout>
                     }
                  />
               );
            })}
         </Routes>
      </Router>
   );
}

export default App;
