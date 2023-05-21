import React from "react";
import PropTypes from "prop-types";

const NavigationContext = React.createContext(null);

export const NavigationProvider = ({ children }) => {
  let [mode, setMode] = React.useState("light");
  let [page, setPage] = React.useState("/");
  return <NavigationContext.Provider value={{ mode, setMode, page, setPage }}>{children}</NavigationContext.Provider>;
};

NavigationProvider.propTypes = {
  children: PropTypes.any,
};

export const useNavigation = () => React.useContext(NavigationContext);
