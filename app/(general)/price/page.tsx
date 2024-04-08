import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Price',
 description: 'Price',
 keywords:['price','description','carro']
 
};


export default function PricePage(){
    return(
        <>
         <section className="py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Planes y Precios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl text-blue-600 font-semibold mb-4">Plan Básico</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$9.99/mes</p>
              <ul className="list-disc pl-6 text-black">
                <li>Funcionalidad 1</li>
                <li>Funcionalidad 2</li>
                <li>Funcionalidad 3</li>
                <li>Funcionalidad 4</li>
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-6">Seleccionar</button>
            </div>
            {/* Plan Estándar */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl text-blue-600 font-semibold mb-4">Plan Estándar</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$19.99/mes</p>
              <ul className="list-disc pl-6 text-black">
                <li>Funcionalidad 1</li>
                <li>Funcionalidad 2</li>
                <li>Funcionalidad 3</li>
                <li>Funcionalidad 4</li>
               
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-6">Seleccionar</button>
            </div>
            {/* Plan Premium */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl text-blue-600 font-semibold mb-4">Plan Premium</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">$29.99/mes</p>
              <ul className="list-disc pl-6 text-black">
                <li>Funcionalidad 1</li>
                <li>Funcionalidad 2</li>
                <li>Funcionalidad 3</li>
                <li>Funcionalidad 4</li>
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-6">Seleccionar</button>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}