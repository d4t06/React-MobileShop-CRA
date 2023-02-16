import * as request from "../utils/request.js";

export const getProducts = async (category, variables) => {
   console.log(variables)
   try {
      const response = await request.get(`/${category}`, {
         params: {
            ...variables
         }
      });
      console.log(response)
      return response;
   } catch (error) {
      console.log("có lỗi trong quá trình lấy dữ liệu", error);
   }
};
export const getAllByBrand = async (category, brand, page) => {
   try {
      const response = await request.get(`/${category}/${brand}`, {
         params: {
            _page : page
         }
      });
      // console.log(response)
      return response;
   } catch (error) {
      console.log("có lỗi trong quá trình lấy dữ liệu", error);
   }
};

