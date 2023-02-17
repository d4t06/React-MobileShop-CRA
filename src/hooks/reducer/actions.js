import * as productServices from '../../services/productServices'
export const getJob = (payload) => new Promise(async (resolve, reject) => {
   try {
      const process = productServices.getProducts(payload)
      const response = await process
      // console.log("process=", process)
      resolve({
         type: "finished",
         payload: response
      })
   } catch {
      reject(() => {
         console.log("loi")
      })
   }
})