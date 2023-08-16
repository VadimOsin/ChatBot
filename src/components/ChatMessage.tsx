import React from 'react';
import './Message.scss'
import BotAvatarChat from "./BotAvatarChat.tsx";
import UserAvatarChat from "./UserAvatarChat.tsx";

type ChatMessageProps = {
    text: string;
    isBot: boolean;
};

const ChatMessage: React.FC<ChatMessageProps> = ({text, isBot}) => {
    return (
        <div className={`chat-message ${isBot ? 'bot' : 'user'}-message`}>
            {isBot ? <BotAvatarChat/> : <UserAvatarChat/>}
            <p className={`${isBot ? 'bot' : 'user'}-text`}>{text}</p>
        </div>
    );
};

export default ChatMessage;