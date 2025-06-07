import React from "react";

const CurlyBrace = () => {
  return (
    <div style={curlyBraceStyles}>
      <div id="left" style={{ ...braceStyles, ...leftBraceStyles }}>
        <div style={leftBraceBefore}></div>
        <div style={leftBraceAfter}></div>
      </div>
    </div>
  );
};

// Main curly brace container styles
const curlyBraceStyles: React.CSSProperties = {
  width: "300px",
  position: "absolute",
  left: "50%",
  marginLeft: "-150px",
  top: "150px",
};

// General brace styles
const braceStyles: React.CSSProperties = {
  borderBottom: "5px solid red",
  margin: "0 10%",
  width: "30%",
  height: "20px",
  position: "relative",
  float: "left",
};

// Specific styles for the left brace pseudo-elements
const leftBraceStyles: React.CSSProperties = {
  position: "relative",
};

// Simulating the ::before pseudo-element with a div
const leftBraceBefore: React.CSSProperties = {
  content: '""',
  width: "10%",
  height: "50px",
  position: "absolute",
  display: "block",
  borderBottom: "5px solid red",
  borderBottomLeftRadius: "20px",
  marginLeft: "-10%",
  marginTop: "-30px",
};

// Simulating the ::after pseudo-element with a div
const leftBraceAfter: React.CSSProperties = {
  content: '""',
  width: "10%",
  height: "50px",
  position: "absolute",
  display: "block",
  borderTop: "5px solid red",
  borderTopRightRadius: "20px",
  marginLeft: "30%",
  marginTop: "20px",
};

export default CurlyBrace;
