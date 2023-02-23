import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSearch,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import moneyFormat from '../../utils/moneyFormat';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import searchService from '../../services/searchService';
import PopupStyles from '../Popup/Popup.module.scss';
import useDebounce from '../../hooks/useDebound';
import Popup from '../Popup';

const cx = classNames.bind(styles);
const cy = classNames.bind(PopupStyles);

function Search({ setShowOverlay }) {
   const [loading, setLoading] = useState(false);
   const [query, setQuery] = useState('');
   const [searchResult, setSearchResult] = useState('');
   const [show, setShow] = useState(false)

   let debounceValue = useDebounce(query, 1000);

   useEffect(() => {
      if (!query.trim()) return;

      const fetchApi = async () => {
      const result = await searchService({ q: debounceValue });

      return result;
      };

      setLoading(true);
      const handler = setTimeout(async () => {
         const result = await fetchApi();
         setSearchResult(result || '');
         setLoading(false);
      }, 1000);

      return () => {
         clearTimeout(handler);
      };
   }, [debounceValue]);

   const handleClear = () => {
      setQuery('');
      debounceValue = '';
      setSearchResult([]);
   };

   const handleShow = () => {
      setShow(true)
      setShowOverlay(true)
   }

   const handleHide = () => {
      setShow(false)
      // setShowOverlay(false)
   }

   return (
      <Popup
         content={
            !!searchResult ? (
               <div className={cy('wrap')}>
                  <h2 className={cy('search-result-title')}>
                     Sản phẩm được gợi ý
                  </h2>
                  <ul>
                     {searchResult &&
                        searchResult?.map((item) => {
                           return (
                              <li className={cy('product-item')} key={item.id}>
                                 <div className={cy('product-img')}>
                                    <img src={item.image} alt="" />
                                 </div>
                                 <div className={cy('product-info')}>
                                    <h2>{item.name}</h2>
                                    <span>{moneyFormat(item.cur_price)}₫</span>
                                 </div>
                              </li>
                           );
                        })}
                  </ul>
               </div>
            ) : (
               false
            )
         }
         option={{
            visible: show && searchResult && query.length,
            appendTo: () => document.body,
            onClickOutside: () => handleHide()
            // delay:[0,0]
         }}
      >
         <div className={cx('wrap')}>
            <form action="#" className={cx('form')}>
               <input
                  className={cx('input')}
                  type="text"
                  placeholder="Hôm nay bạn muốn tìm gì..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => handleShow()}
               />
               {loading && query && (
                  <button className={cx('loading-btn')}>
                     <FontAwesomeIcon icon={faSpinner} />
                  </button>
               )}
               {!loading && query && (
                  <button
                     className={cx('clear-btn')}
                     onClick={() => handleClear()}
                  >
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}
               <button className={cx('search-btn')}>
                  <FontAwesomeIcon icon={faSearch} />
               </button>
            </form>
         </div>
      </Popup>
   );
}
export default Search;
