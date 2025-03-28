"use client";

import WebLayout from "../../components/new-web/layout";
import { CheckIcon } from "@heroicons/react/24/solid";

export default function PricingPage() {
  const freeTierFeatures = [
    "Hasta 5 miembros de equipo",
    "Espacios virtuales básicos",
    "Duración limitada de reuniones (60 minutos)",
    "Opciones de personalización estándar",
    "Soporte por email",
  ];

  const premiumTierFeatures = [
    "Miembros de equipo ilimitados",
    "Todos los espacios virtuales",
    "Duración ilimitada de reuniones",
    "Opciones de personalización avanzadas",
    "Soporte prioritario",
    "Grabaciones de reuniones y analíticas",
    "Opciones de marca personalizada",
    "Acceso a API para integraciones",
  ];

  const eventFeatures = [
    "Acceso completo a todos los espacios durante la duración del evento",
    "Marca personalizada para el evento",
    "Soporte y asistencia en la planificación del evento",
    "Comprobación técnica previa al evento",
    "Analíticas y resumen post-evento",
  ];

  return (
    <WebLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Precios
        </h1>

        {/* Main pricing options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col">
            <div className="bg-gray-50 px-6 py-8 border-b border-gray-200">
              <h2 className="text-2xl font-bold mb-2">Gratis</h2>
              <p className="text-gray-600 mb-6">
                Perfecto para equipos pequeños y uso casual
              </p>
              <p className="text-4xl font-bold">
                €0
                <span className="text-gray-500 text-xl font-normal">/mes</span>
              </p>
            </div>
            <div className="px-6 py-8 flex-grow">
              <ul className="space-y-4 mb-8">
                {freeTierFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="https://app.teamup.works/signup"
                  className="block w-full text-center py-3 px-4 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-md transition-colors"
                >
                  Comenzar Ahora
                </a>
              </div>
            </div>
          </div>

          {/* Premium Tier */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-blue-600 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-sm font-bold">
              MÁS POPULAR
            </div>
            <div className="bg-blue-50 px-6 py-8 border-b border-blue-200">
              <h2 className="text-2xl font-bold mb-2">Premium</h2>
              <p className="text-gray-600 mb-6">
                Para equipos que necesitan la experiencia completa
              </p>
              <div className="flex items-baseline">
                <p className="text-4xl font-bold">
                  €7
                  <span className="text-gray-500 text-xl font-normal">
                    /mes
                  </span>
                </p>
                <p className="ml-2 text-gray-500 line-through">€10</p>
              </div>
              <p className="text-sm text-gray-500 mt-1">por usuario</p>
            </div>
            <div className="px-6 py-8 flex-grow">
              <ul className="space-y-4 mb-8">
                {premiumTierFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="https://app.teamup.works/signup?plan=premium"
                  className="block w-full text-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Prueba Gratis por 2 Meses
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* One-time event pricing */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            ¿Quieres organizar un evento puntual? Te cubrimos.
          </h2>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="bg-gray-50 px-6 py-8 border-b border-gray-200 text-center">
              <h3 className="text-xl font-bold mb-2">Evento Puntual</h3>
              <p className="text-4xl font-bold">
                €2
                <span className="text-gray-500 text-xl font-normal">
                  /día por persona
                </span>
              </p>
            </div>
            <div className="px-6 py-8">
              <ul className="space-y-4 max-w-lg mx-auto">
                {eventFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <a
                  href="mailto:events@teamup.works"
                  className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  Contáctanos Para Planificación de Eventos
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Puedo cambiar entre planes?
              </h3>
              <p className="text-gray-600">
                Sí, puedes actualizar o degradar tu plan en cualquier momento.
                Al actualizar, obtendrás acceso inmediato a las funciones
                premium. Al degradar, los cambios se aplicarán al final de tu
                ciclo de facturación actual.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Hay un período mínimo de compromiso?
              </h3>
              <p className="text-gray-600">
                No, todos nuestros planes son mes a mes sin compromiso a largo
                plazo requerido. Para planes anuales, ofrecemos un descuento del
                20%.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Cómo funciona la prueba gratuita?
              </h3>
              <p className="text-gray-600">
                Nuestra prueba gratuita de 2 meses te da acceso completo a todas
                las funciones premium. No se requiere tarjeta de crédito para
                comenzar tu prueba, y recibirás un recordatorio antes de que
                finalice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                ¿Ofrecen precios especiales para organizaciones sin fines de
                lucro o instituciones educativas?
              </h3>
              <p className="text-gray-600">
                Sí, ofrecemos tarifas con descuento para organizaciones sin
                fines de lucro, instituciones educativas y startups. Contacta a
                nuestro equipo de ventas para más información.
              </p>
            </div>
          </div>
        </div>
      </div>
    </WebLayout>
  );
}
