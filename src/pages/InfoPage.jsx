import React from 'react';

const InfoPage = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      {/* Quiénes Somos Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              Quiénes somooooos
            </h1>
            <p className="mt-2 text-xl text-gray-700 leading-8 text-justify">
              En Centro de Habilidades Integrales Otero trabajamos con el compromiso de ofrecer una educación de calidad que fomente el desarrollo de habilidades cognitivas, emocionales y sociales en los niños. Nuestro equipo está compuesto por psicopedagogos, terapeutas del habla y educadores especializados, quienes implementan estrategias de enseñanza adaptadas a las necesidades individuales de cada niño.
            </p>
          </div>
        
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/ubicacion.jpg" 
              alt="Descripción de la imagen"
              className="w-full h-auto max-w-md rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Nuestra Misión Section (1) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              Misión
            </h1>
            <p className="mt-2 text-xl text-gray-700 leading-8 text-justify">
            En el Centro de Habilidades Integrales Otero, nuestra misión es crear un entorno educativo inclusivo, donde cada niño pueda crecer y desarrollar sus habilidades cognitivas, emocionales y sociales. A través de evaluaciones psicopedagógicas constantes y estrategias innovadoras, nos comprometemos a ofrecer un acompañamiento personalizado que fomente la autonomía, creatividad y desarrollo integral de cada niño.
            </p>
            
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/pic5.jpg" // Ruta de la imagen
              alt="Descripción de la imagen"
              className="w-full h-auto max-w-md rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
       {/* Nuestra Misión Section (1) */}
       <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              Visión
            </h1>
            <p className="mt-2 text-xl text-gray-700 leading-8 text-justify">
            Aspiramos a ser un centro de referencia en la educación y apoyo psicopedagógico en la región, caracterizado por un enfoque en la atención inclusiva y adaptativa a las necesidades individuales de cada niño. Nuestro objetivo es contribuir a una sociedad donde todos los niños, sin importar sus desafíos, encuentren oportunidades para alcanzar su máximo potencial en un ambiente de respeto y crecimiento.
            </p>
            
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/pic7.png" // Ruta de la imagen
              alt="Descripción de la imagen"
              className="w-full h-auto max-w-md rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Nuestra Misión Section (2) - Duplicado */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              Especialista en Educación
            </h1>
            <p className="mt-2 text-xl text-gray-700 leading-8 text-justify">
              Rocio T. Otero
            </p>
            <ul className="mt-4 text-xl text-gray-700 leading-8 list-disc pl-6">
              <li>Licenciatura en Ciencias de la Educación, mención Psicorehabilitación y Educación Especial</li>
              <li>Maestría en Dirección en la Gestión Pública</li>
              <li>Maestría en Educación Especial</li>
              <li>Maestría en Inclusión Educativa y Atención a la Diversidad</li>
              <li>Doctorado en Educación</li>
            </ul>
             <p className="mt-4 text-xl text-gray-700 leading-8 text-justify">
              Si te gustaría obtener más información sobre nuestros servicios o agendar una cita para evaluar a tu hijo, no dudes en ponerte en contacto con nosotros.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
      <img
        src="/chioperfil2.jpg" // Ruta de la imagen
        alt="Descripción de la imagen"
        className="w-full h-auto max-w-md rounded-lg object-cover shadow-xl"
      />
    </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
