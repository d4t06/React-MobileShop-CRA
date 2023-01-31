import * as request from "../utils/request.js";

export const Get = async () => {
   try {
      const res = await request.get("products");
      return res.data;
   } catch (error) {
      console.log("looix");
   }
};
