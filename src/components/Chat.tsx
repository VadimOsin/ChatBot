import React, {useState} from 'react';
import ChatContainer from './ChatContainer';
import './Chat.scss'
import InputMessage from "./InputMessage.tsx";
import axios from "axios";

type Message = {
    text: string;
    isBot: boolean;
};
const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([{
        text: "Hello! I’m BotHub, AI-based bot designed to answer all your questions.",
        isBot: true
    }]);

    const sendMessage = async (message: string) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: message, isBot: false },
        ]);
        try {
            const response = await axios.post(
                'http://185.46.8.130/api/v1/chat/send-message',
                { message }
            );
            const chunks = response.data as string;
            const chunkRegex = /{"status":"\w+","value":"[^"]+"}/g;
            const parsedChunks = chunks.match(chunkRegex);
            let text = '';
            if (parsedChunks !== null) {
                for (const chunkString of parsedChunks) {
                    const chunkData = JSON.parse(chunkString);
                    const status = chunkData.status.toString();
                    const value = chunkData.value ? chunkData.value.toString() : '';

                    if (status === 'content') {
                        text += value;
                    } else if (status === 'done') {
                        break;
                    }
                }
            } else {
                console.error('No matched chunks found');
            }
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: text, isBot: true },
            ]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1>Bot Chat</h1>
            <h2>AI-based service</h2>
            <div className="chat">
                <ChatContainer messages={messages}/>
            </div>
            <InputMessage sendMessage={sendMessage}/>
        </div>
    );
};

export default Chat;