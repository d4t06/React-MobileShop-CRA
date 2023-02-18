// import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {useContext, useEffect} from 'react'
import Context from '../../store/Context'
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { getProducts } from '../../store/actions';

import { ProductFilter, ImageSlider, ProductItem, BrandSort } from '../../components';
const cx = classNames.bind(styles);

const mobileBanners = `https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/7/638113890324216138_F-C1_1200x300.png
   andhttps://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638108014497018540_F-C1_1200x300-1.jpg
   andhttps://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/2/9/638115328693245687_F-C1_1200x300@2x.png
   andhttps://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638108014497018540_F-C1_1200x300-1.jpgand`;

const laptopBanners = `https://cdn.tgdd.vn/2023/01/banner/acer-800-200-800x200.pngand
   https://cdn.tgdd.vn/2023/02/banner/laptop-gaming-800-200-800x200.pngand
   https://cdn.tgdd.vn/2023/01/banner/Mac-800-200-800x200.pngand
   https://cdn.tgdd.vn/2023/02/banner/Lenovo-800-200-800x200.pngand
   https://cdn.tgdd.vn/2023/02/banner/HP-800-200-800x200.pngand
   https://cdn.tgdd.vn/2023/02/banner/Laptop-ASUS-800-200-800x200.pngand
   https://cdn.tgdd.vn/2023/02/banner/DELL-800-200-800x200.pngand
   https://cdn.tgdd.vn/2023/02/banner/MSI-800-200-800x200.pngand
   https://cdn.tgdd.vn/2022/10/banner/lapevo-800-200-800x200.pngand
   https://cdn.tgdd.vn/2022/10/banner/800-200-800x200-142.pngand`;

function Product() {

   const [state, dispatch] = useContext(Context)
   
   const {data, category, page} = state

   const {rows, count} = data ? data : [];
   
   const countProduct = count - page * 6

   //    const nagative = useNavigate();
   //    const search = useLocation().search;
   //    const page = new URLSearchParams(search).get('page') || 1;

   return (
      <div className={ cx('product-container') }>
        {/* { category && <ImageSlider data={ category === 'dtdd' ? mobileBanners : laptopBanners } /> }
        { category && <BrandSort category={ category } /> } */}
        <div className={ cx("product-body", "row") }>
          <div className='col col-9'>
            {rows && <ProductItem data={rows} category={category}/>} 
            <div className={ cx('pagination') }>
               { rows && <button
                  style={countProduct === 0 ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                   className={ cx('see-more-product') }
                   onClick={() => getProducts(dispatch, {category: category, page: page + 1})}
                  
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