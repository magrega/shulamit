import { useEffect, useState } from "react";
import { NavLink, NavLinkRenderProps } from "react-router";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const BASE_URL = "https://www.shulanika.ru";
  const [isActive, setIsActive] = useState(false);
  const setActiveClass = ({ isActive }: NavLinkRenderProps) =>
    `${styles.navbarA} ${isActive ? styles.active : ""}`;

  const handleClick = () => {
    if (window.innerWidth < 870) setIsActive((current) => !current);
  };

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "unset";
    window
      .matchMedia("(orientation: landscape)")
      .addEventListener("change", (e) => {
        if (e.matches) {
          setIsActive(false);
          document.body.style.overflow = "unset";
        }
      });
  }, [isActive]);

  return (
    <nav className={styles.navbarContainer}>
      <ul
        className={
          isActive
            ? `${styles.navbarList} ${styles.active}`
            : `${styles.navbarList}`
        }
      >
        <li className={styles.navbarLi}>
          <a className={styles.navbarA} href={`${BASE_URL}`}>
            На главную
          </a>
        </li>
        <li className={styles.navbarLi}>
          <a className={styles.navbarA} href={`${BASE_URL}/internet-magazin`}>
            Интернет-магазин
          </a>
        </li>
        <li className={styles.navbarLi}>
          <a
            className={styles.navbarA}
            href={`${BASE_URL}/internet-magazin#contacts-shop`}
          >
            Контакты
          </a>
        </li>
        <li className={styles.navbarLi}>
          <NavLink onClick={handleClick} className={setActiveClass} to="/intro">
            Знакомство с картами
          </NavLink>
        </li>
        <li className={styles.navbarLi}>
          <NavLink
            onClick={handleClick}
            className={setActiveClass}
            to="/interact"
          >
            Работа с картами
          </NavLink>
        </li>
      </ul>
      <div className={styles.navbarMobile}>
        <span className={styles.navbarTitle}>
          <a className={styles.navbarA} href={BASE_URL}>
            shulanika.ru
          </a>
        </span>
        <div
          className={
            isActive
              ? `${styles.navbarBurger} ${styles.active}`
              : `${styles.navbarBurger}`
          }
          onClick={handleClick}
        >
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
