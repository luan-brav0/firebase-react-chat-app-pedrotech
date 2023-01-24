import React, { FC, useState, useRef } from 'react';
import './App.css';
import './main.css';
import Auth  from './components/Auth'
import SelectRoom  from './components/SelectRoom'
import ChatRoom  from './components/ChatRoom'
import Cookies from 'universal-cookie';

const App: FC = () => {
  const cookies = new Cookies();
  
  const [room, setRoom] = useState<string>("");
  
  const [isAuth, setIsAuth] = useState<string>(cookies.get("auth-token"));
  const roomInputRef = useRef<null | HTMLInputElement>(null);

  if(!isAuth){
    return (
      <div id='Auth App' className="App">
        <Auth isAuth={isAuth} setIsAuth={setIsAuth} />
      </div>
    );
   };

   return (
    <div id='App Chat Room' className='App'>
      { room ? 
      <ChatRoom room={ room } /> :
      <SelectRoom roomInputRef={roomInputRef} room={room} setRoom={setRoom} /> 
      }
      
    </div>
   );
};

export default App;

