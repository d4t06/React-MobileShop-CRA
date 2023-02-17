import * as productServices from '../../services/productServices'
export const getJob = (payload) => new Promise(async (resolve, reject) => {
   try {
      const response = await productServices.getProducts(payload)

      resolve({
         type: "GET_ALL",
         payload: response
      })
   } catch {
      reject(() => {
         console.log("loi")
      })
   }
})