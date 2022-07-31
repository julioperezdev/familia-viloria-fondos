import {createContext, useState} from "react"
import { IndexType, ParticularData } from "../models/data"
import { getEnglishData, getSpanishData } from "../utils/database"


export const LanguageContext = createContext<any | null>(null)

export const LanguageProvider = ({children}) => {
    const spanishData : ParticularData = getSpanishData();
    const englishData : ParticularData = getEnglishData();
    const [language, setLanguage] = useState<ParticularData>(spanishData)

    const onClickToChageEnglish = () =>{
        console.log("DDDDD")
        setLanguage(englishData)
      }
    
    const onClickToChageSpanish = () =>{
        console.log("FFFFF")
        setLanguage(spanishData)
    }

    const getHomeData = () : IndexType => {
        return language.index;
    }

    const getHowWeAreData = () => {
        return language.howWeAre;
    }

    const getHeaderData = () => {
        return language.header;
    }



    //let language : ParticularData = getSpanishData();

    return <LanguageContext.Provider value={{
        language,
        onClickToChageEnglish,
        onClickToChageSpanish,
        getHomeData,
        getHowWeAreData,
        getHeaderData}}>{children}</LanguageContext.Provider>
}