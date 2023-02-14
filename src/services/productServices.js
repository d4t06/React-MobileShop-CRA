import * as request from "../utils/request.js";

export const getAllByCategory = async (category, page) => {
   try {
      const response = await request.get(`/${category}`, {
         params: {
            _page : page
         }
      });
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
      console.log(response)
      return response;
   } catch (error) {
      console.log("có lỗi trong quá trình lấy dữ liệu", error);
   }
};

