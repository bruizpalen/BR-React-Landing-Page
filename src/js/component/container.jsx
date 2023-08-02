import React from "react";
// import PropTypes from "prop-types";

// const Container = ({ children, customStyle, columnOnSmallScreen}) => {
//   const containerStyle = {

//     ...customStyle,
//   };


//   const mediaQuery = window.matchMedia('(max-width: 768px)'); 

//   if (columnOnSmallScreen && mediaQuery.matches) {
//     console.log('They are matching');
//     containerStyle.flexDirection = 'column';
//     containerStyle.alignItems = 'center'; 
//   }

//   return <div style={containerStyle}>{children}</div>;
// };

// export default Container;

const Container = ({ children, grid}) => {
  const containerGrid = <div className="">{children}</div>;
  const normalContainer = <div className="">{children}</div>;
  return grid ? containerGrid : normalContainer
    
}
export default Container;
//   const containerStyle = {};
//   const mergedStyles = customStyle ? { ...containerStyle, ...customStyle } : containerStyle;
  
//   return <div id="mycontainer" style={mergedStyles}>{children}</div>;
// };

// export default ContainerComponent;