import classNames from 'classnames/bind';
import useStore from '../../hooks/useStore';
import styles from '../Products/Products.module.scss';
import { getSearchPage } from '../../store/actions';
import { Button, ProductItem } from '../../components';
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
      : { data: { count: "", rows: null }, category: `search=${key}`};


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

   console.log(data);

   return (
      <div className={cx('product-container')}>
         <>
            {state.status !== 'loading' ? (
               <div className={cx('product-body', 'row')}>
                  <div className="col col-full">
                     {data?.count ? <h1 className={cx("search-page-title")}>
                        Tìm thấy <span style={{color: "#cd1818"}}>{data.rows.length || 0}</span> kết quả cho từ khóa "{key}"
                     </h1> : <h1>Kết quả tìm kiếm cho từ khóa "{key}"</h1>}
                      <ProductItem data={rows} searchResultPage />
                     <div className={cx('pagination')}>
                        {count > 8 && <Button outline rounded count={countProduct} onClick={() => handleGetMore()} describe="sản phẩm">
                     Xem thêm
                  </Button>}
                     </div>
                  </div>
               </div>
            ) : <h1 className='col-full' style={{marginTop:"30px", textAlign: "center"}}>Đang tìm kiếm...</h1>}
         </>
      </div>
   );
}
export default SearchResultPage;
