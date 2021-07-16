import React from 'react'

export default function FileExplorer({onClick}) {
    return (
        <div className='left-pane'>
            <h1 className="file-explorer-heading">File Explorer</h1>
            <div>
                <button onClick={onClick} data-file='index.html' type="button" class="btn btn-primary explorer-btn">index.html</button>
                <button onClick={onClick} data-file='index.css' type="button" class="btn btn-primary explorer-btn">index.css</button>
                <button onClick={onClick} data-file='index.js' type="button" class="btn btn-primary explorer-btn">index.js</button>
            </div>
        </div>
    )
}


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