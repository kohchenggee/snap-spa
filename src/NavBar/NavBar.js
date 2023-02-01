import { SECTION, TITLE } from "./constant";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-menu.svg";
import closeMenu from "../assets/icon-close-menu.svg";
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";
import { useState } from "react";

import "./NavBar.css";

const MobileMenu = ({ showDrawer, setShowDrawer }) => {
  const [openList, setOpenList] = useState({});
  const itemOnClick = (item) => {
    const itemState = openList?.[item];
    if (itemState) {
      setOpenList({ ...openList, [item]: !itemState });
    } else {
      setOpenList({ ...openList, [item]: true });
    }
  };
  return (
    <aside>
      <div className={`sideDrawer ${showDrawer && "open"}`}>
        <div className="closeMenuContainer">
          <img
            src={closeMenu}
            alt="closeMenu"
            className="closeMenu"
            onClick={() => setShowDrawer(false)}
          />
        </div>

        <div>
          {TITLE.map((item, index) => (
            <div className="label" key={`${item}_${index}`}>
              <div
                onClick={() => itemOnClick(item)}
                className="mobileSectionContainer"
                aria-label={item}
              >
                <span>{item}</span>
                <img
                  src={openList?.[item] ? arrowUp : arrowDown}
                  alt="collapseIcon"
                  className="mobileSectionArrow"
                />{" "}
              </div>
              <ul className={openList?.[item] ? "showList" : "hideList"}>
                {SECTION[TITLE[index]].map((sectionItem) => (
                  <li
                    key={`m_${sectionItem.name}`}
                    className="mobileListItem"
                    aria-label={sectionItem.name}
                  >
                    {sectionItem.img && (
                      <img src={sectionItem.img} alt={sectionItem.img} />
                    )}
                    {sectionItem.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="label navLabel" aria-label="Careers">
          Careers
        </div>
        <div className="label navLabel" aria-label="About">
          About
        </div>
        <div className="mobileUserProfile">
          <div className="loginButton" aria-label="Login">
            Login
          </div>
          <div className="registerButton" aria-label="Register">
            Register
          </div>
        </div>
      </div>
      {showDrawer && <div className="backdrop" />}
    </aside>
  );
};

const NavBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div>
      <nav>
        <div className="navBarContainer">
          <img src={logo} alt="logo" className="logo" />
          <div className="selectionsContainer">
            {TITLE.map((item, index) => (
              <ul className="label" key={`${item}_${index}`}>
                <li className="withDropdown">
                  {item}{" "}
                  <ul className="dropdown">
                    {SECTION[TITLE[index]].map((sectionItem) => (
                      <li className="sectionItem" key={`d_${sectionItem.name}`}>
                        {sectionItem.img && (
                          <img src={sectionItem.img} alt={sectionItem.img} />
                        )}
                        {sectionItem.name}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
            <div className="label navLabel" aria-label="Careers">
              Careers
            </div>
            <div className="label navLabel" aria-label="About">
              About
            </div>
          </div>
          <div className="userProfileContainer">
            <div className="loginButton" aria-label="Login" tabIndex="0">
              Login
            </div>
            <div className="registerButton" aria-label="Register" tabIndex="1">
              Register
            </div>
          </div>
          <img
            src={hamburger}
            alt="menu"
            className="mobileMenu"
            onClick={() => setShowDrawer(true)}
          />
        </div>
        <MobileMenu showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      </nav>
    </div>
  );
};

export default NavBar;
