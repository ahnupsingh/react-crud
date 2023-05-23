import React from "react";
import PropTypes from "prop-types";
import { ROOT_URL } from "../config/url";

const NavigationContext = React.createContext(null);

export const NavigationProvider = ({ children }) => {
  let [mode, setMode] = React.useState("light");
  let [page, setPage] = React.useState(ROOT_URL);
  let [sidebarOpen, setSidebarOpen] = React.useState(false);
  let [activePath, setActivePath] = React.useState(false);
  return <NavigationContext.Provider value={{ 
    mode, setMode, 
    page, setPage, 
    sidebarOpen, setSidebarOpen,
    activePath, setActivePath
  }}>{children}</NavigationContext.Provider>;
};

NavigationProvider.propTypes = {
  children: PropTypes.any,
};

export const useNavigation = () => React.useContext(NavigationContext);
