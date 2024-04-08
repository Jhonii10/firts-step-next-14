import React from 'react';


const Navbar = () => {

    return (
         <nav className='flex bg-blue-400 bg-opacity-30 p-2 m-3 rounded'>
            <span className='flex gap-2'>
                Home
            </span>

            <div className='flex flex-1'/>

            <div className='flex gap-2'>
                <a href='/about'>About</a>
                <a href='/price'>Price</a>
                <a href='/contact'>Contact</a>
            </div>
         </nav>
    );
}

export default Navbar;
