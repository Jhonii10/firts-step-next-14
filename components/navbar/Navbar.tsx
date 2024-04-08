import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import React from 'react';
import { ActiveLink } from '../active-link/ActiveLink';

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
                        <ActiveLink path={item.path} text={item.text} key={index}/>
                    ))
                }
            </div>
         </nav>
    );  
}

export default Navbar;
