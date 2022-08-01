import {createContext, useState} from "react"
import { AccountOptions, DescriptionComponent, HeaderType, IndexType, ParticularData } from "../models/data"
import { getEnglishData, getSpanishData } from "../utils/database"

export const LanguageContext = createContext<any | null>(null)

export const LanguageProvider = ({children}) => {
    const spanishData : ParticularData = getSpanishData();
    const englishData : ParticularData = getEnglishData();
    const [language, setLanguage] = useState<ParticularData>(spanishData)

    const onClickToChageEnglish = () =>{
        setLanguage(englishData)
      }
    
    const onClickToChageSpanish = () =>{
        setLanguage(spanishData)
    }

    const getDescriptionData = () : DescriptionComponent => {
        return language.index.description;
    }

    const getAccountsData = () : AccountOptions=> {
        return language.index.accounts;
    }

    const getHeaderData = () : HeaderType => {
        return language.header;
    }

    return <LanguageContext.Provider value={{
        language,
        onClickToChageEnglish,
        onClickToChageSpanish,
        getDescriptionData,
        getAccountsData,
        getHeaderData}}>{children}</LanguageContext.Provider>
}