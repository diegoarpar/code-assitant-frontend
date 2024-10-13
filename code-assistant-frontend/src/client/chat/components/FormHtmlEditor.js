import React, { Suspense } from "react";

const FormHtmlEditorClient = React.lazy(() => {
    return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
      import("./FormHtmlEditorSSR")
    );
  });
  
  const FormHtmlEditor = ({setMessage, message}) => {
    return (
      <Suspense fallback={<span >Loading... </span>}>

        <FormHtmlEditorClient 
            setMessage={setMessage}
            message={message}
        />

      </Suspense>
    );
  };
export default FormHtmlEditor;