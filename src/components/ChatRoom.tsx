import React, { FC } from 'react';

export interface Props {
    room: string;
};

const ChatRoom: FC<Props> = ({ room }) => {
    return (
        <div id='chat-room' className='container flex flex-col mx-auto'>
            <h1 className='self-center text-[2rem]'>
                {room}
                room
            </h1>
            <form id='msg-form' className='flex flex-row max-w-[80vw] w-full self-center'>
                <div id='msg-input-cont' className="basis-3/4 p-2 mx-auto content-center justify-between border-[2px] rounded-full border-gray-500 hover:border-blue-700 focus:border-blue-700">
                    <input type="text"
                        placeholder='Write a new message...'
                        className='w-full outline-0 rounded-full bg-transparent px-[1rem] placeholder:text-center ' />
                </div>
                <button id='send-msg-btn' className='h-full text-bold self-center basis-1/4 p-2 ml-2 rounded-full bg-blue-400 text-[#eee] hover:text-white hover:bg-blue-500'>Send</button>
            </form>
        </div>
    );
};
export default ChatRoom;
