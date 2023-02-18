import axios from "axios";

const request = axios.create({
   baseURL: "http://localhost:3000/api",
});

export const getProducts = async (querys) => {
   if (!querys) {
      console.log("product service missing query");
      return []
   }
   try {
      const response = await request.get(`/`, {
         params: {
            ...querys
         }
      })
      return response.data
   } catch (error) {
      console.log("loi product services");
      console.log(error)
   }
      
};


