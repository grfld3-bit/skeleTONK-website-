import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO */}
        <title>SkeleTONK ($TONK) ☠️📈🔥</title>
        <meta name="description" content="SkeleTONK ($TONK) is the spookiest meme coin on Solana. Join the Bone Army ☠️📈🔥"/>
        <meta property="og:title" content="SkeleTONK ($TONK) Meme Coin"/>
        <meta property="og:description" content="Join the Bone Army and ride $TONK to the moon ☠️📈🔥"/>
        <meta property="og:image" content="/SkeleTONK_logo.jpg"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
