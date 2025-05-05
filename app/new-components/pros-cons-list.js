import { X, Check } from "lucide-react";

/**
 * A component for displaying a list of pros or cons with icons
 * @param {Object} props
 * @param {string[]} props.items - Array of text items to display in the list
 * @param {string} props.type - Type of list: "pros" for checkmarks or "cons" for X icons
 * @param {string} [props.className] - Additional class names for the container
 * @param {string} [props.textClassName] - Additional class names for the text
 */
export default function ProsConsList({
  items,
  type,
  className = "",
  textClassName = "",
}) {
  const isProsList = type === "pros";

  return (
    <ul className={`space-y-2 lg:space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-4">
          <div
            className={`p-1 rounded-full ${
              isProsList ? "bg-green-100" : "bg-red-100"
            }`}
          >
            {isProsList ? (
              <Check className="w-3 lg:w-4 h-3 lg:h-4 text-green-500" />
            ) : (
              <X className="w-3 lg:w-4 h-3 lg:h-4 text-red-500" />
            )}
          </div>
          <span
            className={`text-dark-space text-base lg:text-xl ${textClassName}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
