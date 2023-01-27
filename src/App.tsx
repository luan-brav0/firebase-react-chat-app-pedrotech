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
    <div id='app' className="App flex flex-col space-between h-[100vh]">
      <div id="navbar">
        <NavBar />
      </div>
      <div id="hero" className='flex flex-col h-full space-around'>
        {/* check if user is authenticated */}
        {!isAuth ?
          <div id='auth'>
             <Auth isAuth={isAuth} setIsAuth={setIsAuth} />
          </div>
          :
          <div id='hero-cont' className='my-auto'>
            {/* check if in a room, if so display such room */}
            {true ?
              <ChatRoom room={room} />
              :
              <SelectRoom roomInputRef={roomInputRef} room={room} setRoom={setRoom} />
            }
          </div>
        }
      </div>
    </div>
  );
};
export default App;