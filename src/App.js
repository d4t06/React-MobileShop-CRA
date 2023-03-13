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

       
               {/* <Route  path="/unauthorized" element={<h1>Unauthorized Page</h1>} /> */}
 

            {/* protected route */}

            <Route path="/create" element={<RequireAuth allowedRole={'R1'} />}>
               <Route element={<h1>Create Page</h1>} />
            </Route>
            <Route path="/admin" element={<RequireAuth allowedRole={'R1'} />}>
               <Route element={<h1>Admin Page</h1>} />
            </Route>

            <Route path="/account" element={<RequireAuth allowedRole={'R2'} />}>
               <Route element={<h1>Account Page</h1>} />
            </Route>
            
         </Routes>
      </Router>
   );
}

export default App;
