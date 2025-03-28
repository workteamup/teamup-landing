/**
 * Design Tokens for Team Up
 * This file contains all the design tokens used throughout the application.
 * Use these tokens instead of hardcoded values to ensure consistency.
 */

// Main Brand Colors
export const brandColors = {
  brand1: "#67DAFA", // Teal
  brand2: "#3F89F6", // Blue
  brand3: "#635DF5", // Purple
  dark: "#252E4B",
  white: "#FFFFFF",
};

// Brand Color 1 Shades (Teal)
export const brand1Shades = {
  shade10: "#5DC4E1",
  shade20: "#52AEC8",
  shade30: "#4899AF",
  shade40: "#3E8396",
  shade50: "#346D7D",
  shade60: "#295764",
  shade70: "#1F414B",
  shade80: "#152C32",
  shade90: "#0A1619",
};

// Brand Color 1 Tints (Teal)
export const brand1Tints = {
  tint10: "#76DEFB",
  tint20: "#85E1FB",
  tint30: "#95E5FC",
  tint40: "#A4E9FC",
  tint50: "#B3EDFD",
  tint60: "#C2F0FD",
  tint70: "#D1F4FE",
  tint80: "#E1F8FE",
  tint90: "#F0FBFF",
};

// Brand Color 2 Shades (Blue)
export const brand2Shades = {
  shade10: "#397BDD",
  shade20: "#326EC5",
  shade30: "#2C60AC",
  shade40: "#265294",
  shade50: "#20457B",
  shade60: "#193762",
  shade70: "#13294A",
  shade80: "#0D1B31",
  shade90: "#060E19",
};

// Brand Color 2 Tints (Blue)
export const brand2Tints = {
  tint10: "#5295F7",
  tint20: "#65A1F8",
  tint30: "#79ACF9",
  tint40: "#8CB8FA",
  tint50: "#9FC4FB",
  tint60: "#B2D0FB",
  tint70: "#C5DCFC",
  tint80: "#D9E7FD",
  tint90: "#ECF3FE",
};

// Brand Color 3 Shades (Purple)
export const brand3Shades = {
  shade10: "#5954DD",
  shade20: "#4F4AC4",
  shade30: "#4541AC",
  shade40: "#3B3893",
  shade50: "#322F7B",
  shade60: "#282562",
  shade70: "#1E1C49",
  shade80: "#141331",
  shade90: "#0A0918",
};

// Brand Color 3 Tints (Purple)
export const brand3Tints = {
  tint10: "#736DF6",
  tint20: "#827DF7",
  tint30: "#928EF8",
  tint40: "#A19EF9",
  tint50: "#B1AEFA",
  tint60: "#C1BEFB",
  tint70: "#D0CEFC",
  tint80: "#E0DFFD",
  tint90: "#EFEFFE",
};

// Grey Colors
export const greyColors = {
  cloud: "#ECEFF6",
  smoke: "#D3D5E1",
  steel: "#BCC0CC",
  space: "#9CA2B2", // Text
  graphite: "#6E7180", // Headings, Titles, etc.
  arsenic: "#40424E",
  phantom: "#1F1E24",
  black: "#000000",
};

// Typography
export const typography = {
  fontFamily: "var(--font-manrope)",
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
};

// Semantic Colors (for specific use cases)
export const semanticColors = {
  // Text
  textPrimary: greyColors.space,
  textSecondary: greyColors.graphite,
  textLight: greyColors.steel,
  textDark: greyColors.phantom,

  // Backgrounds
  bgPrimary: brandColors.white,
  bgSecondary: greyColors.cloud,
  bgHighlight: brand3Tints.tint90,

  // Interactive Elements
  interactive: brandColors.brand3,
  interactiveHover: brand3Tints.tint30,
  interactivePressed: brand3Shades.shade20,

  // Borders
  border: greyColors.smoke,
  borderLight: greyColors.cloud,

  // Status
  success: "#34D399", // Green
  warning: "#FBBF24", // Yellow
  error: "#EF4444", // Red
  info: brandColors.brand2,
};

// Spacing
export const spacing = {
  0: "0",
  px: "1px",
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
};

// Border Radius
export const borderRadius = {
  none: "0",
  sm: "0.125rem", // 2px
  DEFAULT: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
};

// Shadows
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
};

// Z-Index
export const zIndex = {
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50", // Navbar
  60: "60",
  70: "70", // Modals
  80: "80",
  90: "90",
  100: "100", // Toasts
  auto: "auto",
};

// Tailwind-compatible color object (for tailwind.config.js)
export const tailwindColors = {
  brand: {
    teal: brandColors.brand1,
    blue: brandColors.brand2,
    purple: brandColors.brand3,
    dark: brandColors.dark,
  },
  gray: {
    cloud: greyColors.cloud,
    smoke: greyColors.smoke,
    steel: greyColors.steel,
    space: greyColors.space,
    graphite: greyColors.graphite,
    arsenic: greyColors.arsenic,
    phantom: greyColors.phantom,
  },
};
