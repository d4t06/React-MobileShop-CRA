import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
// custom hooks
import useAuth from '../hooks/useAuth';
import useRefreshToken from '../hooks/useRefreshToken';
import useLocalStorage from '../hooks/useLocalStorage';

const PersistLogin = () => {
   const { auth } = useAuth();
   const refresh = useRefreshToken();
   const [isLoading, setIsLoading] = useState(true);
   const [persist] = useLocalStorage('persist', false) //[persist, setPersist]

   // const decode = auth?.token
   //    ? jwtDecode(auth.token)
   //    : undefined

   
   useEffect(() => {
      let isMounted = true;

      const verifyRefreshToken = async () => {
         try {
            await refresh();
         } catch (error) {
            console.error(error);
         } finally {
            isMounted && setIsLoading(false);
         }
      };

      !auth.token ? verifyRefreshToken() : setIsLoading(false);

      return () => isMounted= false;
   }, []);

   // useEffect(() => {
   //    console.log(`isLoading = ${isLoading}`);
   //    console.log('auth =', auth);
   // }, [isLoading]);

   return (
      <>
         {!persist ? <Outlet /> : isLoading ? <h1>Loading...</h1> : <Outlet />}
      </>
   );
};

export default PersistLogin;
