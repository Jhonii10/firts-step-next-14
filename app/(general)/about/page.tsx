import type { Metadata } from "next";

export const metadata:Metadata = {
    title: 'About',
    description: 'About Title',
    keywords:['about', 'title', 'description'],
};

export default function AboutPage(){
    return(
        <main className="flex flex-col items-center p-24">
            <span className="text-jg"> hola</span>
            <span className="text-jg"> AboutLayout</span> 
        </main>
    )
}


