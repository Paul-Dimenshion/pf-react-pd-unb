// It imports the React and ReactDOM libraries.
import React from 'react'; 
import ReactDOM from "react-dom/client";
// It imports the App component from the ./app/App file.
import App from './app/App';
// It imports the index.css file.
import './index.css';

/* It uses the ReactDOM.createRoot method to create a root element for the React application.
The createRoot method is used instead of render because it allows for concurrent rendering, which can improve performance. */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);
