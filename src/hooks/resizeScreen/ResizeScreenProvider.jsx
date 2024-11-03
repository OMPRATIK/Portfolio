import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Resize = createContext(null);

function ResizeScreenProvider({ children }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(function () {
    function handleResize() {
      if (window.innerWidth < 640) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Resize.Provider value={{ isSmallScreen }}>{children}</Resize.Provider>
  );
}

ResizeScreenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResizeScreenProvider;
