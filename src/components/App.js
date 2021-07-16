import React, {useState, useEffect} from 'react';
import Editor from './Editor';
import FileExplorer from './FileExplorer';
import liveEditor from './liveEditor';


function App() {
  const [html, setHtml] = useState("")
  const [css, setCss] = useState("")
  const [js, setJavascript] = useState("")
  const  [srcDOC, setSrcDoc]= useState("")

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`)
    }, 250)

    return()=> clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div>
      <div className="pane top-pane left-pane">
        <FileExplorer />
      </div>
      <div className="pane top-pane right-pane">
        <Editor
         language='xml'
         displayName='HTML'
         value={html} 
         onChange={setHtml}
         />
        <Editor
         language='css' 
         displayName='CSS' 
         value={css} 
         onChange={setCss}
         />
        <Editor
         language='js' 
         displayName='Javascript' 
         value={js} 
         onChange={setJavascript}
         />
      </div>
      <h1>Live Editor</h1>
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
  );
}

export default App;
