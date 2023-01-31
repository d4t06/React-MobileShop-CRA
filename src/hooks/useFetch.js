import { useState, useEffect } from "react";

function useFetch(uri) {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            const res = await fetch(uri);
            const json = await res.json();

            setLoading(false);
            setData(json);
         } catch (error) {
            setError(true);
            setLoading(false);
         }
      };
      fetchData();
   }, [uri]);

   return { data, loading, error };
}

export default useFetch;
