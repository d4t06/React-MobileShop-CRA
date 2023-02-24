import classNames from 'classnames/bind';
import useStore from '../../hooks/useStore';
import styles from '../Products/Products.module.scss';
import { getSearchPage } from '../../store/actions';
import { ProductItem } from '../../components';

const cx = classNames.bind(styles);

function SearchResultPage() {
   const [state, dispatch] = useStore();

   console.log('state = ', state);
   const { data, page, category } = state;
   const { count, rows } = data;

   let countProduct = count - page * 8;
   if (countProduct < 0) countProduct = 0;

   const handleGetMore = () => {
      getSearchPage(dispatch, { category: category, page: page + 1 });
   };

   return (
      <div className={cx('product-container')}>
         <div className={cx('product-body', 'row')}>
            <div className="col col-ful">
               {rows && <ProductItem data={rows} searchResultPage />}
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
                        Xem thêm ( {countProduct} ) kết quả
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
export default SearchResultPage;
