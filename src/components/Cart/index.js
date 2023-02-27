import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import moneyFormat from '../../utils/moneyFormat';

const cx = classNames.bind(styles);

function Cart({data, onClose}) {

   console.log(data)

   return (
      <>
      <div className={cx('product-cart')}>
         <div className={cx('cart-header')}>
            <h1>Có 1 sản phẩm trong giỏ hàng</h1>
            <button className={cx('close-btn')} onClick = {() => onClose()}>Đóng</button>
         </div>
         {data && (
         <>
         <div className={cx('cart-container')}>
            <div className={cx('cart-item')}>
               <div className={cx('item-image-frame')}>
                  <img
                     src={data.image}
                     alt=""
                  />
               </div>
               <div className={cx('item-description')}>
                  <h1>{data.name}</h1>
                  <h2>Màu sắc: Đen</h2>
                  <h2>Số lượng: 1</h2>
               </div>
               <div className={cx('item-price')}>
                  <h2 className={cx('cur_price')}>{moneyFormat(data.cur_price)}đ</h2>
                  <span className={cx('old_price')}>
                     {moneyFormat(data.old_price)}đ
                  </span>
               </div>
            </div>
            <form className={cx('form')}>
               <div className={cx('input-group')}>
                  <label htmlFor="">Họ và tên Anh, Chị:</label>
                  <input type="text" />
               </div>
               <div className={cx('input-group')}>
                  <label htmlFor="">Số điện thoại:</label>
                  <input type="text" />
               </div>
            </form>
         </div>
         <div className={cx('cart-footer')}>
            <div className={cx('total')}>
               <h1>Tổng tiền:</h1>
               <h1 className={cx('total-price')} style={{ float: 'right' }}>
                  {moneyFormat(data.cur_price)}đ
               </h1>
            </div>
            <button className={cx('buy-btn')}>Đặt hàng</button>
         </div>
         </>
         )}
      </div>
      </>
   );
}
export default Cart;
