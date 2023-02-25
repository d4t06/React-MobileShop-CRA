import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './DetailPage.module.scss';
import ProductDetailItem from '../../components/DetailProductItem';
import * as productServices from '../../services/productServices';
import useStore from '../../hooks/useStore';
import Popup from '../../components/Popup';
import {Cart} from '../../components'

const cx = classNames.bind(styles);
function DetailPage() {
   const [state, dispatch] = useStore();
   const [product, setProduct] = useState('');

   // useEffect(() => {
   //    const fetchData = async () => {
   //       const response = await productServices.getProductDetail({href: state.href})
   //       if (response) setProduct(response)
   //    }
   //    fetchData()
   // }, [])

   // console.log("product = ", product)

   //product = [{name:adf,price:.....}]
   // return <> {product && <ProductDetailItem data={product[0]} />} </>
   return (
      <>
         <Popup
         content={
            <Cart></Cart>
         }
         option = {
           {trigger: 'click'}
         }
         >
            <h1>Detail page</h1>
         </Popup>
      </>
   );
}
export default DetailPage;
