import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"
import { LanguageContext } from "../../context/languageContext"
import { HeaderType, ParticularData } from "../../models/data"
import styles from "../../styles/header.module.css"
import Languages from "../languages/languages"

export default function Header(){

    const {getHeaderData} = useContext(LanguageContext)

    const headerData : HeaderType = getHeaderData();

    return(
        <div className={styles.header_base}>
            <div className={styles.header_title}>
                <p>{headerData.title}</p>
            </div>
            <div className={styles.header_image}>
                <Image 
                src='/portal.png' 
                width='1000' 
                height='300' />
            </div>
            <nav className={styles.header_nav}>
                {headerData.links.map(particularLinks => (
                    particularLinks.url === "/contacto" 
                    ? <Link href={particularLinks.url}><a className={styles.header_nav_contact}>{particularLinks.text}</a></Link> 
                    : <Link href={particularLinks.url}><a>{particularLinks.text}</a></Link>
                ))}
                {/* <Link 
                href="/">
                    <a className={styles.returnHomeStyle}>INICIO</a>
                </Link>
                <Link 
                href="/contacto">
                    <a className={styles.header_nav_contact}>CONTACTO</a>
                </Link> */}
                <Languages/>
            </nav>
        </div>
    )
}