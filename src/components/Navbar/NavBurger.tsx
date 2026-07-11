import { BASE_URL } from "@/constants";
import { cn } from "@/helpers";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import NavList from "./NavList";

const NavBurger = () => {
  const [isMenuShown, setMenuShown] = useState(false);

  const handleClick = () => setMenuShown((current) => !current);

  useEffect(() => {
    document.body.style.overflow = isMenuShown ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuShown]);

  return (
    <>
      <NavList isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <div className={styles.navbarMobile}>
        <span className={styles.navbarTitle}>
          <a className={styles.navbarA} href={BASE_URL}>
            shulanika.ru
          </a>
        </span>
        <div
          className={cn(styles.navbarBurger, isMenuShown && styles.active)}
          onClick={handleClick}
        >
          <span></span>
        </div>
      </div>
    </>
  );
};

export default NavBurger;
