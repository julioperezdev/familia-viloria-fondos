import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { DescriptionComponent } from "../../models/data";

import styles from "../../styles/description.module.css"
import { randomUUID } from "crypto";

const Description = () => {

  const {getDescriptionData} = useContext(LanguageContext)

  const descriptionData : DescriptionComponent = getDescriptionData();

  return(
      <div 
      className={styles.description_base}>
        <img 
        alt="descripcion de tito viloria"
        className={styles.description_image}
        src="/perfil.jpeg" />
        <p className={styles.description_title}>{descriptionData.title}</p>
        <p className={styles.description_subtitle}>{descriptionData.subtitle}</p>
        {descriptionData.paragraphs.map(particular =>(
            <p key={randomUUID.toString()}>{particular}</p>
        ))}
      </div>
  )
}

export default Description;