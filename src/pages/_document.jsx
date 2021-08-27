import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={'https://www.googleoptimize.com/optimize.js?id=OPT-PSC39J5'}
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />

          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;900&family=Roboto:wght@100;400&display=swap"
            rel="stylesheet"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js')
                fbq('init', '1058401671286484');
                fbq('track', 'PageView');`,
            }}
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `(<img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=1058401671286484&ev=PageView&noscript=1"`,
            }}
          />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src={'https://www.googletagmanager.com/gtag/js?id=UA-178122003-1'}
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-178122003-1', { 'optimize_id': 'OPT-PSC39J5'});`,
            }}
          />

          <link rel="canonical" href="https://dayanesilva.com.br" />

          <meta
            name="p:domain_verify"
            content="9bcac4ba39d90899032bd06a3ee77ace"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
