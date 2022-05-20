import Theme from '../styles/theme';
import { Head } from 'next/document';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
        </Head>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
