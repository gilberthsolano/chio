import React from 'react';

export const Servicios = () => {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        {/* Título de la página */}
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Nuestros Servicios
        </p>
        <p className="mt-2 text-xl text-gray-700 leading-8 text-justify">
          En el Centro de Habilidades Integrales Otero, entendemos la importancia de brindar un entorno seguro y estimulante para el desarrollo integral de los niños. 
          Ofrecemos una variedad de servicios diseñados para apoyar su crecimiento en cada etapa:
        </p>

        {/* Sección de servicios */}
        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
          {[ 
            { 
              title: 'Guardería', 
              description: 'Un espacio cálido y seguro donde los niños pueden socializar y desarrollar sus habilidades tempranas, bajo la supervisión de profesionales capacitados en educación infantil.',
              image: '/guar.jpeg'
            },
            { 
              title: 'Estimulación Temprana', 
              description: 'Programas diseñados para potenciar el desarrollo cognitivo, sensorial y motor desde los primeros años, asegurando una base sólida para el aprendizaje y el crecimiento.',
              image: '/esti.jpeg'
            },
            { 
              title: 'Refuerzo Escolar', 
              description: 'Apoyo académico individualizado para mejorar el rendimiento escolar y fortalecer las áreas de aprendizaje en las que los niños necesitan una atención especial.',
              image: '/refuerzo.jpeg'
            },
            { 
              title: 'Evaluación Psicopedagógica', 
              description: 'Evaluaciones completas realizadas por especialistas para identificar las necesidades específicas de cada niño y diseñar un plan educativo adaptado a sus capacidades y metas.',
              image: '/eva.jpeg'
            }
          ].map((servicio, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              {/* Imagen del servicio */}
              <div className="relative aspect-w-16 aspect-h-9">
                <img 
                  className="object-cover object-center w-full h-full rounded-md" 
                  src={servicio.image} 
                  alt={servicio.title} 
                />
              </div>
              <div className="p-6">
                <p className="text-xl font-semibold text-gray-950">{servicio.title}</p>
                <p className="mt-2 text-sm text-gray-600">{servicio.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicios;
