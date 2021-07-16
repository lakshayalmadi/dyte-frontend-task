import React from 'react'

export default function liveEditor({srcDoc}) {
    return (
        <div>
            <iframe 
            className="live-editor"
            srcDoc={srcDOC}
            title="Live Renderer"
            sandbox="allow-scripts"
            frameBorder="0"
        />
        </div>
    )
}
