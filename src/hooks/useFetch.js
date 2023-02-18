import { useState, useEffect } from "react";

function useFetch({dispatch}) {
   // const [error, setError] = useState(null);
   // const [loading, setLoading] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         // setLoading(true);
         try {
            const res = await fetch("http://localhost:3000/api/?category=laptop&page=1");
            const json = await res.json();
             
            dispatch({type: 'finished', payload: json})
         } catch (error) {
            console.log("loi useFetch")
         }

      };
      fetchData();
   }, []);

}

export default useFetch;
