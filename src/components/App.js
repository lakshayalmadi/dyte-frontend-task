import React, {useState, useEffect} from 'react';
import Editor from './Editor';
import FileExplorer from './FileExplorer';
import liveEditor from './liveEditor';
import Navbar from './Navbar';


function App() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJavascript] = useState("")
  const  [srcDOC, setSrcDoc]= useState("")
  const [selectedfile, setSelectedFile]= useState('index.html')

  const fileChangeHandler = (event)=>{
    const file=event.target.dataset.file
    console.log(file);
    setSelectedFile(file);
  }

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <head><style>${css}</style></head>
        <body>${html}</body>
        <script>${js}</script>
      </html>`)
    }, 250)

    return()=> clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div>
      <Navbar />
      <div className="pane top-pane left-pane">
        <FileExplorer onClick={fileChangeHandler}/>
      </div>
      <div className="pane top-pane right-pane">
        {selectedfile==='index.html' && <Editor
         language='xml'
         displayName='HTML'
         value={html} 
         onChange={setHtml}
         />}
        {selectedfile==='index.css' && <Editor
         language='css' 
         displayName='CSS' 
         value={css} 
         onChange={setCss}
         />}
        {selectedfile==='index.js' && <Editor
         language='js' 
         displayName='Javascript' 
         value={js} 
         onChange={setJavascript}
         />}
      </div>
      <h1 className="live-editor-head">Live Editor</h1>
      <div className='editor-box'>
        <div className="pane">
          <iframe 
            className="live-editor"
            srcDoc={srcDOC}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%" 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
