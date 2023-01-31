import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function LoginPage() {
   return (
      <form className={cx("login-form")} method="POST" action="http://localhost:3000/api/login">
         <h1>Đăng nhập</h1>
         <div className={cx("form-group")}>
            <label htmlFor="name">Username</label>
            <input id="username" name="username" type="text" />
         </div>
         <div className={cx("form-group")}>
            <label htmlFor="image">Password</label>
            <input id="password" name="password" type="text" />
         </div>
         <span className={cx("messgae-container")}></span>

         <div className={cx("login-with")}>
            <a href="/auth/facebook" className={cx("login-facebook", "login-option")}>
               Facebook
            </a>
            <a href="/auth/facebook" className={cx("login-google", "login-option")}>
               Google
            </a>
         </div>

         <button className={cx("login-form-btn")} type="submit">
            Đăng nhập
         </button>
         <span className={cx("register-text")}>
            Chưa có tài khoản
            <a href="/register">Đăng ký ngay</a>
         </span>
      </form>
   );
}
export default LoginPage;
