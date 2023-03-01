// import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Context from '../../store/Context';
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { getAll } from '../../store/actions';
import * as productServices from '../../services/productServices'

import {
   ProductFilter,
   ImageSlider,
   ProductItem,
   BrandSort,
} from '../../components';
const cx = classNames.bind(styles);

function Product({}) {
   const [state, dispatch] = useContext(Context);
   const {category} = useParams()
   // console.log('state = ', state);

   const { data, status, page, ...rest } = state;
   const { rows, count } = data ? data : [];

   let countProduct = count - page * 6;
   if (countProduct < 0) countProduct = 0;


   useEffect(() => {
      const fetch = async () => {
         const result = await productServices.getProducts({category: category, page: 1})
         dispatch({type: "GET_ALL", status: "finished", payload: result, category: category, page: 1})
      }
      fetch()
   }, [category])

   const handleGetMore = () => {
      // const { data, status, ...rest } = state;
      getAll(dispatch, { ...rest, page: page + 1 });
   };


   // console.log("product re-render");
   return (
      <div className={cx('product-container')}>
         { data?.rows && 
            <>
               {category && <ImageSlider category={category} />}
               <div className={cx('product-body', 'row')}>
                  <div className="col col-9">
               {category && <BrandSort category={category} count={count}/>}
                     {rows && <ProductItem data={rows} category={category} />}
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
                              Xem thêm ( {countProduct} ) sản phẩm
                           </button>
                        )}
                     </div>
                  </div>
                  <ProductFilter category={category} />
               </div>
            </>}
        
      </div>
   );
}

export default Product;
