# Team Up Design System Guidelines

## Overview

This guide will help you implement the Team Up design system in your components. All new components should be built using the patterns and components found in the `/app/components/new-web` directory.

## Live Reference

The most up-to-date version of the design system can be viewed at:

- **Development**: [http://localhost:3002/design-system](http://localhost:3002/design-system)
- **Production**: [https://teamup.com/design-system](https://teamup.com/design-system)

## Getting Started

### Importing Design Tokens

Always use the design tokens from `app/lib/design-tokens.js` instead of hardcoded values:

```javascript
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
} from "../lib/design-tokens";
```

### Using Tailwind Utility Classes

Our design system is built on Tailwind CSS. Always prefer using utility classes over custom CSS:

```jsx
// GOOD
<div className="text-brand-purple font-semibold">Text content</div>

// AVOID
<div style={{ color: '#635DF5', fontWeight: 600 }}>Text content</div>
```

## Typography Implementation

### Font Family Usage

The design system uses two primary fonts:

- **Poppins**: For headings and titles
- **System default**: For body text

```jsx
// For headings
<h1 className="font-poppins text-4xl font-bold">Heading</h1>

// For body text
<p className="text-base text-gray-space">Body text</p>
```

Reference implementation: `app/components/design-system.js` lines 453-539

### Font Size Scale

Our extended font size scale goes beyond the default Tailwind scale:

```jsx
// Examples from smallest to largest
<p className="text-xs">Extra small (0.75rem)</p>
<p className="text-sm">Small (0.875rem)</p>
<p className="text-base">Base (1rem)</p>
<p className="text-lg">Large (1.125rem)</p>
<p className="text-xl">Extra large (1.25rem)</p>
<p className="text-2xl">2XL (1.5rem)</p>
<p className="text-3xl">3XL (1.875rem)</p>
<p className="text-4xl">4XL (2.25rem)</p>
<p className="text-5xl">5XL (3rem)</p>
<p className="text-6xl">6XL (3.75rem)</p>
<p className="text-7xl">7XL (4.5rem)</p>
<p className="text-8xl">8XL (6rem)</p>
<p className="text-9xl">9XL (8rem)</p>
```

Reference implementation: `app/components/design-system.js` lines 179-242

### Standard Heading Patterns

For consistent headings across the application:

```jsx
<h1 className="text-5xl font-bold text-brand-dark font-poppins mb-2">Heading 1</h1>
<h2 className="text-4xl font-semibold text-brand-dark font-poppins mb-2">Heading 2</h2>
<h3 className="text-3xl font-semibold text-brand-dark font-poppins mb-2">Heading 3</h3>
<h4 className="text-2xl font-medium text-brand-dark font-poppins mb-2">Heading 4</h4>
<h5 className="text-xl font-medium text-brand-dark font-poppins mb-2">Heading 5</h5>
<h6 className="text-lg font-medium text-brand-dark font-poppins mb-2">Heading 6</h6>
```

Reference implementation: `app/components/design-system.js` lines 245-292

## Color System Implementation

### Brand Colors

Our brand colors are available as Tailwind classes:

```jsx
// Brand colors
<div className="bg-brand-teal">Teal (#67DAFA)</div>
<div className="bg-brand-blue">Blue (#3F89F6)</div>
<div className="bg-brand-purple">Purple (#635DF5)</div>
<div className="bg-brand-dark">Dark (#252E4B)</div>

// Light variants
<div className="bg-brand-teal-light">Light Teal</div>
<div className="bg-brand-blue-light">Light Blue</div>
<div className="bg-brand-purple-light">Light Purple</div>
```

### Grey Scale

Grey colors for text, backgrounds, and borders:

```jsx
<div className="bg-gray-cloud">Cloud (#ECEFF6)</div>
<div className="bg-gray-smoke">Smoke (#D3D5E1)</div>
<div className="bg-gray-steel">Steel (#BCC0CC)</div>
<div className="bg-gray-space">Space (#9CA2B2)</div>
<div className="bg-gray-graphite">Graphite (#6E7180)</div>
<div className="bg-gray-arsenic">Arsenic (#40424E)</div>
<div className="bg-gray-phantom">Phantom (#1F1E24)</div>
```

Reference implementation: `app/components/design-system.js` lines 544-615

### Background Gradients

Use our predefined gradient classes:

```jsx
<div className="bg-gradient-to-r from-brand-teal to-brand-purple">
  Gradient background
</div>
```

## Component Implementation

### Button Component

The `Button` component is in `app/components/new-web/button.js` and supports multiple variants and sizes.

```jsx
import Button from "./new-web/button";

// Basic usage
<Button>Click me</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="tertiary">Tertiary</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="extralarge">Extra Large</Button>

// As a link
<Button href="/path">Link Button</Button>

// Full width
<Button fullWidth>Full Width Button</Button>

// With icons
<Button leftIcon={<Icon />}>With Left Icon</Button>
<Button rightIcon={<Icon />}>With Right Icon</Button>

// For dark backgrounds
<Button variant="tertiary" isDarkBackground>On Dark</Button>
```

Reference implementation: `app/components/new-web/button-examples.js`

### CTA Section Components

The CTA (Call-to-Action) components provide flexible and customizable sections to prompt user action. There are two main CTA components:

#### 1. CTASection

A versatile call-to-action section with customizable alignment, theme, and background options:

```jsx
import CTASection from "../components/new-web/cta-section";

// Basic usage
<CTASection
  title="Ready to get started?"
  description="Join today and transform your team collaboration."
  buttonText="Sign Up Free"
  buttonUrl="/signup"
/>

// Full configuration example
<CTASection
  title="Want a custom solution?"
  description="Talk to our sales team about enterprise options."
  subtext="Enterprise plans include priority support and custom onboarding."
  titleSize="lg"          // "sm", "md", "lg", "xl"
  buttonText="Contact Sales"
  buttonUrl="/contact"
  buttonVariant="primary"  // "primary", "secondary", "outline", etc.
  buttonSize="lg"          // "sm", "md", "lg", "xl", "extralarge"
  secondaryButtonText="Read Documentation"
  secondaryButtonUrl="/docs"
  secondaryButtonVariant="tertiary"
  secondaryButtonSize="md"
  align="left"             // "left", "center", "right"
  theme="dark"             // "light" or "dark"
  background="linear-gradient(to right, #635DF5, #3F89F6)"
  customClasses="my-custom-class"
  icon={<YourIconComponent />}
/>
```

**Props:**

| Prop                     | Type      | Default    | Description                                              |
| ------------------------ | --------- | ---------- | -------------------------------------------------------- |
| `title`                  | string    | required   | The main heading of the CTA                              |
| `description`            | string    | required   | Descriptive text below the heading                       |
| `subtext`                | string    | —          | Optional smaller text below the description              |
| `titleSize`              | string    | "lg"       | Size of the title: "sm", "md", "lg", "xl"                |
| `buttonText`             | string    | required   | Text for the primary CTA button                          |
| `buttonUrl`              | string    | required   | URL for the primary button                               |
| `buttonVariant`          | string    | "primary"  | Button style variant ("primary", "secondary", "outline") |
| `buttonSize`             | string    | "lg"       | Button size ("sm", "md", "lg", "xl", "extralarge")       |
| `secondaryButtonText`    | string    | —          | Optional secondary button text                           |
| `secondaryButtonUrl`     | string    | —          | Optional secondary button URL                            |
| `secondaryButtonVariant` | string    | "tertiary" | Secondary button variant (inverse of theme by default)   |
| `secondaryButtonSize`    | string    | —          | Secondary button size (defaults to primary button size)  |
| `align`                  | string    | "center"   | Content alignment ("left", "center", "right")            |
| `theme`                  | string    | "light"    | Color theme ("light" or "dark")                          |
| `background`             | string    | —          | Custom background (CSS color, gradient, or className)    |
| `customClasses`          | string    | —          | Additional CSS classes                                   |
| `icon`                   | ReactNode | —          | Optional icon to display                                 |

#### 2. ContactSalesCTA

A pre-configured CTA section specifically for contacting the sales team. This component automatically pulls translations from the current language context:

```jsx
import ContactSalesCTA from "../components/new-web/contact-sales-cta";

// Basic usage
<ContactSalesCTA />

// With custom theme and text size
<ContactSalesCTA theme="dark" titleSize="xl" />

// With custom button sizes
<ContactSalesCTA buttonSize="xl" secondaryButtonSize="lg" />

// With custom alignment and subtext
<ContactSalesCTA
  align="left"
  subtext="Our team will respond within 24 hours."
/>
```

**Props:**

| Prop                  | Type   | Default  | Description                                   |
| --------------------- | ------ | -------- | --------------------------------------------- |
| `align`               | string | "center" | Content alignment ("left", "center", "right") |
| `theme`               | string | "light"  | Color theme ("light" or "dark")               |
| `background`          | string | —        | Custom background (overrides theme defaults)  |
| `customClasses`       | string | —        | Additional CSS classes                        |
| `titleSize`           | string | "lg"     | Size of the title: "sm", "md", "lg", "xl"     |
| `buttonSize`          | string | "lg"     | Size of the primary button                    |
| `secondaryButtonSize` | string | —        | Size of the secondary button                  |
| `subtext`             | string | —        | Optional smaller text below the description   |

#### Best Practices for CTA Components

1. Use CTAs consistently throughout the site to maintain UX coherence
2. Maintain a balance between light and dark themes for visual interest
3. Keep text concise and action-oriented
4. Use appropriate button variants based on importance
5. Use tertiary buttons for secondary actions to maintain visual hierarchy
6. Match button size with the visual weight needed for the action
7. Use title sizes appropriate to the importance of the CTA
8. Use subtext sparingly for additional context or clarification
9. Consider the surrounding content when choosing alignment and background
10. Use the pre-configured ContactSalesCTA component when possible for consistency
11. For pages that need multiple CTAs, vary their appearance for visual hierarchy

#### CTA Placement Patterns

- **End of section**: Use CTAs at the end of major content sections to guide users to the next step
- **After benefits**: Place CTAs after explaining key benefits to capitalize on user interest
- **Before footer**: Include a final CTA before the page footer for users who've read the entire page
- **Within use case sections**: Add contextual CTAs within specific use case sections with targeted messaging

Reference implementation: `app/components/new-web/cta-section-examples.js`

### Creating New Components

When creating new components:

1. Place them in the `app/components/new-web/` directory
2. Follow the component pattern established in existing components
3. Create an accompanying examples file (e.g., `component-examples.js`)
4. Add the component to the design system page for documentation

Example structure:

```
app/components/new-web/
├── button.js
├── button-examples.js
├── your-component.js
└── your-component-examples.js
```

## Layout Patterns

### Responsive Grid

Use Tailwind's grid utilities for responsive layouts:

```jsx
// Basic responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

// With different column spans
<div className="grid grid-cols-12 gap-4">
  <div className="col-span-12 md:col-span-6 lg:col-span-4">
    Responsive column
  </div>
</div>
```

Example in design system: `app/components/design-system.js` lines 29-45

### Container & Section Patterns

```jsx
// Standard page container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  Content
</div>

// Section spacing
<section className="py-12 md:py-16 lg:py-24">
  Content
</section>
```

## Spacing

### Standard Spacing

Use Tailwind's spacing utilities consistently:

```jsx
// Margin
<div className="mt-2">Margin top 8px</div>
<div className="mb-4">Margin bottom 16px</div>
<div className="mx-6">Margin x-axis 24px</div>
<div className="my-8">Margin y-axis 32px</div>

// Padding
<div className="pt-2">Padding top 8px</div>
<div className="pb-4">Padding bottom 16px</div>
<div className="px-6">Padding x-axis 24px</div>
<div className="py-8">Padding y-axis 32px</div>

// Gap
<div className="flex gap-4">Gap 16px</div>
<div className="grid gap-y-6">Gap y-axis 24px</div>
```

Reference implementation for spacing scale: `app/components/design-system.js` lines 360-387

## Common UI Patterns

### Cards

```jsx
<div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="text-xl font-semibold mb-4 font-poppins">Card Title</h3>
  <p className="text-gray-space">Card content goes here</p>
</div>
```

### Form Elements

Form elements should be styled consistently:

```jsx
<div className="mb-4">
  <label className="block text-gray-graphite font-medium mb-2">Label</label>
  <input
    type="text"
    className="w-full px-4 py-2 border border-gray-smoke rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
  />
</div>
```

## Best Practices

1. **Component First**: Check if a component already exists in `app/components/new-web` before building a new one
2. **Design System Page**: Reference the design system page for examples and usage patterns
3. **Tailwind Classes**: Use Tailwind utility classes rather than custom CSS
4. **Mobile First**: Design for mobile first, then add responsive variants
5. **Font Consistency**: Use Poppins for headings and system default for body text
6. **Design Tokens**: Reference the design token values from `app/lib/design-tokens.js`

## Need Help?

If you're unsure how to implement something:

1. Check the design system page at [/design-system](http://localhost:3002/design-system)
2. Look at the component implementation in the `app/components/new-web` folder
3. Reference the design tokens in `app/lib/design-tokens.js`
4. Consult with the design team
