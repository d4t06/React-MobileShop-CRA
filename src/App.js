import { Fragment } from 'react';
import { publicRoutes, privateRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
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
                        <Layout>
                           <Page />
                        </Layout>
                     }
                  />
               );
            })}
            {/* protected route */}
            {privateRoutes.map((route, index) => {
               return (
                  <Route
                     path={route.path}
                     key={index}
                     element={<DefaultLayout>{route.component}</DefaultLayout>}
                  />
               );
            })}
         </Routes>
      </Router>
   );
}

export default App;
