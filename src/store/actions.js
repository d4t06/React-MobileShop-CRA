import * as productServices from '../services/productServices'
import { useNavigate } from 'react-router-dom'

// const nagative = useNavigate();

const getAll = async (dispatch, querys) => {  
   // const {filters, ...rest} = querys

   // console.log("action querys = ", querys)
   try {
      const response  = await productServices.getProducts(querys)
      if (response) {
         dispatch({ type:"GET_ALL", payload: response, ...querys})
      } else {
         console.log("action getProduct response undefine")
      }
   } catch (error) {
      console.log("loi trong action", error)
   }
}
const getOne = async (dispatch, querys) => {
   try {
      // const response = await productServices.getProductDetail(querys)
      // console.log("response = ", response)
      dispatch({type: 'GET_ONE', category: querys.category, href: querys.href})
   } catch {
         console.log("action getProduct response undefine")
   }
} 

export {getAll, getOne}
