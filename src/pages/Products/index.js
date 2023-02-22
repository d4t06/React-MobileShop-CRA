// import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import Context from '../../store/Context'
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { getAll } from '../../store/actions';

import { ProductFilter, ImageSlider, ProductItem, BrandSort } from '../../components';
const cx = classNames.bind(styles);

function Product() {

   const [state, dispatch] = useContext(Context)
   console.log("state = ", state)
   
   const {data, category, filters, page} = state
   const {rows, count} = data ? data : [];
   
   let countProduct = count - page * 6
   if (countProduct < 0) countProduct = 0;

   const handleGetMore = () => {
      const {data, ...rest} = state;
      getAll(dispatch, {...rest, page: page + 1})
   }

   return (
      <div className={ cx('product-container') }>
         { category && <ImageSlider category={category} />}
        { category && <BrandSort category={ category } />}
        <div className={ cx("product-body", "row") }>
          <div className='col col-9'>
            {rows && <ProductItem data={rows} category={category}/>} 
            <div className={ cx('pagination') }>
               { rows && <button
                  style={ countProduct <= 0 ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                   className={ cx('see-more-product') }
                   onClick={() => handleGetMore()}
                  
                  >
                    Xem thêm ( {countProduct} ) sản phẩm  
               </button> }
            </div>
          </div>
          <ProductFilter />
        </div>
      </div>
   );
}

export default Product;