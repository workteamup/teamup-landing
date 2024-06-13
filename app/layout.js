import { Sora, Syne } from "next/font/google";
import "./globals.css";

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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${sora.className} antialiased`}>{children}</body>
    </html>
  );
}
