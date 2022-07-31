import Image from "next/image";
import { AccountOptions } from "../../models/data";

import styles from "../../styles/accounts.module.css"

const Accounts = () =>{

    //let accountTyped : AccountOptions = accountOptions;

    return(
        <div className={styles.accounts_base}>
            <p className={styles.accounts_description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam qui ratione possimus exercitationem ipsam blanditiis quia delectus architecto earum recusandae nostrum eos totam enim ad quos sint, impedit commodi. Ipsam.</p>
            <p className={styles.accounts_email}>usuario@gmail.com</p>
            <div className={styles.accounts_list}>
                <div>
                    <img src="/usa.png"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>xxxx-xxxx-xxxx-xxxx</p>
                    </div>
                </div>
                <div>
                    <img src="/espana.png"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>xxxx-xxxx-xxxx-xxxx</p>
                    </div>
                </div>
                <div>
                    <img src="/europa.png"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>xxxx-xxxx-xxxx-xxxx</p>
                    </div>
                </div>
                <div>
                    <img src="/argentina.png"/>
                    <div>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>xxxx-xxxx-xxxx-xxxx</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Accounts;