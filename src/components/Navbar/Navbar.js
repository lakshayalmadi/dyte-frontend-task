import React from "react";

export default function Navbar({onClick}) {
  return (
    <div className="navbar">
      <img src="https://www.dyte.io/images/Dyte-Logo.svg" alt="logo" />
      <div className="copy-link" onClick={onClick}>
        Get Shareable Link
      </div>
    </div>
  );
}
