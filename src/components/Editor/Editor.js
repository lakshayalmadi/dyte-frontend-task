import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import {Controlled as ControlledEditor} from 'react-codemirror2'

const Editor = ({ language, value, onChange }) => {
    return (
        <div className="editor">
            <ControlledEditor 
                onBeforeChange={onChange}
                value={value}
                options={{
                    lineWrapping:true,
                    lint: true,
                    mode:language,
                    theme:'material',
                    lineNumbers:true
                }}
            />
        </div>
    );
};

export default Editor;