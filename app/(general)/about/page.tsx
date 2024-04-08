import type { Metadata } from "next";

export const metadata:Metadata = {
    title: 'About',
    description: 'About Title',
    keywords:['about', 'title', 'description'],
};

export default function AboutPage(){
    return(

            <span className="text-jg"> About Page </span> 
    )
}


