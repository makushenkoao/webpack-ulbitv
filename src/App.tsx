import cls from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import webpackImage from "@/assets/webpack.png";
import WebpackIcon from "@/assets/webpack.svg";

const App = () => {
  return (
    <div className={cls.App}>
      <div className={cls.links}>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div>
        <h1>Webpack</h1>
      </div>
      <div>
        <img src={webpackImage} alt="Webpack" width={100} height={100} />
        <WebpackIcon width={50} height={50} />
      </div>
      <Outlet />
    </div>
  );
};

export default App;
