import useStore from '../../hooks/useStore';
import classNames from 'classnames/bind';
import styles from './BrandSort.module.scss';
import DemandItem from './demandItem';
import SelectedSort from './SelectedSort';
import {brand, demand} from '../../assets/data/brands'

const cx = classNames.bind(styles);

function BrandSort({ category }) {
   const [state, dispatch] = useStore()
   const {filters} = state
   
   console.log("state = ", state );
   // const {brand, sort} = {brand: {}, sort : {}}

   // console.log(state?.filters?.brand)
   return (
      <>
         <div className={cx('brand-sort')}>
            {category === 'dtdd' ? <h1>Điện thoại</h1> : <h1>Laptop</h1>}
            <div className={cx('container')}>
               {state.filters?.brand?.length ? <SelectedSort data={filters}/> :<DemandItem
               category={category}
               data = {brand[category]}
               />}
            </div>
         </div>
         <div className={cx('demand-sort')}>
            {category === 'dtdd' ? (
               <h1>Điện thoại theo nhu cầu </h1>
            ) : (
               <h1>Laptop theo nhu cầu</h1>
            )}
            <div className={cx('container')}>
               <DemandItem
                  demand
                  category={category}
                  data={demand[category]}
               />
            </div>
         </div>
      </>
   );
}

export default BrandSort;
