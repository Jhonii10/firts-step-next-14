import type { Metadata } from "next";

export const metadata:Metadata = {
    title: 'About',
    description: 'About Title',
    keywords:['about', 'title', 'description'],
};

export default function AboutPage(){
    return(

            <>
            <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8">Acerca de Nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Nuestra Misión</h3>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie felis eget magna molestie fermentum. Nullam non lacus eu mi bibendum efficitur.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Nuestro Equipo</h3>
              <ul className="list-disc pl-6">
                <li>John Doe - CEO</li>
                <li>Jane Smith - CTO</li>
                <li>Mark Johnson - Diseñador UX/UI</li>
                <li>Sara Williams - Desarrollador Frontend</li>
                <li>David Brown - Desarrollador Backend</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
            </>
    )
}


