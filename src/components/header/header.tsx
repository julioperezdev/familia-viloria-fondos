import Image from "next/image"
import { useContext } from "react"
import { LanguageContext } from "../../context/languageContext"
import styles from "../../styles/header.module.css"

export default function Header(){

    const {onClickToChageEnglish, onClickToChageSpanish} = useContext(LanguageContext)

    return(
        <div className={styles.header_base}>
            <div className={styles.header_title}>
                <p>FAMILIA VILORIA</p>
            </div>
            <div className={styles.header_image}>
                <Image 
                src='/familia.png' 
                width='1000' 
                height='300' />
            </div>
            <nav className={styles.header_nav}>
                <p>INICIO</p>
                <p className={styles.header_nav_contact}>CONTACTO</p>
                <div>
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
            </nav>
        </div>
    )
}