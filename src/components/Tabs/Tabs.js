import React from 'react'

const Tabs= ({selectedFile, onClick})=>{
  return(
    <div className="tabs">
      <div
        className={selectedFile==='html'? 'active': ''}
        onClick={onClick}
        data-file="html">index.html
      </div>
      <div
        className={selectedFile==='css'? 'active': ''}
        onClick={onClick}
        data-file="css">index.css
      </div>
      <div
        className={selectedFile==='js'? 'active': ''}
        onClick={onClick}
        data-file="js">index.js
      </div>
    </div>
  )
}

export default Tabs;

{/* <html>
  <body>
    <img id="logo" 
         src="https://www.dyte.io/images/Dyte-Logo.svg"/>
    <h1 id ="heading"> Code Editor</h1>
  </body>
</html>    

html, body{
  background-color: black;
  color:white;
  text-align: center;
}

#logo{
  width: 150px;}

  document.getElementById('heading').style.color='grey'; */}