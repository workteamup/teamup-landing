import {
  brandColors,
  brand1Shades,
  brand1Tints,
  brand2Shades,
  brand2Tints,
  brand3Shades,
  brand3Tints,
  greyColors,
  typography,
  semanticColors,
  spacing,
  borderRadius,
  shadows,
  zIndex,
} from "./design-tokens";

/**
 * Utility function to get color from design tokens.
 *
 * @param {string} colorName - The name of the color (e.g., 'brand1', 'graphite')
 * @param {string|number} variant - Optional variant like 'shade30' or 'tint50'
 * @returns {string} - The color hex code
 *
 * @example
 * // Returns the main teal brand color
 * getColor('brand1')
 *
 * @example
 * // Returns a darker shade of the teal color
 * getColor('brand1', 'shade50')
 *
 * @example
 * // Returns a lighter tint of the purple color
 * getColor('brand3', 'tint20')
 */
export function getColor(colorName, variant) {
  // Check if it's a main brand color
  if (colorName.startsWith("brand") && !variant) {
    return brandColors[colorName];
  }

  // Check if it's a grey color
  if (Object.keys(greyColors).includes(colorName) && !variant) {
    return greyColors[colorName];
  }

  // Handle variants for brand colors
  if (colorName === "brand1") {
    if (variant?.startsWith("shade")) {
      return brand1Shades[variant];
    }
    if (variant?.startsWith("tint")) {
      return brand1Tints[variant];
    }
    return brandColors.brand1;
  }

  if (colorName === "brand2") {
    if (variant?.startsWith("shade")) {
      return brand2Shades[variant];
    }
    if (variant?.startsWith("tint")) {
      return brand2Tints[variant];
    }
    return brandColors.brand2;
  }

  if (colorName === "brand3") {
    if (variant?.startsWith("shade")) {
      return brand3Shades[variant];
    }
    if (variant?.startsWith("tint")) {
      return brand3Tints[variant];
    }
    return brandColors.brand3;
  }

  // Semantic colors
  if (Object.keys(semanticColors).includes(colorName)) {
    return semanticColors[colorName];
  }

  // Default to white if color not found
  console.warn(
    `Color "${colorName}" ${
      variant ? `with variant "${variant}" ` : ""
    }not found in design tokens.`
  );
  return "#FFFFFF";
}

/**
 * Get a font size from the typography tokens
 *
 * @param {string} size - The font size key (e.g., 'xs', 'sm', 'base', etc.)
 * @returns {string} - The font size value
 */
export function getFontSize(size) {
  if (typography.fontSizes[size]) {
    return typography.fontSizes[size];
  }

  console.warn(`Font size "${size}" not found in design tokens.`);
  return typography.fontSizes.base;
}

/**
 * Get a font weight from the typography tokens
 *
 * @param {string} weight - The font weight key (e.g., 'regular', 'medium', 'bold', etc.)
 * @returns {number} - The font weight value
 */
export function getFontWeight(weight) {
  if (typography.fontWeights[weight]) {
    return typography.fontWeights[weight];
  }

  console.warn(`Font weight "${weight}" not found in design tokens.`);
  return typography.fontWeights.regular;
}

/**
 * Get a spacing value from the spacing tokens
 *
 * @param {string|number} size - The spacing key (e.g., 0, 1, 2, 4, etc.)
 * @returns {string} - The spacing value
 */
export function getSpacing(size) {
  if (spacing[size]) {
    return spacing[size];
  }

  console.warn(`Spacing "${size}" not found in design tokens.`);
  return spacing[4]; // Default to 1rem
}

/**
 * Get a border radius value from the borderRadius tokens
 *
 * @param {string} size - The border radius key (e.g., 'sm', 'md', 'lg', etc.)
 * @returns {string} - The border radius value
 */
export function getBorderRadius(size = "DEFAULT") {
  if (borderRadius[size]) {
    return borderRadius[size];
  }

  console.warn(`Border radius "${size}" not found in design tokens.`);
  return borderRadius.DEFAULT;
}

/**
 * Get a shadow value from the shadows tokens
 *
 * @param {string} size - The shadow key (e.g., 'sm', 'md', 'lg', etc.)
 * @returns {string} - The shadow value
 */
export function getShadow(size = "DEFAULT") {
  if (shadows[size]) {
    return shadows[size];
  }

  console.warn(`Shadow "${size}" not found in design tokens.`);
  return shadows.DEFAULT;
}

/**
 * Get a z-index value from the zIndex tokens
 *
 * @param {string|number} level - The z-index key (e.g., 0, 10, 20, etc.)
 * @returns {string} - The z-index value
 */
export function getZIndex(level) {
  if (zIndex[level]) {
    return zIndex[level];
  }

  console.warn(`Z-index "${level}" not found in design tokens.`);
  return zIndex[0];
}

/**
 * Creates an object with theme properties for styled-components or emotion
 *
 * @returns {Object} - A theme object
 */
export function createTheme() {
  return {
    colors: {
      ...brandColors,
      ...greyColors,
      semantic: semanticColors,
      brand1: {
        main: brandColors.brand1,
        ...brand1Shades,
        ...brand1Tints,
      },
      brand2: {
        main: brandColors.brand2,
        ...brand2Shades,
        ...brand2Tints,
      },
      brand3: {
        main: brandColors.brand3,
        ...brand3Shades,
        ...brand3Tints,
      },
    },
    typography,
    spacing,
    borderRadius,
    shadows,
    zIndex,
  };
}

// Default theme export
export const theme = createTheme();
