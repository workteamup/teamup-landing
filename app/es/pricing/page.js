"use client";

import { useState } from "react";
import WebLayout from "../../components/new-web/layout";
import PageTitle from "../../components/new-web/page-title";
import PricingCard from "../../components/new-web/pricing-card";
import EventPricingCard from "../../components/new-web/event-pricing-card";
import CTASection from "../../components/new-web/cta-section";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

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

  const faqItems = [
    {
      question: "¿Puedo cambiar entre planes?",
      answer:
        "Sí, puedes actualizar o degradar tu plan en cualquier momento. Al actualizar, obtendrás acceso inmediato a las funciones premium. Al degradar, los cambios se aplicarán al final de tu ciclo de facturación actual.",
    },
    {
      question: "¿Hay un período mínimo de compromiso?",
      answer:
        "No, todos nuestros planes son mes a mes sin compromiso a largo plazo requerido. Para planes anuales, ofrecemos un descuento del 20%.",
    },
    {
      question: "¿Cómo funciona la prueba gratuita?",
      answer:
        "Nuestra prueba gratuita de 2 meses te da acceso completo a todas las funciones premium. No se requiere tarjeta de crédito para comenzar tu prueba, y recibirás un recordatorio antes de que finalice.",
    },
    {
      question:
        "¿Ofrecen precios especiales para organizaciones sin fines de lucro o instituciones educativas?",
      answer:
        "Sí, ofrecemos tarifas con descuento para organizaciones sin fines de lucro, instituciones educativas y startups. Contacta a nuestro equipo de ventas para más información.",
    },
  ];

  return (
    <WebLayout>
      <PageTitle
        title="Precios Simples y Transparentes"
        subtitle="Elige el plan adecuado para tu equipo"
        align="center"
        size="large"
        theme="dark"
        gradient={`
          radial-gradient(circle at 15% 15%, rgba(99, 93, 245, 0.6) 0%, transparent 45%),
          radial-gradient(circle at 85% 15%, rgba(63, 137, 246, 0.6) 0%, transparent 45%),
          radial-gradient(circle at 50% 70%, rgba(103, 218, 250, 0.5) 0%, transparent 55%),
          linear-gradient(165deg, #252E4B 0%, #1F2438 100%)
        `}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Main pricing options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <PricingCard
            title="Gratis"
            description="Perfecto para equipos pequeños y uso casual"
            price="€0"
            pricePeriod="/mes"
            features={freeTierFeatures}
            ctaText="Comenzar Ahora"
            ctaUrl="https://app.teamup.works/signup"
            ctaVariant="secondary"
          />

          {/* Premium Tier */}
          <PricingCard
            title="Premium"
            description="Para equipos que necesitan la experiencia completa"
            price="€7"
            pricePeriod="/mes"
            originalPrice="€10"
            priceSubtext="por usuario"
            features={premiumTierFeatures}
            ctaText="Prueba Gratis por 2 Meses"
            ctaUrl="https://app.teamup.works/signup?plan=premium"
            isPopular={true}
            popularLabel="MÁS POPULAR"
          />
        </div>

        {/* One-time event pricing */}
        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent font-poppins">
            ¿Quieres organizar un evento puntual? Te cubrimos.
          </h2>

          <EventPricingCard
            title="Evento Puntual"
            price="€2"
            pricePeriod="/día por persona"
            features={eventFeatures}
            ctaText="Contáctanos Para Planificación de Eventos"
            ctaUrl="mailto:events@teamup.works"
            ctaSize="lg"
          />
        </div>
      </div>

      {/* Custom Solution CTA - Moved outside container for full width */}
      <div className="w-full bg-gray-phantom">
        <CTASection
          title="¿Quieres una solución personalizada?"
          buttonText="Contactar con Ventas"
          buttonUrl="mailto:sales@teamup.works"
          theme="dark"
          align="center"
          background="gray-phantom"
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent font-poppins">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-smoke rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-cloud/30 transition-colors text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-semibold text-gray-phantom font-poppins">
                    {item.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-brand-purple flex-shrink-0" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-graphite flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div
                    className="px-6 py-4 bg-gray-cloud/10 border-t border-gray-smoke"
                    id={`faq-answer-${index}`}
                  >
                    <p className="text-gray-graphite">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </WebLayout>
  );
}
