import React, {FC, useRef} from 'react';
import '../main.css';


interface Props {
  room: string;
  setRoom: React.Dispatch<React.SetStateAction<string>>;
  roomInputRef: React.MutableRefObject<HTMLInputElement | null>;
}

const SelectRoom: FC<Props> = ({ roomInputRef, setRoom, room }) => {
  return (
    <div className='flex flex-col '>
      <input className='border-[3px] border-blue-300 self-center rounded-full py-[0.2rem] my-2 max-w-[20rem] text-center hover:border-blue-400' 
      placeholder='Enter Room Name'
      ref={roomInputRef} />
      <button className='rounded-full text-center self-center w-fit my-2 px-6 py-[0.2rem] bg-blue-400 text-[#eee] hover:text-white hover:bg-blue-500'
      onClick={() => {
        if (roomInputRef.current != null){
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