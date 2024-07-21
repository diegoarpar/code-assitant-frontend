// Chat.js
import React, { useState } from 'react';

const Chat = ({ conversation, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
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
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={handleSend} style={{ padding: '10px 20px', marginLeft: '10px' }}>
        Send
      </button>
    </div>
  );
};

export default Chat;
