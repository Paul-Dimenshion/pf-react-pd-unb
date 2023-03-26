/* The function first checks if onPerfEntry is a function and not undefined, and if so, 
it imports the web-vitals library using dynamic import syntax. */
const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        /* After the library is imported, it retrieves performance metrics using the functions getCLS, 
        getFID, getFCP, getLCP, and getTTFB, and passes them to onPerfEntry function. */
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
        /* The getCLS, getFID, getFCP, getLCP, and getTTFB functions are part of the web-vitals library and are used to collect 
        performance data related to web page loading and rendering. */
      });
    }
  };
  
  export default reportWebVitals;
  