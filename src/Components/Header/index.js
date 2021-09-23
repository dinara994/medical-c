import React from 'react';
import person from '../img/din.jpg'

const Header = () => {

    return (
            <header className="header">
             <img src={person} alt='avatar' className='avatar'/>
            </header>
    );
};


export default Header;