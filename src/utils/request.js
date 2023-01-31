import axios from "axios";

// console.log(process.env);

const request = axios.create({
   baseURL: "http://localhost:1337/api",
});
export const get = async (path) => {
   const res = await request.get(path);
   return res.data;
};

export default request;
