import React, { FC, useRef } from 'react';
import '../main.css';


interface Props {
  room: string | null;
  setRoom: React.Dispatch<React.SetStateAction<string | null>>;
  roomInputRef: React.MutableRefObject<HTMLInputElement | null>;
}

const SelectRoom: FC<Props> = ({ roomInputRef, setRoom, room }) => {
  return (
    <div id='select-room' className='relative mx-auto  h-auto'>
      <div id='select-input-container' className='border-[3px] border-blue-300 rounded-full py-[0.2rem] mx-auto my-4 max-w-[20rem] hover:border-blue-400'>
        <input className='outline-0 text-center px-[1rem] w-full bg-transparent focus:border-none'
          placeholder='Enter Room Name'
          ref={roomInputRef} />
      </div>
      <button id='select' className='rounded-full text-center w-fit my-4 px-6 py-[0.2rem] bg-blue-400 text-[#eee] hover:text-white hover:bg-blue-500'
        onClick={() => {
          if (roomInputRef.current != null) {
            setRoom(roomInputRef.current.value)
            console.log(room)
          }
        }} >
        Enter Chat
      </button>
    </div>
  );
};
export default SelectRoom;