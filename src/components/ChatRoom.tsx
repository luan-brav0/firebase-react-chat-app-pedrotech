import React, { FC, ReactNode, useEffect, useState } from 'react';
import { DocumentData, addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import UserProfile from 'firebase/auth'
import { auth, db } from '../firebase-config';
import Cookies from 'universal-cookie';

export interface Props {
    room: string;
};

const ChatRoom: FC<Props> = ({ room }) => {
    const [newMessage, setNewMessage] = useState<string>('')
    const [messages, setMessages] = useState<Array<DocumentData>>([])

    const msgRef = collection(db, "messages");

    // submits msgData to firestore doc on form submit and resets input box
    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        // returns nothing if no msg
        if (newMessage === "") return;

        const msgData = {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser?.displayName,
            room: room,
            picture: auth.currentUser?.photoURL
        };

        // sends message data to firestore's doc
        await addDoc(msgRef, msgData);
        console.log(msgData);

        // empties input area
        setNewMessage("");
        // e.target.reset();
    };

    // sets newMessage to text in input box
    function handleMsgOnChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setNewMessage(e.target.value);
        // console.log(`message set to ${e.target.value}`)
        // e.target.reset();
    };
    // queries messages from current room  
    useEffect(() => {
        const queryMessages = query(msgRef,
            where("room", "==", room),
            orderBy("createdAt")
            );
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages: Array<DocumentData> = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unsuscribe();
    }, []);

    return (
        <div id='chat-room' className='container flex flex-col mx-auto my-4 max-h-full border border-gray-400 rounded-3xl max-w-[1100px]'>
            {/* Room Title */}
            <h1 id='room-name' className='self-center text-[2rem] border-b bg-blue-600 text-[#eee] rounded-t-3xl w-full'>
                {room.toUpperCase()}
            </h1>
            {/* Messages Feed */}
            <div id='msg-feed' className="overflow-y-scroll h-full overflow-hidden">
                {/* render messages with image */}
                {messages.map((message: DocumentData): ReactNode => {
                    // changes current user's messages to the left 
                    let cookies = new Cookies()

                    return (
                        <div id='message'
                            key={message.id}
                            className={`message pb-2 flex h-fit ${message.user === cookies.get('current-user') ? "flex-row-reverse " : "flex-row"} `}>
                            <img src={message.picture}
                                alt={message.user}
                                className='rounded-full w-12 max-h-full mx-2 self-center' />
                                
                            <div id="msg-cont" className={`border rounded-3xl w-fit px-3 py-1 max-w-[60%] ${message.user === cookies.get('current-user') ? "bg-blue-700  " : "bg-[#666]"} text-[#eee] self-center`}>
                                <p id='msg-text'
                                    className="w-full h-auto break-words text-start">
                                    {message.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* Send Message Form */}
            <form id='msg-form'
                onSubmit={handleSubmit}
                className='flex flex-row max-w-[80vw] w-full pb-5 pt-0 self-center'>
                <div id='msg-input-cont'
                    className="basis-3/4 p-2 mx-auto content-center justify-between border-[2px] rounded-full border-gray-500 hover:border-blue-700 focus:border-blue-700">
                    <input id='msg-input'
                        type="text"
                        placeholder='Write a new message...'
                        onChange={handleMsgOnChange}
                        value={newMessage}
                        className='w-full outline-0 rounded-full bg-transparent px-[1rem] placeholder:text-center ' />
                </div>
                <button id='send-msg-btn'
                    className='h-full text-bold self-center basis-1/4 p-2 ml-2 rounded-full bg-blue-400 text-[#eee] hover:text-white hover:bg-blue-500'>
                    Send
                </button>
            </form>
        </div>
    );
};
export default ChatRoom;
