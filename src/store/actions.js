import * as productServices from '../services/productServices'

// const nagative = useNavigate();

const getAll = async (dispatch, querys) => {  
   try {
      dispatch({type: "loading", status: 'loading'})
      setTimeout( async() => {
         const response  = await productServices.getProducts(querys)
         if (response) {
            dispatch({ type:"GET_ALL", status : 'finished', payload: response, ...querys})
         } else {
            console.log("action getProduct response undefine")
         }
      }, 1000);
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
