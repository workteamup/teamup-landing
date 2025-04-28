import Image from "next/image";
import { Check } from "lucide-react";

export default function ChecklistElement({
  iconSrc,
  title,
  items,
  className = "",
  iconContainerClassName = "",
  titleClassName = "",
  listClassName = "",
  itemClassName = "",
  checkContainerClassName = "",
  checkIconClassName = "",
  iconAlt = "",
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Icon/Image Container */}
      <div className={`w-24 h-24 rounded-full ${iconContainerClassName}`}>
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title */}
      <h3
        className={`mt-9 text-2xl font-medium text-brand-700 ${titleClassName}`}
      >
        {title}
      </h3>

      {/* Checklist */}
      <ul className={`mt-6 space-y-4 ${listClassName}`}>
        {items.map((item, index) => (
          <li key={index} className={`flex items-start ${itemClassName}`}>
            {/* Checkmark Container */}
            <div
              className={`flex items-center justify-center w-6 h-6 rounded-full bg-green-100 mr-3 ${checkContainerClassName}`}
            >
              <Check
                className={`w-4 h-4 text-green-700 ${checkIconClassName}`}
              />
            </div>
            {/* Item Text */}
            <span className="text-sm text-dark-space">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
} 