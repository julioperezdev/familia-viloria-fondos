import Image from "next/image";
import { DescriptionComponent } from "../../models/data";

import styles from "../../styles/description.module.css"

const Description = () => {

  //let descriptionTyped : DescriptionComponent = descriptionComponent;
  

  return(
      <div 
      className={styles.description_base}>
        <img 
        className={styles.description_image}
        src="/perfil.jpeg" />
        {/* {
          descriptionTyped.paragraphs.map(particular =>(
            <p>{particular}</p>
          ))
        } */}
        <p className={styles.description_title}>A NUESTRO HERMANO TITO VILORIA Y A SU ESPOSA ZAIDA SEAREZ SE LES VIOLAN LOS DERECHOS HUMANO.</p>
        <p className={styles.description_subtitle}>¡NECESITAMOS TU AYUDA!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero omnis iusto perspiciatis tempore molestias incidunt, facilis laboriosam eius suscipit cum obcaecati ab impedit, ullam dolorem laborum molestiae quam? Deleniti libero soluta consequuntur numquam possimus expedita. Laudantium laboriosam, recusandae perspiciatis aliquam dolores praesentium. Consequuntur aspernatur blanditiis dolores fugiat excepturi repellat mollitia numquam itaque, ratione ipsa amet quas sed, ipsam tempore temporibus. Molestiae facilis autem molestias tenetur voluptatibus incidunt commodi nobis provident quasi impedit in, architecto, ducimus qui, laboriosam nisi maiores. Voluptate, enim id dolor provident qui sunt quisquam iusto. A facere obcaecati magni qui hic, eligendi corporis esse, debitis laudantium maxime quos omnis ipsa dolores architecto nisi quas enim dolore! Qui quasi mollitia velit? Quisquam delectus porro eius aliquam quibusdam officia facilis dicta ullam blanditiis temporibus. Nostrum explicabo harum veritatis. Id velit, assumenda dignissimos placeat expedita error? Laborum, velit. Odit tempora nihil dolorum quisquam optio obcaecati voluptate, adipisci praesentium. Pariatur, reiciendis? Neque similique sequi, vero quae rerum nihil quam quo, exercitationem placeat aliquam officiis temporibus enim consectetur quibusdam cupiditate nulla ipsa aut minima eligendi labore voluptatem repellendus? Voluptates sint dolorum earum, alias blanditiis explicabo, praesentium necessitatibus consectetur reiciendis beatae aliquid sapiente repellendus molestias quam? Ducimus deleniti explicabo est neque velit dignissimos.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestias saepe sapiente accusantium aliquid itaque iusto? Ab recusandae, vel laudantium adipisci quidem cum sit earum tempore voluptatem laboriosam nam soluta, corrupti ut sed totam molestias, reiciendis eligendi iste maiores repellendus minima perspiciatis. Esse, reiciendis nam sapiente eum error odio dolor cum praesentium ab, nostrum inventore maiores facilis nesciunt maxime dignissimos necessitatibus perferendis saepe doloribus ex mollitia iusto quas! Consequuntur, sequi. Consectetur incidunt rerum dolore quod. Consequuntur ullam ipsam nisi reiciendis suscipit minima architecto quod, totam cum iste dicta quia assumenda odio repellat aut laborum, dolore perferendis sint dolorem blanditiis? Consectetur?</p>
      </div>
  )
}

export default Description;