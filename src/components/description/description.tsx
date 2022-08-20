import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";
import { DescriptionComponent } from "../../models/data";

import styles from "../../styles/description.module.css"

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
            <p className={styles.description_text} key={particular.id}>{particular.text}</p>
        ))}
        <div className={styles.description_title_references}>
        <h4>{descriptionData.footnotes}</h4>
        <img src="/mano.png" alt="" />
        </div>
        {descriptionData.references.map(particularReference => (
          <div  className={styles.description_references} key={particularReference.id}>
            {particularReference.links.map(particularLink =>(
              <div key={particularLink.id}>
                {/* <a target="_blank" rel="noopener noreferrer" href={particularLink.url}>{particularLink.description} </a> */}
                <p className={styles.description_particular_link_description}>{particularLink.description} </p>
              </div>
            ))}
            {
              particularReference.text.map(particularText => (
                <div key={particularText.id}>
                  <p>{particularText.text}</p>
                </div>
              ))
            }
          </div>
        ))

        }
      </div>
  )
}

export default Description;