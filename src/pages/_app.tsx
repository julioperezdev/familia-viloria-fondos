import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ENGLISH_LANGUAGE, getEnglishData, getSpanishData, SPANISH_LANGUAGE } from '../utils/database';
import { useEffect, useState } from 'react';
import { ParticularData } from '../models/data';
import { LanguageProvider } from '../context/languageContext';
function MyApp({ Component, pageProps }: AppProps) {
  
  const [language, setLanguage] = useState<ParticularData>(getSpanishData())
  const [hasChage, setHaschage] = useState<boolean>(false)


  const getDataByLocalStorage = () =>{
    let language = localStorage.getItem("language");
    if(language != null && language === SPANISH_LANGUAGE){
      console.log("1")
      setLanguage(getSpanishData())
    }
    if(language != null && language === ENGLISH_LANGUAGE){
      console.log("2")
      setLanguage(getEnglishData())
    }
    if(language == null || language != null && language !== SPANISH_LANGUAGE && language !== ENGLISH_LANGUAGE ){
      console.log("3")
      setLanguage(getSpanishData())
    }
    
  }

  useEffect(() =>{
    getDataByLocalStorage();
  },[hasChage])
  return <LanguageProvider>
    <Component {...pageProps} />
    </LanguageProvider>
}

export default MyApp
