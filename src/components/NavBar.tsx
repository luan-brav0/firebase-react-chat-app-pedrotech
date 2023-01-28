import React, { FC } from 'react';
import logo from '../img/chat-app-logo.svg'

interface Props {

};

const NavBar: FC<Props> = ({ }) => {
    return (
        <div id='navbar' className='flex flex-row justify-center border-b-2 border-solid'>
            <img src={logo} alt="logo" className='relative h-[4rem] color-red-700 top-[6px]' />
        </div>
    );
};
export default NavBar;