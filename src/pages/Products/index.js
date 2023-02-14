import useFetch from '../../hooks/useFetch';
import ProductItem from '../../components/ProductItem';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState } from "react"
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Pagination from '../../components/Pagination';
import ImageSlider from '../../components/ImageSlider';
import BrandSort from '../../components/BrandSort';
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



function Home() {
    const { category, key } = useParams();
    const nagative = useNavigate()
    const search = useLocation().search;
    const page = new URLSearchParams(search).get('_page') || 1;
    const [curPage, setCurPage] = useState(1)

    let SearchUrl = ``
    if (key) { 
    if (key.split('-').length >= 2) SearchUrl = `${key}` // get one dtdd/samsung-galaxy...
      else SearchUrl = `${key}?_page=${page}` // get all where dtdd/samsung
    } 

    // console.log(SearchUrl)
    // return;

    const { data, loading, error } = useFetch('http://localhost:3000/'+ category + "/" + SearchUrl)
    const { count, rows } = data ? data : {}
    const countProduct = count < 5 ? 0 : count - page * 5

    console.log('http://localhost:3000/'+ category + "/" + SearchUrl)
    console.log(data)


    const handleClick = () => {
        setCurPage(curPage < count / 5 ? curPage + 1 : 0);
        nagative("?_page=" + (curPage+1));
    }

    return (
        // <div className="row">
        <div className={cx('product-container')}>
         <ImageSlider data={category == 'dtdd' ? mobileBanners : laptopBanners} />
         <BrandSort category={category}/>
         <div className={cx('product-header')}>
            <p>Tất cả sản phẩm ({count})</p>
         </div>
            {data && <ProductItem data={rows} category={category} />}
         <div className={cx("pagination")}>
            <button style={countProduct == 0 ? {opacity: 0.4, pointerEvents: 'none'} : {}} className={cx("see-more-product")}
            onClick={() => handleClick()}
            >
            Xem thêm ( {countProduct} ) sản phẩm
            </button>
         </div>
      </div>
        // </div>
    );
}

export default Home;