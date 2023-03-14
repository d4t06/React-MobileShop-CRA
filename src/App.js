import { Fragment } from 'react';
import { publicRoutes, privateRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './routes/RequireAuth';
import AdminPage from './pages/AdminPage';

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

            <Route element={<RequireAuth allowedRole={['R1', 'R2', 'R3']} />}>
               <Route
                  path="/account"
                  element={
                     <DefaultLayout>
                        <h1>Acount Page</h1>
                     </DefaultLayout>
                  }
               />
            </Route>

            <Route element={<RequireAuth allowedRole={['R1']} />}>
               <Route
                  path="/admin"
                  element={
                     <DefaultLayout>
                       <AdminPage/>
                     </DefaultLayout>
                  }
               />
            </Route>

            <Route element={<RequireAuth allowedRole={['R1']} />}>
               <Route
                  path="/create"
                  element={
                     <DefaultLayout>
                        <h1>Create Page</h1>
                     </DefaultLayout>
                  }
               />
            </Route>

         </Routes>
      </Router>
   );
}

export default App;
