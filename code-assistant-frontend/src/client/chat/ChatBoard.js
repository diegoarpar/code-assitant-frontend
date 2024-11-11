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

  const onClicLockSendButton = (value, e) => {
       if (e != null && e.target != null) {
        e.target.disabled = value;
        e.target.innerText = value == true? "Processing": "Send";
      }
  };
  
  const handleMessageComponent = (components, e) => {
        onClicLockSendButton(false, e);
        if (!components) {
          handleSendMessage("Not information found", "Code Assistant");
          return;
        }

          components.forEach(component => {
            handleSendMessage("<div> <hr/> </div>", " ");
            handleSendMessage(component.content, component.id);
            //component.components.forEach(subComponent => {
            
              //handleSendMessage(subComponent.content, " ");
  
          //});

        });
        
  };

  const currentConversation = conversations.find(conversation => conversation.id === currentConversationId);

  return (
    <div>
      
      {currentConversation && (
        <Chat
          conversation={currentConversation}
          onSendMessage={handleSendMessage}
          onSendMessageComponent={handleMessageComponent}
          onInitConversation = {handleInitConversations}
          onClicLockSendButton = {onClicLockSendButton}
        />
      )}
      
    </div>
  );
};

export default ChatBoard;
