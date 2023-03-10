import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from '../Login/Login.module.scss';
import useAuth from '../../hooks/useAuth';
import request from '../../utils/request';
import { checkIcon } from '../../assets/icons';

const LOGIN_URL = '/auth';
const cx = classNames.bind(styles);

const USER_REGEX = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const PWD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function Register() {
   const [setAuth] = useAuth();
   const userInputRef = useRef();
   const errRef = useRef();

   const [user, setUser] = useState('');
   const [password, setPassword] = useState('');
   const [passwordConfirm, setPasswordConfirm] = useState('');
   const [errMsg, setErrorMsg] = useState('');
   const [success, setSuccess] = useState(false);

   useEffect(() => {
      userInputRef.current.focus();
      // console.log(auth);
   }, []);

   const handleClear = () => {
      setUser('')
      setPassword('')
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await request.post(
            LOGIN_URL,
            JSON.stringify({ username: user, password: password }),
            {
               headers: {'Content-Type': 'application/json'},
               // withCredentials: true
            }
         );
         handleClear();

         const accessToken = response?.data?.token
         const role = response?.data?.role
         setAuth({user, password, accessToken, role})
         // if (response?.data) {
         //    setSuccess(true)
         // }

      } catch (error) {
         if (!error?.response) {
            setErrorMsg("No server response")
         } else if (error?.response.status === 400) {
            setErrorMsg("missing username or password")
         } else {
            setErrorMsg("Login failed")
         }
      }

      // console.log(user, password);
   };
   return (
      <div className="wrap">
         <form className={cx('login-form')} onSubmit={handleSubmit}>
            <h1>Đăng ký</h1>
            <div className={cx('form-group')}>
               <label htmlFor="username" autoComplete="off">
                  <span>Tên tài khoản</span>
                  {checkIcon}
               </label>
               <input
               id='username'
                  ref={userInputRef}
                  autoComplete="off"
                  type="text"
                  value={user}
                  onChange={(e) =>
                     setUser(e.target.value.trim() && e.target.value)
                  }
               />
            </div>
            <div className={cx('form-group')}>
               <label htmlFor="password">
                  Mật khẩu
                  {checkIcon}
                  </label>
               <input
                  type="text"
                  id='password'
                  autoComplete="off"
                  value={password}
                  onChange={(e) =>
                     setPassword(e.target.value.trim() && e.target.value)
                  }
               />
            </div>
            <div className={cx('form-group')}>
               <label htmlFor="password-confirm">Nhập lại mật khẩu
               {checkIcon}</label>
               <input
                  type="text"
                  id='password-confirm'
                  autoComplete="off"
                  value={passwordConfirm}
                  onChange={(e) =>
                     setPasswordConfirm(e.target.value.trim() && e.target.value)
                  }
               />
            </div>
            <span className={cx('messgae-container')}></span>

            {errMsg && (
               <div className={cx('errorMsg')}>
                  <span></span>
               </div>
            )}

            {/* <div className={cx("login-with")}>
            <a href="/auth/facebook" className={cx("login-facebook", "login-option")}>
               Facebook
            </a>
            <a href="/auth/facebook" className={cx("login-google", "login-option")}>
               Google
            </a>
         </div> */}

            <button className={cx('login-form-btn')} type="submit">
               Đăng ký
            </button>
            <span className={cx('register-text')}>
               Đã có tài khoản?
               <Link className={cx("switch")} to="/login"> Đăng nhập</Link>
            </span>
         </form>
      </div>
   );
}
export default Register;
