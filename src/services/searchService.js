import * as request from '../utils/request'


export const searchService = async (query) => {
    try {
        const response = await request.get(`/search`, {
           params: {
            ...query
           }
        });
        console.log("response = ", response)
        return response;
     } catch (error) {
        console.log("có lỗi trong quá trình lấy dữ liệu", error);
     }
}

export default searchService