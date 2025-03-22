import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
    console.log("testing ScrollToTop");
  }, [pathname]);

  return null;
};

export default ScrollToTop;
