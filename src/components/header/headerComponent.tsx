import Link from 'next/link'
import Image from 'next/image';
import { getEnglishData, getSpanishData, ENGLISH_LANGUAGE, SPANISH_LANGUAGE , LOCAL_STORAGE_PARAMETER} from '../../utils/database';
import { useContext } from 'react';
import { LanguageContext } from '../../context/languageContext';
import { ParticularData } from '../../models/data';


const HeaderComponent = () =>{

  const {onClickToChageEnglish, onClickToChageSpanish, language} = useContext(LanguageContext)

  let convertedLanguage : ParticularData = language;

    return(
        <nav>
          <ul>
            {convertedLanguage.header.links.map(particular =>(
              <li>
              <Link href={particular.url}>
                  <a>{particular.text}</a>
              </Link>
            </li>
            ))}
        </ul>
        <div>
          <div>
          <Image 
          src="/espana.png" 
          width='30' 
          height='30'
          onClick={() => onClickToChageSpanish()}/>
          <Image 
          src="/usa.png" 
          width='30' 
          height='30'
          onClick={() => onClickToChageEnglish()}/>
          </div>
        </div>
        </nav>
    )
}

export default HeaderComponent;