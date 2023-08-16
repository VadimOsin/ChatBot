import React from 'react';

type ChatAvatarProps = {
    src: string;
};

const ChatAvatar: React.FC<ChatAvatarProps> = ({ src }) => {
    return <img src={src} alt="Avatar" />;
};

export default ChatAvatar;