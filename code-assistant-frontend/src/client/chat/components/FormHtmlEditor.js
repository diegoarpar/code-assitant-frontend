import React, { Suspense } from "react";

const FormHtmlEditorClient = React.lazy(() => {
    return new Promise((resolve) => setTimeout(resolve, 100)).then(() =>
      import("./FormHtmlEditorSSR")
    );
  });
  
  const FormHtmlEditor = ({setMessage, message, setEditorReference}) => {
    return (
      <Suspense fallback={<span >Loading... </span>}>

        <FormHtmlEditorClient 
            setMessage={setMessage}
            message={message}
            setEditorReference={setEditorReference}
        />

      </Suspense>
    );
  };
export default FormHtmlEditor;