import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Chatbot UI"></meta>
        <script
          async
          src="https://umami.fre123.com/script.js"
          data-website-id="7f5029ff-efc6-44f7-bbec-ac10bdc2a54f"
        ></script>      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
