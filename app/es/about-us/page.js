"use client";

import WebLayout from "../../components/new-web/layout";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  const founders = [
    {
      name: "Ignacio Ramos Howell",
      title: "CEO",
      description:
        "Ignacio aporta más de 15 años de experiencia en gestión de equipos y herramientas de colaboración remota. Su visión para Team Up! surgió al liderar equipos distribuidos en varios continentes y experimentar de primera mano los desafíos de la colaboración remota.",
      image: "/team/ignacio-ramos.jpg",
      linkedin: "https://linkedin.com/in/ignacio-ramos-howell",
    },
    {
      name: "Juan Luis García López",
      title: "CTO",
      description:
        "Juan Luis es un innovador tecnológico con profunda experiencia en entornos virtuales y sistemas de colaboración en tiempo real. Su liderazgo técnico ha sido fundamental para crear la experiencia inmersiva e intuitiva que define a Team Up!",
      image: "/team/juan-luis-garcia.jpg",
      linkedin: "https://linkedin.com/in/juan-luis-garcia-lopez",
    },
  ];

  return (
    <WebLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Sobre Nosotros
        </h1>

        {/* Company image */}
        <div className="relative h-96 max-w-5xl mx-auto mb-16 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/about/team-photo.jpg"
            alt="Equipo de Team Up!"
            fill
            className="object-cover"
          />
        </div>

        {/* Company story */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Team Up! nació de una simple observación: las reuniones de equipos
              remotos no tienen por qué ser experiencias aburridas y
              desconectadas. En 2021, cuando el trabajo remoto se convirtió en
              la nueva normalidad, notamos que si bien abundaban las
              herramientas para videollamadas y chat, no había nada que
              replicara realmente la naturaleza espacial y colaborativa de las
              reuniones presenciales.
            </p>
            <p>
              Nos propusimos crear espacios virtuales que no solo facilitaran
              reuniones productivas, sino que también fomentaran la conexión
              humana que a menudo falta en el trabajo remoto. Nuestro objetivo
              no era simplemente construir otra herramienta de videoconferencia,
              sino crear entornos virtuales donde los equipos pudieran
              colaborar, socializar y divertirse, tal como lo harían en espacios
              físicos.
            </p>
            <p>
              Hoy, Team Up! es utilizado por equipos en más de 30 países,
              ayudándoles a conectar, colaborar y construir relaciones más
              sólidas independientemente de la distancia física. Continuamos
              innovando con nuevos espacios y características, siempre guiados
              por nuestra misión de hacer el trabajo remoto más humano.
            </p>
          </div>
        </div>

        {/* Founders section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nuestros Fundadores
          </h2>

          <div className="space-y-16">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="w-64 h-64 relative rounded-xl overflow-hidden shadow-md mx-auto md:mx-0">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {founder.title}
                  </p>
                  <p className="text-gray-700 mb-4">{founder.description}</p>

                  <div className="flex">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values section */}
        <div className="max-w-4xl mx-auto mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nuestros Valores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Conexión Humana Primero
              </h3>
              <p className="text-gray-700">
                Creemos que la tecnología debe mejorar la conexión humana, no
                reemplazarla. Cada característica que construimos tiene como
                objetivo acercar a las personas, incluso cuando están
                físicamente separadas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Innovación con Propósito
              </h3>
              <p className="text-gray-700">
                No innovamos por innovar. Creamos soluciones para problemas
                reales, siempre preguntándonos cómo nuestra tecnología puede
                hacer que el trabajo remoto sea más atractivo, eficiente y
                agradable.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">
                Accesibilidad e Inclusividad
              </h3>
              <p className="text-gray-700">
                Diseñamos nuestros espacios para que sean accesibles e
                inclusivos para todos los miembros del equipo,
                independientemente de su ubicación, experiencia técnica o
                antecedentes.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold mb-4">Mejora Continua</h3>
              <p className="text-gray-700">
                Nunca estamos satisfechos con el status quo. Recopilamos
                constantemente comentarios, iteramos en nuestro producto y nos
                esforzamos por crear experiencias cada vez mejores para nuestros
                usuarios.
              </p>
            </div>
          </div>
        </div>

        {/* Join us CTA */}
        <div className="max-w-3xl mx-auto mt-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Únete a Nuestra Misión</h2>
          <p className="text-lg text-gray-600 mb-8">
            Estamos en una misión para hacer que el trabajo remoto sea más
            conectado, colaborativo y divertido. Únete a miles de equipos que ya
            utilizan Team Up! para transformar sus reuniones virtuales.
          </p>
          <a
            href="https://app.teamup.works/signup"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors"
          >
            Prueba Gratis por 2 Meses
          </a>
        </div>
      </div>
    </WebLayout>
  );
}
