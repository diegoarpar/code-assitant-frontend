import ReactQuill from 'react-quill';
import React from "react";

const FormHtmlEditorClientSSR = ({ setMessage, message }) => {
    return (
      <div>
        <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css"></link>
        <ReactQuill 
            className="HiddeToolbar"
            onChange={(e) => setMessage(e)}
            value={message}
            placeholder="Your Code..."
            preserveWhitespace
        >
        </ReactQuill>
      </div>
    );
  };
export default FormHtmlEditorClientSSR;