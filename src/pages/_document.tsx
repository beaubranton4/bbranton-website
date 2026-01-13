import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
        <meta name="description" content="Beau Branton's personal website - thoughts, writings, projects, and more" />
        <meta property="og:title" content="Beau Branton" />
        <meta property="og:description" content="Beau Branton's personal website - thoughts, writings, projects, and more" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://beaubranton.com" />
        <meta property="og:image" content="https://beaubranton.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@beaubranton" />
        <meta name="twitter:title" content="Beau Branton" />
        <meta name="twitter:description" content="Beau Branton's personal website - thoughts, writings, projects, and more" />
        <meta name="twitter:image" content="https://beaubranton.com/images/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
