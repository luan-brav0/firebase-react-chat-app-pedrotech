import React, { FC } from 'react';
import logo from '../img/chat-app-logo.svg'
import exitIcon from '../img/exit-icon.svg'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import Cookies from 'universal-cookie';

interface Props {
    isAuth: string | boolean | undefined;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean | string | undefined>>;
    setRoom: React.Dispatch<React.SetStateAction<string | null>>
};

const NavBar: FC<Props> = ({ isAuth, setIsAuth, setRoom }) => {
    async function userSignOut() {
        await signOut(auth);
        const cookies = new Cookies();
        cookies.remove("auth-token")
        cookies.remove("current-user")
        setIsAuth(false)
        setRoom(null)
    }
    return (
        <div id='navbar' className='flex flex-row justify-center border-b-2 border-solid'>
            <button id='log-out-btn' onClick={userSignOut}>
                <img src={exitIcon} alt="logo" className={`relative h-[4rem] color-red-700 top-[6px] ${!isAuth ? "hidden" : ""}`} />
            </button>
            <img src={logo} alt="logo" className='relative h-[4rem] color-red-700 top-[6px]' />
        </div>
    );
};
export default NavBar;