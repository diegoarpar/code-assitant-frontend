// App.js
import React, { useState } from 'react';
import Chat from './Chat';
import ConversationList from './ConversationList';

const ChatBoard = () => {
  
  const initConversation = [
    { id: 1, name: 'Conversation 1', messages: [] },
    { id: 2, name: 'Conversation 2', messages: [] }
  ];

  const [conversations, setConversations] = useState(initConversation);

  const [currentConversationId, setCurrentConversationId] = useState(1);
  
  const handleInitConversations = () => {
    setConversations(initConversation);
  };

  const handleSendMessage = (message, origin) => {
    setConversations(prevConversations =>
      prevConversations.map(conversation =>
        conversation.id === currentConversationId
          ? { ...conversation, messages: [...conversation.messages, { text: message, sender: origin || "You" }] }
          : conversation
      )
    );
  };
  
  const handleMessageComponent = (components) => {

        if (!components) return;

          components.forEach(component => {
            handleSendMessage(" ", " ");
            handleSendMessage(" ", component.id);
            component.components.forEach(subComponent => {
            
              handleSendMessage(subComponent.content, " ");
  
          });

        });
        
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
          onSendMessageComponent={handleMessageComponent}
          onInitConversation = {handleInitConversations}
        />
      )}
    </div>
  );
};

export default ChatBoard;
