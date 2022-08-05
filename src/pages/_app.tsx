import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LanguageProvider } from '../context/languageContext';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

function MyApp({ Component, pageProps }: AppProps) {

  return <LanguageProvider>
    <GoogleAnalytics measurementId="G-HE2WBJVHCR" />
    <Component {...pageProps} />
    </LanguageProvider>
}

export default MyApp
