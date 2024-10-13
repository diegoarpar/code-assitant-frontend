import React, { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

const FormHtmlEditorClientSSR = ({ setMessage, message }) => {
    const editorRef = useRef(null);
    if (editorRef != null && editorRef.current != undefined) {   
      setMessage(editorRef.current.getContent());
    }
    return (<Editor
        apiKey='bjs04lodf5z6zl9qsw9s885s589gi1asebjkkmngnjxtnref'
        onInit={(_evt, editor) => editorRef.current = editor}
        onChange={(e) => { setMessage(e.level.content);}}
        initialValue=""
        init={{
        height: 200,
        menubar: false,
        plugins: ['wordcount'
        ],
        toolbar: '',
        setup: function (editor) {
            editor.on("keydown", function (e) {
              if (event.keyCode == 9) {
                // tab pressed
        
                editor.execCommand("mceInsertContent", false, "    "); // inserts tab
        
                event.preventDefault();
        
                return false;
              }
            });
          },
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:12px }'
        }}
        />
      
    );
  };
export default FormHtmlEditorClientSSR;