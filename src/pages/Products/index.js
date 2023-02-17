import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import reducer from '../../hooks/reducer/reducer.js'
// import initState from '../../hooks/reducer/initState.js'
// import * as productServices from '../../services/productServices';
import classNames from 'classnames/bind';
import styles from './Products.module.scss';

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

function Product({ state, dispath }) {
   console.log("state= ", state)
   // const [state, dispath] = useReducer(reducer, initState);
   // const {products} = state
   //    const { category, key } = useParams();
   //    const nagative = useNavigate();
   // 
   //    const search = useLocation().search;
   //    const page = new URLSearchParams(search).get('page') || 1;
   // 
   //    const [curPage, setCurPage] = useState(1);
   // 
      const { count, rows } = state.data ? state.data : {};
      // console.log("rows= ", rows + "data= ", state.data)
   //    let countProduct = count - page * 6;
   //    if (countProduct < 0) countProduct = 0

   //  lay data
   // useEffect(() => {
   //    const fecthApi = async () => {
   //       let result = [];
   //       if (!key) result = await productServices.getProducts(category, variable);
   //       else result = await productServices.getAllByBrand(category, key, page);
   //       setData(result);
   //    };
   //    fecthApi();
   // }, [page]);

   // functions
   const handleClick = () => {
      // setCurPage(curPage < count / 6 ? curPage + 1 : 0);
      // nagative('?page=' + (curPage + 1));
   };

   return (
      <div className={ cx('product-container') }>
        { state.category && <ImageSlider data={ state.category === 'dtdd' ? mobileBanners : laptopBanners } /> }
        { state.category && <BrandSort category={ state.category } /> }
        <div className={ cx("product-body", "row") }>
          <div className='col col-9'>
            {rows && <ProductItem data={rows} category={state.category}/>} 
            <div className={ cx('pagination') }>
               { rows && <button
                // style={countProduct === 0 ? { opacity: 0.4, pointerEvents: 'none' } : {}}
                   className={ cx('see-more-product') }
                   onClick={ () => handleClick() }
                  >
                   { /* Xem thêm ( {countProduct > 0 ? countProduct : 0} ) sản phẩm */ }
               </button> }
            </div>
          </div>
          <ProductFilter />
        </div>
      </div>
   );
}

export default Product;