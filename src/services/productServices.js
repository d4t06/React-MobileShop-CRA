import axios from "axios";

const request = axios.create({
   baseURL: "http://localhost:3000/api",
});

export const getProducts = async (querys) => {
   console.log("service ", querys)
   const {filters, ...rest} = querys
   // console.log({rest})
   if (!querys) {
      console.log("product service missing query");
      return []
   }
   try {
      const response = await request.get(`/`, {
         params: {
            ...rest,
            ...filters
            // filters ? ...filters : ''
         }
      })
      return response.data
   } catch (error) {
      console.log("loi getProducts services", error);
   }
};
export const getProductDetail = async (querys) => {
   if (!querys) {
      console.log("product service missing query");
      return []
   }
   const {category, href} = querys
   try {
      const response = await request.get(`/${category}/`, {
         params: {
            href: href
         }
      })
      return response.data
   } catch (error) {
      console.log("loi getProductDetail services", error);
   }
};


