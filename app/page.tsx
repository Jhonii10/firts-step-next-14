import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex  flex-col items-center justify-between p-24">
        <section className="text-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold mb-4">¡Bienvenido a nuestra aplicación!</h2>
            <p className="text-lg">Descubre las características sorprendentes que tenemos para ofrecer.</p>
            <button className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white font-semibold py-2 px-6 rounded mt-8">¡Comienza ahora!</button>
          </div>
        </section>
        <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Característica 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac odio in leo sollicitudin cursus.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Característica 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac odio in leo sollicitudin cursus.</p>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Característica 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac odio in leo sollicitudin cursus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pie de Página */}
      
        
    </main>
    <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
