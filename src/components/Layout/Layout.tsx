import { Outlet } from "react-router";
import { code, instagram, telegram, youtube } from "../../assets/icons";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className={styles.container}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.socialsContainer}>
          <a href="https://www.instagram.com/shulanika/">
            <img
              className={styles.socialsContainerItem}
              src={instagram}
              alt="insta"
            />
          </a>
          <a href="https://t.me/nikashulanika">
            <img
              className={styles.socialsContainerItem}
              src={telegram}
              alt="telegram"
            />
          </a>
          <a href="https://www.youtube.com/@shulanika">
            <img
              className={styles.socialsContainerItem}
              src={youtube}
              alt="youtube"
            />
          </a>
          <a href="https://metabroadcast.ru">
            <img
              className={styles.socialsContainerItem}
              src={code}
              alt="made by"
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
