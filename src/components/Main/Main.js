import React from 'react'

export default function Main() {
    return (
        <div className="row">
            <div className="left col">
                <h1>This is an online code compiler.</h1>
                <p>This code compiler is built using react and has the functionality to choose which file you want to edit. It also generates a shareable link using Pastebin API.</p>
            </div>
            <div className="right col">
                <img src=".../images/homepage.png" alt="homepage"></img>
            </div>
        </div>
    )
}
