import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ENGLISH_LANGUAGE, getEnglishData, getSpanishData, SPANISH_LANGUAGE } from '../utils/database';
import { useEffect, useState } from 'react';
import { ParticularData } from '../models/data';
import { LanguageProvider } from '../context/languageContext';
import Script from 'next/script';
function MyApp({ Component, pageProps }: AppProps) {
  
  const [language, setLanguage] = useState<ParticularData>(getSpanishData())
  const [hasChage, setHaschage] = useState<boolean>(false)

  return <LanguageProvider>
    <Script id="google-analytics" strategy="afterInteractive">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-HE2WBJVHCR');
    `}
    </Script>
    <Component {...pageProps} />
    </LanguageProvider>
}

export default MyApp
