import useFetch from '../../hooks/useFetch';
import ProductItem from '../../components/ProductItem';
import { useLocation, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import Pagination from '../../components/Pagination';
import ImageSlider from '../../components/ImageSlider';
import BrandSort from '../../components/BrandSort';
const cx = classNames.bind(styles);

function Home() {
   const search = useLocation().search;
   const page = new URLSearchParams(search).get('_page') || 1;
   const { category } = useParams();
   // console.log(products);

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

   const brandList = `https://cdn.tgdd.vn/Brand/1/logo-macbook-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-asus-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-hp-149x40-1.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-lenovo-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-acer-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-dell-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-msi-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-surface-149x40-1.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-lg-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-chuwi-149x40.png*and*
   https://cdn.tgdd.vn/Brand/1/logo-itel-149x40.png*and*`;

   const { data, loading, error } = useFetch('http://localhost:3000/api/' + category + '?_page=' + page);

   // console.log(data)
   // return <h1>Home</h1>;

   return (
      // <div className="row">
      <div className={cx('product-container')}>
         <ImageSlider data={category == 'dtdd' ? mobileBanners : laptopBanners} />
         <BrandSort data={brandList}/>
         <div className={cx('product-header')}>
            <p>Tất cả sản phẩm </p>
         </div>
         {data && <ProductItem data={data} category={category} />}
         <Pagination totalPage={3} />
      </div>
      // </div>
   );
}

export default Home;
