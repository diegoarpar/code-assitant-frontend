// Chat.js
import React, { useState } from 'react';
import axios from 'axios';

const Chat = ({ conversation, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const url = "http://localhost:3002/api/recipes"
        const token = "IUzI1NiIsInR5c"
  
  

  const handleSend = (e) => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
      const rta = axios
          .post(url, {code: newMessage }, {
            "headers": {"Authorization": "Bearer " + token}
          })
          .then(response => {
            //console.log(response)
            //res.send(response) // <= send data to the client
            console.log("response " + response.data.status);
            return onSendMessage(response.data.status);
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
            <strong>{message.sender}: </strong>
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
      <button onClick={(e) => handleSend(e)} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Send 3
      </button>
    </div>
  );
};

export default Chat;
