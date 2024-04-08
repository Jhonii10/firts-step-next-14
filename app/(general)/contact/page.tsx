export default function ContactPage(){

    
    return(
        <>
         <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Contacto</h2>
          <form className="max-w-sm mx-auto min-w-80">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre</label>
              <input type="text" id="name" name="name"   required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
              <input type="email" id="email" name="email"  required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mensaje</label>
              <textarea id="message" name="message"   rows={4} required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">Enviar Mensaje</button>
          </form>
        </div>
      </section>
        </>
    )
}