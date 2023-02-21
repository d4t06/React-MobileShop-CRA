// import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {useContext, useEffect} from 'react'
import Context from '../../store/Context'
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { getAll } from '../../store/actions';

import { ProductFilter, ImageSlider, ProductItem, BrandSort } from '../../components';
const cx = classNames.bind(styles);

function Product() {

   const [state, dispatch] = useContext(Context)

   useEffect(() => {
      
   })

   console.log(state)
   
   const {data, category, filters, page} = state

   const {rows, count} = data ? data : [];
   
   const countProduct = count - page * 6

      // const nagative = useNavigate();
   //    const search = useLocation().search;
   //    const page = new URLSearchParams(search).get('page') || 1;



   return (
      <div className={ cx('product-container') }>
         { category && <ImageSlider category={category} />}
        { category && <BrandSort category={ category } />}
        <div className={ cx("product-body", "row") }>
          <div className='col col-9'>
            {rows && <ProductItem data={rows} category={category}/>} 
            <div className={ cx('pagination') }>
               { rows && <button
                  style={countProduct === 0 ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                   className={ cx('see-more-product') }
                   onClick={() => getAll(dispatch, {filters, category: category, page: page + 1})}
                  
                  >
                    Xem thêm ( {countProduct > 0 ? countProduct : 0} ) sản phẩm  
               </button> }
            </div>
          </div>
          <ProductFilter />
        </div>
      </div>
   );
}

export default Product;