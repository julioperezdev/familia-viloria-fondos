import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Index.module.css'

import HeaderComponent from '../components/header/headerComponent'
//import Description from '/components/description/Description'
import Description from '../components/description/description'
import AccountOptions from '../components/accountOptions/accountOptions'
import { useEffect, useState } from 'react'
import {ParticularData } from '../models/data'
import { getSpanishData, SPANISH_LANGUAGE, ENGLISH_LANGUAGE, getEnglishData } from '../utils/database'
import Layout from '../components/layout'
import DescriptionAccount from '../components/description_account/descriptionAccount'
import {LanguageContext} from "../context/languageContext"
import {useContext} from "react"

const Home: NextPage = () => {

  /*
  const [language, setLanguage] = useState<ParticularData>()

  const getDataByLocalStorage = () =>{
    let language = localStorage.getItem("language");
    if(language != null && language === SPANISH_LANGUAGE){
      console.log("1")
      return getSpanishData();
    }
    if(language != null && language === ENGLISH_LANGUAGE){
      console.log("2")
      return getEnglishData();
    }
    if(language == null || language != null && language !== SPANISH_LANGUAGE && language !== ENGLISH_LANGUAGE ){
      console.log("3")
      return getSpanishData();
    }
    
  }

  useEffect(() => {
    setLanguage(getDataByLocalStorage())
    
  },[localStorage.getItem("language")])
*/


  return (
    <Layout title='inicio'>
      <DescriptionAccount/>
    </Layout>

    // <div>
    //   <Head>
    //     <title>Familia Viloria Fondos</title>
    //     <meta name="description" content="Web de Familia Viloria Fondos" />
    //     <link rel="icon" href="/icon.png" />
    //   </Head>

    //   <main>
    //     <HeaderComponent/>
    //     <div className={styles.full_information}>
    //     <Description/>
    //     <AccountOptions/>
    //     {/* <div><a className={styles.twitter_timeline} href="https://twitter.com/urgedenunciar?ref_src=twsrc%5Etfw">Tweets by urgedenunciar</a><Script strategy='beforeInteractive' src="https://platform.twitter.com/widgets.js" charSet="utf-8"/></div> */}
    //     </div>
    //   </main>

    //   <footer>
        
    //   </footer>
    // </div>
  )
}

export default Home;


