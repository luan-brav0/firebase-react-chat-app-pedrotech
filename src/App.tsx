import React, { FC, useState, useRef } from 'react';
import './App.css';
import './main.css';
import Auth  from './components/Auth'
import SelectRoom  from './components/SelectRoom'
import Cookies from 'universal-cookie';

const App: FC = () => {
  const cookies = new Cookies();
  
  const [room, setRoom] = useState<string>("");
  
  const [isAuth, setIsAuth] = useState<string>(cookies.get("auth-token"));
  const roomInputRef = useRef<null | HTMLInputElement>(null);

  if(!isAuth){
    return (
      <div className="App">
        <Auth />
      </div>
    );
   };

   return (
    <div>
      {room ? 
      <div>chat</div> :
      <SelectRoom roomInputRef={roomInputRef} room={room} setRoom={setRoom} /> }
    </div>
   );
};

export default App;

