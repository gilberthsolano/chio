import React from 'react';

const HomePage = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          {/* SVG Content */}
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                CENTRO DE HABILIDADES INTEGRALES OTERO
              </h1>
              <div className="mt-4 space-y-8 text-xl leading-8 text-gray-700 text-justify">
                <p>
                  En el Centro de Habilidades Integrales Otero, nos dedicamos a brindar un acompañamiento integral para el desarrollo educativo de los niños. 
                  Sabemos que cada niño tiene sus propios ritmos y necesidades de aprendizaje. Por eso, 
                  contamos con programas de apoyo especializado para aquellos que enfrentan dificultades en el lenguaje, aprendizaje o socialización.
                </p>
                <p>
                  Ofrecemos atención personalizada con evaluaciones psicopedagógicas, guardería, y 
                  estrategias de aprendizaje adaptadas para potenciar las habilidades de cada estudiante. Nuestra misión es apoyar y fortalecer el 
                  desarrollo integral de cada niño, ayudándolos a alcanzar sus metas académicas y personales en un entorno seguro y estimulante.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Descripción de la imagen"
            src="\dist\chio.jpg"  // Ruta de la imagen en la carpeta public
            className="w-full h-auto max-w-none rounded-xl object-cover bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
