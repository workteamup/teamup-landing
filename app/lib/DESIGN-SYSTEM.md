# Team Up Design System

This document provides guidelines on how to use the Team Up design system throughout the application.

## Design Tokens

All design tokens are defined in `design-tokens.js`. These tokens include:

- Brand colors
- Grey colors
- Typography
- Spacing
- Border radius
- Shadows
- Z-index

## Using Design Tokens

### In Tailwind CSS

Our Tailwind configuration has been extended with custom colors and other design tokens. You can use these in your Tailwind classes directly:

```jsx
// Using brand colors
<div className="text-brand-purple bg-gray-cloud">
  This uses our custom brand colors
</div>

// Using various design tokens through Tailwind classes
<button className="font-semibold text-gray-space hover:text-brand-purple px-4 py-2 rounded-xl shadow-md">
  Button with design tokens
</button>
```

### In JavaScript/CSS-in-JS

For dynamic styling or when working with CSS-in-JS libraries, you can import tokens from `design-tokens.js` or use the utility functions from `theme-utils.js`:

```jsx
import { brandColors, greyColors } from "../lib/design-tokens";
import { getColor, getFontSize, getSpacing } from "../lib/theme-utils";

// Direct usage of tokens
const styles = {
  color: brandColors.brand3,
  backgroundColor: greyColors.cloud,
};

// Using utility functions
const dynamicStyles = {
  color: getColor("brand3", "tint20"),
  fontSize: getFontSize("lg"),
  padding: getSpacing(4),
};
```

## Color Palette

### Brand Colors

Main brand colors:

- Brand Teal: `#67DAFA` (brandColors.brand1)
- Brand Blue: `#3F89F6` (brandColors.brand2)
- Brand Purple: `#635DF5` (brandColors.brand3)
- Dark Background: `#252E4B` (brandColors.dark)
- White Background: `#FFFFFF` (brandColors.white)

Each brand color has shades (darker) and tints (lighter) available:

```jsx
// Example:
import { brand1Shades, brand1Tints } from "../lib/design-tokens";

// Darker shade of teal
const darkTeal = brand1Shades.shade50; // #346D7D

// Lighter tint of teal
const lightTeal = brand1Tints.tint70; // #D1F4FE
```

### Grey Colors

We use a custom grey palette:

- Cloud: `#ECEFF6` - Light backgrounds
- Smoke: `#D3D5E1` - Borders, dividers
- Steel: `#BCC0CC` - Disabled states
- Space: `#9CA2B2` - Body text
- Graphite: `#6E7180` - Headings, titles
- Arsenic: `#40424E` - High contrast text
- Phantom: `#1F1E24` - Near-black text
- Black: `#000000` - Pure black

## Typography

Our primary font is Manrope.

Font weights:

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

Font sizes follow a standard scale:

- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)

## Semantic Colors

For common use cases, semantic color tokens are available:

```jsx
import { semanticColors } from "../lib/design-tokens";

// Text colors
const primaryText = semanticColors.textPrimary;
const secondaryText = semanticColors.textSecondary;

// Background colors
const primaryBg = semanticColors.bgPrimary;
const secondaryBg = semanticColors.bgSecondary;

// Interactive elements
const buttonColor = semanticColors.interactive;
const buttonHoverColor = semanticColors.interactiveHover;

// Status colors
const successColor = semanticColors.success;
const errorColor = semanticColors.error;
```

## Utility Functions

The `theme-utils.js` file provides several utility functions to work with design tokens:

- `getColor(colorName, variant)` - Get a color value
- `getFontSize(size)` - Get a font size value
- `getFontWeight(weight)` - Get a font weight value
- `getSpacing(size)` - Get a spacing value
- `getBorderRadius(size)` - Get a border radius value
- `getShadow(size)` - Get a shadow value
- `getZIndex(level)` - Get a z-index value
- `createTheme()` - Create a complete theme object for CSS-in-JS libraries

## Components

When building components:

1. Use Tailwind CSS classes with our custom design tokens
2. For complex components, consider using the utility functions
3. Maintain consistency by using the same tokens throughout the application
4. For repeated patterns, create reusable components

## Best Practices

1. **Always use design tokens** instead of hardcoded values
2. When adding new colors or design elements, extend the design tokens
3. Follow the naming convention established in the design tokens
4. Use semantic naming when possible (e.g., `textPrimary` instead of a specific color)
5. Document any additions or changes to the design system
