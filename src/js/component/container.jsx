import React from "react";
// import PropTypes from "prop-types";

const ContainerComponent = ({ children, customStyle }) => {
  const containerStyle = {};
  const mergedStyles = customStyle ? { ...containerStyle, ...customStyle } : containerStyle;
  
  return <div id="mycontainer" style={mergedStyles}>{children}</div>;
};

export default ContainerComponent;