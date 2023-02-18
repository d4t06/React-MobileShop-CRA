import * as productServices from '../services/productServices'

const getProducts = async (dispatch, querys) => {  
   // console.log("action querys = ", querys)
   try {
      const response  = await productServices.getProducts(querys)
      if (response) {
         dispatch({type: 'finished', data: {payload: response, ...querys}})
      } else {
         console.log("action getProduct response undefine")
      }
      return {
         type: 'finished',
         payload: response,
      }
   } catch (error) {
      console.log("loi trong action")
   }
   
}

export {getProducts}
