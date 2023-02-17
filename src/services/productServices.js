import * as request from "../utils/request.js";

export const getProducts = async (querys) => {
      const response = await request.get(`/`, {
         params: {
            ...querys
         }
      });
      return response;
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

