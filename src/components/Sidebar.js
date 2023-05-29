import { useState } from "react";
import { sidebarLinks } from "../config/navigation";
import { ROOT_URL } from "../config/url";
import { useNavigation } from "../context/NavigationProvider";

export const Sidebar = () => {
  const { mode, setMode, sidebarOpen, setSidebarOpen } = useNavigation();

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div className="sidebar-container d-none d-md-block">
      <nav className={`sidebar sidenav ${sidebarOpen ? "open" : "close"}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="logo.png" alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">Ramailo</span>
              <span className="profession">Admin</span>
            </div>
          </div>

          <i
            className="bx bx-chevron-right toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i
                className={`bx icon ${sidebarOpen ? "bx-cross" : "bx-search"}`}
                onClick={() => setSidebarOpen(!sidebarOpen)}
              ></i>
              <input type="text" placeholder="Search..." />
            </li>

            {!sidebarOpen && (
              <>
                <li>
                  <a href={ROOT_URL}>
                    <i className="bx icon bx-home-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="/profile">
                    <i className="bx icon bx-user"></i>
                  </a>
                </li>
              </>
            )}

            {sidebarOpen && (
              <ul className="menu-links">
                {sidebarLinks.map(({name, path, icon}) => {
                  return (
                    <li className="nav-link">
                      <a href={path}>
                        <i className={`bx icon ${icon}`}></i>
                        <span className="text nav-text">{name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="bottom-content">
            <li className="">
              <a href={ROOT_URL}>
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode" onClick={toggleMode}>
              <div className="sun-moon">
                <i className="bx bx-moon icon moon"></i>
                <i className="bx bx-sun icon sun"></i>
              </div>
              <span className="mode-text text">{mode} mode</span>

              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};
