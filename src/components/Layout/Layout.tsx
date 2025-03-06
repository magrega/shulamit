import { Outlet } from "react-router";
import { code, instagram, telegram, youtube } from "../../assets/icons";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="socials-container">
          <a href="https://www.instagram.com/shulanika/">
            <img
              className="socials-container__item"
              src={instagram}
              alt="insta"
            />
          </a>
          <a href="https://t.me/nikashulanika">
            <img
              className="socials-container__item"
              src={telegram}
              alt="telegram"
            />
          </a>
          <a href="https://www.youtube.com/@shulanika">
            <img
              className="socials-container__item"
              src={youtube}
              alt="youtube"
            />
          </a>
          <a href="https://metabroadcast.ru">
            <img className="socials-container__item" src={code} alt="made by" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
