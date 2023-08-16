import React, {useState} from 'react';
// import axios from 'axios';
import ChatContainer from './ChatContainer';
import './Chat.scss'
import InputMessage from "./InputMessage.tsx";

type Message = {
    text: string;
    isBot: boolean;
};

const Chat: React.FC = () => {
    const [messages] = useState<Message[]>([{
        text: "efwsfsf",
        isBot: true
    }, {
        text: "fdsfsfs",
        isBot: false
    }]);

    // const sendMessage = async (message: string) => {
    //     try {
    //         const response = await axios.post('http://185.46.8.130/api/v1/chat/send-message', { message });
    //
    //         const chunks = response.data as Uint8Array[];
    //         let text = '';
    //
    //         for (const chunk of chunks) {
    //             const chunkData = JSON.parse(new TextDecoder().decode(chunk));
    //             if (chunkData.status === 'content') {
    //                 text += chunkData.value;
    //                 setMessages([...messages, { avatar: 'mock-avatar.png', text, isBot: true }]); // Пример сообщения от бота
    //                 // setMessages([...messages, { avatar: 'user-avatar.png', text, isBot: false }]); // Пример сообщения от пользователя
    //             }
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <div className="container">
            <h1>Bot Chat</h1>
            <h2>AI-based service</h2>
            <div className="chat">
                <ChatContainer messages={messages}/>
            </div>
            <InputMessage/>
        </div>
    );
};

export default Chat;