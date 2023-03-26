import React, { useState } from "react"; // The React and useState modules are imported.
/* The ./style.css, VscGrabber, VscClose, 
Link, logotext, and socialprofils modules are also imported from other files in the project. */
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle"; // The Themetoggle component is imported from the ../components/themetoggle file.

// The Headermain function is defined as the default export of the module.
const Headermain = () => {
  const [isActive, setActive] = useState("false"); // The isActive state variable is initialized using the useState hook with an initial value of false.
    /* The handleToggle function is defined to toggle the isActive state variable and add or remove the ovhidden 
    class to the body element when the menu__button is clicked.*/
  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
        {/* Inside the header element, there is a div element with the d-flex class to align the child elements horizontally and centered. 
        It contains a Link element with the navbar-brand and nav_ac classes to display the website logo and a Themetoggle component to toggle the website theme. 
        The menu__button element is also rendered with an onClick handler 
        to toggle the isActive state variable and display either the VscClose or VscGrabber icon depending on the isActive value. */}
      <header className="fixed-top site__header">{/* The header element is rendered with a fixed position and a class of site__header. */}
        <div className="d-flex align-items-center justify-content-between">
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>
        
        {/* The site__navigation element is rendered with a conditional class of menu__opend depending on the isActive value. 
        This element contains two child elements. The first child is a div element with the bg__menu and h-100 classes to set 
        a background color and a height of 100% respectively. 
        The second child is a div element with the menu__wrapper class to wrap the menu__container element. 
        The menu__container element contains a ul element with a list of menu items wrapped in Link elements to navigate 
        to different pages of the website. Each Link element has an onClick handler to toggle the isActive state variable and 
        close the menu when the user clicks on a menu item. */}
        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* The menu_footer element is rendered with a position-absolute class to position it at the bottom of the 
          site__navigation element. It contains two child elements. The first child is a div element with the d-flex class
           to display social profile links. The second child is a p element to display the website's copyright information. */}
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.facebook}>Facebook</a>
            <a href={socialprofils.github}>Github</a>
            <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      {/* There are four div elements with classes of br-top, br-bottom, br-left, 
      and br-right to add border styling to the header section. */}
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
