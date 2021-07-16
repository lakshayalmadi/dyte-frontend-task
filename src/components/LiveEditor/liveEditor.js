import React from 'react'

export default function LiveScreen({srcDoc}) {
    return (
        <div>
            <iframe 
            className="live-editor"
            srcDoc={srcDoc}
            title="Live Renderer"
            sandbox="allow-scripts"
            frameBorder="0"
        />
        </div>
    )
}
