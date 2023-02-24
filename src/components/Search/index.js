import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import useStore from '../../hooks/useStore';

const cx = classNames.bind(styles);
const cy = classNames.bind(PopupStyles);

function Search({ setShowOverlay }) {
   const [loading, setLoading] = useState(false);
   const [query, setQuery] = useState('');
   const [searchResult, setSearchResult] = useState('');
   const [show, setShow] = useState(false);

   let debounceValue = useDebounce(query, 1000);

   useEffect(() => {
      if (!query.trim()) return;

      const fetchApi = async () => {
         const result = await searchService({ q: debounceValue });
         console.log(result);

         return result;
      };

      setLoading(true);
      const handler = setTimeout(async () => {
         const result = await fetchApi();

         setSearchResult(result || '');
         // console.log(searchResult)
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

   const handleShow = (value) => {
      setShow(value);
      setShowOverlay(value);
   };

   const handleHide = () => {
      setShow(false);
      // setShowOverlay(false)
   };

   const nagative = useNavigate();
   const [state, dispatch] = useStore();

   const handleDetailPage = (params) => {
      dispatch({
         type: 'GET_ONE',
         category: params.category,
         href: params.href,
      });
      nagative(`/${params.category}/${params.href}`);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch({
         type: 'GET_ALL',
         status: 'finished',
         href: '',
         category: `search=${debounceValue}`,
         payload: searchResult,
      });
      handleShow(false);
      nagative(`/search/${debounceValue}`);
   };

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
                        searchResult.rows?.map((item) => {
                           return (
                              <li
                                 className={cy('product-item')}
                                 key={item.id}
                                 onClick={() => {
                                    handleDetailPage({
                                       href: item.href,
                                       category: item.category,
                                    });
                                 }}
                              >
                                 <div className={cy('product-img')}>
                                    <img src={item.image} alt="" />
                                 </div>
                                 <div className={cy('product-info')}>
                                    <h2 className={cy('title')}>{item.name}</h2>
                                    <span className={cy('old_price')}>
                                       {moneyFormat(item?.old_price)}₫
                                    </span>
                                    <span className={cy('discount-percent')}>
                                       -
                                       {(
                                          ((+item.old_price - +item.cur_price) /
                                             +item.old_price) *
                                          100
                                       ).toFixed(0)}
                                       %
                                    </span>
                                    <p className={cy('cur_price')}>
                                       {moneyFormat(item.cur_price)}₫
                                    </p>
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
            visible: show && searchResult.rows && query.length,
            appendTo: () => document.body,
            onClickOutside: () => handleHide(),
            // delay:[0,0]
         }}
      >
         <div className={cx('wrap')}>
            <form className={cx('form')} onSubmit={(e) => handleSubmit(e)}>
               <input
                  className={cx('input')}
                  type="text"
                  placeholder="Hôm nay bạn muốn tìm gì..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => handleShow(true)}
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
