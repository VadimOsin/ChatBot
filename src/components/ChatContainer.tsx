import React from 'react';
import ChatMessage from './ChatMessage';

type Message = {
    text: string;
    isBot: boolean;
};

type ChatContainerProps = {
    messages: Message[];
};

const ChatContainer: React.FC<ChatContainerProps> = ({ messages }) => {
    return (
        <div className="chat-container">
            {messages.map((message, index) => (
                <ChatMessage
                    key={index}
                    text={message.text}
                    isBot={message.isBot}
                />
            ))}
        </div>
    );
};

export default ChatContainer;