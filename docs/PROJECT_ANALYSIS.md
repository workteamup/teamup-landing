## Team Up Landing Page Technical Breakdown

### Core Architecture

- **Framework**: Next.js 14.2.3 (App Router)
- **Rendering**: Static Site Generation (SSG) with `output: "export"`
- **Internationalization**: Custom route-based solution (`/en`, `/es`) with JSON translations
- **State Management**: React Context for translations
- **CI/CD**: GitHub Actions for AWS S3/CloudFront deployment

### UI System

- **Styling**: Tailwind CSS 3.4.1 with JIT mode
- **Component Library**: Headless UI + custom components
- **Font Stack**:
  - Sora (via `next/font`)
  - Yellix (custom font face)
  - Bogue (serif font with 14 weights/styles)
  - Mont (sans-serif)
- **Icon System**: Mix of Heroicons, Lucide, and custom SVG icons

### Key Utilities

- `cn()` helper for Tailwind class merging (`clsx` + `tailwind-merge`)
- Custom font loading system with `next/font`
- SVG handling via `@svgr/webpack`
- Responsive design utilities with viewport units (dvh)
- Animation system for infinite horizontal scrolling

### Analytics & Tracking

- Google Analytics (G-25N577RN4Z)
- Microsoft Clarity (pvs27seu8b)
- Google Ads Conversion Tracking (AW-16735538512)
- Cookie consent management (cookieyes.com)

### Performance Features

- Static export optimization
- Font subsetting and preloading
- Image optimization disabled (SSG-compatible approach)
- Scroll-smooth behavior with `scroll-smooth`
- Dynamic import strategy for analytics scripts

### Component Highlights

- **Navigation**:
  - Responsive navbar with mobile menu
  - Client-side route handling
  - Dynamic anchor links
- **Button System**:
  - 4 sizes (xs, sm, md, lg)
  - 3 variants (primary, secondary, tertiary)
  - Icon support with size scaling
- **Features**:
  - Infinite horizontal scroller
  - Dynamic feature tagging system
- **Legal Pages**:
  - Cookie policy template
  - Legal notice generator
  - Privacy policy builder

### Deployment Setup

- **Static Export**: `next build && sh aws-build.sh`
- **Hosting Support**: AWS S3 + CloudFront and Surge.sh
- **Cache Busting**: CloudFront invalidation workflow
- **Route Handling**:
  - Trailing slashes enabled
  - Automatic locale redirection
  - 200.html/404.html fallbacks

### Security

- CSP-compatible script loading
- Cookie consent integration
- Secure font loading via `font-display: swap`
- AWS credential encryption in CI

### Notable Dependencies

- `@headlessui/react` for accessible UI
- `lucide-react` for icons
- `tailwind-merge` for class conflict resolution
- `clsx` for conditional classNames
- `next/font` for font optimization

### Project Structure

app/
├── components/ # Reusable components
├── contexts/ # Translation context
├── en/ # English localized pages
├── es/ # Spanish localized pages
├── lib/ # Utilities
public/
├── fonts/ # Custom font files
translations/ # JSON localization files


### Optimization Strategies
- Critical CSS via Tailwind's `safelist`
- Font subsetting through `next/font`
- Script loading strategies (`beforeInteractive`, `afterInteractive`)
- Dynamic route-based code splitting
- Static asset versioning through build process

Key implementation details can be found in:

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  output: "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Optional SVGR config, e.g.:
            // icon: true,
          },
        },
      ],
    });
    return config;
  },
};

import { Sora, Syne } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TranslationProvider } from "./contexts/TranslationContext";

const syne = Syne({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  variable: '--font-sora'
});

export const metadata = {
  title: "Team Up | La mejor manera de conectar en remoto",
  description:
    "Disfruta de un entorno en la web perfecto para crear y mantener cultura de empresa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${sora.variable}`}>
      <body className="antialiased font-sans">
        <Script
          src="https://cdn.seline.so/seline.js"
          data-token="38b478ebea90f19"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn-cookieyes.com/client_data/61286c6a03a5761eb4e3563f/script.js"
          strategy="beforeInteractive"
        />
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "pvs27seu8b");`}
        </Script>

        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16735538512"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16735538512');
          `}
        </Script>

        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-25N577RN4Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-25N577RN4Z');`}
        </Script>

        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  );
}

'use client';

import React, { createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import enTranslations from '../../translations/en.json';
import esTranslations from '../../translations/es.json';

const TranslationContext = createContext();

const translations = {
  en: enTranslations,
  es: esTranslations,
};

export function TranslationProvider({ children }) {
  const pathname = usePathname();
  const locale = pathname.startsWith('/es') ? 'es' : 'en';

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[locale];
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key;
    }
    return value;
  };

  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }
  return context.t;
}

export function useLocale() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a TranslationProvider');
  }
  return context.locale;
}

### Font Loading Fix Implementation

The font loading issue was resolved through the following changes:

1. **Font Face Declaration**:
   - Replaced Google Fonts `@import` with direct `@font-face` declarations
   - Added explicit font weight ranges and `font-display: swap`
   - Used woff2 format for better performance
   - Example:
     ```css
     @font-face {
       font-family: 'Poppins';
       font-style: normal;
       font-weight: 300 700;
       font-display: swap;
       src: url('https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2') format('woff2');
     }
     ```

2. **Tailwind Configuration**:
   - Updated `tailwind.config.js` to use consistent font family names
   - Set `sans` as the default font family for Manrope
   - Added explicit `poppins` font family for headings
   - Example:
     ```javascript
     fontFamily: {
       poppins: ["Poppins", "sans-serif"],
       sans: ["Manrope", "sans-serif"],
     }
     ```

3. **Global CSS Updates**:
   - Updated base styles to use `font-sans` for body text
   - Ensured headings use `font-poppins`
   - Example:
     ```css
     @layer base {
       h1, h2, h3, h4, h5, h6, button {
         @apply font-poppins;
       }
       body {
         @apply font-sans;
       }
     }
     ```

4. **Component Implementation**:
   - Added explicit font test section in the design system
   - Used Tailwind classes consistently (`font-poppins`, `font-sans`)
   - Example:
     ```jsx
     <p className="font-poppins text-lg">
       This text should be in Poppins using Tailwind class
     </p>
     ```

5. **Verification Steps**:
   - Added inline style fallbacks for debugging
   - Included class name indicators for each test case
   - Example:
     ```jsx
     <p className="text-xs text-dark-space mt-1">
       Class: font-poppins text-lg
     </p>
     ```

### Key Learnings

1. **Font Loading Strategy**:
   - Direct `@font-face` declarations provide more control than `@import`
   - `font-display: swap` prevents FOIT (Flash of Invisible Text)
   - woff2 format offers better compression and performance

2. **Tailwind Integration**:
   - Consistent font family naming improves maintainability
   - Base layer styles ensure global consistency
   - Explicit class usage makes styling more predictable

3. **Debugging Approach**:
   - Adding test sections helps isolate issues
   - Combining Tailwind classes with inline styles provides fallbacks
   - Clear labeling makes debugging easier

This solution provides a robust font loading system that works consistently across the application while maintaining the benefits of Tailwind's utility-first approach.