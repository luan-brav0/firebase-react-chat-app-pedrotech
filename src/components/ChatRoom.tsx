import React, {FC} from 'react';

export interface Props {
    room:string;
};

const ChatRoom: FC<Props> = ({ room }) => {
    return (
        <div id='chat-room' className='flex flex-col'>
            <h1 className='self-center text-[2rem]'>
                { room }
                <form className='message-form'>
                    <div className="flex flex-row p-2 mx-auto content-center justify-between border-[2px] rounded-full border-gray-500 hover:border-blue-700 focus:border-blue-700">
                        <input type="text"
                        placeholder='Write a new message...'
                        className='outline-0 rounded-full bg-transparent' />
                    </div>
                </form>
                
            </h1>
        </div>
    );
};
export default ChatRoom;
