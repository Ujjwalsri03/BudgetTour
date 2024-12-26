import React, { useRef } from "react";
import { Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../../styles/car-rent-header.css";

const navLinks = [
  {
    path: "https://www.momondo.in/stays",
    display: "Stays & Hotels",
  },
  {
    path: "/CarRent",
    display: "Car Rentals",
  },
  {
    path: "/cars",
    display: "All Cars",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "https://ujjwalsri03.github.io/JS-Projects/API/gemini/",
    display: "Help",
  },
];

const CarRentHeader = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header1">
      {/* Main navigation */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            {/* Mobile menu toggle */}
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            {/* Navigation menu */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) =>
                  item.path.startsWith("http") ? (
                    // External links rendered with <a> tag
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav__item"
                      key={index}
                    >
                      {item.display}
                    </a>
                  ) : (
                    // Internal links rendered with <NavLink>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "nav__active nav__item"
                          : "nav__item"
                      }
                      key={index}
                    >
                      {item.display}
                    </NavLink>
                  )
                )}
              </div>
            </div>

            {/* Search box */}
            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default CarRentHeader;
