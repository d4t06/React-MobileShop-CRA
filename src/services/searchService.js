import * as request from '../utils/request'


export const searchService = async (query) => {
   // phai xu li sort
   const {sort, ...rest} = query

    try {
        const response = await request.get(`/search`, {
           params: {
            ...query,
            ...sort
           }
        });
        console.log("response = ", response)
        return response;
     } catch (error) {
        console.log("có lỗi trong quá trình lấy dữ liệu", error);
     }
}

export default searchService