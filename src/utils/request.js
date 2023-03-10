import axios from "axios";

const request = axios.create({
   baseURL: "http://localhost:3000/api",
});
export const get = async (path, option) => {
   const res = await request.get(path, option);
   return res.data;
};

export const post = async (path, body, header) => {
   const res = await request.post(path, body, header);
   return res.data;
};

export default request;
