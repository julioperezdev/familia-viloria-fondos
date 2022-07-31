import Accounts from "../accounts/accounts";
import Description from "../description/description";

import styles from "../../styles/indexComponent.module.css"

export default function IndexComponent(){
    return(
        <div className={styles.index_component_base}>
            <div>
            <Description/>
            </div>
            <div className={styles.index_component_accounts}>
            <Accounts/>
            </div>
        </div>
    )
}