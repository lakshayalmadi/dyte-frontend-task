import React, {useState, useEffect} from 'react';
import { Navbar, Editor, LiveScreen, Tabs} from "./components";
import axios from "axios";


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
    setSelectedFile(file);
  }

  useEffect(() => {
    let path = window.location.pathname;
    path = path.substr(20, path.length);
    if (path[path.length - 1] === "/") {
      path = path.substr(0, path.length - 1);
    }
    if (path) {
      axios
        .get(`https://dyte-backend-api.herokuapp.com/api/pastes/${path}`)
        .then((res) => {
          console.log(res.data);
          if (res.data._id) {
            setHtml(res.data.html);
            setCss(res.data.css);
            setJavascript(res.data.javascript);
}
        })
        .catch((err) => {
          console.log("Error");
        });
    }
  }, []);

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
  }, [html, css, javascript]);

  const onShareableBtnClick = () => {
    axios
      .post("https://dyte-backend-api.herokuapp.com/api/pastes", {
        html,
        css,
        javascript,
      })
      .then((res) => {
        console.log(res.data);
        alert(`https://lakshayalmadi.github.io/dyte-frontend-task/${res.data._id}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar onClick={onShareableBtnClick}/>
      <Tabs selectedFile={selectedFile} onClick={fileChangeHandler}/>
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
