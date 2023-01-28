import React, { FC, useState, useRef } from 'react';
import './App.css';
import './main.css';
import Auth from './components/Auth'
import SelectRoom from './components/SelectRoom'
import ChatRoom from './components/ChatRoom'
import NavBar from './components/NavBar'
import Cookies from 'universal-cookie';

const App: FC = () => {
  const cookies = new Cookies();

  const [room, setRoom] = useState<string>("");

  const [isAuth, setIsAuth] = useState<string>(cookies.get("auth-token"));
  const roomInputRef = useRef<null | HTMLInputElement>(null);

  return (
    <div id='app' className="App flex flex-col space-between h-[100vh] w-[100vw]">
        <NavBar />
        {!isAuth ? (
          <Auth isAuth={isAuth} setIsAuth={setIsAuth} />
        ) : (
          <div id='hero' className='flex flex-col justify-center self-center h-full w-full '>
            {room ?
              <ChatRoom room={room} />
              :
              <SelectRoom roomInputRef={roomInputRef} room={room} setRoom={setRoom} />
            }
          </div>
        )
        }
    </div>
  );
};
export default App;