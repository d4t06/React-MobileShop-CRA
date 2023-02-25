import classNames from 'classnames/bind';
import useStore from '../../hooks/useStore';
import styles from '../Products/Products.module.scss';
import { getSearchPage } from '../../store/actions';
import { ProductItem } from '../../components';
import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import searchService from '../../services/searchService';

const cx = classNames.bind(styles);

function SearchResultPage(prop) {
   const [state, dispatch] = useStore();
   console.log("state = ", state)
   
   let { key } = useParams();

   const { data, page, category } = state.data
      ? state
      : { data: { count: '', rows: null }, category: `search=${key}` };
   const { count, rows } = data;

   let countProduct = count - page * 8;
   if (countProduct < 0) countProduct = 0;

   useEffect(() => {
      if (state.data?.rows && state.category.includes(key)) return;

      const fetchApi = async () => {
         const result = await searchService({ q: key });
         return result;
      };
      dispatch({ type: 'loading', status: 'loading' });
      const handler = setTimeout(async () => {
         const result = await fetchApi();
         dispatch({
            type: 'GET_ALL',
            status: 'finished',
            payload: result,
            category: `search=${key}`,
         });
      }, 1000);

      return () => {
         clearTimeout(handler);
      };
   }, [key]);

   const handleGetMore = () => {
      getSearchPage(dispatch, { category: category, page: page + 1 });
   };

   return (
      <div className={cx('product-container')}>
         <>
            {data.rows ? (
               <div className={cx('product-body', 'row')}>
                  <div className="col col-full">
                     {rows && <ProductItem data={rows} searchResultPage />}
                     <div className={cx('pagination')}>
                        {rows && (
                           <button
                              style={
                                 countProduct <= 0
                                    ? { opacity: 0.4, pointerEvents: 'none' }
                                    : {}
                              }
                              className={cx('see-more-product')}
                              onClick={() => handleGetMore()}
                           >
                              Xem thêm ( {countProduct} ) kết quả
                           </button>
                        )}
                     </div>
                  </div>
               </div>
            ) : (
               <h1>Loading</h1>
            )}
         </>
      </div>
   );
}
export default SearchResultPage;
