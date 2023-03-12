import { Fragment } from 'react';
import { publicRoutes, privateRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './routes/RequireAuth';

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
            <Route element={<RequireAuth />}>
               {privateRoutes.map((route, index) => {
                  return (
                     <Route
                        path={route.path}
                        key={index}
                        element={
                           <DefaultLayout>{route.component}</DefaultLayout>
                        }
                     />
                  );
               })}
           </Route>
         </Routes>
      </Router>
   );
}

export default App;
