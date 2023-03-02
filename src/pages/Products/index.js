// import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../store/Context';
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { getAll } from '../../store/actions';
import * as productServices from '../../services/productServices';

import {
   ProductFilter,
   ImageSlider,
   ProductItem,
   BrandSort,
   Button,
} from '../../components';
import { banner } from '../../assets/data';
const cx = classNames.bind(styles);

function Product({}) {
   const [state, dispatch] = useContext(Context);
   const { category } = useParams();
   // console.log('state = ', state);

   const { data, status, page, ...rest } = state;
   const { rows, count } = data ? data : [];

   let countProduct = count - page * 6;
   if (countProduct < 0) countProduct = 0;

   useEffect(() => {
      const fetch = async () => {
         const result = await productServices.getProducts({
            category: category,
            page: 1,
         });
         if (result) {
            dispatch({
               type: 'GET_ALL',
               status: 'finished',
               payload: result,
               category: category,
               page: 1,
            });
         }
         return;
      };
      fetch();
   }, [category]);

   const handleGetMore = () => {
      // const { data, status, ...rest } = state;
      getAll(dispatch, { ...rest, page: page + 1 });
   };

   return (
      <div className={cx('product-container')}>
         <ImageSlider banner data={banner[category]} />

         <div className={cx('product-body', 'row')}>
            <div className="col col-9">
               <BrandSort category={category} count={count} />

               {rows && <ProductItem data={rows} category={category} />}

               <div className={cx('pagination')}>
                  <Button outline rounded count={countProduct} onClick={() => handleGetMore()} describe="sản phẩm">
                     Xem thêm
                  </Button>
               </div>
            </div>

            <ProductFilter category={category} />
         </div>
      </div>
   );
}

export default Product;
