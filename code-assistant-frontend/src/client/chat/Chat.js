// Chat.js
import React, { useState } from 'react';
import axios from 'axios';
import FormHtmlEditor from './components/FormHtmlEditor';
import parse from 'html-react-parser'

const Chat = ({ conversation, onSendMessage, onSendMessageComponent, onInitConversation, onClicLockSendButton }) => {
  const [newMessage, setNewMessage] = useState('');
  const [key, setKey] = useState('');
  const url = "http://test.miarchivo.com.co:3002/api/recipes";
  const token = "IUzI1NiIsInR5c";

  const data = {
    "status": null,
    "id": null,
    "content": null,
    "components": [
        {
            "id": "OPENAI",
            "content": "<>\n  <h2>Static Code Analysis Report:</h2>\n  <p><strong>Code:</strong></p>\n  <pre>\n    <code>public void helloWord()</code>\n  </pre>\n  <p><strong>Analysis:</strong></p>\n  <ul>\n    <li><strong>SonarQube:</strong>\n      <ul>\n        <li>Method is empty: Method 'helloWord' is empty and has no functionality. (SonarQube rule)</li>\n      </ul>\n    </li>\n    <li><strong>FindBugs/SpotBugs:</strong>\n      <ul>\n        <li>Method 'helloWord' is not being invoked anywhere. (Potentially dead code)</li>\n      </ul>\n    </li>\n    <li><strong>Checkstyle:</strong>\n      <ul>\n        <li>Method name 'helloWord' is not in camel case. Should be 'helloWorld'. (Checkstyle Naming Conventions)</li>\n      </ul>\n    </li>\n    <li><strong>PMD:</strong>\n      <ul>\n        <li>Method has no return type: Consider adding functionality or removing the method. (PMD rule)</li>\n      </ul>\n    </li>\n    <li><strong>General Recommendations:</strong>\n      <ul>\n        <li>Provide meaningful functionality to the method or remove it if it's not needed.</li>\n        <li>Adhere to standard naming conventions (camelCase for method names).</li>\n      </ul>\n    </li>\n  </ul>\n</>",
            "components": null
        },
        {
            "id": "COPILOT",
            "content": "<>\n<head>\n    <title>Java Code Validation</title>\n</head>\n<body>\n    <h2>Validation Result</h2>\n    <p>The provided code is Java code. Here are some recommendations based on static code analysis tools:</p>\n\n    <h3>SonarQube Rules</h3>\n    <ul>\n        <li>Ensure method names follow Java naming conventions. Consider renaming <code>helloWord</code> to <code>helloWorld</code>.</li>\n    </ul>\n\n    <h3>FindBugs/SpotBugs</h3>\n    <ul>\n        <li>No potential issues found in this small snippet, but ensure that it is part of a class and follows proper encapsulation.</li>\n    </ul>\n\n    <h3>Checkstyle</h3>\n    <ul>\n        <li>Adhere to naming conventions for methods. Java method names should be in camelCase.</li>\n    </ul>\n\n    <h3>Security</h3>\n    <ul>\n        <li>No security vulnerabilities in this fragment, but always validate inputs in method implementations, especially in production code.</li>\n    </ul>\n\n    <h3>PMD</h3>\n    <ul>\n        <li>No issues detected, but ensure that the method is utilized properly within a class context.</li>\n    </ul>\n</body>\n</>",
            "components": null
        },
        {
            "id": "GEMINIS",
            "content": "java\npublic void helloWord() {\n    System.out.println(\"Hello World!\");\n}\n\n\nThis code has no issues.",
            "components": null
        },
        {
            "id": "SUMMARY",
            "content": "<>\n  <head>\n    <title>Java Code Validation</title>\n  </head>\n  <body>\n    <h2>Static Code Analysis Report:</h2>\n\n    <p><strong>Code:</strong></p>\n    <pre>\n      <code>public void helloWord()</code>\n    </pre>\n\n    <p><strong>Analysis:</strong></p>\n    <ul>\n      <li><strong>SonarQube:</strong>\n        <ul>\n          <li>Method is empty: Method 'helloWord' is empty and has no functionality. (SonarQube rule)</li>\n        </ul>\n      </li>\n      <li><strong>FindBugs/SpotBugs:</strong>\n        <ul>\n          <li>Method 'helloWord' is not being invoked anywhere. (Potentially dead code)</li>\n        </ul>\n      </li>\n      <li><strong>Checkstyle:</strong>\n        <ul>\n          <li>Method name 'helloWord' is not in camel case. Should be 'helloWorld'. (Checkstyle Naming Conventions)</li>\n        </ul>\n      </li>\n      <li><strong>PMD:</strong>\n        <ul>\n          <li>Method has no return type: Consider adding functionality or removing the method. (PMD rule)</li>\n        </ul>\n      </li>\n      <li><strong>General Recommendations:</strong>\n        <ul>\n          <li>Provide meaningful functionality to the method or remove it if it's not needed.</li>\n          <li>Adhere to standard naming conventions (camelCase for method names).</li>\n        </ul>\n      </li>\n    </ul>\n\n    <hr/>\n\n    <h2>Updated Code:</h2>\n    <p>After updating the code, the following issues were addressed:</p>\n    <pre>\n      <code>\npublic void helloWorld() {\n    System.out.println(\"Hello World!\");\n  }\n      </code>\n    </pre>\n\n    <p>This updated code has no static analysis issues.</p>\n    \n    <h3>Validation Result</h3>\n    <p>The provided code is Java code. Here are some recommendations based on static code analysis tools:</p>\n\n    <h3>SonarQube Rules</h3>\n    <ul>\n      <li>Original Method 'helloWord' was empty and lacked functionality.</li>\n      <li>Ensure method names follow Java naming conventions. Consider renaming <code>helloWord</code> to <code>helloWorld</code>.</li>\n    </ul>\n\n    <h3>FindBugs/SpotBugs</h3>\n    <ul>\n      <li>No potential issues found in this small snippet, but ensure that it is part of a class and follows proper encapsulation.</li>\n    </ul>\n\n    <h3>Checkstyle</h3>\n    <ul>\n      <li>Adhere to naming conventions for methods. Java method names should be in camelCase. Original method <code>helloWord</code> was renamed to <code>helloWorld</code>.</li>\n    </ul>\n\n    <h3>Security</h3>\n    <ul>\n      <li>No security vulnerabilities in this fragment, but always validate inputs in method implementations, especially in production code.</li>\n    </ul>\n\n    <h3>PMD</h3>\n    <ul>\n      <li>No issues detected in the updated code, but ensure that the method is utilized properly within a class context.</li>\n    </ul>\n  </body>\n</>\n",
            "components": null
        }
    ]
  };
  
      
      const handleInitConversation = (e) => {
        onInitConversation();
      };
  const handleSend = (e) => {
    onClicLockSendButton(true, e);
    
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      onSendMessage('Processing your information...', 'Code Assistant');
      
      setKey('');
      const rta = axios
          .post(url, {code: newMessage, key: key }, {
            "headers": {"Authorization": "Bearer " + token}
          })
          .then(response => {
            //console.log(response)
            //res.send(response) // <= send data to the client
            //console.log( response);
            //setNewMessage('');
            
            return onSendMessageComponent(response.data.components, e);
          })
          .catch(err => {
            //res.send({ err }) // <= send error
            console.log(err);
            //setNewMessage('');
            onSendMessage('Ops... try again', 'Code Assistant');
            return onSendMessageComponent([], e);
          })
    } else {
      onClicLockSendButton(false, e);
    }
    //onSendMessageComponent(data.components, e);
  };

  return (
    <div style={{ padding: '20px', flexGrow: 1 }}>
    
      <h2>{conversation.name}</h2>
      <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid black', marginBottom: '10px' }}>
        {conversation.messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender != " "? message.sender + ":": ""} </strong>
            
             <div dangerouslySetInnerHTML={{ __html: message.text }} />
          </div>
        ))}
      </div>
      <div>

      <FormHtmlEditor
        message={newMessage}
        setMessage={setNewMessage}
       
      />
      </div>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ width: '80%', padding: '10px' }}
        placeholder="Passcode token"
      />
      <button onClick={(e) => handleSend(e)} style={{width: '5%', padding: '5px 5px', marginLeft: '10px' }}>
        Send 
      </button>
        
      <button onClick={(e) => handleInitConversation(e)} style={{ width: '5%', padding: '5px 5px', marginLeft: '10px' }}>
        Clean 
      </button>
      
    </div>
  );
};

export default Chat;
