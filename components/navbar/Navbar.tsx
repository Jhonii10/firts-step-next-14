import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import React from 'react';

const navItems = [
    { path:'/about', text:'About'},
    { path:'/price', text:'Price'},
    { path:'/contact', text:'Contact'},

]


const Navbar = () => {

    return (
         <nav className='flex items-center bg-blue-400 bg-opacity-30 p-2 m-3 rounded h-16'>
            
            <Link href='/'>
                <HomeIcon size={24} />
            </Link>

            <div className='flex flex-1'/>

            <div className='flex fle gap-3'>
                {
                    navItems.map((item, index)=>(
                        <Link href={item.path} key={index}>{item.text}</Link>
                    ))
                }
            </div>
         </nav>
    );  
}

export default Navbar;
