import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { useState } from "react";
import "./Navbar.css";

export default function Navbar(props) {
  // const [theme, setTheme] = useState('light');
  // const changeTheme=(color)=>{
  //     // setTheme(color)
  //     // document.body.style.color(`${color}`);
  // }
  return (
    <nav
      className={`navbar navbar-expand-lg`} style={{color:props.mode==='light'?'black':props.mode,backgroundColor:props.mode==='light'?'white':'black'}}
    >
      <div className="container-fluid" >
        <a style={{color:props.mode==='light'?'black':props.mode,backgroundColor:props.mode==='light'?'white':'black'}} className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{color:props.mode==='light'?'black':props.mode,backgroundColor:props.mode==='light'?'white':'black'}} className="nav-link active"  aria-current="page" to="/">
                {" "}
                Home{" "}
              </Link>
              {/* <a style={{color:props.mode==='light'?'black':props.mode,backgroundColor:props.mode==='light'?'white':'black'}} className="nav-link active"  aria-current="page" href="#">
                {" "}
                Home{" "}
              </a> */}
            </li>
            <li className="nav-item">
              <Link style={{color:props.mode==='light'?'black':props.mode,backgroundColor:props.mode==='light'?'white':'black'}} className="nav-link" to="/About">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="themePanel">
            <div className="themeButton">
              <a
                className="button"
                href='#'
                onClick={() => props.changeMode("#fb6868de")}
                id="theme-red"
              >
                {" "}
              </a>
              <a
                className="button"
                href='#'
                onClick={() => props.changeMode("#87e656")}
                id="theme-yellow"
              >
                {" "}
              </a>
              <a
                className="button"
                href='#'
                onClick={() => props.changeMode("#85ffe6d4")}
                id="theme-green"
              >
                {" "}
              </a>
              <a
                className="button"
                href='#'
                onClick={() => props.changeMode("rgb(96 167 255 / 95%)")}
                id="theme-blue"
              >
                {" "}
              </a>
              <a
                className="button"
                href='#'
                onClick={() => props.changeMode("dark")}
                id="theme-dark"
              >
                {" "}
              </a>
              <a
                className="button"
                href='#'
                onClick={() => props.changeMode("light")}
                id="theme-light"
              >
                {" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = { title: "Set Title here", aboutText: "About" }; //Setting Default props executed when specific proptype is not defined.
