import { useIsDesktop } from "@/hooks/useIsDesktop";
import styles from "./Navbar.module.css";
import NavBurger from "./NavBurger";
import NavList from "./NavList";

const Navbar = () => {
  const { isDesktop } = useIsDesktop();

  return (
    <nav className={styles.navbarContainer}>
      {isDesktop ? <NavList /> : <NavBurger />}
    </nav>
  );
};

export default Navbar;
