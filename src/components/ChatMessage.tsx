import React from 'react';

type ChatMessageProps = {
    text: string;
    isBot: boolean;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ text, isBot }) => {
    return (
        <div className={`chat-message ${isBot ? 'bot' : 'user'}`}>
            <img src="#" alt="Avatar" />
            <p>{text}</p>
        </div>
    );
};

export default ChatMessage;