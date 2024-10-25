import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import { Sora, Syne } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { unstable_setRequestLocale } from "next-intl/server";

const syne = Syne({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'es'}];
}

export default async function LocaleLayout({children, params: {locale}}) {
  unstable_setRequestLocale(locale);
  
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${sora.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Script
            src="https://cdn-cookieyes.com/client_data/61286c6a03a5761eb4e3563f/script.js"
            strategy="beforeInteractive"
          />
          <Script id="clarity-script" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "nn9ccsv4wl");`}
          </Script>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-25N577RN4Z"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-25N577RN4Z');`}
          </Script>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
