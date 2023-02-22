import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faSearch,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import searchService from '../../services/searchService'
import PopupStyles from '../Popup/Popup.module.scss';
import useDebounce from '../../hooks/useDebound';
import Popup from '../Popup';

const cx = classNames.bind(styles);
const cy = classNames.bind(PopupStyles);

function Search() {
   const [loading, setLoading] = useState(false);
   const [query, setQuery] = useState('');
   const [searchResult, setSearchResult] = useState('');

   let debounceValue = useDebounce(query, 1000);
   console.log(debounceValue);

   useEffect(() => {
      if (!query.trim()) return;
      const fetchApi = async () => {

        const result = await searchService({q:debounceValue})

        // setLoading(false);
        setSearchResult(result)
      }

      setLoading(true);
      const handler = setTimeout(() => {
        fetchApi();
        setLoading(false);
      }, 1000);

      return () => clearTimeout(handler);
   }, [debounceValue]);

   return (
      <Popup
         content={
            debounceValue ? (
               <div className={cy('wrap')}>
                  {searchResult &&
                     searchResult?.map((item) => {
                        return <h2 key={item.id}>{item.name}</h2>;
                     })}
               </div>
            ) : (
               false
            )
         }
         option={{
            visible: searchResult && debounceValue.length > 0,
            appendTo: () => document.body,
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
               />
               {loading && query && (
                  <button className={cx('loading-btn')}>
                     <FontAwesomeIcon icon={faSpinner} />
                  </button>
               )}
               {!loading && query && (
                  <button
                     className={cx('clear-btn')}
                     onClick={() => setQuery('')}
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
