import Header from "../../components/Header";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   return (
      <div className={cx("app")}>
         <Header />
         <div className="container">{children}</div>
      </div>
   );
}

export default DefaultLayout;
