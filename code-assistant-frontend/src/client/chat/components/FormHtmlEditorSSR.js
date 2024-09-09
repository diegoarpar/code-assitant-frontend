import ReactQuill from 'react-quill';
import React from "react";
import HiddeToolbar from  "./FormHtmlEditorSSR.css";

const FormHtmlEditorClientSSR = ({ setMessage, message }) => {
  
    return (
      <ReactQuill 
          className="HiddeToolbar"
          onChange={(e) => setMessage(e)}
          value={message}
      >
      </ReactQuill>
    );
  };
export default FormHtmlEditorClientSSR;