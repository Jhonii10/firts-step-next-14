"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
    path: string;
    text: string;
}



export const ActiveLink = ({path , text}:Props) => {

    const pathname = usePathname();
    
    return (   
        <Link
            className={`${' hover:text-blue-500 mr-2 transition-all'} ${pathname === path && 'text-blue-600'}`} 
            href={path}
            >
            {text}
        </Link>
    );
}
