import axios from "axios";

// console.log(process.env);

const request = axios.create({
   baseURL: "http://localhost:3000/api",
});
export const get = async (path, option) => {
   const res = await request.get(path, option);
   return res.data;
};

export default request;
