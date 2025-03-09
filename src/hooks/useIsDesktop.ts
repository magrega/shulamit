import { useEffect, useState } from "react";

export const useIsDesktop = () => {
  const breakpoint = 900;
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > breakpoint);

  useEffect(() => {
    const handleResize = () =>
      window.innerWidth > breakpoint ? setIsDesktop(true) : setIsDesktop(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsDesktop]);

  return isDesktop;
};
