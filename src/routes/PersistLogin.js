import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useRefreshToken from '../hooks/useRefreshToken';

const PersistLogin = () => {
   const { auth, persist } = useAuth();
   const refresh = useRefreshToken();
   const [isLoading, setIsLoading] = useState(true);

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

   useEffect(() => {
      console.log(`isLoading = ${isLoading}`);
      console.log('auth =', auth);
   }, [isLoading]);

   return (
      <>
         {!persist ? <Outlet /> : isLoading ? <h1>Loading...</h1> : <Outlet />}
      </>
   );
};

export default PersistLogin;
