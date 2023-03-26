// Import React and useEffect from the react library
import React, { useEffect } from "react";

// Import the Bootstrap CSS stylesheet
import "bootstrap/dist/css/bootstrap.min.css";

// Import BrowserRouter and useLocation from the react-router-dom library
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";

// Import withRouter from the ../hooks/withRouter file
import withRouter from "../hooks/withRouter";

// Import AppRoutes component from the ./routes file
import AppRoutes from "./routes";

// Import Headermain component from the ../header file
import Headermain from "../header";

// Import AnimatedCursor from the ../hooks/AnimatedCursor file
import AnimatedCursor  from "../hooks/AnimatedCursor";

// Import the App.css stylesheet
import "./App.css";

// Define a component named _ScrollToTop that takes props as an argument
function _ScrollToTop(props) {
  
  // Get the pathname of the current URL using useLocation hook
  const { pathname } = useLocation();
  
  // Add an event listener to scroll to the top of the page when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // Return the props passed to the component
  return props.children;
}

// Define a new component named ScrollToTop by wrapping the _ScrollToTop component with withRouter
const ScrollToTop = withRouter(_ScrollToTop);

// Define the App component
export default function App() {
  return (
    // Wrap the whole component inside a Router component from react-router-dom
    <Router basename={process.env.PUBLIC_URL}>
      {/* Add an animated cursor to the page */}
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      {/* Add a ScrollToTop component to the page */}
      <ScrollToTop>
        {/* Add a Headermain component to the page */}
        <Headermain />
        {/* Add an AppRoutes component to the page */}
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
