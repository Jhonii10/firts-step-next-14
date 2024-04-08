import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Price',
 description: 'Price',
 keywords:['price','description','carro']
 
};


export default function PricePage(){
    return(
        <>
         <span className="text-jg" >Price Page</span>
        </>
    )
}