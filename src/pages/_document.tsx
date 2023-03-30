import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <style>
        {`
          @font-face {
            font-family: 'TT Fors';
            src: url('/fonts/tt_fors_regular.otf');
          }
        `}
      </style>
        <title>Libnation | Book Library App</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
