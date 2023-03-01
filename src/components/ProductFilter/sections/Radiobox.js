import classNames from 'classnames/bind';
import styles from '../ProductFilter.module.scss';
import Continents from './Continents'
import useStore from '../../../hooks/useStore';
const cx = classNames.bind(styles);


function Radiobox({ handleFilter, data }) {
   const [state, dispatch] = useStore()
   // const [checked, setChecked] = useState([]);

   const handleToggle = (array, e) => {
      if (state.status == 'loading') {
         e.preventDefault()
      };
      handleFilter(array);
   };

   return (
      <>
         {data.map((item, index) => {
            return (
               <div key={index} className={cx('filter-item')}>
                  <a to={'/ddtd'}>
                     <input
                        type="radio"
                        name="price"
                        onClick={(e) => handleToggle(item.array, e)}
                        // onChange={() => handleFilter(item.array)}
                     />
                     <span className={cx('label')}>{item.text}</span>
                  </a>
               </div>
            );
         })}
      </>
   );
}

export default Radiobox;
