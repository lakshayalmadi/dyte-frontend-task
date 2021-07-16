import React, {useState, useEffect} from 'react';
import { Navbar, Editor, LiveScreen, Tabs, Main} from "./components";


function App() {
  const [html, setHtml] = useState("<h1>Real-time audio and video SDKs, ready to launch 🚀</h1>");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const  [srcDOC, setSrcDoc]= useState("");
  const [selectedFile, setSelectedFile]= useState('html');


  const handleHtmlChange = (editor, data, value) => {
    setHtml(value);
  };

  const handleCssChange = (editor, data, value) => {
    setCss(value);
  };

  const handleJavascriptChange = (editor, data, value) => {
    setJavascript(value);
  };

  const fileChangeHandler = (event)=>{
    const file=event.target.dataset.file;
    console.log(file);
    setSelectedFile(file);
  }

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${javascript}</script>
      </html>`)
    }, 250);

    return()=> clearTimeout(timeout)
  }, [html, css, javascript])

  return (
    <div>
      <Navbar />
      <Main />
      <Tabs selectedfile={selectedFile} onClick={fileChangeHandler}/>
        {selectedFile==='html' && (<Editor
        language='xml'
        fileName='HTML'
        value={html} 
        onChange={handleHtmlChange}
        />)}
        {selectedFile==='css' && (<Editor
        language='css' 
        fileName='CSS' 
        value={css} 
        onChange={handleCssChange}
        />)}
        {selectedFile==='js' && (<Editor
        language='js' 
        fileName='Javascript' 
        value={javascript} 
        onChange={handleJavascriptChange}
        />)}
        <div className="heading">Live View</div>
        <LiveScreen srcDoc={srcDOC} />    
      </div>  
  );
}

export default App;
