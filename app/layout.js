import { Sora, Syne } from "next/font/google";
import "./globals.css";
import Script from "next/script";
// const inter = Inter({ subsets: ["latin"] });

//const work_sans = Work_Sans({ subsets: ["latin"] });

// const dm_sans = DM_Sans({ subsets: ["latin"] });

const syne = Syne({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });

export const metadata = {
  title: "Team Up | La mejor manera de conectar en remoto",
  description:
    "Disfruta de un entorno en la web perfecto para crear y mantener cultura de empresa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://cdn-cookieyes.com/client_data/61286c6a03a5761eb4e3563f/script.js"
          strategy="beforeInteractive"
        ></Script>
        <link rel="icon" href="/favicon.ico" />
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nn9ccsv4wl");`}
        </Script>
      </head>
      <body className={`${sora.className} antialiased`}>{children}</body>
    </html>
  );
}
