import * as productServices from '../services/productServices';
import searchService from '../services/searchService';

// const nagative = useNavigate();

const getAll = async (dispatch, query) => {
   // console.log('action get all ', query);
   try {
      const response = await productServices.getProducts(query);
      if (response) {
         dispatch({
            type: 'GET_ALL',
            status: 'finished',
            payload: response,
            ...query,
         });
         // setTimeout(async () => {
         // }, 500);
      } else {
         console.log('action getProduct response undefine');
      }
   } catch (error) {
      console.log('loi trong action', error);
   }
};
const getOne = async (dispatch, query) => {
   // console.log('action get one ', query);
   try {
      dispatch({ type: 'GET_ONE', category: query.category, href: query.href });
   } catch {
      console.log('action getProduct response undefine');
   }
};
const getSearchPage = async (dispatch, query) => {
   // console.log('action search ', query);

   try {
      const key = query.category.split('search=')[1]; //search=iphone 14
      const response = await searchService({ q: key, page: query.page, sort: query.sort });
      dispatch({
         type: 'GET_ALL',
         status: 'finished',
         payload: response,
         ...query,
      });
   } catch {
      console.log('action getSearchPage response undefine');
   }
};

export { getAll, getOne, getSearchPage };
