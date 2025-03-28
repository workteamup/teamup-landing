"use client";

export default function Home() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/en" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const lang = navigator.language.slice(0, 2);
          window.location.href = '/' + (lang === 'es' ? 'es' : 'en');
        `,
        }}
      />
    </>
  );
}
