// ConversationList.js
import React from 'react';

const ConversationList = ({ conversations, onSelectConversation }) => {
  return (
    <div style={{ width: '200px', borderRight: '1px solid black' }}>
      {conversations.map(conversation => (
        <div
          key={conversation.id}
          onClick={() => onSelectConversation(conversation.id)}
          style={{ padding: '10px', cursor: 'pointer', borderBottom: '1px solid gray' }}
        >
          {conversation.name}
        </div>
      ))}
    </div>
  );
};

export default ConversationList;
