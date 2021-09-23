import React from 'react';
import Aside from "../../Components/Aside";
import Header from '../../Components/Header'

const Layout = ({children}) => {
    //с помощью props передаем содержимое других компонентов
    return (
               <main className='main d-flex'>
                   <Aside />
                   <div className='right-side'>
                       <Header />
                       <div className='contain'>
                           {children}
                       </div>
                   </div>
               </main>
    );
};

export default Layout;