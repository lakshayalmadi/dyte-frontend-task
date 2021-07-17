import React from 'react'

const Tabs= ({selectedFile, onClick})=>{
  return(
    <div className="tabs">
      <div
        className={selectedFile === "html" ? "active" : ""}
        onClick={onClick}
        data-file="html"
      >
        index.html
      </div>
      <div
        className={selectedFile === "css" ? "active" : ""}
        onClick={onClick}
        data-file="css"
      >
        index.css
      </div>
      <div
        className={selectedFile === "js" ? "active" : ""}
        onClick={onClick}
        data-file="js"
      >
        index.js
      </div>
    </div>
  );
};

export default Tabs;