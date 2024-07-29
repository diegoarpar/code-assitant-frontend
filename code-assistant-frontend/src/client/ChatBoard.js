// App.js
import React, { useState } from 'react';
import Chat from './Chat';
import ConversationList from './ConversationList';

const ChatBoard = () => {
  const [conversations, setConversations] = useState([
    { id: 1, name: 'Conversation 1', messages: [] },
    { id: 2, name: 'Conversation 2', messages: [] }
  ]);
  const [currentConversationId, setCurrentConversationId] = useState(1);

  const handleSendMessage = (message) => {
    setConversations(prevConversations =>
      prevConversations.map(conversation =>
        conversation.id === currentConversationId
          ? { ...conversation, messages: [...conversation.messages, { text: message, sender: 'You' }] }
          : conversation
      )
    );
  };

  const currentConversation = conversations.find(conversation => conversation.id === currentConversationId);

  return (
    <div style={{ display: 'flex' }}>
      <ConversationList
        conversations={conversations}
        onSelectConversation={setCurrentConversationId}
      />
      {currentConversation && (
        <Chat
          conversation={currentConversation}
          onSendMessage={handleSendMessage}
        />
      )}
    </div>
  );
};

export default ChatBoard;
