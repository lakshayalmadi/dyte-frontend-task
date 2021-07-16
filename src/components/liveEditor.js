import React from 'react'

export default function liveEditor(props) {
    const srcDOC=props
    return (
        <div>
            <h1>Live Editor</h1>
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
    )
}
