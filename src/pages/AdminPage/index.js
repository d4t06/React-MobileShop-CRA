import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import request from '../../utils/request';
import styles from './Admin.module.scss';
import useRefreshToken from '../../hooks/useRefreshToken';

const cx = classNames.bind(styles);

function AdminPage() {
   const [user, setUser] = useState([]);
   const refresh = useRefreshToken();

   useEffect(() => {
      let isMounted = true;
      const controller = new AbortController();

      const fetch = async () => {
         try {
            const response = await request.get('/users', {
               signal: controller.signal,
            });

            console.log(response);
         } catch (error) {
            console.log({ message: error });
         }
      };
      fetch();

      return () => {
         isMounted = false;
         controller.abort();
      };
   }, []);

   return (
      <div className={cx('admin-page')}>
         <h1 className={cx('admin-page-header')}>Admin page</h1>
         <table className={cx('user-table')}>
            <thead>
               <tr>
                  <th>ID</th>
                  <th style={{ width: '50%' }}>Tên</th>
                  <th colSpan="2">Hành động</th>
               </tr>
            </thead>

            {/* {user?.map((user, index) => {
            return (
               <tbody key={index}>
               <tr>
               <td>#</td>
               <td>{user.username}</td>
               <td>
                  <a href="">Xóa vĩnh viễn</a>
               </td>
               <td>
                  <a href="">khôi phục</a>
               </td>
               </tr>
               </tbody>
            )
           })} */}

            <tbody>
               <tr>
                  <td>#</td>
                  <td>test</td>
               </tr>
            </tbody>
         </table>
         <button className={cx('refresh-btn')} onClick={() => refresh()}>
            Refresh
         </button>
      </div>
   );
}
export default AdminPage;
