import { Sora, Syne } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { TranslationProvider } from "./contexts/TranslationContext";
import { Manrope, Poppins } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

// Import Manrope from Google Fonts
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

// Import Poppins from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

{
  /*export const metadata = {
  title: "Team Up | La mejor manera de conectar en remoto",
  description:
    "Disfruta de un entorno en la web perfecto para crear y mantener cultura de empresa.",
  icons: {
    icon: "/favicon.ico",
  },
};*/
}

export async function generateMetadata({ params }) {
  // If you have access to lang parameter here
  return {
    title: "Team Up | La mejor manera de conectar en remoto",
    description:
      "Disfruta de un entorno en la web perfecto para crear y mantener cultura de empresa.",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "16x16" },
        { url: "/favicon-16x16.png", sizes: "16x16" },
        { url: "/favicon-32x32.png", sizes: "32x32" },
        { url: "/apple-touch-icon.png", sizes: "180x180" },
      ],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${sora.variable} ${manrope.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
      </head>
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
