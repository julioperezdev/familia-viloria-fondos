import { useContext } from "react"
import { LanguageContext } from "../../context/languageContext"

import styles from "../../styles/languages.module.css"

export default function Languages(){

    const {onClickToChageEnglish, onClickToChageSpanish} = useContext(LanguageContext)

    return(
        <div className={styles.languages_base}>
            <img 
            src="/espana.png" 
            width='20' 
            height='20'
            onClick={() => onClickToChageSpanish()}/>
            <img 
            src="/usa.png" 
            width='20' 
            height='20'
            onClick={() => onClickToChageEnglish()}/>
        </div>
    )
}