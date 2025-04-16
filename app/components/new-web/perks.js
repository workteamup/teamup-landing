/**
 * Perks Component
 * Displays 3 key perks/benefits with icons and text in a responsive grid
 *
 * @param {Object} props
 * @param {Array<{icon: string, title: string, description: string}>} props.perks - Array of perk objects
 * @param {string} props.language - The language code ("en" or "es")
 */
export default function Perks({ perks, language = "en" }) {
  return (
    <div className="w-full bg-brand-dark py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Icon container with consistent size */}
              <div className="w-20 h-20 mb-6">
                <img
                  src={perk.icon}
                  alt=""
                  className="w-full h-full object-contain"
                  aria-hidden="true"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white font-poppins">
                {perk.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
