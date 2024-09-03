// Chat.js
import React, { useState } from 'react';
import axios from 'axios';

const Chat = ({ conversation, onSendMessage, onSendMessageComponent, onInitConversation }) => {
  const [newMessage, setNewMessage] = useState('');
  const [key, setKey] = useState('');
  const url = "http://test.miarchivo.com.co:3002/api/recipes"
        const token = "IUzI1NiIsInR5c"
  
  const data = {
          "status": null,
          "id": null,
          "content": null,
          "components": [
              {
                  "id": "OPENAI",
                  "content": "It looks like the code you provided is missing some elements to be a complete and functional Java method...",
                  "components": [
                      {
                          "id": "TEXT",
                          "content": "It looks like the code you provided is missing some elements to be a complete and functional Java method...",
                          "components": null
                      },
                      {
                          "id": "TEXT",
                          "content": "Naming Conventions:",
                          "components": null
                      },
                      // Más componentes aquí...
                  ]
              },
              {
                  "id": "COPILOT",
                  "content": "The provided snippet does not appear to be a complete Java code...",
                  "components": [
                      {
                          "id": "TEXT",
                          "content": "The provided snippet does not appear to be a complete Java code...",
                          "components": null
                      },
                      // Más componentes aquí...
                  ]
              },
              {
                  "id": "GEMINIS",
                  "content": "The provided code is valid Java code.",
                  "components": [
                      {
                          "id": "TEXT",
                          "content": "The provided code is valid Java code.",
                          "components": null
                      }
                  ]
              },
              {
                  "id": "SUMMARY",
                  "content": "It appears that the input information is missing or not provided...",
                  "components": [
                      {
                          "id": "TEXT",
                          "content": "It appears that the input information is missing or not provided...",
                          "components": null
                      }
                  ]
              }
          ]
      };
  
      
      const handleInitConversation = (e) => {
        onInitConversation();
      };
  const handleSend = (e) => {
    //onSendMessageComponent(data.components);
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
      setKey('');
      const rta = axios
          .post(url, {code: newMessage, key: key }, {
            "headers": {"Authorization": "Bearer " + token}
          })
          .then(response => {
            //console.log(response)
            //res.send(response) // <= send data to the client
            console.log( response);
            
            return onSendMessageComponent(response.data.components);
          })
          .catch(err => {
            //console.log(err)
            //res.send({ err }) // <= send error
            return err;
          })
    }
  };

  return (
    <div style={{ padding: '20px', flexGrow: 1 }}>
      <h2>{conversation.name}</h2>
      <div style={{ height: '400px', overflowY: 'scroll', border: '1px solid black', marginBottom: '10px' }}>
        {conversation.messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender != " "? message.sender + ":": ""} </strong>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <textarea
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        style={{ width: '80%', padding: '10px' }}
      />
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={(e) => handleSend(e)} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Send 
      </button>
        
      <button onClick={(e) => handleInitConversation(e)} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Clean 
      </button>
      
    </div>
  );
};

export default Chat;
