import React, { useState } from 'react';
import rectangleImage from '../assets/Rectangle.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/style.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Indexpage() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="header sticky-top">
        <nav className="navbar navbar-expand-lg py-3 navbar-light shadow p-3 mb-5">
          <div className="container">
            <a href="#home"><img src={rectangleImage} alt="Logo" id="logo" /></a>
            <button
              type="button"
              onClick={toggleNav}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`${
                showNav ? 'show' : ''
              } collapse navbar-collapse justify-content-center`}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link to={"/"}  className="nav-link">HOME</Link>
                </li>
                <li className="nav-item">
                  <a href="#service" className="nav-link">
                    OUR SERVICES
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#career" className="nav-link">
                    CAREER
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-link">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
            <button type="button" className="btn justify-content-end">
              Login
            </button>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Indexpage;
