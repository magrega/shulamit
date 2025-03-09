import { BASE_URL } from "@/helpers";
import { Dispatch, SetStateAction } from "react";
import { NavLink, NavLinkRenderProps } from "react-router";
import styles from "./Navbar.module.css";

interface NavListProps {
  isMenuShown?: boolean;
  setMenuShown?: Dispatch<SetStateAction<boolean>>;
}

const NavList = ({ isMenuShown = false, setMenuShown }: NavListProps) => {
  const pages = [
    { pageName: "На главную", pageLink: BASE_URL },
    { pageName: "Интернет-магазин", pageLink: `${BASE_URL}/internet-magazin` },
    {
      pageName: "Контакты",
      pageLink: `${BASE_URL}/internet-magazin#contacts-shop`,
    },
    { pageName: "Знакомство с картами", pageLink: "/intro" },
    { pageName: "Работа с картами", pageLink: "/interact" },
  ];

  const setActiveClass = ({ isActive }: NavLinkRenderProps) =>
    `${styles.navbarA} ${isActive ? styles.active : ""}`;

  const handleClick = () => setMenuShown && setMenuShown(false);

  return (
    <ul className={`${styles.navbarList} ${isMenuShown ? styles.active : ""}`}>
      {pages.map((page) => (
        <li className={styles.navbarLi} key={page.pageLink}>
          <NavLink
            to={page.pageLink}
            className={setActiveClass}
            onClick={handleClick}
          >
            {page.pageName}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
